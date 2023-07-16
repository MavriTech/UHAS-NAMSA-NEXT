import React from "react";
import Home_Slider from "./home/Home_Slider";
import AnnouncementEvent from "./home/Announcements-Events";
import MissionVision from "./home/Mission-Vision";
import Home_Swiper from "./home/Swiper";

const Home = () => {
  return (
    <>
      <Home_Slider />
      <Home_Swiper />
      <AnnouncementEvent />
      <MissionVision />
    </>
  );
};

export default Home;
