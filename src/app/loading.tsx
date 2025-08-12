import Loader from "@/components/acerternity-ui/loader";
import React from "react";

function Loading() {
  return (
    <div className='h-screen w-screen dark:bg-black bg-white  flex justify-center items-center'>
      <Loader />
    </div>
  );
}

export default Loading;
