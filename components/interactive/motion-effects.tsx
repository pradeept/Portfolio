"use client";

import { useEffect } from "react";

/** Animate visual effects without changing attributes React must hydrate. */
export function MotionEffects() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const board = document.querySelector(".portrait-board");
    const sticker = board?.querySelector(".portrait-stamp");
    let boardInView = true;
    const syncSticker = () => {
      sticker?.getAnimations().forEach((animation) => {
        if (document.hidden || !boardInView || preference.matches) animation.pause();
        else animation.play();
      });
    };
    const boardObserver = new IntersectionObserver(
      ([entry]) => { boardInView = entry.isIntersecting; syncSticker(); },
      { threshold: 0 },
    );
    if (board) boardObserver.observe(board);
    const seen = new WeakSet<Element>();
    const animations = new Map<Element, Animation>();
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          animations.get(target)?.play();
          revealObserver.unobserve(target);
        }
      }),
      { threshold: 0.06 },
    );
    const enroll = (element: Element) => {
      if (preference.matches || seen.has(element)) return;
      seen.add(element);
      // Leave content already on screen visible, without a hydration-time flash.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      const animation = element.animate(
        [{ opacity: 0, translate: "0 25px" }, { opacity: 1, translate: "0 0" }],
        { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" },
      );
      animation.pause();
      animation.onfinish = () => {
        animation.cancel();
        animations.delete(element);
      };
      animations.set(element, animation);
      revealObserver.observe(element);
    };
    const syncPreference = () => {
      if (preference.matches) {
        revealObserver.disconnect();
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      } else document.querySelectorAll(".reveal").forEach(enroll);
      syncSticker();
    };
    // Streamed HTML may not be hydrated yet. WAAPI leaves its classes intact.
    const additions = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(".reveal")) enroll(node);
          node.querySelectorAll(".reveal").forEach(enroll);
        }
      }
      animations.forEach((animation, element) => {
        if (!element.isConnected) {
          animation.cancel();
          animations.delete(element);
          revealObserver.unobserve(element);
        }
      });
    });
    syncPreference();
    additions.observe(document.body, { childList: true, subtree: true });
    preference.addEventListener("change", syncPreference);
    document.addEventListener("visibilitychange", syncSticker);
    return () => {
      additions.disconnect();
      revealObserver.disconnect();
      boardObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      sticker?.getAnimations().forEach((animation) => animation.play());
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", syncSticker);
    };
  }, []);
  return null;
}
