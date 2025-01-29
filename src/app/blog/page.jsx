import React from "react";
import Image from "next/image";
import Blog_card from "@/components/Blog_section";
const Blog = (props) => {
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

      <article className="flex items-center justify-center gap-2 flex-wrap mt-8 mb-5">
        <Blog_card
          src="/img/pro_1.png"
          released="12 hours ago"
          title="New modern tools for developer"
          desc="Lorem is the best tools in the next "
          read="5 minutes"
        />
        <Blog_card
          src="/img/pro_1.png"
          released="12 hours ago"
          title="New modern tools for developer"
          desc="Lorem is the best tools in the next "
          read="5 minutes"
        />
        <Blog_card
          src="/img/pro_1.png"
          released="12 hours ago"
          title="New modern tools for developer"
          desc="Lorem is the best tools in the next "
          read="5 minutes"
        />
      </article>
    </section>
  );
};

export default Blog;
