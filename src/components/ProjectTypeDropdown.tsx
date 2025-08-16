"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const PROJECT_TYPES = [
  { label: "Web Apps", value: "web" },
  { label: "DevOps", value: "devops" },
  { label: "Mobile", value: "mobile" },
];

export function ProjectTypeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='min-w-[140px] capitalize flex items-center justify-between gap-2'
        >
          <span>
            {PROJECT_TYPES.find((t) => t.value === value)?.label ||
              "Select Type"}
          </span>
          <ChevronDown className='w-4 h-4 ml-2' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        {PROJECT_TYPES.map((type) => (
          <DropdownMenuItem
            key={type.value}
            onSelect={() => onChange(type.value)}
            className={
              value === type.value
                ? "font-bold bg-blue-100 dark:bg-blue-900/40"
                : ""
            }
          >
            {type.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
