import { DoodleArrow } from "@/components/ui/doodles";
import type { Project, Repository } from "@/lib/content";

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
        <text className="small" x="164" y="64">SKILLS</text>
        <path fill="none" d="M208 60h16m-12-4-4 4 4 4m8-8 4 4-4 4" strokeWidth="1" />
        <text className="small" x="232" y="64">SKILLS</text>
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

function RepositoryLink({ repository }: { repository: Repository }) {
  return <a href={repository.href} target="_blank" rel="noopener noreferrer">{repository.label} <DoodleArrow /></a>;
}

export function ProjectCard({ project }: { project: Project }) {
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
        <b>{project.action}{project.href || project.repositories ? <> <DoodleArrow /></> : null}</b>
      </footer>
      {project.repositories ? (
        <div className="automation-links" aria-label="Automation repositories">
          {project.repositories.deployments.map((repository) => <RepositoryLink key={repository.href} repository={repository} />)}
          <div className="automation-pair">
            <span className="pair-label">Docker + K8s drafts</span>
            <span>
              {project.repositories.drafts.map((repository) => <RepositoryLink key={repository.href} repository={repository} />)}
            </span>
          </div>
        </div>
      ) : null}
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
