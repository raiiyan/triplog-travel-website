import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";
const Newsletter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
      <BsEnvelopePaper className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2x1 text-white font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-sm">
        Sign up and we&apos; 11 send the best deals to you
      </p>
      {/* subscription input and buttons */}
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%]
            md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          placeholder="Enter your email address"
        />
        <button
          className="px-6 py-3.5 bg-blue-900 hover:bg-white hover:text-black
           text-white mt-3 w-[95%] sm:w-[80%]
            md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
