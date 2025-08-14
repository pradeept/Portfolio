import React from "react";
import projectsData from "../../lib/data/projectsData.json";
import ProjectCard from "@/components/ProjectCard";
import * as motion from "motion/react-client";

function Projects() {
  return (
    <div className='mx-10 md:mx-35 flex flex-col justify-center items-center gap-8 md:gap-12'>
      <div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className=' text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40 border'
        >
          Projects
        </motion.div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {projectsData.map((project, idx) => (
          <div key={idx}>
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
