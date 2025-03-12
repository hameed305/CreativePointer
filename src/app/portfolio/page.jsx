import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";
const PortfolioPage = () => {
  const project = [
    {
      img_url: "/img/pro_1.png",
      content: "A best Stylish form design for web designing...",
      title: "3D FORM DESIGN",
    },
    {
      img_url: "/img/pro_2.png",
      content: "New Legendary Gaming scout logo design for gamerz...",
      title: "CUSTOM GAMING LOGO DESIGN",
    },
    {
      img_url: "/img/pro_3.png",
      content: "Monkey music logo design specially made for gamerz and music lovers...",
      title: "MONKEY MUSIC LOGO DESIGN",
    },
  ]
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-white py-6 bg-opacity-50">
        <h1 className="text-4xl font-medium text-center">My Portfolio</h1>
      </header>
      <main className="flex-grow container mx-auto p-6  bg-opacity-50">
        <section className="mb-12  bg-opacity-50">
          <h2 className="text-3xl font-normal mb-4 text-gray-900 dark:text-gray-100">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-opacity-50">
            {
              project.map((pro, index) => {
                return (
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105  bg-opacity-50" key={index}>
                    <Image src={pro.img_url} alt={pro.title} width={500} height={300} className="rounded-lg mb-4" />
                    <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">{pro.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{pro.content}</p>
                    <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                      View Project
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
