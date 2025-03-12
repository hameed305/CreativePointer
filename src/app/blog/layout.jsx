export default function Blog_layout({ children }) {
    return (
        <div className="p-4">
            <nav className="bg-white flex items-center justify-center gap-4 bg-opacity-20 backdrop-blur-lg dark:bg-gray-900 p-4 mx-auto w-[30%] rounded-xl border border-white dark:border-slate-600 max-lg:w-full">
                <ul className="flex space-x-4">
                    <li><a href="#new-blogs" className="text-slate-500 hover:underline">New Blogs</a></li>
                    <li><a href="#latest-blogs" className="text-slate-500 hover:underline">Latest Blogs</a></li>
                    <li><a href="#hot-blogs" className="text-slate-500 hover:underline">Hot Blogs</a></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
}
