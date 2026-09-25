import type { ReactNode } from "react";
import { getArticles, type Article } from "@/lib/medium";
import { jobs, papers, projects, type Project } from "@/lib/content";
import {
  ContactTabs,
  HeroBoard,
  MotionEffects,
  Navbar,
  TryHackMeBadge,
} from "@/components/interactive";

export const revalidate = 3600;

function SectionHead({
  number,
  title,
  accent,
  aside,
  id,
}: {
  number: string;
  title: string;
  accent: string;
  aside: ReactNode;
  id: string;
}) {
  return (
    <div className="section-head reveal">
      <div>
        <span className="mono">{number}</span>
        <h2 id={id}>
          {title} <em>{accent}</em>
        </h2>
      </div>
      <p>{aside}</p>
    </div>
  );
}

function ProjectArt({ id }: { id: Project["id"] }) {
  const props = {
    className: "project-art",
    viewBox: "0 0 430 112",
    "aria-hidden": true as const,
  };
  if (id === "unmute")
    return (
      <svg {...props}>
        <path
          className="wash"
          d="M20 13 191 9 190 74 70 80 48 99 50 79 24 77Z"
        />
        <path
          fill="none"
          className="accent"
          d="M47 45v9m10-20v30m10-40v49m10-36v26m10-44v55m10-38v33m10-24v12m10-35v53m10-39v25m10-16v8m10-29v45"
        />
        <path className="wash" d="m250 31 152-4 6 63-51 2-18 16-4-18-79 3Z" />
        <text x="277" y="69" transform="rotate(-3 277 69)">
          I&apos;m listening.
        </text>
        <path fill="none" d="M199 49q31-27 49-6m-13-12 14 12-17 3" />
      </svg>
    );
  if (id === "rag")
    return (
      <svg {...props}>
        <path
          className="wash"
          d="m27 24 62-9 15 76-65 11Zm29-13 65 3-3 82-67-5Zm39 7 66 10-10 79-66-11Z"
        />
        <path fill="none" d="m111 42 27 4m-28 9 25 4m-28 9 19 3" />
        <path
          className="accent"
          fill="none"
          d="M179 58q30-35 59-2m-15-16 15 16-19 2"
        />
        <rect
          className="wash"
          x="253"
          y="24"
          width="129"
          height="69"
          rx="6"
          transform="rotate(-5 253 24)"
        />
        <text x="277" y="61">
          aha!
        </text>
        <path fill="none" d="m395 18 7-9m2 22 14-2m-28 70 4 8" />
      </svg>
    );
  if (id === "skillx")
    return (
      <svg {...props}>
        <circle className="wash" cx="84" cy="58" r="38" />
        <circle className="wash" cx="334" cy="58" r="38" />
        <text x="54" y="65">
          I know
        </text>
        <text x="305" y="65">
          you do
        </text>
        <path
          className="accent"
          fill="none"
          d="M141 42q72-40 139 0m-12-15 12 15-19 2M281 79q-69 37-139 0m13 17-13-17 19 1"
        />
        <text className="small" x="170" y="64">
          SKILLS ↔ SKILLS
        </text>
      </svg>
    );
  return (
    <svg {...props}>
      <rect className="wash" x="20" y="28" width="96" height="63" rx="4" transform="rotate(-4 20 28)" />
      <rect className="wash" x="169" y="13" width="105" height="77" rx="4" transform="rotate(3 169 13)" />
      <rect className="wash" x="335" y="32" width="75" height="56" rx="4" transform="rotate(-5 335 32)" />
      <path
        className="accent"
        fill="none"
        d="M119 53q26-22 47-6m-10-11 10 11-15 4M279 51q25-19 51-3m-10-12 10 12-15 3"
      />
      <text x="28" y="66">cloud</text>
      <text x="179" y="58">secrets</text>
      <text x="346" y="67">{`{ }`}</text>
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="project-top">
        <span className="mono">{project.label}</span>
        <span className="tiny-stamp">{project.stamp}</span>
      </div>
      <ProjectArt id={project.id} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <footer>
        <span>{project.stack}</span>
        <b>{project.action}</b>
      </footer>
      {project.repositories && (
        <div className="automation-links" aria-label="Automation repositories">
          <a href={project.repositories[0].href} target="_blank" rel="noopener noreferrer">Nextcloud ↗</a>
          <a href={project.repositories[1].href} target="_blank" rel="noopener noreferrer">Infisical ↗</a>
          <div className="automation-pair">
            <span className="pair-label">Docker + K8s drafts</span>
            <span>
              <a href={project.repositories[2].href} target="_blank" rel="noopener noreferrer">Docker ↗</a>
              <a href={project.repositories[3].href} target="_blank" rel="noopener noreferrer">K8s ↗</a>
            </span>
          </div>
        </div>
      )}
    </>
  );
  const className = `project ${project.id} ${project.href ? "" : "static"} reveal`;
  return project.href ? (
    <a
      className={className}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  );
}

function formatMonth(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

function Writing({ articles }: { articles: Article[] }) {
  const [feature, ...rest] = articles;
  return (
    <section
      className="writing section"
      id="writing"
      aria-labelledby="writing-title"
    >
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
              before the next rabbit hole. ↙
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
            <div className="article-scribble">fresh from the rabbit hole ↴</div>
            <h3>{feature.title}</h3>
            <p>{feature.excerpt || "A new field note from Pradeep."}</p>
            <footer>
              <span className="mono">{formatMonth(feature.date)}</span>
              <b>read on Medium ↗</b>
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
                  <b>↗</b>
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
            All notes on Medium ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <MotionEffects />
      <Navbar />
      <main id="top" className="relative">
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="mono mini-label">
              Pradeep Tarakar / software engineer
            </span>
            <h1 id="hero-title">
              A little
              <br />
              of{" "}
              <em>
                everything.
                <svg
                  className="title-swoop"
                  viewBox="0 0 520 25"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M4 14Q254 0 512 12M39 23Q256 8 480 19" />
                </svg>
              </em>
            </h1>
            <p>
              I make things for the web. Then I get curious about the systems
              underneath, the AI in between, and{" "}
              <a href="#security">what happens when something breaks.</a>
            </p>
            <div className="hero-links">
              <a href="#work">Follow the curiosity ↓</a>
              <a href="#contact">Start a conversation ↗</a>
            </div>
            <div className="handnote">Jack of many trades? Guilty. ↗</div>
          </div>
          <HeroBoard />
        </section>
        <div className="tape-wrap">
          <div
            className="tape-strip"
            aria-label="plan, build, break, fix, repeat"
          >
            <div aria-hidden="true">
              <span>plan</span>
              <b>✳︎</b>
              <span>build</span>
              <b>✳︎</b>
              <span>break</span>
              <b>✳︎</b>
              <span>fix</span>
              <b>✳︎</b>
              <span>repeat</span>
            </div>
          </div>
        </div>
        <section
          className="shell section work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <SectionHead
            number="01 / The scrapbook"
            title="Things I"
            accent="made."
            id="work-title"
            aside={
              <>
                Some tabs became actual things.
                <br />
                These are a few of them. ↙
              </>
            }
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <Writing articles={articles} />
        <section
          className="security section"
          id="security"
          aria-labelledby="security-title"
        >
          <div className="shell">
            <SectionHead
              number="03 / Security side quest"
              title="How could this"
              accent="break?"
              id="security-title"
              aside={
                <>
                  This rabbit hole started
                  <br />
                  in the server room. ↙
                </>
              }
            />
            <div className="security-layout">
              <article className="security-network reveal">
                <span className="mono">
                  Field report / network security / DevOps days
                </span>
                <h3>When the network was one big room.</h3>
                <p>
                  On-prem servers and everyday devices shared a flat network. I
                  turned that problem into a side project: a small DMZ with
                  port-based VLANs, Snort watching the traffic, and ELK making
                  the alerts visible.
                </p>
                <div className="lab-margin">
                  small network. real constraints. many notes.
                </div>
                <div
                  className="security-trace"
                  aria-label="From a flat network to segmentation and monitoring"
                >
                  <div className="trace-step">
                    <small>the problem</small>
                    <strong>One flat network</strong>
                  </div>
                  <div className="trace-step">
                    <small>the boundary</small>
                    <strong>Port-based VLANs</strong>
                  </div>
                  <div className="trace-step">
                    <small>the visibility</small>
                    <strong>Snort + ELK</strong>
                  </div>
                </div>
                <a
                  className="security-link"
                  href="https://medium.com/@pradeep.tarakar17/practical-network-security-with-dmz-and-ids-106353e9ca81"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the DMZ + IDS write-up ↗
                </a>
              </article>
              <div className="security-side">
                <article className="security-web reveal">
                  <svg
                    className="lock-sketch"
                    viewBox="0 0 74 83"
                    aria-hidden="true"
                  >
                    <path d="m14 40 48 3-4 34-47-4Z M23 39V23q4-23 24-14 12 5 8 21M34 55v9" />
                  </svg>
                  <span className="mono">
                    Research clipping / web app security / 2023
                  </span>
                  <h3>What can go wrong between request and response?</h3>
                  <p>
                    I co-authored a paper on common web application
                    vulnerabilities and practical habits for reducing them.
                  </p>
                  <div className="vuln-tags" aria-label="Topics covered">
                    <span>SQL injection</span>
                    <span>XSS</span>
                    <span>CSRF</span>
                    <span>IDOR</span>
                  </div>
                  <a
                    className="security-link"
                    href="https://doi.org/10.55041/IJSREM25165"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the paper ↗
                  </a>
                </article>
                <aside
                  className="try-card reveal"
                  aria-label="TryHackMe practice"
                >
                  <div className="try-title">
                    <span className="mono">A practice tab</span>
                    <strong>TryHackMe ↗</strong>
                  </div>
                  <TryHackMeBadge />
                  <a
                    href="https://tryhackme.com/p/0b2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit my profile ↗
                  </a>
                </aside>
              </div>
            </div>
          </div>
        </section>
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
                          {link.label} ↗
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
                one paper leads to another… ↗
              </span>
            </div>
          </div>
        </section>
        <section className="about" id="about" aria-labelledby="about-title">
          <div className="shell about-inner">
            <div className="reveal">
              <span className="mono">05 / Author&apos;s note</span>
              <h2 id="about-title">
                Hi, I&apos;m
                <br />
                <em>Pradeep.</em>
              </h2>
              <p>
                I&apos;ve spent 2+ years making things across the stack—from
                interfaces and data models to RAG pipelines and cloud
                infrastructure.
              </p>
              <p>
                Along the way: 30% less cloud spend, automation for 15+ servers,
                and tools that speak 10+ languages.
              </p>
              <p className="about-note">
                Apparently, curiosity has a work history. ↗
              </p>
            </div>
            <div className="jobs reveal">
              <div className="meta mono">Some pages from the work diary</div>
              {jobs.map((job) => (
                <div key={job.role} className="job">
                  <time className="mono">{job.date}</time>
                  <div>
                    <strong>{job.role}</strong>
                    <p>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <div className="postcard connect-card reveal">
              <span className="mono">06 / Connect</span>
              <div className="postage" aria-hidden="true">
                <span>✳︎</span>ONE GOOD HELLO
              </div>
              <div className="postmark" aria-hidden="true" />
              <h2 id="contact-title">
                Let&apos;s <em>connect.</em>
              </h2>
              <p className="connect-note">One hello can open a new tab. ↗</p>
              <ContactTabs />
            </div>
            <footer className="footer mono">
              <span>© 2026 Pradeep Tarakar / still collecting tabs</span>
              <div>
                <a
                  href="https://github.com/pradeept"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a href="#top">Back to top ↑</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
