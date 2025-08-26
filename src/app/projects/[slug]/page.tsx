import React from "react";
import projectsData from "@/lib/data/projectsData.json";
import Image, { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import lingoGo from "../../../../public/projects/lingoGo.png";
import featherLogs from "../../../../public/projects/featherlogs.png";
import edditor from "../../../../public/projects/edditor.png";
import emiCalc from "../../../../public/projects/emiCalculator.png";
import expenseMgr from "../../../../public/projects/expenseMgr.png";
import trelloClone from "../../../../public/projects/trelloClone.png";
import infisical from "../../../../public/projects/infisical.png";
import nextcloud from "../../../../public/projects/nextcloud.png";
import provisionercli from "../../../../public/projects/provisionercli.png";
import nullnet from "../../../../public/projects/nullnet.png";
import Back from "@/components/Back";

const images: Record<string, StaticImageData> = {
  "lingoGo.png": lingoGo,
  "featherlogs.png": featherLogs,
  "edditor.png": edditor,
  "emiCalculator.png": emiCalc,
  "expenseMgr.png": expenseMgr,
  "trelloClone.png": trelloClone,
  "infisical.png": infisical,
  "nextcloud.png": nextcloud,
  "provisionercli.png": provisionercli,
  "nullnet.png": nullnet,
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const normalize = (str: string) => str.toLowerCase();
  const { slug } = await params;
  const project = projectsData.find(
    (p) => normalize(p.slug) === normalize(slug)
  );
  if (!project) return notFound();

  return (
    <section className='min-h-screen flex flex-col items-center justify-center mx-10 py-12 px-4 md:px-0 '>
      {/*<Back /> */}
      <div className='w-full max-w-4xl flex flex-col gap-10 '>
        <div className='flex flex-col md:flex-row gap-10  items-center md:items-start bg-gray-100 dark:bg-gray-900/60 rounded-2xl p-6 md:p-12 shadow-lg'>
          <Image
            src={images[project.imgName]}
            alt={project.projectName}
            width={340}
            height={220}
            className='rounded-2xl shadow-lg object-cover'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAFUlEQVR4nO3BMQEAAAgDoJvc6FEOhAAAAABJRU5ErkJggg=='
          />
          <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-purple-700 dark:text-yellow-300'>
              {project.projectName}
            </h1>
            <p className='text-base md:text-lg text-neutral-700 dark:text-neutral-200'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {project.stack.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className='bg-purple-100 dark:bg-blue-900/60 text-xs md:text-sm rounded-md px-2 py-1 font-medium text-purple-700 dark:text-yellow-200 shadow-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex gap-3 mt-4 items-center'>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm border transition-all duration-300
                  ${
                    project.status?.toLowerCase().includes("completed")
                      ? "bg-gradient-to-r from-green-200 to-green-100 text-green-800 border-green-300"
                      : "bg-gradient-to-r from-yellow-200 to-yellow-100 text-yellow-800 border-yellow-300"
                  }
                `}
              >
                {project.status}
              </span>
              {project.repo && (
                <a
                  href={project.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 px-3 py-1 rounded-full border font-semibold text-xs shadow bg-white text-neutral-700 border-neutral-300 dark:bg-gray-800 dark:text-neutral-200 dark:border-neutral-600 hover:scale-105 hover:shadow-lg transition'
                >
                  <IconBrandGithub size={18} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 px-3 py-1 rounded-full border font-semibold text-xs shadow bg-white text-blue-600 border-blue-300 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-500 hover:scale-105 hover:shadow-lg transition'
                >
                  Live <IconExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className='mt-2 md:mx-10 flex flex-col gap-6'>
          {project.learnings && project.learnings.length > 0 && (
            <div className='mb-4 rounded-xl bg-gradient-to-br from-purple-100/70 to-white dark:from-blue-900/40 dark:to-gray-900/60 p-5 shadow-sm border border-purple-100 dark:border-blue-900'>
              <h2 className='font-bold text-lg mb-2 text-purple-700 dark:text-yellow-200 flex items-center gap-2'>
                <span className='inline-block w-2 h-2 rounded-full bg-purple-400 dark:bg-yellow-300 animate-pulse'></span>
                Key Learnings
              </h2>
              <ul className='pl-4 list-decimal text-sm md:text-base select-none text-neutral-700 dark:text-neutral-200 space-y-1'>
                {project.learnings.map(
                  (learning: string, idx: number) =>
                    learning && (
                      <li key={idx} className='rounded px-2 py-1'>
                        {learning}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
          {project.challengesFaced && project.challengesFaced.length > 0 && (
            <div className='mb-4 rounded-xl bg-gradient-to-br from-red-100/70 to-white dark:from-yellow-900/30 dark:to-gray-900/60 p-5 shadow-sm border border-red-100 dark:border-yellow-900'>
              <h2 className='font-bold text-lg mb-2 text-red-600 dark:text-yellow-200 flex items-center gap-2'>
                <span className='inline-block w-2 h-2 rounded-full bg-red-400 dark:bg-yellow-300 animate-pulse'></span>
                Challenges Faced
              </h2>
              <ul className='pl-4 list-decimal select-none text-sm md:text-base text-neutral-700 dark:text-neutral-200 space-y-1'>
                {project.challengesFaced.map(
                  (challenge: string, idx: number) =>
                    challenge && (
                      <li key={idx} className='rounded px-2 py-1'>
                        {challenge}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
