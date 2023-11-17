import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Slider from "./slider/Slider.jsx";
import Indoor from "./Indoor/Indoor.jsx";
import Story from "./Story/Story.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Events from "./Events/Events.jsx";
import FindsUs from "./FindUs/FindUs.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Indoor />
      <Gallery />
      <Story />
      <Events />
      <FindsUs />
    </div>
  );
};

export default Home;
