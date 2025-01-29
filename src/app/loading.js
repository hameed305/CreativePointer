const loading = () => {
  return (
    <div className="bg-white absolute z-50 left-[0px] top-[0px]  w-[100%] h-[100vh] flex items-center justify-center rounded-2xl dark:bg-slate-900">
      <div className="size-[50px] border-t-2 border-t-violet-600 animate-spin rounded-full flex items-center justify-center">
        <div className="size-[35px] border-b-2 border-b-violet-600 animate-spin rounded-full flex items-center justify-center">
          <div className="size-[20px] border-r-2 border-r-violet-600 animate-spin rounded-full flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
