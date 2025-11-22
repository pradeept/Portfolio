"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipTextProps {
  words?: string[];
  duration?: number; // Time to read the word before flipping
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
    <div className='flex items-center justify-center gap-2 text-2xl font-light md:text-2xl'>
      <span className='dark:text-gray-300 text-slate-700'>I am a</span>

      {/* Flip Container */}
      <div className='relative flex items-center justify-center min-w-[250px] perspective-[500px]'>
        <AnimatePresence mode='wait'>
          <motion.span
            key={words[index]} // Key change triggers the animation
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-slate-100 dark:to-slate-400 ${className}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
        <span className='invisible opacity-0' aria-hidden='true'>
          {words.reduce((a, b) => (a.length > b.length ? a : b))}
        </span>
      </div>
    </div>
  );
};

export default FlipText;
