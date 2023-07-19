import React from "react";
import Home_Slider from "./home/Home_Slider";
import Notice from "./home/Notice";
import MissionVision from "./home/Mission-Vision";
import Home_Swiper from "./home/Swiper";

const Home = () => {
  return (
    <>
      <Home_Slider />
      <Home_Swiper />
      <Notice />
      <MissionVision />
    </>
  );
};

export default Home;
