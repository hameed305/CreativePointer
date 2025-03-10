"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import { BsArrowRightCircleFill, BsDribbble } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="font-bold tracking-[0.2vw] p-4 min-h-[90dvh] flex items-center justify-around flex-wrap mx-auto">
      <div className="home_text px-4 flex flex-col justify-start gap-4 flex-1 max-xl:w-[400px] max-lg:w-full max-lg:items-center max-lg:justify-center">
        <h1 className="text-6xl italic w-[100%] text-transparent font-bold bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500 max-xl:text-5xl max-lg:flex-col max-lg:text-center">
          WELCOME
        </h1>
        <h3 className="text-3xl dark:text-slate-300 max-xl:text-2xl max-lg:text-center">
          <TypeAnimation
            sequence={[
              "TO Creative Pointer Studio",
              3000,
              "The best stylish web design creativity",
              3000,
              "Empowering brands through thoughtful logos",
              3000,
              "The zone of modern responsive websites",
              3000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "0.8em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h3>
        <p className="font-normal text-slate-600 dark:text-[var(--them-color)] max-lg:text-center">
          Crafting iconic logos that tell your brand’s story. I transform ideas
          into memorable visual identities
        </p>
        <div className="flex gap-8 items-center flex-wrap">
          <Link
            href="/portfolio"
            className="hover:shadow-lg text-[15px] relative bg-white text-black py-3 px-4 flex items-center justify-center gap-4 rounded-full w-[170px] first_anchor bg-opacity-50 dark:bg-opacity-100 dark:bg-gradient-to-r from-violet-500 to-orange-500 dark:text-white max-xl:w-[180px] font-medium"
          >
            PORTPOLIO
            <span className="hidden animate-ping">
              <BsArrowRightCircleFill />
            </span>
          </Link>

          <Link
            href="https://www.dribbble.com"
            className="text-white flex gap-2 items-center justify-center font-medium"
          >
            <span className="text-[var(--them-color)] text-2xl hover:animate-bounce">
              <BsDribbble />
            </span>
            Dribbble
          </Link>
        </div>
      </div>

      <div className="hero_img_box w-[500px] h-[300px] relative max-lg:w-full max-md:flex max-md:h-[200px] max-md:items-center max-md:justify-center max-md:gap-3 max-sm:hidden">
        <span className="size-[40px] top-0 z-50 rounded-full absolute animate-pulse left-60 blur-md bg-gradient-to-r from-indigo-500 to-pink-500 max-lg:left-7 max-lg:top-40"></span>
        <span className="size-[80px] top-60 z-50 rounded-full absolute animate-pulse left-[80%] blur-md bg-gradient-to-r from-orange-500 to-pink-300 max-lg:top-40 max-lg:-z-50"></span>
        <span className="size-[60px] top-60 z-50 rounded-full absolute animate-pulse left-10 blur-md bg-gradient-to-r from-blue-500 to-voilet-500 max-lg:top-11 max-lg:left-60"></span>

        <div className="-z-10 top-10 right-10 -rotate-45 img_box flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm size-[250px] rounded-2xl absolute shadow-lg max-lg:size-[200px] max-md:static max-md:size-[130px]">
          <Image
            src="/img/hero_logo_1.png"
            alt="img"
            width={220}
            height={220}
            className="max-lg:size-[180px] max-md:size-[100px]"
          />
        </div>

        <div className="-rotate-6 top-24 -z-30 left-20 img_box flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm w-[230px] h-[230px] rounded-2xl absolute shadow-lg max-lg:size-[150px] max-md:static max-md:size-[130px]">
          <Image
            src="/img/hero_logo_2.png"
            alt="img"
            width={150}
            height={150}
            className="max-lg:size-[120px] max-md:size-[100px]"
          />
        </div>

        <div className="rotate-12 top-20 -z-40 right-80 img_box flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm w-[200px] h-[200px] rounded-2xl absolute shadow-lg max-lg:right-64 max-md:static max-md:size-[130px]">
          <Image
            src="/img/hero_logo_3.png"
            alt="img"
            width={150}
            height={150}
            className=" max-md:size-[100px]"
          />
        </div>

        <div className="rotate-45 top-0 -z-50 img_box flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm w-[150px] h-[150px] rounded-2xl absolute shadow-lg max-lg:w-[100px] max-lg:h-[100px] max-md:static max-md:size-[130px]">
          <Image
            src="/img/hero_logo_4.png"
            alt="img"
            width={180}
            height={180}
            className=" max-md:size-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
