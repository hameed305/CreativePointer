function Title({ props }) {
    return (
        <h1 className="flex items-center justify-start gap-4 text-2xl text-black font-medium tracking-wide dark:text-white">
            <span className="w-[10px] h-[40px] rounded-lg bg-violet-600"></span>
            {props}
        </h1>
    )
}
export default Title;