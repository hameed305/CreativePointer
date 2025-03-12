import { notFound } from 'next/navigation';
import Blogs from "@/Data/Blogs.json";
import Image from "next/image";
import Link from "next/link";
export default async function Blog({ params }) {
    const { slug } = await params;
    // const { slug } = params;
    console.log("Params:", params);
    console.log("Blogs Data:", Blogs);

    const blog = Blogs.find((blog) => blog.slug === slug);

    console.log("Matched Blog:", blog);
    if (!blog) {
        notFound();
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-8 lg:p-12 transition-colors duration-300">
            <Link href="/blog" className="text-blue-500 hover:underline">Back to Blog</Link>
            <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">{blog.blogTitle}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-center">{blog.blogContent}</p>
            <Image src={blog.blogImage} alt={blog.blogTitle} layout="intrinsic" width={800} height={500} />

        </div>
    );
}