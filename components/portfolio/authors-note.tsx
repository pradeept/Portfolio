import { DoodleArrow } from "@/components/ui/doodles";
import { jobs } from "@/lib/content";

export function AuthorsNote() {
  return (
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
            Apparently, curiosity has a work history. <DoodleArrow />
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
  );
}
