import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-white py-6 bg-opacity-50">
        <h1 className="text-4xl font-bold text-center">My Portfolio</h1>
      </header>
      <main className="flex-grow container mx-auto p-6  bg-opacity-50">
        <section className="mb-12  bg-opacity-50">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Hello! I'm a passionate developer with experience in building web
            applications using modern technologies.
          </p>
        </section>
        <section className="mb-12  bg-opacity-50">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105  bg-opacity-50">
              <Image src="/project1.jpg" alt="Project 1" width={500} height={300} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Project 1</h3>
              <p className="text-gray-700 dark:text-gray-300">Description of project 1.</p>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105  bg-opacity-50">
              <Image src="/project2.jpg" alt="Project 2" width={500} height={300} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Project 2</h3>
              <p className="text-gray-700 dark:text-gray-300">Description of project 2.</p>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105  bg-opacity-50">
              <Image src="/project3.jpg" alt="Project 3" width={500} height={300} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Project 3</h3>
              <p className="text-gray-700 dark:text-gray-300">Description of project 3.</p>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
