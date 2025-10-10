import {
  IconBrandGithub,
  IconBrandHackerrank,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import profile from "../../../public/profile_pic_gibly.png";
import { PointerHighlight } from "@/components/acerternity-ui/PointerHighlight";
function About() {
  return (
    <div className='min-h-screen z-20  dark:bg-gray-900/80 mb-7 md:mb-10 bg-gray-100 mx-mdplus'>
      <div className='flex justify-center items-center '>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className='border text-5xl mt-4 md:mt-8  md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40 '
        >
          About Me
        </motion.div>
      </div>
      <div className='p-10 md:px-30 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-10'>
          <div>
            <PointerHighlight
              rectangleClassName='bg-white/10 dark:bg-neutral-700/10 border-neutral-300 dark:border-neutral-600'
              pointerClassName='text-blue-500'
            >
              <h1 className='p-2 font-light tracking-wider text-lg z-10'>
                I&apos;m a Software Engineer specializing in building modern,
                scalable applications using React, Next.js, Express.js and
                Node.js. With a strong eye for design and performance.
                Complementing my Frontend and Backend expertise, I bring DevOps
                skills to the table — managing deployments with Kubernetes,
                writing IaC, and setting up observability and CI/CD pipelines.
                I&apos;m also enthusiast about Network and Web Application
                Security. This blend allows me to deliver full-cycle solutions
                from code to production with efficiency and reliability.
              </h1>
            </PointerHighlight>
          </div>
          <div className='h-1 w-full bg-red-400' />
          <div className='flex gap-8 md:gap-16'>
            <div className='flex gap-2'>
              <a href='https://www.leetcode.com/u/Pradeept17' target='_blank'>
                <IconBrandLeetcode size={44} className='dark:text-yellow-300 text-yellow-600' />
              </a>
              <a
                href='https://www.hackerrank.com/profile/pradeep_tarakar'
                target='_blank'
              >
                <IconBrandHackerrank size={44} className='dark:text-green-300 text-green-600' />
              </a>
            </div>
            <div>
              <div className='flex gap-2'>
                <a href='https://www.github.com/pradeept' target='_blank'>
                  <IconBrandGithub size={44} />
                </a>
                <a
                  href='https://www.linkedin.com/in/pradeep-tarakar'
                  target='_blank'
                >
                  <IconBrandLinkedin
                    size={44}
                    className='dark:text-blue-300 text-blue-600 rounded'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src={profile}
            placeholder='blur'
            width={270}
            height={270}
            alt='Profile'
            className='rounded-2xl'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
