import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`absolute ${navOpen} flex inset-0 transform transition-all
        duration-500 bg-black opacity-70 z-[1002] w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col
        h-full transform transition-all duration-500 delay-300 w-[80%]
        sm:w-[60%] bg-blue-300 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p
              className="text-white w-fit text-[20px]
                    ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
            >
              {link.label}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="cursor-pointer absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-8 h-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
