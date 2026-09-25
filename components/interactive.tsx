"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { EnvelopeSimple, LinkedinLogo, List, X } from "@phosphor-icons/react";
import { motion, MotionConfig } from "motion/react";

export const navItems = [
  ["#work", "The work"],
  ["#writing", "Field notes"],
  ["#security", "Security"],
  ["#papers", "Paper shelf"],
  ["#contact", "Say hi ↗"],
] as const;

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`diya ${className}`}
      viewBox="0 0 64 68"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="diya-flame"
        d="M33 29C28 23 29 18 34 8c1 7 9 12 5 19-1 3-3 4-6 4Z"
        fill="#efda78"
        stroke="#302d2a"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M32 31c0 4-1 8-1 11"
        stroke="#302d2a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 39c6 3 16 5 24 5 9 0 17-2 22-5-2 11-12 18-23 18S12 51 9 39Z"
        fill="#b5453e"
        stroke="#302d2a"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M8 39c10 7 35 8 48 0M17 49c11 7 23 7 32 0M22 61h21M4 28l5-3m48 0 4 3"
        stroke="#302d2a"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="shell top">
      <a className="brand" href="#top" aria-label="Pradeep Tarakar — home">
        <Diya />
        {/* <span>pradeep&apos;s pile of ideas</span> */}
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          className="mobile-menu-trigger"
          aria-label="Open navigation"
        >
          <List size={25} weight="bold" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="menu-overlay" />
          <Dialog.Content className="menu-paper" aria-describedby={undefined}>
            <div className="menu-heading">
              <Dialog.Title>Pick a tab.</Dialog.Title>
              <Dialog.Close aria-label="Close navigation">
                <X size={24} />
              </Dialog.Close>
            </div>
            <nav aria-label="Mobile navigation">
              {navItems.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>
            <span className="menu-scribble">follow the curiosity ↗</span>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

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
      <div className="portrait-board" id="collage-board">
        <div className="board-base" aria-hidden="true" />
        <motion.div
          className="blue-scrap"
          aria-hidden="true"
          initial={false}
          animate={{ rotate: layout.blue }}
          transition={{ type: "spring", stiffness: 130, damping: 18 }}
        >
          <span>FIELD NOTES / THE HUMAN</span>
        </motion.div>
        <span className="board-mark one" aria-hidden="true">
          ✳︎
        </span>
        <span className="board-mark two" aria-hidden="true">
          +++
        </span>
        <motion.figure
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
          />
          <figcaption>
            <strong>Oh, that&apos;s me.</strong>
            <span>one of many tabs open</span>
          </figcaption>
        </motion.figure>
        <motion.aside
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
        </motion.aside>
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
            Shuffle the scraps ↻
          </button>
          <span className="shuffle-hint" aria-hidden="true">
            a tiny desk fidget.
          </span>
        </div>
        <span className="sr-only" role="status">
          {index ? `Scraps rearranged, layout ${index + 1} of four.` : ""}
        </span>
      </div>
    </MotionConfig>
  );
}

export function TryHackMeBadge() {
  const [src, setSrc] = useState("/images/tryhackme-badge.png");
  useEffect(() => {
    const test = new window.Image();
    test.onload = () =>
      setSrc("https://tryhackme-badges.s3.amazonaws.com/0b2.png");
    test.src = "https://tryhackme-badges.s3.amazonaws.com/0b2.png";
  }, []);
  return (
    <Image
      src={src}
      alt="TryHackMe badge for 0b2"
      width={329}
      height={88}
      unoptimized
    />
  );
}

export function ContactTabs() {
  return (
    <div className="contact-tabs" aria-label="Ways to connect">
      <a
        className="contact-tab contact-x"
        href="https://x.com/0x0btoo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>X</strong>
        <span aria-hidden="true">↗</span>
      </a>
      <a
        className="contact-tab contact-email"
        href="mailto:pradeep.tarakar17@gmail.com"
      >
        <EnvelopeSimple size={29} weight="duotone" aria-hidden="true" />
        <strong>Email</strong>
        <span aria-hidden="true">↗</span>
      </a>
      <a
        className="contact-tab contact-linkedin"
        href="https://linkedin.com/in/pradeep-tarakar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo size={28} weight="duotone" aria-hidden="true" />
        <strong>LinkedIn</strong>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export function MotionEffects() {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const board = document.querySelector(".portrait-board");
    const boardObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
        }),
      { threshold: 0 },
    );
    if (board) boardObserver.observe(board);
    const onVisibility = () =>
      document.documentElement.classList.toggle("page-hidden", document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches)
      return () => {
        boardObserver.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
      };
    observer.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.current?.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((element) => {
      if (element.getBoundingClientRect().top < innerHeight)
        element.classList.add("is-visible");
      else observer.current?.observe(element);
    });
    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.current?.disconnect();
      boardObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return null;
}
