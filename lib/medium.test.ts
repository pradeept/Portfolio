import { describe, expect, it } from "vitest";
import { canonicalMediumUrl, normalizeArticles } from "./medium";

describe("Medium feed normalization", () => {
  it("selects the newest unique articles and removes tracking parameters", () => {
    const posts = normalizeArticles([
      { title: "Older", link: "https://medium.com/@pradeep.tarakar17/older-1?source=rss", pubDate: "2024-01-01" },
      { title: "Newer", link: "https://medium.com/@pradeep.tarakar17/newer-2?source=rss", pubDate: "2026-09-15" },
      { title: "Duplicate", link: "https://medium.com/@pradeep.tarakar17/newer-2", pubDate: "2026-09-15" },
    ]);
    expect(posts.map((post) => post.title)).toEqual(["Newer", "Older"]);
    expect(posts[0].url).toBe("https://medium.com/@pradeep.tarakar17/newer-2");
  });

  it("rejects untrusted and malformed destinations", () => {
    expect(canonicalMediumUrl("https://evil.example/@pradeep.tarakar17/x")).toBeNull();
    expect(canonicalMediumUrl("javascript:alert(1)")).toBeNull();
    expect(normalizeArticles([{ title: "No date", link: "https://medium.com/@pradeep.tarakar17/x" }])).toEqual([]);
  });
});
