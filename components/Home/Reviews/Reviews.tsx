import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div
      className="pt-20 pb-20 flex items-center justify-center
    flex-col bg-blue-900"
    >
      <div
        className="w-[80%] mx-auto grid items-center grid-cols-1
      lg:grid-cols-2 gap-10"
      >
        {/* text content */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers say about us?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalfAlt className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
