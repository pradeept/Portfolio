import { DoodleArrow } from "@/components/ui/doodles";
import { SectionHead } from "@/components/ui/section-heading";
import { TryHackMeBadge } from "@/components/interactive/tryhackme-badge";

export function SecuritySection() {
  return (
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
              in the server room. <DoodleArrow direction="down-left" />
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
                <DoodleArrow direction="right" className="trace-arrow" />
              </div>
              <div className="trace-step">
                <small>the boundary</small>
                <strong>Port-based VLANs</strong>
                <DoodleArrow direction="right" className="trace-arrow" />
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
              Read the DMZ + IDS write-up <DoodleArrow />
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
                Read the paper <DoodleArrow />
              </a>
            </article>
            <aside
              className="try-card reveal"
              aria-label="TryHackMe practice"
            >
              <div className="try-title">
                <span className="mono">A practice tab</span>
                <strong>TryHackMe <DoodleArrow /></strong>
              </div>
              <TryHackMeBadge />
              <a
                href="https://tryhackme.com/p/0b2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my profile <DoodleArrow />
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
