"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { IconChefHat } from "@tabler/icons-react";

import cooking from "@/../public/cooking.png";

const spring = { stiffness: 180, damping: 22, mass: 0.7 };

export default function CookingSplash() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);

  const rotateX = useTransform(smoothY, [-1, 1], [2.5, -2.5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-3.5, 3.5]);
  const imageX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const imageY = useTransform(smoothY, [-1, 1], [-5, 5]);
  const glowX = useTransform(smoothX, [-1, 1], [18, -18]);
  const glowY = useTransform(smoothY, [-1, 1], [12, -12]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (prefersReducedMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <main
      className="relative isolate flex h-screen items-center overflow-hidden bg-[#090806] px-4 py-4 text-[#fff8eb] sm:px-6 sm:py-6 lg:px-10"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-amber-500/15 blur-[110px]"
        style={prefersReducedMotion ? undefined : { x: glowX, y: glowY }}
      />

      <section className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-4 sm:gap-6">
        <motion.div
          className="w-full [perspective:1200px]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative mx-auto w-[min(56rem,92vw,calc((100vh-12rem)*1.2))] [transform-style:preserve-3d]"
            style={
              prefersReducedMotion
                ? undefined
                : { rotateX, rotateY, x: imageX, y: imageY }
            }
          >
            <div
              aria-hidden="true"
              className="absolute inset-1 -z-10 rotate-2 rounded-2xl bg-amber-400/35"
            />
            <div
              aria-hidden="true"
              className="absolute inset-1 -z-20 -rotate-2 rounded-2xl bg-orange-950"
            />
            <div className="relative aspect-[6/5] overflow-hidden rounded-2xl shadow-[0_28px_80px_rgba(255,130,30,0.17)]">
              <Image
                src={cooking}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 896px"
                className="object-cover transition-transform duration-700 ease-out motion-safe:hover:scale-[1.015]"
                alt="Illustration of Pradeep cooking ideas and code in a cozy kitchen"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,8,6,0.42),transparent_28%)]"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex max-w-2xl flex-col items-center text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-300">
            <IconChefHat aria-hidden="true" size={19} stroke={1.8} />
            <span>In the kitchen</span>
          </div>
          <h4 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
            Cooking something new✨.
          </h4>
        </motion.div>
      </section>
    </main>
  );
}
