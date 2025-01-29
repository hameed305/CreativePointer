import React from "react";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <section className="p-8 w-full min-h-dvh flex items-center justify-around gap-4 flex-wrap">
      <div className="service_card hover:border-white hover:border-2 dark:border-opacity-20 w-[330px] h-[70vh] rounded-lg bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-50 flex items-center justify-center flex-col hover:bg-gradient-to-t hover:from-slate-400 to-transparent dark:hover:from-slate-600 max-lg:w-full max-lg:h-auto max-lg:mb-8">
        <Image
          src="/img/webdevelopment.gif"
          className="max-lg:w-[150px] max-lg:h-[150px]"
          alt="img"
          width={200}
          height={200}
        />
        <div className="p-4 flex gap-2 flex-col text-center">
          <h1 className="title-font text-lg font-medium text-[var(--them-color)] dark:text-[var(--them-color-dark)]">
            WEB DEVELOPMENT
          </h1>
          <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
            🌐 Building responsive and dynamic websites for a modern online presence.
          </p>
          <Link
            href=""
            className="text-center hover:bg-[var(--them-color)] hover:text-white bg-white bg-opacity-80 dark:bg-[var(--them-color)] dark:bg-opacity-80 p-2 rounded-sm"
          >
            Explore Projects
          </Link>
        </div>
      </div>

      <div className="service_card hover:border-white hover:border-2 dark:border-opacity-20 w-[330px] h-[70vh] rounded-lg bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-50 flex items-center justify-center flex-col hover:bg-gradient-to-t hover:from-slate-400 to-transparent dark:hover:from-slate-600 max-lg:w-full max-lg:h-auto max-lg:mb-8">
        <Image
          src="/img/webdesigning.gif"
          className="max-lg:w-[150px] max-lg:h-[150px]"
          alt="img"
          width={200}
          height={200}
        />
        <div className="p-4 flex gap-2 flex-col text-center">
          <h1 className="title-font text-lg font-medium text-[var(--them-color)] dark:text-[var(--them-color-dark)]">
            WEB DESIGNING
          </h1>
          <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
            🎨 Crafting visually appealing and user-friendly websites.
          </p>
          <Link
            href=""
            className="text-center hover:bg-[var(--them-color)] hover:text-white bg-white bg-opacity-80 dark:bg-[var(--them-color)] dark:bg-opacity-80 p-2 rounded-sm"
          >
            Explore Projects
          </Link>
        </div>
      </div>

      <div className="service_card hover:border-white hover:border-2 dark:border-opacity-20 w-[330px] h-[70vh] rounded-lg bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-50 flex items-center justify-center flex-col hover:bg-gradient-to-t hover:from-slate-400 to-transparent dark:hover:from-slate-600 max-lg:w-full max-lg:h-auto">
        <Image
          src="/img/logodesigning.gif"
          className="max-lg:w-[150px] max-lg:h-[150px]"
          alt="img"
          width={200}
          height={200}
        />
        <div className="p-4 flex gap-2 flex-col text-center">
          <h1 className="title-font text-lg font-medium text-[var(--them-color)] dark:text-[var(--them-color-dark)]">
            LOGO DESIGNING
          </h1>
          <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
            ✨ Creating unique and memorable logos for your brand.
          </p>
          <Link
            href=""
            className="text-center hover:bg-[var(--them-color)] hover:text-white bg-white bg-opacity-80 dark:bg-[var(--them-color)] dark:bg-opacity-80 p-2 rounded-sm"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
