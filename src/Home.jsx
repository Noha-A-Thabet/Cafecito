import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/slider/Slider.jsx";
import Indoor from "./Components/Indoor/Indoor.jsx";
import Story from "./Components/Story/Story.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Indoor />
      <Story />
      {/* <Gallery></Gallery> */}
    </div>
  );
};

export default Home;
