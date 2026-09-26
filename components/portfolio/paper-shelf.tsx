import { DoodleArrow } from "@/components/ui/doodles";
import { papers } from "@/lib/content";
import { SectionHead } from "@/components/ui/section-heading";

export function PaperShelf() {
  return (
    <section
      className="paper-section"
      id="papers"
      aria-labelledby="papers-title"
    >
      <div className="shell">
        <SectionHead
          number="04 / Annotated reading"
          title="The paper"
          accent="shelf."
          id="papers-title"
          aside={
            <>
              A few good papers.
              <br />A lot of writing in the margins.
            </>
          }
        />
        <div className="paper-shelf">
          {papers.map((paper) => (
            <article key={paper.number} className="paper-card reveal">
              <div className="file-meta mono">
                <span>Shelf card / {paper.number}</span>
                <span>{paper.category}</span>
              </div>
              <h3>{paper.title}</h3>
              <p className="authors">{paper.authors}</p>
              <div className="paper-note paper-placeholder">
                <span className="mono">On the reading desk</span>
                <p>{paper.detail}</p>
              </div>
              {paper.pdfLinks.length ? (
                <div className="paper-links">
                  {paper.pdfLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <DoodleArrow />
                    </a>
                  ))}
                </div>
              ) : (
                <span className="paper-await mono">
                  Reference PDF coming soon
                </span>
              )}
            </article>
          ))}
        </div>
        <div className="shelf-foot">
          <p>Two papers on the shelf. More references soon.</p>
          <span className="scribble" aria-hidden="true">
            one paper leads to another… <DoodleArrow />
          </span>
        </div>
      </div>
    </section>
  );
}
