import { DoodleArrow, DoodleTurn } from "@/components/ui/doodles";
import { projects } from "@/lib/content";
import { SectionHead } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/portfolio/project-card";

export function WorkSection() {
  return (
    <section
      className="shell section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <DoodleTurn className="work-arrow" />
      <SectionHead
        number="01 / The scrapbook"
        title="Things I"
        accent="made."
        id="work-title"
        aside={
          <>
            Some tabs became actual things.
            <br />
            These are a few of them. <DoodleArrow direction="down-left" />
          </>
        }
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
