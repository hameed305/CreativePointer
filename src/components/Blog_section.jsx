import React from "react";
import Image from "next/image";
import Link from "next/link";
const Blog_section = (props) => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-white bg-opacity-70 p-3 rounded-lg dark:bg-slate-800 w-[20rem]">
        <span>Release : {props.release}</span>
        <center>
          <Image
            alt={props.title}
            width={200}
            height={200}
            src={props.img_url}
            className="rounded-lg"
          />
        </center>
        <span>Read : {props.readtime}</span>
        <h1 className="dark:text-slate-100 text-[16px] font-semibold tracking-wider text-slate-600">{props.title}</h1>
        <h3 className="dark:text-slate-100 text-[13px] text-slate-600">{props.content}</h3>
        <Link className="px-3 py-2 bg-slate-800 text-slate-100 rounded-lg text-center dark:bg-slate-500 dark:text-slate-950" href={props.url}>Read more</Link>
      </div>
    </>
  );
};

export default Blog_section;
