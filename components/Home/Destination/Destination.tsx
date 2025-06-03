import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section heading */}
      <SectionHeading
        heading="Exploring Popular Destination"
        description="Discover the most sought-after travel spots around 
        the globe, handpicked to inspire your next unforgettable journey."
      />
      {/* Section Content */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* Slider */}
        <Slider />
      </div>
    </div>
  );
};

export default Destination;
