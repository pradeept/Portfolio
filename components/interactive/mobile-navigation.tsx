"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { List } from "@phosphor-icons/react/dist/csr/List";
import { X } from "@phosphor-icons/react/dist/csr/X";
import { DoodleArrow } from "@/components/ui/doodles";
import { navItems } from "@/lib/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="mobile-menu-trigger" aria-label="Open navigation">
        <List size={25} weight="bold" aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="menu-overlay" />
        <Dialog.Content className="menu-paper" aria-describedby={undefined}>
          <div className="menu-heading">
            <Dialog.Title>Pick a tab.</Dialog.Title>
            <Dialog.Close aria-label="Close navigation"><X size={24} aria-hidden="true" /></Dialog.Close>
          </div>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}{"arrow" in item ? <> <DoodleArrow /></> : null}
              </a>
            ))}
          </nav>
          <span className="menu-scribble">follow the curiosity <DoodleArrow /></span>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
