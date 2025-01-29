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
            <h1 className="dark:text-[var(--them-color)] title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am Hameed jan <br />
              <span className="text-xl text-[var(--them-color)]">
                a web developer and logo designer
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a passionate Web Developer with expertise in both frontend and
              backend development
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href=""
                className="px-16 bg-white bg-opacity-70 py-3 text-center text-xl dark:bg-[var(--them-color)]"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="w-[300px] md:w-[400px]">
            <Image
              src="/img/profile.jpg"
              width={300}
              height={300}
              alt="img"
              className="rounded-xl"
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            mollitia vel asperiores, tenetur ratione ipsa deserunt eaque?
            Quaerat suscipit repellat quam ipsum tenetur quis aspernatur hic
            illo molestias, rerum unde. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Error mollitia vel asperiores, tenetur ratione
            ipsa deserunt eaque? Quaerat suscipit repellat quam ipsum tenetur
            quis aspernatur hic illo molestias, rerum unde. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Error mollitia vel
            asperiores, tenetur ratione ipsa deserunt eaque? Quaerat suscipit
            repellat quam ipsum tenetur quis aspernatur hic illo molestias,
            rerum unde.
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
          <span>ABOUT NaeemDevZone.COM</span>
          <span>{expandicon_2 ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {expand_2 && (
          <div className="bg-white bg-opacity-30 rounded-lg p-4 w-full dark:bg-slate-900">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            mollitia vel asperiores, tenetur ratione ipsa deserunt eaque?
            Quaerat suscipit repellat quam ipsum tenetur quis aspernatur hic
            illo molestias, rerum unde. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Error mollitia vel asperiores, tenetur ratione
            ipsa deserunt eaque? Quaerat suscipit repellat quam ipsum tenetur
            quis aspernatur hic illo molestias, rerum unde. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Error mollitia vel
            asperiores, tenetur ratione ipsa deserunt eaque? Quaerat suscipit
            repellat quam ipsum tenetur quis aspernatur hic illo molestias,
            rerum unde.
          </div>
        )}
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Computer skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              I have completed and learnt all the following computer softwares
              successfully
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="size-[80px] object-cover object-center flex-shrink-0 mr-4"
                  src="/img/adobe-photoshop.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Photoshop
                  </h2>
                  <p className="text-[var(--them-color)]">85%</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="https://dummyimage.com/94x94"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="https://dummyimage.com/98x98"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="https://dummyimage.com/100x90"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p className="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="https://dummyimage.com/104x94"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Alper Kamu
                  </h2>
                  <p className="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="https://dummyimage.com/108x98"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Rodrigo Monchi
                  </h2>
                  <p className="text-gray-500">Product Manager</p>
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
