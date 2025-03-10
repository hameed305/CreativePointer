import React from "react";
import Image from "next/image";
const Skill = () => {
  const skills = [
    {
      percentage: 95 + "%",
      img: "/img/html.png",
      title: "HTML",
      shadow: "shadow-red_glow"
    },
    {
      percentage: 98 + "%",
      img: "/img/css.png",
      title: "CSS",
      shadow: "shadow-blue_glow"
    },
    {
      percentage: 80 + "%",
      img: "/img/js.png",
      title: "JAVASCRIPT",
      shadow: "shadow-yellow_glow"
    },
    {
      percentage: 75 + "%",
      img: "/img/nodejs.png",
      title: "NODEJS",
      shadow: "shadow-green_glow"
    },
    {
      percentage: 90 + "%",
      img: "/img/mongodb.png",
      title: "MONGODB",
      shadow: "shadow-green_glow"
    },
    {
      percentage: 85 + "%",
      img: "/img/ejs.png",
      title: "EJS",
      shadow: "shadow-yellow_glow"
    },
    {
      percentage: 87 + "%",
      img: "/img/tailwindcss.png",
      title: "TAILWINDCSS",
      shadow: "shadow-blue_glow"
    },
    {
      percentage: 85 + "%",
      img: "/img/reactjs.png",
      title: "REACTJS",
      shadow: "shadow-blue_glow"
    },
    {
      percentage: 90 + "%",
      img: "/img/nextjs.png",
      title: "NEXTJS",
      shadow: "shadow-black_glow"
    },
    {
      percentage: 85 + "%",
      img: "/img/php.png",
      title: "PHP",
      shadow: "shadow-blue_glow"
    },
    {
      percentage: 97 + "%",
      img: "/img/illustrator.png",
      title: "ILLUSTRATOR",
      shadow: "shadow-red_glow"
    },
    {
      percentage: 80 + "%",
      img: "/img/figma.png",
      title: "FIGMA",
      shadow: "shadow-blue_glow"
    },
  ]
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
