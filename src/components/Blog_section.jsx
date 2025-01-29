import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog_section = () => {
  return (
    <section className="text-gray-600 body-font dark:text-gray-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="py-8 px-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-start transform transition-transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-700">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 dark:text-gray-400 pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-700">
                  Jul
                </span>
                <span className="font-medium text-lg text-gray-800 dark:text-gray-200 title-font leading-none">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 dark:text-indigo-400 mb-1">
                  DEVELOPMENT
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Understanding React Hooks
                </h1>
                <p className="leading-relaxed mb-5">
                  Dive deep into the world of React Hooks and learn how to use
                  them effectively in your projects.
                </p>
                <Link
                  href="/blog/react-hooks"
                  className="inline-flex items-center"
                >
                  <Image
                    alt="blog"
                    src="/img/author1.jpg"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-900 dark:text-gray-100">
                      John Doe
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-start transform transition-transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-700">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 dark:text-gray-400 pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-700">
                  Aug
                </span>
                <span className="font-medium text-lg text-gray-800 dark:text-gray-200 title-font leading-none">
                  10
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 dark:text-indigo-400 mb-1">
                  TUTORIAL
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Building a REST API with Node.js
                </h1>
                <p className="leading-relaxed mb-5">
                  Learn how to build a robust REST API using Node.js and
                  Express, with step-by-step instructions.
                </p>
                <Link
                  href="/blog/nodejs-api"
                  className="inline-flex items-center"
                >
                  <Image
                    alt="blog"
                    src="/img/author2.jpg"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-900 dark:text-gray-100">
                      Jane Smith
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-start transform transition-transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-gray-700">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 dark:text-gray-400 pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-700">
                  Sep
                </span>
                <span className="font-medium text-lg text-gray-800 dark:text-gray-200 title-font leading-none">
                  05
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 dark:text-indigo-400 mb-1">
                  TIPS & TRICKS
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Optimizing Web Performance
                </h1>
                <p className="leading-relaxed mb-5">
                  Discover the best practices for optimizing the performance of
                  your web applications.
                </p>
                <Link
                  href="/blog/web-performance"
                  className="inline-flex items-center"
                >
                  <Image
                    alt="blog"
                    src="/img/author3.jpg"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-900 dark:text-gray-100">
                      Alex Johnson
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/blog"
          className=" border-transparent border-2 border-solid flex items-center justify-center mx-auto w-40  p-3 bg-white bg-opacity-30 font-semibold rounded-full hover:border-white hover:border-2 hover:border-solid my-3 dark:bg-violet-700 dark:hover:border-opacity-30 dark:text-white"
        >
          EXPLORE ALL
        </Link>
      </div>

    </section>
  );
};

export default Blog_section;
