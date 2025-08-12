"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  item,
}: {
  item: {
    id: number;
    name: string;
    content: React.ReactNode;
  };
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(useTransform(x, [-75, 75], [-30, 30]), springConfig);
  const translateX = useSpring(
    useTransform(x, [-75, 75], [-40, 40]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const centerX = rect.width / 2;

    animationFrameRef.current = requestAnimationFrame(() => {
      x.set(offsetX - centerX);
    });
  };

  return (
    <div
      className='group relative -mr-4 w-6 '
      key={item.name}
      onMouseEnter={() => setHoveredIndex(item.id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === item.id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX,
              rotate,
              whiteSpace: "nowrap",
            }}
            className='absolute -top-16 -left-4 z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl'
          >
            <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
            <div className='absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
            <div className='relative z-30 text-base font-bold text-white'>
              {item.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onMouseMove={handleMouseMove}
        className='relative !m-0 w-22 dark:bg-gray-800 bg-gray-200 flex justify-center  rounded-full border-2  object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105'
      >
        {item.content}
      </div>
    </div>
  );
};
