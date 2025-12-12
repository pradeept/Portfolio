"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";

export default function Tooltip({ children, content }) {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 1000);
  };
  return (
    <motion.div
      className="group relative inline-block"
      onClick={() => handleClick()}
    >
      {children}
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 ${click && "opacity-100"} group-active:opacity-100 transition-opacity duration-300 pointer-events-none`}
      >
        {content}
      </div>
    </motion.div>
  );
}
