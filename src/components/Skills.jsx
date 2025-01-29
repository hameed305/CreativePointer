import React from "react";
import Image from "next/image";
import Link from "next/link";

const Skill = () => {
  return (
    <div className="dark:text-white min-h-dvh flex items-center justify-center flex-wrap p-4">
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-red_glow max-sm:w-full max-sm:m-2"
      >
        <h1>95%</h1>
        <Image src="/img/html.png" alt="img" width={80} height={80} />
        <h1>HTML</h1>
      </Link>

      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-blue_glow max-sm:w-full max-sm:m-2"
      >
        <h1>98%</h1>
        <Image src="/img/css.png" alt="img" width={80} height={80} />
        <h1>CSS</h1>
      </Link>

      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-yellow_glow max-sm:w-full max-sm:m-2"
      >
        <h1>80%</h1>
        <Image src="/img/js.png" alt="img" width={80} height={80} />
        <h1>JAVASCRIPT</h1>
      </Link>

      <Link
        href="https://nodejs.org/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-green_glow max-sm:w-full max-sm:m-2"
      >
        <h1>75%</h1>
        <Image src="/img/nodejs.png" alt="img" width={80} height={80} />
        <h1>NODEJS</h1>
      </Link>

      <Link
        href="https://www.mongodb.com/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-green_glow max-sm:w-full max-sm:m-2"
      >
        <h1>90%</h1>
        <Image src="/img/mongodb.png" alt="img" width={80} height={80} />
        <h1>MONGODB</h1>
      </Link>

      <Link
        href="https://ejs.co/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-yellow_glow max-sm:w-full max-sm:m-2"
      >
        <h1>85%</h1>
        <Image src="/img/ejs.png" alt="img" width={80} height={80} />
        <h1>EJS</h1>
      </Link>

      <Link
        href="https://tailwindcss.com/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-sky_glow max-sm:w-full max-sm:m-2"
      >
        <h1>87%</h1>
        <Image src="/img/tailwindcss.png" alt="img" width={80} height={80} />
        <h1>TAILWINDCSS</h1>
      </Link>

      <Link
        href="https://react.dev/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-sky_glow max-sm:w-full max-sm:m-2"
      >
        <h1>85%</h1>
        <Image src="/img/reactjs.png" alt="img" width={80} height={80} />
        <h1>REACT JS</h1>
      </Link>

      <Link
        href="https://nextjs.org/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-black_glow dark:hover:shadow-white_glow max-sm:w-full max-sm:m-2"
      >
        <h1>90%</h1>
        <Image src="/img/nextjs.png" alt="img" width={80} height={80} />
        <h1>NEXT JS</h1>
      </Link>

      <Link
        href="https://www.php.net/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-blue_glow max-sm:w-full max-sm:m-2"
      >
        <h1>85%</h1>
        <Image src="/img/php.png" alt="img" width={80} height={80} />
        <h1>PHP</h1>
      </Link>

      <Link
        href="https://www.adobe.com/products/illustrator.html"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-red_glow max-sm:w-full max-sm:m-2"
      >
        <h1>97%</h1>
        <Image src="/img/illustrator.png" alt="img" width={80} height={80} />
        <h1>Illustrator</h1>
      </Link>

      <Link
        href="https://www.figma.com/"
        className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all hover:shadow-red_glow max-sm:w-full max-sm:m-2"
      >
        <h1>80%</h1>
        <Image src="/img/figma.png" alt="img" width={80} height={80} />
        <h1>FIGMA</h1>
      </Link>
    </div>
  );
};

export default Skill;
