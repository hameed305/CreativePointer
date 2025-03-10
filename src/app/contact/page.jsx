import React from "react";
const Contact = () => {
  return (
    <section className="body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[var(--them-color)]">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  placeholder="Type your name..."
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-slate-300 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-700"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  placeholder="Type your Email..."
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-700"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  placeholder="Feedback/Message..."
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-slate-700"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <input
                type="submit"
                value="SUBMIT"
                className="mx-auto bg-white p-3 w-[150px] rounded-full dark:bg-slate-700 hover:bg-opacity-50 cursor-pointer block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
