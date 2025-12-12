"use client";
import { project } from "@/types/projectType";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

import {
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import projectImages from "@/lib/projectImages";
const images: Record<string, StaticImageData> = projectImages;

function ProjectCard({ data }: { data: project }) {
  const imgSrc = images[data.imgName];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    if (path === data.projectName) {
      setIsOpen(true);
    }
    return () => setIsOpen(false);
  }, [data.projectName, path]);
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="group p-4 md:p-4 bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl backdrop-blur-md  transition-all duration-300 flex flex-col min-h-[500px] "
    >
      {/* Project Image */}
      <div className="flex justify-center items-center mb-4 relative">
        <span className="absolute top-[-5] right-0 dark:bg-yellow-600 bg-orange-400 text-black p-0.5 pl-1 rounded-sm font-semibold">
          {data.tag}
          <span className="w-1 h-0.5 bg-slate-800 rounded-full pl-2 ml-2"></span>
        </span>
        <Image
          src={imgSrc}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAFUlEQVR4nO3BMQEAAAgDoJvc6FEOhAAAAABJRU5ErkJggg=="
          width={455}
          height={400}
          className="rounded-2xl shadow-md border bg-linear-to-r from-gray-800 via-blue-700 to-gray-900"
          alt={data.imgName}
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <p className="font-bold text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 mb-1">
          {data.projectName}
        </p>
        <p className="font-light pl-1 text-base md:text-md text-neutral-700 dark:text-neutral-300 mb-2">
          {data.description}
        </p>
        <span className="font-semibold text-sm text-neutral-600 dark:text-neutral-400 mb-1">
          Tech Stack:
        </span>
        <div className="flex gap-2 flex-wrap w-full mb-2">
          {data.stack.map(
            (tech, idx) =>
              idx < 4 && (
                <span
                  key={idx}
                  className="dark:bg-gray-900/80 bg-gray-200 text-xs md:text-sm rounded-md px-2 py-1 font-medium shadow-sm"
                >
                  {tech}
                </span>
              ),
          )}
          {data.stack.length > 4 && (
            <span className="dark:bg-gray-900/80 bg-gray-200 text-xs md:text-sm rounded-md px-2 py-1 font-medium shadow-sm">
              + {data.stack.length - 4} More
            </span>
          )}
        </div>
        {/* Single Project Page*/}
        {isOpen && (
          <>
            {data.learnings.length > 0 && (
              <div className="mb-2">
                <h1 className="font-bold text-sm md:text-base mb-1">
                  Key Learnings:
                </h1>
                <ul className="pl-4 list-disc text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                  {data.learnings.map((learning: string, idx: number) => (
                    <li key={idx}>{learning}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.challengesFaced.length > 0 && (
              <div className="mb-2">
                <h1 className="font-bold text-sm md:text-base mb-1">
                  Challenges:
                </h1>
                <ul className="pl-4 list-disc text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                  {data.challengesFaced.map(
                    (challenge: string, idx: number) => (
                      <li key={idx}>{challenge}</li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </>
        )}
        <button
          onClick={() => router.push(`/projects/${data.slug}`)}
          className="self-end flex items-center text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold  cursor-pointer  mb-2"
        >
          Read More
          <span>
            <IconArrowRight />
          </span>
        </button>
        {/* Card Footer */}
        <div className="flex justify-evenly items-center mt-4 gap-2 flex-wrap">
          <span
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border transition-all duration-300
              ${
                data.status === "Completed"
                  ? "bg-gradient-to-r from-green-200 to-green-100 text-green-800 border-green-300"
                  : "bg-gradient-to-r from-yellow-200 to-yellow-100 text-yellow-800 border-yellow-300"
              }
            `}
          >
            {data.status}
          </span>
          <span>
            <a href={data.repo} target="_blank">
              <IconBrandGithub size={22} />
            </a>
          </span>
          {data.status === "Completed" ? (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1 rounded-full border font-semibold text-xs shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300
      bg-white text-blue-600 border-blue-300
      dark:bg-gray-800 dark:text-blue-400 dark:border-blue-500"
            >
              <span className="relative flex items-center gap-1">
                <span className="relative inline-flex w-2 h-2 mr-1">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                    animate={{
                      scale: [1, 2],
                      opacity: [0.7, 0.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.1,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Live Here
              </span>
              <IconExternalLink size={16} />
            </a>
          ) : (
            <div
              className="flex items-center gap-2 px-4 py-1 rounded-full border font-semibold text-xs shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300
      bg-white text-blue-600 border-blue-300
      dark:bg-gray-800 dark:text-blue-400 dark:border-blue-500
      "
            >
              <span className="relative flex items-center gap-1">
                <span className="relative inline-flex w-2 h-2 mr-1">
                  <motion.span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                Offline
              </span>
              {/*<IconExternalLink size={16} />*/}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
