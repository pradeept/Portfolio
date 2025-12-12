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
import FlipText from "@/components/FlipText";
import Message from "@/components/ShortMessage";

export default function Home() {
  return (
    <>
      <section className="flex justify-center" id="hero">
        <div className="min-h-screen flex items-center justify-center md:mx-10 my-6 md:my-0 max-w-6xl">
          <ShootingStars maxDelay={2} /> {/* Background */}
          <div className="flex flex-col justify-evenly items-center w-full rounded  ">
            {/* Apple hi emoji */}
            <motion.div className=" flex items-center justify-center flex-col">
              <Image
                src={profile}
                width={400}
                height={300}
                className="rounded-full"
                loading="lazy"
                alt="profile"
              />
              <Message />
              <p className="md:w-sm w-60 h-1 rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-xl"></p>
            </motion.div>
            <div className="flex flex-col gap-4 px-4 py-6 md:px-8 md:w-auto">
              {/* Name and About */}
              <div className="flex flex-col gap-2 md:pl-2 pl-0 justify-center items-center ">
                <PointerHighlight
                  rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                  pointerClassName="text-yellow-500"
                >
                  <p className="relative z-10 text-3xl md:text-3xl px-2 dark:text-yellow-300 text-yellow-600 whitespace-nowrap">
                    PRADEEP TARAKAR
                  </p>
                </PointerHighlight>
                <div className="relative z-10 px-2 pt-2 text-base md:text-lg">
                  <FlipText
                    words={[
                      "Fullstack Developer",
                      "DevOps Engineer",
                      "Security Enthusiast",
                    ]}
                    duration={1800}
                  />
                </div>
                {/* CTA */}
                {/*<div className="flex items-center cursor-pointer justify-center">
                  <a
                    href="mailto:pradeep.tarakar17@gmail.com?subject=Work Inquiry"
                    rel="noopener noreferrer"
                    className="mt-4 cursor-pointer w-fit bg-gradient-to-br from-blue-400/60 to-blue-600/60 dark:from-blue-900/40 dark:to-blue-700/40 backdrop-blur-sm rounded-xl  border px-2 py-0.5 border-blue-200 dark:border-blue-800 text-base md:text-md font-semibold text-blue-900 dark:text-blue-200 hover:scale-105 hover:shadow-2xl transition-all duration-200 flex items-center gap-2"
                  >
                    Let&apos;s Work Together :)
                    <IconExternalLink />
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}
