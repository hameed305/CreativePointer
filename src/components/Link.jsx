import Link from "next/link";
function Url({ url }) {
    return (

        <Link
            href={url}
            className=" border-transparent border-2 border-solid flex items-center justify-center mx-auto w-40  px-3 py-2 bg-white bg-opacity-30 font-medium tracking-wider rounded-full hover:border-white hover:border-2 hover:border-solid my-3 dark:bg-violet-700 dark:hover:border-opacity-30 dark:text-white"
        >
            EXPLORE ALL
        </Link>
    )
}
export default Url;