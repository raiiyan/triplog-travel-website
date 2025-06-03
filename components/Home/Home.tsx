import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import HotelCard from "./Hotel/HotelCard";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import NewsLatter from "./NewsLatter/NewsLatter";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChooseUs />
      <Reviews />
      <News />
      <NewsLatter />
    </div>
  );
};

export default Home;
