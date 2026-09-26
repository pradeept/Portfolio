import { DoodleArrow, DoodleSpark } from "@/components/ui/doodles";
import { getArticles } from "@/lib/medium-feed";
import type { Article } from "@/lib/medium";
import { SectionHead } from "@/components/ui/section-heading";

const monthFormatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
});

function formatMonth(date: string) {
  return monthFormatter.format(new Date(date));
}

function WritingContent({ articles }: { articles: Article[] }) {
  const [feature, ...rest] = articles;
  return (
    <section
      className="writing section"
      id="writing"
      aria-labelledby="writing-title"
    >
      <DoodleSpark className="writing-spark" />
      <div className="shell">
        <SectionHead
          number="02 / Field notes"
          title="Things I"
          accent="wrote."
          id="writing-title"
          aside={
            <>
              Write it down
              <br />
              before the next rabbit hole. <DoodleArrow direction="down-left" />
            </>
          }
        />
        <div className="writing-grid">
          <a
            className="writing-card writing-feature reveal"
            href={feature.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mono">
              Featured clipping / {feature.category || "from the field"}
            </span>
            <div className="article-scribble">fresh from the rabbit hole <DoodleArrow direction="down-right" /></div>
            <h3>{feature.title}</h3>
            <p>{feature.excerpt || "A new field note from Pradeep."}</p>
            <footer>
              <span className="mono">{formatMonth(feature.date)}</span>
              <b>read on Medium <DoodleArrow /></b>
            </footer>
          </a>
          <div className="writing-stack">
            {rest.map((article) => (
              <a
                key={article.url}
                className="writing-card writing-small reveal"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mono">
                  {article.category || "Field note"} /{" "}
                  {formatMonth(article.date)}
                </span>
                <h3>{article.title}</h3>
                <footer>
                  <span className="mono">Read on Medium</span>
                  <b><DoodleArrow /></b>
                </footer>
              </a>
            ))}
          </div>
        </div>
        <div className="writing-bottom">
          <a
            className="outline-link"
            href="https://medium.com/@pradeep.tarakar17"
            target="_blank"
            rel="noopener noreferrer"
          >
            All notes on Medium <DoodleArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export async function FieldNotes() {
  const articles = await getArticles();
  return <WritingContent articles={articles} />;
}

export function FieldNotesSkeleton() {
  return (
    <section className="writing section" id="writing" aria-labelledby="writing-loading-title" aria-busy="true">
      <DoodleSpark className="writing-spark" />
      <div className="shell">
        <SectionHead
          number="02 / Field notes"
          title="Things I"
          accent="wrote."
          id="writing-loading-title"
          aside={<>Write it down<br />before the next rabbit hole. <DoodleArrow direction="down-left" /></>}
        />
        <span className="sr-only" role="status">Opening the field notes.</span>
        <div className="writing-grid" aria-hidden="true">
          <div className="writing-card writing-feature writing-loading">
            <div className="clipping-placeholder short" />
            <div className="clipping-placeholder heading" />
            <div className="clipping-placeholder" />
            <div className="clipping-placeholder" />
          </div>
          <div className="writing-stack">
            {[0, 1, 2].map((card) => <div key={card} className="writing-card writing-small writing-loading"><div className="clipping-placeholder short" /><div className="clipping-placeholder heading" /></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
