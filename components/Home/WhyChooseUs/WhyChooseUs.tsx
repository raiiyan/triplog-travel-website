import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  return (
    <div className="pt-16 pb-20">
      {/* section heading */}
      <SectionHeading
        heading="Why Choose Us?"
        description="Discover what sets Triplog apart from intuitive travel planning to unforgettable experiences, 
            we bring your journey to life with ease, style, and reliability."
      />
      <div
        className="grid w-[80%] mx-auto grid-col-1 md:grid-cols-2
        lg:grid-col-3 xl:grid-cols-3  gap-16 items-center mt-20"
      >
        {/* whychooseus card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarantee"
            description="Get the most competitive rates - no hidden fees, just great value."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy & Quick Booking"
            description="Book your next trip in just a few clicks - fast, simple, seamless."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Care 24/7"
            description="We’re here for you anytime, anywhere - day or night."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
