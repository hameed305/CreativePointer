"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  BsBook,
  BsHouse,
  BsInfoSquare,
  BsJournalCode,
  BsList,
  BsMoonFill,
  BsPersonFill,
  BsSunFill,
  BsX,
} from "react-icons/bs";

const Header = () => {
  const [menuicon, setmenuicon] = useState(false);
  const mobile_menu = useRef();
  const pathname = usePathname();

  // dark_mode changing them

  const moonBtn = useRef();
  const [modeIcon, setModeIcon] = useState(<BsMoonFill />);

  // Function to toggle between dark and light mode

  function changeTheme() {
    const currentMode = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    const newMode = currentMode === "dark" ? "light" : "dark";

    // Toggle the theme
    document.body.classList.toggle("dark");

    // Update the icon based on the theme
    if (newMode === "dark") {
      setModeIcon(<BsSunFill />);
    } else {
      setModeIcon(<BsMoonFill />);
    }

    // Save the new mode to localStorage
    localStorage.setItem("mode", newMode);
  }

  // Effect to check and apply the stored theme when the component mounts
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      document.body.classList.add("dark");
      setModeIcon(<BsSunFill />);
    } else {
      document.body.classList.remove("dark");
      setModeIcon(<BsMoonFill />);
    }
  }, []); // Run once on mount to check the initial theme

  // mobile menu

  function mobile_header_wrapper() {
    setmenuicon(!menuicon);
    {
      menuicon
        ? (mobile_menu.current.style.display = "none")
        : (mobile_menu.current.style.display = "flex");
    }
  }

  return (
    <header className="sticky top-0 w-full p-1 flex items-center justify-between backdrop-blur-xl border-white border-opacity-50 border-solid border-2 dark:border-opacity-10 bg-white bg-opacity-30 dark:bg-slate-900 dark:bg-opacity-30 dark:text-white rounded-full z-50 max-md:rounded-lg max-md:border-none">
      <div
        className="p-2 bg-white bg-opacity-50 rounded-lg cursor-pointer items-center justify-center text-2xl dark:bg-violet-500 hidden max-md:flex"
        onClick={mobile_header_wrapper}
      >
        {menuicon ? <BsX /> : <BsList />}
      </div>

      <div className="w-[10%] max-md:w-auto">
        <Link
          href="/"
          className="pl-3 flex gap-2 items-center max-md:justify-end"
        >
          <Image src="/icon.svg" width={50} height={50} alt="logo" />
        </Link>
      </div>

      <nav
        className="w-[90%] flex items-center justify-around max-md:h-[80vh] max-md:absolute max-md:w-full max-md:top-12 max-md:left-0 max-md:bg-white max-md:bg-opacity-80 max-md:dark:bg-slate-900 max-md:dark:bg-opacity-85 max-md:rounded-lg max-md:flex-col"
        ref={mobile_menu}
      >
        <ul className="flex items-center justify-center text-xl gap-20 max-md:flex-col max-md:gap-4 flex-1">
          <li className="list-none my-0 mx-[0.5rem] ">
            <Link
              href="/"
              className={`link ${pathname === "/" ? "active" : ""
                } flex items-center justify-center text-[(--black-color)] p-[0.7rem] rounded-sm hover:bg-white hover:bg-opacity-50 dark:hover:bg-violet-800`}
            >
              <BsHouse />
            </Link>
          </li>

          <li className="list-none my-0 mx-[0.5rem]">
            <Link
              href="/about"
              className={`link ${pathname === "/about" ? "active" : ""
                } flex items-center justify-center text-[(--black-color)] p-[0.7rem] rounded-sm  hover:bg-white hover:bg-opacity-50 dark:hover:bg-violet-800 `}
            >
              <BsInfoSquare />
            </Link>
          </li>

          <li className="list-none my-0 mx-[0.5rem]">
            <Link
              href="/portfolio"
              className={`link ${pathname === "/portfolio" ? "active" : ""
                } flex items-center justify-center text-[(--black-color)] p-[0.7rem] rounded-sm  hover:bg-white hover:bg-opacity-50 dark:hover:bg-violet-800 `}
            >
              <BsJournalCode />
            </Link>
          </li>

          <li className="list-none my-0 mx-[0.5rem]">
            <Link
              href="/blog"
              className={`link ${pathname === "/blog" ? "active" : ""
                } flex items-center justify-center text-[(--black-color)] p-[0.7rem] rounded-sm  hover:bg-white hover:bg-opacity-50 dark:hover:bg-violet-800 `}
            >
              <BsBook />
            </Link>
          </li>
        </ul>

        <div className="pr-4 flex items-center justify-end flex-wrap gap-8 max-md:w-full max-md:items-center max-md:justify-center max-md:pr-0 max-md:mt-4">
          <Link
            href="/contact"
            className={`link ${pathname === "/contact" ? "active" : ""
              } flex items-center justify-center text-[(--black-color)] p-[0.7rem] rounded-sm  hover:bg-white hover:bg-opacity-50 dark:hover:bg-violet-800 `}
          >
            <BsPersonFill />
          </Link>

          <span
            ref={moonBtn}
            onClick={changeTheme}
            className="cursor-pointer flex items-center justify-center text-[(--black-color)] p-[0.7rem]  hover:bg-white hover:bg-opacity-50 rounded-sm dark:hover:bg-violet-800  "
          >
            {modeIcon}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
