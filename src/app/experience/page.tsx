import { Timeline } from "@/components/acerternity-ui/Timeline";
import React from "react";
import * as motion from "motion/react-client";
import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";
function Experience() {
  const data = [
    {
      title: "May 2024 - Dec 2024",
      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              DevOps Engineer
            </h1>
            <a
              className='text-md md:text-xl dark:text-blue-200 text-blue-800 hover:underline'
              href='https://sirpi.io'
              target='_blank'
            >
              SIRPI Products and Services Pvt. Ltd.
            </a>
          </div>

          <ul className='flex flex-col gap-2 mt-4'>
            <li>
              - Planned and Redistributed Dyno Load in Heroku Which{" "}
              <b>Reduced 30% of the Total Cost</b>.
            </li>
            <li>
              - Setup Observability & Monitoring Using{" "}
              <b>LAMP for 15+ servers, 20+ Deployments</b> Across Different
              Cloud Providers.
            </li>
            <li>
              - Deployed Full-Stack Applications on Kubernetes using{" "}
              <b>Helm charts</b>.
            </li>
            <li>
              - Handled <b>In-House & Cloud Based Kubernetes</b> Clusters and
              It&apos;s Components.
            </li>
            <li>
              - Written <b>Terraform and Ansible scripts</b> to Provision and
              Configure Infrastructure (IaC).
            </li>
            <li>
              - Improved Organization Security by Implementing{" "}
              <b>
                Access Tracking, Least Privilege and Security Best Practices
              </b>
              .
            </li>
            <li>
              <b>- Led the Team</b> of 4 members.{" "}
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
              className='text-md md:text-xl dark:text-blue-200 text-blue-800 hover:underline'
              href='https://sirpi.io'
              target='_blank'
            >
              SIRPI Products and Services Pvt. Ltd.
            </a>
          </div>

          <ul className='flex flex-col gap-2 mt-4'>
            <li>
              - Self Hosted 10+ Open Source Services like{" "}
              <b>NextCloud, Infisical, Supabase, etc</b>.
            </li>
            <li>
              - Improved Physical Network Security by Setting up{" "}
              <b>DMZ, VLAN, Switch and Snort IDS</b>.
            </li>
            <li>
              - Helped in Setting Up an <b>In-House Kubernetes Cluster</b>.
            </li>
            <li>
              - Setup a <b>GPU Server from Scratch</b> for RAG Based Application
              Deployments.
            </li>
            <li>
              - Setup In-house RAG application - <b>Private GPT</b>
            </li>
            <li>
              - Written Scripts to{" "}
              <b>Perform Load-Test on Kubernetes Clusters</b>.
            </li>
            <li>
              - Helped in Writing <b>Kubernetes Manifests for Micro Services</b>
              .
            </li>
            <li>- Handled FinOps and Assets Movement.</li>
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
              className='text-md md:text-xl dark:text-blue-200 text-blue-800 hover:underline'
              href='https://sirpi.io'
              target='_blank'
            >
              SIRPI Products and Services Pvt. Ltd.
            </a>
          </div>

          <ul className='flex flex-col gap-2 mt-4'>
            <li>
              - Worked on <b>SaaS Applications</b>.
            </li>
            <li>
              - Contributed in Documenting and Implementing{" "}
              <b>coding standards</b>.
            </li>
            <li>
              - Refined Multiple <b>Figma Designs</b> with Modern Design
              Language.
            </li>
            <li>- Created POCs using NextJS and Angular. </li>
            <li>
              - Optimized Rendering Large Data by Implementing{" "}
              <b>Infinite Scrolling</b>.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  // Education
  const eduData = [
    {
      title: "Dec 2021 - Sep 2023",

      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              Master of Computer Applications
            </h1>

            <p className='text-md md:text-xl dark:text-blue-200 text-blue-800 hover:underline'>
              Dayanand Sagar College of Engineering, KS Layout, Bangalore
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2018 - Sep 2021",

      content: (
        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl md:text-4xl dark:text-yellow-300 text-yellow-700'>
              BCA
            </h1>

            <p className='text-md md:text-xl dark:text-blue-200 text-blue-800 hover:underline'>
              Basaveshwar Science College, Bagalkot
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className='flex flex-col justify-center items-center w-full'>
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
    </div>
  );
}

export default Experience;
