import React from "react";
import { FloatingDock } from "@/components/acerternity-ui/FloatingDock";
import {
  IconBrandDatabricks,
  IconBriefcase,
  IconHammer,
  IconHome,
  IconUserCircle,
} from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUserCircle className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/about",
    },

    {
      title: "Experience",
      icon: (
        <IconBriefcase className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/experience",
    },
    {
      title: "Skills",
      icon: (
        <IconHammer className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/skills",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandDatabricks className='h-full w-full text-neutral-600 dark:text-neutral-300' />
      ),
      href: "/projects",
    },
  ];
  return (
    <div className='flex fixed bottom-0 -translate-x-1/2 left-1/2  my-4 z-50'>
      <FloatingDock
        items={links}
      />
    </div>
  );
}
