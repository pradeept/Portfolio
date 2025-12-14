"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipTextProps {
  words?: string[];
  duration?: number;
  className?: string;
}

const FlipText: React.FC<FlipTextProps> = ({
  words = ["Fullstack Developer", "UI/UX Designer", "Creator"],
  duration = 3000,
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className="flex items-center justify-center gap-1 text-2xl font-light md:text-2xl">
      <span className="dark:text-gray-300 text-slate-700">I&apos;m a</span>

      {/* Flip Container */}
      <div className="relative inline-block perspective-[500px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]} // Key change triggers the animation
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap bg-clip-text text-transparent dark:bg-orange-500 bg-orange-600 ${className}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
        <span className="invisible block" aria-hidden="true">
          {words.reduce((a, b) => (a.length > b.length ? a : b))}
        </span>
      </div>
    </div>
  );
};

export default FlipText;
