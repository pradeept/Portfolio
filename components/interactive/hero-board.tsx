"use client";

import { DoodleLoop, DoodleSpark } from "@/components/ui/doodles";

import { useState } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import * as m from "motion/react-m";

const arrangements = [
  { photo: -6, blue: -8, note: 8, noteX: 0 },
  { photo: -8, blue: 3, note: -3, noteX: -8 },
  { photo: -4, blue: 10, note: -10, noteX: 9 },
  { photo: -6, blue: 8, note: -8, noteX: 0 },
];

export function HeroBoard() {
  const [index, setIndex] = useState(0);
  const layout = arrangements[index];
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="portrait-board" id="collage-board">
          <div className="board-base" aria-hidden="true" />
          <m.div
            className="blue-scrap"
            aria-hidden="true"
            initial={false}
            animate={{ rotate: layout.blue }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
          >
            <span>FIELD NOTES / THE HUMAN</span>
          </m.div>
          <span className="board-mark one" aria-hidden="true">
            <DoodleSpark />
          </span>
          <span className="board-mark two" aria-hidden="true">
            +++
          </span>
          <m.figure
            className="portrait"
            initial={false}
            animate={{ rotate: layout.photo }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
          >
            <Image
              src="/images/pradeep-illustrated-portrait.jpg"
              alt="Illustrated portrait of Pradeep smiling in glasses and a suit"
              width={867}
              height={1300}
              priority
              sizes="(max-width: 600px) 78vw, (max-width: 860px) 400px, (max-width: 1150px) 35vw, 400px"
            />
            <figcaption>
              <strong>Oh, that&apos;s me.</strong>
              <span>one of many tabs open</span>
            </figcaption>
          </m.figure>
          <m.aside
            className="portrait-note"
            initial={false}
            animate={{ rotate: layout.note, x: layout.noteX }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
          >
            <small>Margin note / 001</small>Currently collecting
            <br />
            new ways to
            <br />
            <em>connect the dots.</em>
          </m.aside>
          <span className="portrait-stamp" aria-hidden="true">
            CURIOUS
            <br />
            BY DEFAULT
          </span>
          <svg
            className="portrait-arrow"
            viewBox="0 0 126 118"
            aria-hidden="true"
          >
            <path d="M112 9C74 4 45 19 49 49c3 24 34 22 28 4-6-20-40-12-57 31m0 0 27-11M20 84l4-29" />
          </svg>
          <div className="shuffle-row">
            <button
              type="button"
              className="shuffle-button"
              onClick={() =>
                setIndex((current) => (current + 1) % arrangements.length)
              }
            >
              Shuffle the scraps <DoodleLoop />
            </button>
            <span className="shuffle-hint" aria-hidden="true">
              a tiny desk fidget.
            </span>
          </div>
          <span className="sr-only" role="status">
            {index ? `Scraps rearranged, layout ${index + 1} of four.` : ""}
          </span>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
