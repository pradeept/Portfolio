import React from "react";
import * as motion from "motion/react-client";
import { AnimatedTooltip } from "@/components/acerternity-ui/Tooltip";
import {
  IconBrandCpp,
  IconBrandCypress,
  IconBrandFigma,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconCircleDottedLetterE,
  IconPuzzle,
  IconStack2,
} from "@tabler/icons-react";
import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";

function Progress({ value }: { value: number }) {
  return (
    <div className='w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 mt-1 overflow-hidden'>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, type: "spring" }}
        className='h-2 rounded-full bg-gray-600 dark:bg-white'
        style={{ minWidth: 8 }}
      />
    </div>
  );
}

function Skills() {
  return (
    <div className=' mx-16 md:mx-34 min-h-screen flex flex-col items-center justify-center gap-8 md:gap-8 xl:gap-12 px-2 py-8 bg-transparent mb-10 md:mb-20'>
      <ShootingStars />
      {/* PS */}
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className='border mb-8 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40'
      >
        Skills
      </motion.h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full '>
        {/* Frontend Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='bg-gray-100 dark:bg-gray-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center backdrop-blur-md relative'
        >
          <small className='absolute left-4 top-2 text-gray-400'>
            (Hover Over Skill Icons)
          </small>
          <h2 className='text-2xl font-bold mb-4 text-center  tracking-wide'>
            Frontend
          </h2>
          <ul className='space-y-3 md:space-y-6 w-full text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200'>
            <li>
              <AnimatedTooltip
                item={{
                  name: "React.js",
                  id: 1,
                  content: <IconBrandReact size={32} />,
                }}
              />
              <Progress value={90} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Next.js",
                  id: 1,
                  content: <IconBrandNextjs size={32} />,
                }}
              />{" "}
              <Progress value={80} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "TailwindCSS",
                  id: 1,
                  content: <IconBrandTailwind size={32} />,
                }}
              />
              <Progress value={85} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Radix UI",
                  id: 1,
                  content: <IconBrandRadixUi size={32} />,
                }}
              />
              <Progress value={75} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Tanstack React Query",
                  id: 1,
                  content: <IconStack2 size={32} />,
                }}
              />
              <Progress value={70} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Redux Toolkit",
                  id: 1,
                  content: <IconBrandRedux size={32} />,
                }}
              />
              <Progress value={70} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Cyprus.js",
                  id: 1,
                  content: <IconBrandCypress size={32} />,
                }}
              />
              <Progress value={60} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Figma",
                  id: 1,
                  content: <IconBrandFigma size={32} />,
                }}
              />
              <Progress value={80} />
            </li>
          </ul>
        </motion.div>
        {/* Backend Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='bg-gray-100 dark:bg-gray-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center backdrop-blur-md'
        >
          <h2 className='text-2xl font-bold mb-4 text-center  tracking-wide'>
            Backend
          </h2>
          <ul className='space-y-3 md:space-y-6 w-full text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200'>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Express.js",
                  id: 1,
                  content: <IconCircleDottedLetterE size={32} />,
                }}
              />
              <Progress value={85} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Node.js",
                  id: 1,
                  content: <IconBrandNodejs size={32} />,
                }}
              />
              <Progress value={85} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "C plus plus",
                  id: 1,
                  content: <IconBrandCpp size={32} />,
                }}
              />
              <Progress value={80} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Python",
                  id: 1,
                  content: <IconBrandPython size={32} />,
                }}
              />
              <Progress value={80} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "MongoDB",
                  id: 1,
                  content: <IconBrandMongodb size={32} />,
                }}
              />
              <Progress value={70} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "MySQL",
                  id: 1,
                  content: <IconBrandMysql size={32} />,
                }}
              />
              <Progress value={70} />
            </li>
            <li>
              <AnimatedTooltip
                item={{
                  name: "Data Structures & Algos",
                  id: 1,
                  content: <IconPuzzle size={32} />,
                }}
              />
              <Progress value={45} />
            </li>
          </ul>
        </motion.div>
        {/* DevOps Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='bg-gray-100 dark:bg-gray-900/40 col-span-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center backdrop-blur-md'
        >
          <h2 className='text-2xl font-bold mb-4 text-center tracking-wide'>
            DevOps <Progress value={70} />
          </h2>
          <ul className='flex gap-4 flex-wrap items-center justify-center text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200'>
            <li className='bg-gray-200 dark:bg-gray-900/40 py-1 px-1.5 rounded-md'>
              Docker{" "}
            </li>
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Kubernetes{" "}
            </li>
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              GitOps{" "}
            </li>
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Helm Charts{" "}
            </li>
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Cloud (AWS, GCP, Heroku, Netlify, Domains){" "}
            </li>{" "}
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Terraform (IaC){" "}
            </li>
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Ansible (Infra Configuration){" "}
            </li>{" "}
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Monitoring & Observability using Loki, Prometheus, Grafana, Node
              Exportor
            </li>
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Monitoring & Observability using ELK stack{" "}
            </li>{" "}
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              Security - Snort IDS, Security Onion{" "}
            </li>{" "}
            <li className='bg-gray-200 dark:bg-gray-900/80 py-1 px-1.5'>
              FinOps{" "}
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
export default Skills;
