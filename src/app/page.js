import React from "react";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Showcase from "@/components/showcase";
import Skill from "@/components/Skills";
import Blog_section from "@/components/Blog_section";

const Home = () => {
  return (
    <>
      <Hero />
      <h1 className="flex items-center justify-start gap-4 text-2xl text-black font-semibold tracking-wide dark:text-white">
        <span className="w-[10px] h-[40px] rounded-lg bg-violet-600"></span>MY
        SERVICES
      </h1>
      <Service />
      <h1 className="flex items-center justify-start gap-4 text-2xl text-black font-semibold tracking-wide dark:text-white">
        <span className="w-[10px] h-[40px] rounded-lg bg-violet-600"></span>
        PORTFOLIO SHOWCASE
      </h1>
      <Showcase />
      <h1 className="flex items-center justify-start gap-4 text-2xl text-black font-semibold tracking-wide dark:text-white">
        <span className="w-[10px] h-[40px] rounded-lg bg-violet-600"></span>MY
        SKILLS
      </h1>
      <Skill />
      <h1 className="flex items-center justify-start gap-4 text-2xl text-black font-semibold tracking-wide dark:text-white">
        <span className="w-[10px] h-[40px] rounded-lg bg-violet-600"></span>
        LATEST BLOGS
      </h1>
      <Blog_section />
    </>
  );
};

export default Home;
