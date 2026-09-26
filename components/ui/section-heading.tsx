import type { ReactNode } from "react";

export function SectionHead({
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
