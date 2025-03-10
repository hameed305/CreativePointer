import React from "react";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Showcase from "@/components/showcase";
import Skill from "@/components/Skills";
import Blog_section from "@/components/Blog_section";
import Title from "@/components/Title";
import Url from "@/components/Link";
const Home = () => {
  const Post = [
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Monkey logo design",
      blog_content: "a best logo design the is the sign of best gamerz",
      blog_img: "/img/pro_3.png",
      url: "/blog/first_post",
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content:
        "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_1.png",
      url: "/blog/second_post",
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content:
        "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_2.png",
      url: "/blog/third_post",
    },
  ];
  return (
    <>
      <Hero />
      <Title props="My Services" />
      <Service />
      <Title props="Portfolio Showcase" />
      <Showcase />
      <Url url={"/portfolio"} />
      <Title props="My Skills" />
      <Skill />
      <Title props="Latest Blogs" />
      <section className="flex items-center justify-center gap-10 w-full">
        {Post.map((post, index) => {
          return (
            <Blog_section
              release={post.release}
              img_url={post.blog_img}
              readtime={post.read_time}
              title={post.blog_title}
              content={post.blog_content}
              url={post.url}
              key={index}
            />
          );
        })}
      </section>
      <Url url={"/blog"} />
    </>
  );
};

export default Home;
