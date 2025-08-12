import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";
import Image from "next/image";
import profile from "../../public/memojiProfile.png";
import { PointerHighlight } from "@/components/acerternity-ui/PointerHighlight";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className='h-screen flex items-center md:mx-10'>
      <ShootingStars maxDelay={2} />
      <div className='flex flex-col  justify-evenly items-center w-full  md:flex-row '>
        <motion.div className='rounded-2xl shadow shadow-black dark:shadow-white dark:bg-[#171717] bg-white'>
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
            {/* <span className='text-3xl'>👋🏼</span> */}
            <span>,</span>
          </h1>
          <div className='flex flex-col gap-2 md:pl-2 pl-0'>
            <span className='text-lg'>I&apos;m</span>
            <PointerHighlight
              rectangleClassName='bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600'
              pointerClassName='text-yellow-500'
            >
              <p className='relative z-10  text-3xl md:text-4xl px-2 text-yellow-300 whitespace-nowrap'>
                PRADEEP TARAKAR
              </p>
            </PointerHighlight>
            <p className='relative z-10 text-left px-2 pt-2 text-base md:text-lg'>
              A Full Stack Developer with DevOps Expertise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
