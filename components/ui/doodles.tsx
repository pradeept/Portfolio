import type { SVGProps } from "react";

type DoodleProps = SVGProps<SVGSVGElement>;
type Direction =
  | "up-right"
  | "down-left"
  | "down-right"
  | "up"
  | "down"
  | "right";
const rotations: Record<Direction, number> = {
  "up-right": 0,
  "down-left": 180,
  "down-right": 90,
  up: -45,
  down: 135,
  right: 45,
};

/** SVG keeps decorative marks out of the platform's emoji font fallback. */
export function DoodleArrow({
  direction = "up-right",
  className = "",
  ...props
}: DoodleProps & { direction?: Direction }) {
  return (
    <svg
      {...props}
      className={`doodle-icon doodle-arrow ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      data-direction={direction}
    >
      <g transform={`rotate(${rotations[direction]} 12 12)`}>
        <path d="M3 21 20 3M13.5 3.9 20 3l-.8 6.6" />
      </g>
    </svg>
  );
}

export function DoodleLoop({ className = "", ...props }: DoodleProps) {
  return (
    <svg
      {...props}
      className={`doodle-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19 9a8 8 0 1 0 1 6M19 3l.5 6-6-.5" />
    </svg>
  );
}

export function DoodleSpark({ className = "", ...props }: DoodleProps) {
  return (
    <svg
      {...props}
      className={`doodle-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m12 2-.4 20M2 12l20 .4M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function DoodleTurn({ className = "", ...props }: DoodleProps) {
  return (
    <svg
      {...props}
      className={`doodle-icon ${className}`}
      viewBox="0 0 80 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 5 8 68l62 7M55 60l15 15-19 10" />
    </svg>
  );
}
