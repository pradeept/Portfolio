import { Timeline } from "@/components/acerternity-ui/Timeline";
import React from "react";
import * as motion from "motion/react-client";
import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";
import Education from "@/components/Education";

function Experience() {
  const data = [
    {
      title: "March 2025 - Present",
      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              Independent Backend Engineer
            </h1>
            <a className='text-sm md:text-md dark:text-blue-200 text-blue-800 hover:underline'>
              Self-Employed (Independent R&D)
            </a>
          </div>
          <ul className='flex flex-col gap-2 md:gap-3 dark:text-gray-200 text-sm mt-4'>
            <li>- Delivered and deployed web applications for 3 clients.</li>
            <li>
              - Engaged in self-directed research on {" "}
              <span className='dark:text-orange-300 text-orange-400'>
                Backend Architecture Patterns (Clean Architecture, Hexagonal), {" "}
              </span>
              implementing them in proof-of-concept microservices.
            </li>
            <li>
              - Built RAGloma, an AI-driven knowledge base using {" "}
              <span className='dark:text-orange-300 text-orange-400'>
                LangChain, Pinecone and Redis (rate-limiting),{" "}
              </span>
              focusing on vector embeddings and efficient context retrieval.
            </li>
            <li>
              - Contributed to Open Source projects and made it to {" "}
              <span className='dark:text-orange-300 text-orange-400'>
                Hacktoberfest HOF 2025.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "May 2024 - Dec 2024",
      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              DevOps Engineer
            </h1>
            <a
              className='text-sm md:text-md dark:text-blue-200 text-blue-800 hover:underline'
              href='https://sirpi.io'
              target='_blank'
            >
              SIRPI Products and Services Pvt. Ltd.
            </a>
          </div>

          <ul className='flex flex-col gap-2 md:gap-3 dark:text-gray-200 text-sm mt-4'>
            <li>
              - Planned and redistributed the Dyno load in Heroku which{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                reduced 30% of the total cost
              </span>
              .
            </li>
            <li>
              - Setup Observability & Monitoring{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                for 15+ servers and 20+ Deployments
              </span>{" "}
              across multiple cloud providers.
            </li>
            <li>
              - Administered{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                On-prem & Cloud based Kubernetes clusters
              </span>{" "}
              .
            </li>
            <li>
              - Developed{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                Terraform and Ansible scripts (IaC)
              </span>{" "}
              to setup and configure Infrastructure.
            </li>
            <li>
              - Improved organization security by implementing{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                Access Tracking, Least Privilege and Security Best Practices
              </span>
              .
            </li>
            <li>
              -{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                Led the DevOps team
              </span>{" "}
              of 3 members.{" "}
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mar 2024 - Apr 2024",
      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              DevOps Intern
            </h1>
            <a
              className='text-sm md:text-md dark:text-blue-200 text-blue-800 hover:underline'
              href='https://sirpi.io'
              target='_blank'
            >
              SIRPI Products and Services Pvt. Ltd.
            </a>
          </div>

          <ul className='flex flex-col gap-2 md:gap-3 dark:text-gray-200 text-sm mt-4'>
            <li>
              - Self Hosted 10+ Open Source Services which included{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                NextCloud, Infisical, Supabase,
              </span>{" "}
              and more.
            </li>
            <li>
              - Improved organization Network by setting up{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                DMZ, VLAN, Switch and Snort IDS
              </span>
              .
            </li>
            <li>
              - Setup a{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                GPU Server from Scratch
              </span>{" "}
              and hosted an{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                {" "}
                on-premises RAG application (PrivateGPT)
              </span>
            </li>

            <li>
              - Written test scripts to perform{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                Load-Test on K8s Clusters
              </span>
              .
            </li>
            <li>- Handled FinOps and assets movement.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Sep 2023 - Feb 2024",
      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              Frontend Engineer
            </h1>
            <a
              className='text-sm md:text-md dark:text-blue-200 text-blue-800 hover:underline'
              href='https://sirpi.io'
              target='_blank'
            >
              SIRPI Products and Services Pvt. Ltd.
            </a>
          </div>

          <ul className='flex flex-col gap-2 md:gap-3 dark:text-gray-200 text-sm mt-4'>
            <li>
              - Worked on developing{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                SaaS Applications
              </span>
              .
            </li>
            <li>
              - Contributed to documenting and adopting{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                frontend coding standards
              </span>
              .
            </li>
            <li>- Created POCs using NextJS. </li>
            <li>
              - Optimized large data rendering implementing{" "}
              <span className='dark:text-orange-300 text-orange-400'>
                an Infinite Scroll feature
              </span>
              .
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center md:mx-28 mx-mdplus'>
      <ShootingStars />
      <div className=' text-left'>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className='border text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40'
        >
          Experience
        </motion.div>
      </div>
      <div className='w-full'>
        <Timeline data={data} />
      </div>
      <hr />
      {/* Education */}
      <Education />
    </div>
  );
}

export default Experience;
