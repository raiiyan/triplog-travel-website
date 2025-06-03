import Link from "next/link";
import React from "react";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div
        className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid 
        md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* 1st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            About Us
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Careers
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Blogs
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Gift Cards
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Magazine
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Contact
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Legal Notice
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Privacy Policy
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Terms & Conditions
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Sitemap
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Car Hire
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Activity Finder
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Tour List
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Travel Agent
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline"
          >
            Sitemap
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Mobile</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              +006 345 7895
            </h1>
            <h1 className="text-sm text-gray-600 mt-3">Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              email@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* cr section */}
      <div
        className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col 
        md:flex-row justify-between items-center
        text-gray-600 text-sm"
      >
        <p className="text-center md:text-left">
          &copy; 2025 All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
