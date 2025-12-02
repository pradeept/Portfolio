import React from "react";
import * as motion from "motion/react-client";

import { ShootingStars } from "@/components/acerternity-ui/ShootingStars";
import Image from "next/image";
import react from "@/../public/skills/react.png";
import next from "@/../public/skills/nextjs.png";
import Tooltip from "@/components/Tooltip";
import tailwind from "@/../public/skills/tailwind.png";
import cyprus from "@/../public/skills/cyprus.png";
import reactQuery from "@/../public/skills/tanstackquery.png";
import socketio from "@/../public/skills/socketio.png";
import javascript from "@/../public/skills/javascript.png";
import python from "@/../public/skills/python.png";
import cpp from "@/../public/skills/cpp.png";
import java from "@/../public/skills/java.png";
import node from "@/../public/skills/node.png";
import express from "@/../public/skills/express.png";
import rest from "@/../public/skills/rest.png";
import postgresql from "@/../public/skills/postgresql.png";
import mongodb from "@/../public/skills/mongodb.png";
import drizzle from "@/../public/skills/drizzle.png";
import postman from "@/../public/skills/postman.png";
import burpsuite from "@/../public/skills/burpsuite.png";
import redis from "@/../public/skills/redis.png";
import typescript from "@/../public/skills/typescript.png";
import radix from "@/../public/skills/radix.png";
// import poetry from "@/../public/skills/poetry.png";
import linux from "@/../public/skills/tux.png";
import elk from "@/../public/skills/elk.png";
import docker from "@/../public/skills/docker.png";
import k8s from "@/../public/skills/k8s.png";
import githubactions from "@/../public/skills/githubactions.png";
import grafana from "@/../public/skills/grafana.png";
import prometheus from "@/../public/skills/prometheus.png";
import snyk from "@/../public/skills/snyk.png";
import nginx from "@/../public/skills/nginx.png";
import aws from "@/../public/skills/aws.png";
import gcp from "@/../public/skills/gcp.png";
import raspberrypi from "@/../public/skills/rasberrypi.png";
import terraform from "@/../public/skills/terraform.png";
import ansible from "@/../public/skills/ansible.png";
import vault from "@/../public/skills/vault.png";
import snort from "@/../public/skills/snort.png";


function Skills() {
  return (
    <div className=' mx-16 md:mx-34 min-h-screen flex flex-col items-center justify-center gap-8 md:gap-8 xl:gap-12 px-2 py-8 bg-transparent mb-10 md:mb-20'>
      <ShootingStars />
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className='border mb-8 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/40 to-black dark:from-white/85 dark:to-gray-50/40'
      >
        Skills
      </motion.h1>
      <div className=' w-full '>
        <div>
          <h1 className='font-semibold text-xl mb-4'>Programming Languages</h1>
          <div className='flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2'>
            <Tooltip content='JavaScript'>
              <Image
                src={javascript}
                width={44}
                height={44}
                alt='postgresql-icon'
                className='rounded border '
              />
            </Tooltip>
            <Tooltip content='Python'>
              <Image
                src={python}
                width={44}
                height={44}
                alt='python-icon'
                className='rounded border p-0.5'
              />
            </Tooltip>
            <Tooltip content='C++'>
              <Image
                src={cpp}
                width={44}
                height={44}
                alt='cpp-icon'
                className='rounded border p-0.5'
              />
            </Tooltip>
            <Tooltip content='Java'>
              <Image
                src={java}
                width={44}
                height={44}
                alt='java-icon'
                className='rounded border p-0.5'
              />
            </Tooltip>
          </div>
          {/* Backend Engineering */}
          <div className=''>
            <h1 className='font-semibold text-xl mb-4'>Backend Engineering</h1>
            <div className='flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2'>
              <Tooltip content='Node.js'>
                <Image
                  src={node}
                  width={44}
                  height={44}
                  alt='nodejs-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Express.js'>
                <Image
                  src={express}
                  width={44}
                  height={44}
                  alt='express-icon'
                  className='rounded border p-0.5 bg-white'
                />
              </Tooltip>
              <Tooltip content='REST APIs'>
                <Image
                  src={rest}
                  width={44}
                  height={44}
                  alt='rest-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='PostgreSQL'>
                <Image
                  src={postgresql}
                  width={44}
                  height={44}
                  alt='postgresql-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='MongoDB'>
                <Image
                  src={mongodb}
                  width={44}
                  height={44}
                  alt='mongodb-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Drizzle-ORM'>
                <Image
                  src={drizzle}
                  width={44}
                  height={44}
                  alt='drizzle-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Redis'>
                <Image
                  src={redis}
                  width={44}
                  height={44}
                  alt='redis-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Socket.io'>
                <Image
                  src={socketio}
                  width={44}
                  height={44}
                  alt='socketio-icon'
                  className='rounded border p-0.5 bg-white'
                />
              </Tooltip>
              <Tooltip content='Nginx'>
                <Image
                  src={nginx}
                  width={44}
                  height={44}
                  alt='nginx-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Postman'>
                <Image
                  src={postman}
                  width={44}
                  height={44}
                  alt='postman-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='BurpSuite'>
                <Image
                  src={burpsuite}
                  width={44}
                  height={44}
                  alt='burpsuite-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
            </div>
          </div>
          {/* Frontend Engineering */}
          <div>
            <h1 className='font-semibold text-xl mb-4'>Frontend Engineering</h1>
            <div className='flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2'>
              <Tooltip content='Next.js'>
                <Image
                  src={next}
                  width={44}
                  height={44}
                  alt='nextjs-icon'
                  className='rounded border p-0.5 bg-white'
                />
              </Tooltip>
              <Tooltip content='React.js'>
                <Image
                  src={react}
                  width={44}
                  height={44}
                  alt='react-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Typescript'>
                <Image
                  src={typescript}
                  width={44}
                  height={44}
                  alt='typescript-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='TailwindCSS'>
                <Image
                  src={tailwind}
                  width={44}
                  height={44}
                  alt='tailwind-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='RadixUI'>
                <Image
                  src={radix}
                  width={44}
                  height={44}
                  alt='radix-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Tanstack Query'>
                <Image
                  src={reactQuery}
                  width={44}
                  height={44}
                  alt='reactquery-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Cyprus'>
                <Image
                  src={cyprus}
                  width={44}
                  height={44}
                  alt='cyprus-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
            </div>
          </div>
          {/* DevSecOps Engineering */}
          <div>
            <h1 className='font-semibold text-xl mb-4'>Frontend Engineering</h1>
            <div className='flex gap-4 flex-wrap items-center justify-center p-4 border rounded my-2'>
              <Tooltip content='Linux'>
                <Image
                  src={linux}
                  width={44}
                  height={44}
                  alt='linux-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Docker'>
                <Image
                  src={docker}
                  width={44}
                  height={44}
                  alt='docker-icon'
                  className='rounded border p-0.5 bg-white'
                />
              </Tooltip>
              <Tooltip content='Kubernetes'>
                <Image
                  src={k8s}
                  width={44}
                  height={44}
                  alt='k8s-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='GitHub Actions'>
                <Image
                  src={githubactions}
                  width={44}
                  height={44}
                  alt='githubactions-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='AWS'>
                <Image
                  src={aws}
                  width={44}
                  height={44}
                  alt='aws-icon'
                  className='rounded border p-0.5 bg-white'
                />
              </Tooltip>
              <Tooltip content='GCP'>
                <Image
                  src={gcp}
                  width={44}
                  height={44}
                  alt='gcp-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Terraform'>
                <Image
                  src={terraform}
                  width={44}
                  height={44}
                  alt='terraform-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Ansible'>
                <Image
                  src={ansible}
                  width={44}
                  height={44}
                  alt='ansible-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Vault'>
                <Image
                  src={vault}
                  width={44}
                  height={44}
                  alt='vault-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Raspberry pi'>
                <Image
                  src={raspberrypi}
                  width={44}
                  height={44}
                  alt='pi-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>

              <Tooltip content='Grafana'>
                <Image
                  src={grafana}
                  width={44}
                  height={44}
                  alt='grafana-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Prometheus'>
                <Image
                  src={prometheus}
                  width={44}
                  height={44}
                  alt='prometheus-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='ELK'>
                <Image
                  src={elk}
                  width={44}
                  height={44}
                  alt='elk-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Snyk'>
                <Image
                  src={snyk}
                  width={44}
                  height={44}
                  alt='snyk-icon'
                  className='rounded border p-0.5'
                />
              </Tooltip>
              <Tooltip content='Snort'>
                <Image
                  src={snort}
                  width={44}
                  height={44}
                  alt='snort-icon'
                  className='rounded border p-0.5'
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
