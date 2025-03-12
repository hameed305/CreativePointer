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
      blog_title: "First Blog Title",
      blog_content: "This is the content of the first blog post...",
      blog_img: "/img/pro_3.png",
      url: "/blog/getting-started-react",
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "Second Blog Title",
      blog_content: "This is the content of the second blog post...",
      blog_img: "/img/pro_1.png",
      url: "/blog/css-grid-flexbox",
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "Third Blog Title",
      blog_content: "This is the content of the third blog post...",
      blog_img: "/img/pro_2.png",
      url: "/blog/advanced-javascript-patterns",
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
      <section className="pt-2 flex items-center justify-center gap-10 w-full max-md:flex-col">
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
