import React from "react";
import Image from "next/image";
import Blog_card from "@/components/Blog_section";
const Blog = () => {
  const Post = [
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Monkey logo design",
      blog_content: "a best logo design the is the sign of best gamerz",
      blog_img: "/img/pro_3.png",
      url: "/blog/first_post"
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content: "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_1.png",
      url: "/blog/second_post"
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content: "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_2.png",
      url: "/blog/third_post"
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content: "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_4.png",
      url: "/blog/four_post"
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content: "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_5.png",
      url: "/blog/five_post"
    },
    {
      release: "2 hours ago",
      read_time: "23 mint",
      blog_title: "New Vs code them for developers",
      blog_content: "Try this new vs code them for your development expierence and make your work easy",
      blog_img: "/img/pro_1.png",
      url: "/blog/six_post"
    },
  ]
  return (
    <section className="p-4">
      {/* blog hero section */}

      <div className="w-full flex items-center justify-around gap-1 flex-wrap mb-8">
        <Image
          src="/img/pro_2.png"
          className="rounded-xl max-w-full h-auto"
          width={400}
          height={400}
          alt="image"
        />
        <div className="flex gap-4 flex-col justify-center w-full md:w-[450px] p-2">
          <span className="text-slate-500">11 days ago</span>
          <h1 className="text-3xl font-semibold">
            The new legendary gaming scout logo which can increase your gaming
            experience
          </h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            debitis corporis hic ...
          </p>
          <a
            href=""
            className="p-3 bg-white bg-opacity-45 rounded-full w-[150px] text-center hover:bg-opacity-100 dark:bg-slate-800 dark:hover:bg-slate-600"
          >
            Read more...
          </a>
        </div>
      </div>

      {/* blogs list section */}

      <h1 className="flex items-center justify-start gap-4 text-2xl text-black font-semibold tracking-wide dark:text-white">
        <span className="w-[10px] h-[40px] rounded-lg bg-violet-600"></span>
        Latest Blogs
      </h1>

      <article className="flex items-center justify-center gap-10 flex-wrap mt-8 mb-5 w-full">
        {
          Post.map((post, index) => {
            return (
              <Blog_card
                release={post.release}
                img_url={post.blog_img}
                readtime={post.read_time}
                title={post.blog_title}
                content={post.blog_content}
                url={post.url}
                key={index}
              />
            )
          })
        }
      </article>
    </section>
  );
};

export default Blog;
