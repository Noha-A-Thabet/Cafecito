import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh]  flex flex-col font text-3xl justify-center items-center grayDiv"
      style={{
        backgroundImage: "url('/assets/CafecitoMay2021-16.jpeg')",
      }}
    >
      <div className="flex flex-col font text-3xl justify-center items-center  bg-lightgray w-[100%] h-[100%] text-whiteTxt ">
        <h1 className="text-[3.2rem] tracking-wider font-bold sm:text-[30px] leading-5 md:text-[35px] lg:text-[40px] 2xl:text-[3.2rem]">
          Cafecito
        </h1>
        <h5 className="mt-[30px] font-bold  leading-5 sm:text-[20px] md:text-[20px] lg:text-[25px] 2xl:text-[30px]">
          COFFEE HOUSE & RESTAURANT AT THE TRAILHEAD
        </h5>
        {/* <button className="font-bold rounded-3xl  border border-black w-[300px] h-[50px] mt-[30px] tracking-wider  leading-5 sm:text-[20px] sm:h-[40px] sm:w-[200px] md:text-[20px] lg:text-[25px]  lg:h-[50px] lg:w-[250px]  2xl:text-[30px] 2xl:h-[60px] 2xl:w-[300px]">
          <Link to="/order">ORDER NOW</Link>
        </button> */}
      </div>
    </div>
  );
};

export default Slider;
