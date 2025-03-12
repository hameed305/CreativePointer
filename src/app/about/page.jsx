"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const About = () => {
  const [expandicon_1, seticon_1] = useState(false);
  const [expandicon_2, seticon_2] = useState(false);
  const [expand_1, setexpand_1] = useState(false);
  const [expand_2, setexpand_2] = useState(false);

  return (
    <>
      <section className="flex items-center justify-around gap-8 flex-wrap px-4 md:px-20 min-h-[85vh]">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="mb-4 text-6xl font-showgothic w-full text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 max-md:text-5xl">
              HELLO !
            </h1>
            <h1 className="dark:text-[var(--them-color)] title-font sm:text-4xl text-3xl mb-4 font-medium">
              I am Naeem Khan <br />
              <span className="text-xl text-[var(--them-color)]">
                a web developer and logo designer
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              I&apos;m a passionate Web Developer with expertise in both frontend and
              backend development
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/portfolio"
                className="px-16 bg-white bg-opacity-70 py-3 text-center text-xl dark:bg-[var(--them-color)]"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="w-[300px] md:w-[400px]">
            <Image
              src="/img/profile.png"
              width={300}
              height={300}
              alt="img"
              className="rounded-xl w-auto h-auto"
            />
          </div>
        </div>
      </section>

      <div className="p-[0.1vw] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* expandable div _ 1 */}
      <div className="w-full flex items-center justify-center flex-col m-8 mx-auto">
        <div
          className="cursor-pointer bg-white bg-opacity-50 rounded-lg p-4 w-full flex items-center justify-between hover:bg-opacity-80 dark:bg-slate-800 dark:hover:bg-slate-600"
          onClick={() => {
            setexpand_1(!expand_1);
            seticon_1(!expandicon_1);
          }}
        >
          <span>ABOUT ME</span>
          <span>{expandicon_1 ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {expand_1 && (
          <div className="bg-white bg-opacity-30 rounded-lg p-4 w-full dark:bg-slate-900">
            <div className="max-w-4xl mx-auto p-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
                <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">Naeem Khan</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">Web Developer & Graphic Designer</h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  Hello, I&apos;m <strong>Naeem Khan</strong>, a passionate and versatile 22-year-old web developer and graphic designer from Pakistan. With a strong foundation in frontend web development, I specialize in creating dynamic, user-centric websites that are both functional and visually appealing. My expertise extends to backend development using Node.js and Express.js, as well as managing databases with MongoDB.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  Driven by a deep love for technology and design, I enjoy bringing creative ideas to life through clean code and innovative design solutions. Whether working on responsive web layouts, enhancing user experience, or building robust backend systems, I strive to deliver high-quality results that meet both user needs and business goals.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  I am always eager to learn new skills, collaborate with talented teams, and take on challenging projects that push me to grow professionally. Let&apos;s connect and create something amazing together!
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* expandable div _ 2 */}
      <div className="w-full flex items-center justify-center flex-col m-8 mx-auto">
        <div
          className="cursor-pointer bg-white bg-opacity-50 rounded-lg p-4 w-full flex items-center justify-between hover:bg-opacity-80 dark:bg-slate-800 dark:hover:bg-slate-600"
          onClick={() => {
            setexpand_2(!expand_2);
            seticon_2(!expandicon_2);
          }}
        >
          <span>ABOUT CREATIVE POINTER</span>
          <span>{expandicon_2 ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {expand_2 && (
          <div className="bg-white bg-opacity-30 rounded-lg p-4 w-full dark:bg-slate-900">
            <div className="max-w-4xl mx-auto p-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
                <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">Creative Pointer</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">My Personal Portfolio & Media Platform</h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  Welcome to <strong>Creative Pointer</strong>, my personal portfolio and platform where I showcase my web development projects, design works, and lessons. As a passionate web developer and graphic designer, Creative Pointer is where I document my journey, share my knowledge, and provide resources for fellow creators.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  On this platform, you&apos;ll find a variety of projects that highlight my skills in frontend development, backend programming with Node.js and Express.js, and working with databases like MongoDB. I also share educational content, including tutorials and lessons to help others learn and grow in the field of web development and design.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  In addition to my website, you can connect with me across various social media platforms, including my <a href="https://www.youtube.com/channel/your_channel" className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank">YouTube channel</a>, where I share coding tutorials and design tips, and my <a href="https://www.instagram.com/your_instagram" className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank">Instagram</a>, where I post design inspiration and behind-the-scenes content. I&apos;m also active on other platforms, always ready to engage with the creative community.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                  Whether you&apos;re here to explore my work, learn something new, or collaborate on exciting projects, I&apos;m thrilled to have you! Let&apos;s connect and create something amazing together.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              Computer skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl dark:text-gray-300">
              I have completed and learnt all the following computer softwares
              successfully
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105">
                <Image
                  width={16}
                  height={16}
                  alt="Photoshop"
                  className="block w-auto h-auto object-cover object-center mb-4 mx-auto"
                  src="/img/adobe-photoshop.png"
                />
                <div className="text-center">
                  <h2 className="text-gray-900 dark:text-white title-font font-medium">
                    Photoshop
                  </h2>
                  <p className="text-[var(--them-color)]">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105">
                <Image
                  width={16}
                  height={16}
                  alt="Illustrator"
                  className="block w-auto h-auto object-cover object-center mb-4 mx-auto"
                  src="/img/adobe-illustrator.png"
                />
                <div className="text-center">
                  <h2 className="text-gray-900 dark:text-white title-font font-medium">
                    Illustrator
                  </h2>
                  <p className="text-[var(--them-color)]">85%</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105">
                <Image
                  width={16}
                  height={16}
                  alt="Video Editing"
                  className="block w-auto h-auto object-cover object-center mb-4 mx-auto"
                  src="/img/video-editing.png"
                />
                <Image
                  width={16}
                  height={16}
                  alt="Video Editing"
                  className="block w-auto h-auto object-cover object-center mb-4 mx-auto"
                  src="/img/video-editing.png"
                />
                <div className="text-center">
                  <h2 className="text-gray-900 dark:text-white title-font font-medium">
                    Video Editing
                  </h2>
                  <p className="text-[var(--them-color)]">50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
