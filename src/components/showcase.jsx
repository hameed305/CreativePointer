import React from "react";
import Image from "next/image";
import Link from "next/link";

const showcase = () => {
  return (
    <>
      <div className="min-h-dvh showcase flex items-center justify-around gap-y-9 gap-x-6 flex-wrap p-4">
        <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20 hover:scale-105 transition-all">
          <Link href="">
            <Image
              src="/img/pro_1.png"
              alt="img"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20  dark:hover:bg-slate-700 hover:scale-105 transition-all">
          <Link href="">
            <Image
              src="/img/pro_2.png"
              alt="img"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20  dark:hover:bg-slate-700 hover:scale-105 transition-all">
          <Link href="">
            <Image
              src="/img/pro_3.png"
              alt="img"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20  dark:hover:bg-slate-700 hover:scale-105 transition-all">
          <Link href="">
            <Image
              src="/img/pro_4.png"
              alt="img"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20  dark:hover:bg-slate-700 hover:scale-105 transition-all">
          <Link href="">
            <Image
              src="/img/pro_5.png"
              alt="img"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20  dark:hover:bg-slate-700 hover:scale-105 transition-all">
          <Link href="">
            <Image
              src="/img/pro_1.png"
              alt="img"
              width={250}
              height={250}
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>

      <Link
        href="/portfolio"
        className=" border-transparent border-2 border-solid flex items-center justify-center mx-auto w-40  p-3 bg-white bg-opacity-30 font-semibold rounded-full hover:border-white hover:border-2 hover:border-solid my-3 dark:bg-violet-700 dark:hover:border-opacity-30 dark:text-white"
      >
        EXPLORE ALL
      </Link>
    </>
  );
};

export default showcase;
