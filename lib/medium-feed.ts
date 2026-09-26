import "server-only";
import Parser from "rss-parser";
import { normalizeArticles, type Article } from "@/lib/medium";
import { fallbackArticles } from "@/lib/medium-snapshot";

const feedUrl = "https://medium.com/feed/@pradeep.tarakar17";

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
    return fallbackArticles;
  }
}

