import React from "react";
import * as motion from "motion/react-client";

import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";
import Image from "next/image";
import Tooltip from "@/components/Tooltip";
import skillIcons from "@/lib/skillImages";

function Skills() {
  return (
    <div className=" mx-16 md:mx-34 min-h-screen flex flex-col items-center justify-center gap-8 md:gap-8 xl:gap-12 px-2 py-8 bg-transparent mb-10 md:mb-20">
      <ShootingStars />
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="border mb-8 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40"
      >
        Skills
      </motion.h1>
      <div className=" w-full ">
        <div>
          <h1 className="font-semibold text-xl mb-4">Programming Languages</h1>
          <div className="flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2">
            <Tooltip content="JavaScript">
              <Image
                src={skillIcons.javascript}
                width={44}
                height={44}
                alt="postgresql-icon"
                className="rounded border "
              />
            </Tooltip>
            <Tooltip content="Python">
              <Image
                src={skillIcons.python}
                width={44}
                height={44}
                alt="python-icon"
                className="rounded border p-0.5"
              />
            </Tooltip>
            <Tooltip content="C++">
              <Image
                src={skillIcons.cpp}
                width={44}
                height={44}
                alt="cpp-icon"
                className="rounded border p-0.5"
              />
            </Tooltip>
            <Tooltip content="Java">
              <Image
                src={skillIcons.java}
                width={44}
                height={44}
                alt="java-icon"
                className="rounded border p-0.5"
              />
            </Tooltip>
          </div>
          {/* Backend Engineering */}
          <div className="">
            <h1 className="font-semibold text-xl mb-4">Backend Engineering</h1>
            <div className="flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2">
              <Tooltip content="Node.js">
                <Image
                  src={skillIcons.node}
                  width={44}
                  height={44}
                  alt="nodejs-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Express.js">
                <Image
                  src={skillIcons.express}
                  width={44}
                  height={44}
                  alt="express-icon"
                  className="rounded border p-0.5 bg-white"
                />
              </Tooltip>
              <Tooltip content="REST APIs">
                <Image
                  src={skillIcons.rest}
                  width={44}
                  height={44}
                  alt="rest-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="PostgreSQL">
                <Image
                  src={skillIcons.postgresql}
                  width={44}
                  height={44}
                  alt="postgresql-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="MongoDB">
                <Image
                  src={skillIcons.mongodb}
                  width={44}
                  height={44}
                  alt="mongodb-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Drizzle-ORM">
                <Image
                  src={skillIcons.drizzle}
                  width={44}
                  height={44}
                  alt="drizzle-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Redis">
                <Image
                  src={skillIcons.redis}
                  width={44}
                  height={44}
                  alt="redis-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Socket.io">
                <Image
                  src={skillIcons.socketio}
                  width={44}
                  height={44}
                  alt="socketio-icon"
                  className="rounded border p-0.5 bg-white"
                />
              </Tooltip>
              <Tooltip content="Nginx">
                <Image
                  src={skillIcons.nginx}
                  width={44}
                  height={44}
                  alt="nginx-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Postman">
                <Image
                  src={skillIcons.postman}
                  width={44}
                  height={44}
                  alt="postman-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="BurpSuite">
                <Image
                  src={skillIcons.burpsuite}
                  width={44}
                  height={44}
                  alt="burpsuite-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
            </div>
          </div>
          {/* Frontend Engineering */}
          <div>
            <h1 className="font-semibold text-xl mb-4">Frontend Engineering</h1>
            <div className="flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2">
              <Tooltip content="Next.js">
                <Image
                  src={skillIcons.next}
                  width={44}
                  height={44}
                  alt="nextjs-icon"
                  className="rounded border p-0.5 bg-white"
                />
              </Tooltip>
              <Tooltip content="React.js">
                <Image
                  src={skillIcons.react}
                  width={44}
                  height={44}
                  alt="react-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Typescript">
                <Image
                  src={skillIcons.typescript}
                  width={44}
                  height={44}
                  alt="typescript-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="TailwindCSS">
                <Image
                  src={skillIcons.tailwind}
                  width={44}
                  height={44}
                  alt="tailwind-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="RadixUI">
                <Image
                  src={skillIcons.radix}
                  width={44}
                  height={44}
                  alt="radix-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Tanstack Query">
                <Image
                  src={skillIcons.reactQuery}
                  width={44}
                  height={44}
                  alt="reactquery-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Cyprus">
                <Image
                  src={skillIcons.cyprus}
                  width={44}
                  height={44}
                  alt="cyprus-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
            </div>
          </div>
          {/* DevOps Engineering */}
          <div>
            <h1 className="font-semibold text-xl mb-4">DevOps Engineering</h1>
            <div className="flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2">
              <Tooltip content="Linux">
                <Image
                  src={skillIcons.linux}
                  width={44}
                  height={44}
                  alt="linux-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Docker">
                <Image
                  src={skillIcons.docker}
                  width={44}
                  height={44}
                  alt="docker-icon"
                  className="rounded border p-0.5 bg-white"
                />
              </Tooltip>
              <Tooltip content="Kubernetes">
                <Image
                  src={skillIcons.k8s}
                  width={44}
                  height={44}
                  alt="k8s-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="GitHub Actions">
                <Image
                  src={skillIcons.githubactions}
                  width={44}
                  height={44}
                  alt="githubactions-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="AWS">
                <Image
                  src={skillIcons.aws}
                  width={44}
                  height={44}
                  alt="aws-icon"
                  className="rounded border p-0.5 bg-white"
                />
              </Tooltip>
              <Tooltip content="GCP">
                <Image
                  src={skillIcons.gcp}
                  width={44}
                  height={44}
                  alt="gcp-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Terraform">
                <Image
                  src={skillIcons.terraform}
                  width={44}
                  height={44}
                  alt="terraform-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Ansible">
                <Image
                  src={skillIcons.ansible}
                  width={44}
                  height={44}
                  alt="ansible-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Vault">
                <Image
                  src={skillIcons.vault}
                  width={44}
                  height={44}
                  alt="vault-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Raspberry pi">
                <Image
                  src={skillIcons.raspberrypi}
                  width={44}
                  height={44}
                  alt="pi-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>

              <Tooltip content="Grafana">
                <Image
                  src={skillIcons.grafana}
                  width={44}
                  height={44}
                  alt="grafana-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Prometheus">
                <Image
                  src={skillIcons.prometheus}
                  width={44}
                  height={44}
                  alt="prometheus-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="ELK">
                <Image
                  src={skillIcons.elk}
                  width={44}
                  height={44}
                  alt="elk-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Snyk">
                <Image
                  src={skillIcons.snyk}
                  width={44}
                  height={44}
                  alt="snyk-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
              <Tooltip content="Snort">
                <Image
                  src={skillIcons.snort}
                  width={44}
                  height={44}
                  alt="snort-icon"
                  className="rounded border p-0.5"
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
