"use client"
import { IconArrowBack } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

function Back() {
  const router = useRouter()
  return (
    <div className='self-start flex ml-20 rounded p-2 bg-gray-600/60 items-center' onClick={()=>router.back()}>
      Go Back <IconArrowBack />
    </div>
  );
}

export default Back;
