import React from "react";
import { FloatingDock } from "@/components/acerternity-ui/FloatingDock";
import {
  IconAddressBook,
  IconBrandDatabricks,
  IconBriefcase,
  IconHammer,
  IconHome,
} from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        // <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "/",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "/experience",
    },
    {
      title: "Skills",
      icon: (
        <IconHammer className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "/skills",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandDatabricks className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "/skills",
    },
    {
      title: "Contact",
      icon: (
        <IconAddressBook className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "/contact",
    },
  ];
  return (
    <div className='flex fixed bottom-0 md:left-0 right-0 m-4 z-50'>
      <FloatingDock
        // mobileClassName=""
        // desktopClassName=""
        items={links}
      />
    </div>
  );
}
