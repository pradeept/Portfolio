import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";
import Image from "next/image";
import profile from "../../public/memojiProfile.png";
import { PointerHighlight } from "@/components/acerternity-ui/PointerHighlight";
import * as motion from "motion/react-client";
import Experience from "./experience/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import About from "./about/page";
import { IconExternalLink } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <section className='h-screen flex items-center md:mx-10 my-6 md:my-0'>
        <ShootingStars maxDelay={2} />
        <div className='flex flex-col  justify-evenly items-center w-full  md:flex-row '>
          <motion.div className='rounded-2xl '>
            <Image
              src={profile}
              width={400}
              height={300}
              className='rounded-full '
              loading='lazy'
              alt='profile'
            />
          </motion.div>
          <div className='flex flex-col gap-4 px-4 py-6 md:py-8 md:px-8 md:w-auto'>
            <h1 className='text-4xl md:text-6xl text-left  pl-0 md:pl-2 flex items-center gap-2'>
              <span>Hey There</span>
              <span>,</span>
            </h1>
            <div className='flex flex-col gap-2 md:pl-2 pl-0 justify-center items-center '>
              <span className='text-lg'>I&apos;m</span>
              <PointerHighlight
                rectangleClassName='bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600'
                pointerClassName='text-yellow-500'
              >
                <p className='relative z-10 text-3xl md:text-4xl px-2 dark:text-yellow-300 text-yellow-600 whitespace-nowrap'>
                  PRADEEP TARAKAR
                </p>
              </PointerHighlight>
              <p className='relative z-10 text-left px-2 pt-2 text-base md:text-lg'>
                A Full Stack Developer with DevOps Expertise
              </p>
              <div className='flex items-center cursor-pointer justify-center'>
                <a
                  href='mailto:someemail@gmail.com?subject=Work Inquiry'
                  rel='noopener noreferrer'
                  className='mt-4 cursor-pointer w-fit bg-gradient-to-br from-blue-400/60 to-blue-600/60 dark:from-blue-900/40 dark:to-blue-700/40 backdrop-blur-sm rounded-xl  border px-2 py-0.5 border-blue-200 dark:border-blue-800 text-base md:text-md font-semibold text-blue-900 dark:text-blue-200 hover:scale-105 hover:shadow-2xl transition-all duration-200 flex items-center gap-2'
                >
                  Let&apos;s Work Together :)
                  <IconExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
