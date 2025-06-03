import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h0-[100vh]">
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full
        bg-gray-800 opacity-70"
      ></div>
      {/* Video Background */}
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {/* Text Content */}
      <div
        className="absolute z-[100] w-full h-full top-[50%]
      left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          className="flex items-center justify-center
        flex-col w-full h-full"
        >
          <div data-aos="fade-up" data-aos-offset="0">
            <h1
              className="text-[20px] sm:text-[25px] mb-4 md:mb-0 text-center md:text-[35px]
                lg:text-[45px] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] text-white font-bold uppercase"
            >
              Log Your Journey.
              <br /> Share the Adventure.
            </h1>
            <p
              className="hidden sm:block md:text-base text-center text-lg text-white
            font-normal "
            >
              Turn your travels into stories worth remembering. With Triplog,
              you can map your adventures, journal your experiences, and relive
              every destination beautifully.
            </p>
          </div>
          {/*SearchBox*/}
          <SearchBox />
          <Link
            href="#"
            className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group ☐ bg-blue-600 relative
            hover:bg-gradient-to-r ☐ hover: from-blue-500 hover: to-blue-400 text-white hover: ring-2 hover:ring-offset-2
          hover:ring-blue-400 transition-all ease-out duration-300"
          >
            <span
              className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
            bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"
            ></span>
            <span className="relative font-bold">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
