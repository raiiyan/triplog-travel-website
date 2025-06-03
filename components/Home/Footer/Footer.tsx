import React from "react";
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
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            About Us
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Careers
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Blogs
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Gift Cards
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Magazine
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Contact
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Legal Notice
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Privacy Policy
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Terms & Conditions
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Sitemap
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Car Hire
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Activity Finder
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Tour List
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
          >
            Travel Agent
          </p>
          <p
            className="text-gray-800 font-medium cursor-pointer text-sm 
            hover:text-blue-950 hover:underline hover:pb-1"
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
    </div>
  );
};
export default Footer;
