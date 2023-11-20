import React from "react";
import Navbar from "../Navbar/Navbar";
//flex justify-between flex-row items-center
const SpecialEvents = () => {
  return (
    <div class="bg-gray pb-[20px]">
      <Navbar />
      <section className="px-3  h-[39vh] flex justify-center items-center  sm:mt-[40px] sm:h-[20vh] lg:h-[25vh] lg:w-[90vw]">
        <div className=" grid grid-cols-2 gap-1 h-[40vh] w-[70vw] sm:w-[96vw] sm:h-[30vh] lg:h-[25vh] lg:w-[80vw] lg:gap-3 lg:mx-[10px] ">
          <div className="bg-firstEventPic bg-center bg-contain bg-no-repeat h-[38vh] w-[34vw] sm:w-[46vw] sm:h-[25vh] lg:w-[50vw] lg:h-[25vh] "></div>
          <div className="bg-secondEventPic bg-center bg-contain bg-no-repeat h-[38vh] w-[34vw] sm:w-[46vw] sm:h-[25vh] lg:w-[50vw] lg:h-[25vh]  "></div>
        </div>
      </section>

      {/* text */}
      <section className="flex flex-col justify-between items-center sm:mt-[20px]   lg:mt-[30px] lg:mb-[30px] ">
        <h1 class="font-bold text-[1.3em] tracking-[.1rem] font-roboto ">
          YOUR SPECIAL EVENT DESTINATION
        </h1>
        <h3 class="w-[50vw] mt-[20px] mb-[20px] text-center text-gray leading-7 tracking-wider  sm:w-[90vw] lg:w-[80vw]">
          Nestled in the BACA area of The Railyard in Santa Fe, our venue is
          open throughout the year, offering a warm and inviting space for your
          special event. Whether it’s a spring wedding reception, a summer
          corporate event, a fall family reunion, or a winter holiday party,
          Cafecito is equipped to bring your vision to life in any season. Our
          doors are open to the endless possibilities of your celebration,
          embracing the unique charm that each time of year brings to Santa Fe.
        </h3>
      </section>

      {/* second row */}
      <section className="px-3  flex flex-row justify-center h-[39vh]  sm:h-[20vh] lg:h-[25vh] lg:w-[90vw]">
        <div className=" grid grid-cols-2 gap-1 h-[40vh] w-[70vw] sm:w-[96vw] sm:h-[30vh] lg:h-[25vh] lg:w-[80vw] lg:gap-3 lg:mx-[10px] ">
          <div className="bg-thirdEventPic bg-center bg-contain bg-no-repeat  h-[40vh] w-[34vw]  sm:w-[46vw] sm:h-[25vh]  lg:w-[50vw] lg:h-[25vh]"></div>
          <div className="bg-forthEventPic bg-center bg-contain bg-no-repeat  h-[40vh]  w-[34vw] sm:w-[46vw] sm:h-[25vh]  lg:w-[50vw] lg:h-[25vh] "></div>
        </div>
      </section>

      {/* text */}
      <section className="flex flex-col justify-between items-center mt-[40px]  lg:mb-[30px]">
        <h1 class="font-bold text-[1.3em] tracking-[.1rem] font-roboto ">
          CELEBRATE WITH AUTHENTIC FLAIR
        </h1>
        <h3 class="w-[50vw] mt-[20px] mb-[20px] text-center text-gray leading-7 tracking-wider   sm:w-[90vw]  lg:w-[80vw]">
          Infuse your event with the spirit of Argentina, the heart of Armenia,
          and the rustic elegance of Italy. Cafecito’s diverse culinary
          offerings reflect our rich heritage and are sure to delight your
          guests. From expertly crafted appetizers to sumptuous main courses,
          each dish is a testament to our commitment to quality and flavor. Our
          adaptable space can cater to intimate gatherings or grandiose soirees,
          accommodating up to 80 guests. The transparent dining area, paired
          with the serene backdrop of our healing gardens, provides a
          picturesque setting for any event.
        </h3>
      </section>
    </div>
  );
};

export default SpecialEvents;
