"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsDribbble, BsLinkedin, BsTiktok, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-10 flex-col p-4 dark:bg-slate-800 mt-20">
      <div className="flex justify-between gap-4 flex-wrap w-full p-2 max-lg:flex-col max-lg:items-center">
        <div className="flex gap-4 flex-col items-start justify-start w-[300px] max-lg:w-full max-lg:items-center">
          <div className="flex items-center justify-center gap-4">
            <Image src="/icon.svg" width={50} height={50} alt="logo" />
            <h1 className="text-xl font-bold">Creative Pointer</h1>
          </div>
          <p>
            Please contact us any time for order or have a question
          </p>
          <Link
            href="/contact"
            className="p-3 bg-white bg-opacity-50 rounded-full text-center dark:bg-slate-600"
          >
            Contact us
          </Link>
        </div>

        <div className="flex items-center justify-center gap-10 flex-wrap max-lg:flex-col max-lg:items-center">
          <div className="flex justify-center gap-4 flex-wrap flex-col mx-20 max-lg:mx-0 max-lg:items-center max-lg:w-full max-lg:flex-row">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex justify-center gap-4 flex-wrap flex-col mx-20 max-lg:mx-0 max-lg:items-center max-lg:w-full max-lg:flex-row">
            <Link href="/#services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/privacy_policy">Privacy Policy</Link>
            <Link href="/terms_of_services">Terms of Services</Link>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-700 dark:text-slate-300 bg-opacity-70 rounded-lg w-full p-4 flex items-center justify-between max-lg:flex-col max-lg:items-center max-lg:gap-4">
        <p className="text-center">
          All Rights Reserved | 2024 | www.mrcode.com
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href=""
            className="rounded-full flex items-center justify-center p-2 bg-white dark:bg-slate-900 dark:text-white text-xl hover:animate-spin hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500"
          >
            <BsDribbble />
          </Link>
          <Link
            href=""
            className="rounded-full flex items-center justify-center p-2 bg-white dark:bg-slate-900 dark:text-white text-xl hover:animate-spin hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500"
          >
            <BsLinkedin />
          </Link>
          <Link
            href=""
            className="rounded-full flex items-center justify-center p-2 bg-white dark:bg-slate-900 dark:text-white text-xl hover:animate-spin hover:bg-black hover:text-white dark:hover:bg-black"
          >
            <BsTiktok />
          </Link>
          <Link
            href=""
            className="rounded-full flex items-center justify-center p-2 bg-white dark:bg-slate-900 dark:text-white text-xl hover:animate-spin hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500"
          >
            <BsInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
