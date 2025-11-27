import * as motion from "motion/react-client";
import { Timeline } from "./acerternity-ui/Timeline";
import Image from "next/image";
import college from "@/../public/dsce.png";

const eduData = [
  {
    title: "Dec 2021 - Sep 2023",

    content: (
      <div className='flex justify-between'>
        <a href='https://in.linkedin.com/school/dayananda-sagar-college-of-engineering-bangalore/' target="_blank">
          <Image
            src={college}
            alt='dsce-logo'
            height={60}
            width={80}
            className='rounded-sm'
          />
        </a>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl md:text-3xl dark:text-yellow-300 text-yellow-700'>
            Master of Computer Applications
          </h1>

          <p className='text-md md:text-lg dark:text-blue-200 text-blue-800 hover:underline'>
            Dayanand Sagar College of Engineering, Bangalore
          </p>
        </div>
      </div>
    ),
  },
  // {
  //   title: "Jun 2018 - Sep 2021",

  //   content: (
  //     <div>
  //       <div className='flex flex-col gap-2'>
  //         <h1 className='text-xl md:text-3xl dark:text-yellow-300 text-yellow-700'>
  //           Bachelor of Computer Applications
  //         </h1>

  //         <p className='text-md md:text-lg dark:text-blue-200 text-blue-800 hover:underline'>
  //           Basaveshwar Science College, Bagalkot
  //         </p>
  //       </div>
  //     </div>
  //   ),
  // },
];
export default function Education() {
  return (
    <>
      <div className=' text-left'>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className='border text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40'
        >
          Education
        </motion.div>
      </div>
      <div className='w-full'>
        <Timeline data={eduData} />
      </div>
    </>
  );
}
