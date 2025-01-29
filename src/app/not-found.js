import React from "react";
import Image from "next/image";
import Link from "next/link";

const Not_found = () => {
  return (
    <div className="flex items-center justify-center flex-wrap w-full min-h-dvh p-4">
      <div className="flex items-center justify-center gap-4 flex-wrap mb-20 max-sm:flex-col max-sm:text-center max-sm:gap-0">
        <Image
          src="/img/404.png"
          width={200}
          height={200}
          alt="404-not-found"
        />

        <div className="h-60 p-1 bg-gradient-to-t from-transparent via-slate-200 to-transparent rounded-full max-sm:rotate-90"></div>

        <div className="flex flex-col gap-1  min-h-[200px] justify-center max-sm:items-center">
          <h1 className="text-3xl text-violet-600">404</h1>
          <h2 className="text-2xl">This page is not found</h2>
          <p className="text-slate-500">
            Your desire page is not available this time
          </p>
          <Link
            href="/"
            className="p-2 mt-4 text-center bg-gradient-to-r from-transparent via-slate-200 to-transparent w-40 rounded-full hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white dark:text-black"
          >
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Not_found;
