import React from "react";
import * as motion from "motion/react-client";

export default function Tooltip({ children, content }) {
  return (
    <motion.div className='group relative inline-block'>
      {children}
      <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        {content}
      </div>
    </motion.div>
  );
}
