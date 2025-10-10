"use client";
import React, { useState, useMemo } from "react";
import projectsData from "../../lib/data/projectsData.json";
import ProjectCard from "@/components/ProjectCard";
import { ProjectTypeDropdown } from "@/components/ProjectTypeDropdown";
import * as motion from "motion/react-client";

function Projects() {
  const [selectedType, setSelectedType] = useState<string>("web");
  const filteredProjects = useMemo(() => {
    if (selectedType === "all") return projectsData;
    return projectsData.filter((project) => project.type === selectedType);
  }, [selectedType]);

  return (
    <>
      <div className='mx-10 md:mx-42 flex flex-col justify-center items-center gap-8 md:gap-12'>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className='text-center  text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40 border'
        >
          Projects
        </motion.div>
        <div className='w-full flex justify-center md:justify-end'>
          <ProjectTypeDropdown
            value={selectedType}
            onChange={setSelectedType}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {filteredProjects.map((project, idx) => (
            <div key={idx}>
              <ProjectCard data={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
