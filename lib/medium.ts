export type Article = { title: string; url: string; date: string; excerpt: string; category?: string };

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

