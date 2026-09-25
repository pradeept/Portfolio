import Parser from "rss-parser";

export type Article = { title: string; url: string; date: string; excerpt: string; category?: string };
const feedUrl = "https://medium.com/feed/@pradeep.tarakar17";
const fallback: Article[] = [
  { title: "HOTP & TOTP— RFC 4226 & 6238 Explained!", url: "https://medium.com/@pradeep.tarakar17/hotp-totp-rfc-4226-6238-explained-b34fdafcec7a", date: "2026-09-15T11:55:22Z", excerpt: "A closer look at the one-time passwords behind familiar sign-in flows.", category: "Security" },
  { title: "Mental Health Shouldn’t Depend on Language: Building Unmute", url: "https://medium.com/@pradeep.tarakar17/mental-health-shouldnt-depend-on-language-building-unmute-996b8fe251a9", date: "2026-02-22T14:37:17Z", excerpt: "On building a space where expression can cross language barriers.", category: "Product × language" },
  { title: "Practical Network Security with DMZ and IDS", url: "https://medium.com/@pradeep.tarakar17/practical-network-security-with-dmz-and-ids-106353e9ca81", date: "2026-02-08T11:11:44Z", excerpt: "Notes from a small network, real constraints, and a security side project.", category: "Network security" },
  { title: "WebRTC Fundamentals", url: "https://medium.com/@pradeep.tarakar17/webrtc-fundamentals-5c4535f80c8c", date: "2025-11-27T08:45:39Z", excerpt: "A field note on real-time communication.", category: "Real time" },
];

export function canonicalMediumUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "medium.com" || !url.pathname.startsWith("/@pradeep.tarakar17/")) return null;
    return `${url.origin}${url.pathname}`;
  } catch { return null; }
}

export function normalizeArticles(items: Array<{ title?: string; link?: string; pubDate?: string; isoDate?: string; contentSnippet?: string; categories?: string[] }>): Article[] {
  const seen = new Set<string>();
  return items.flatMap((item) => {
    const url = canonicalMediumUrl(item.link || "");
    const title = item.title?.trim();
    const parsed = new Date(item.isoDate || item.pubDate || "");
    if (!url || !title || Number.isNaN(parsed.getTime()) || seen.has(url)) return [];
    seen.add(url);
    const excerpt = (item.contentSnippet || "").replace(/\s+/g, " ").trim().slice(0, 190);
    return [{ title, url, date: parsed.toISOString(), excerpt, category: item.categories?.[0] }];
  }).sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0, 4);
}

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(feedUrl, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`Medium RSS returned ${response.status}`);
    const xml = await response.text();
    const parsed = await new Parser().parseString(xml);
    const articles = normalizeArticles(parsed.items || []);
    if (!articles.length) throw new Error("Medium RSS contained no usable posts");
    return articles;
  } catch (error) {
    console.warn("Using saved Medium articles:", error instanceof Error ? error.message : error);
    return fallback;
  }
}

export const fallbackArticles = fallback;
