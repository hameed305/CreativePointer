import React from "react";
import Image from "next/image";
import skills from "@/Data/Skills.json";
const Skill = () => {
  return (
    <div className="dark:text-white min-h-dvh flex items-center justify-center flex-wrap p-4">
      {
        skills.map((skill, index) => {
          return (
            <div
              style={{ hover: skill.shadow }}
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="bg-white p-2 bg-opacity-50 hover:animate-pulse size-[150px] rounded-lg flex items-center justify-center flex-col text-xl m-4 dark:bg-slate-900 hover:scale-105 hover:transition-all max-sm:w-full max-sm:m-2 cursor-pointer hover:shadow-violet-500 hover:shadow-sm dark:hover:shadow-white" key={index}
            >
              <h1>{skill.percentage}</h1>
              <Image src={skill.img} alt="img" width={80} height={80} />
              <h1>{skill.title}</h1>
            </div>
          )
        })
      }
    </div>
  );
};

export default Skill;
