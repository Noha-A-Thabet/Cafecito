import React from "react";

const Events = () => {
  return (
    <section className="bg-gray h-[70vh] sm:h-[120vh] md: md:h-[120vh] xl:h-[70vh] mt-[40px]">
      <div class="pt-[40px] pb-[40px] flex  flex-col items-center">
        <h2 class="tracking-[.4em] text-[1.5em]  mt-[15px]  font-[300] sm:text-[1.3em] md:text-[1.5em] lg:text-[1.6em] xl:text-[1.9em] 2xl:text-[2em]">
          News & Events
        </h2>

        <p className="mt-4 tracking-widest text-gray sm:text-[15px] md:text-[18px] ">
          Keep up to date with our latest news. To be the first to find out:
          subscribe
        </p>
      </div>

      <section class="flex items-center  justify-center ">
        <div className="grid grid-cols-4 gap-5 w-[60%] sm:grid-cols-2 sm:gap-[6em] md:gap-[5em] xl:grid-cols-4 xl:gap-[2em]">
          <div class="bg-eventImageOne bg-center bg-cover h-[200px] relative md:h-[230px] xl:h-[210px]">
            <p class="absolute top-[13rem] left-[1rem] text-gray cursor-pointer sm:w-[100%] sm:left-[.20rem] md:top-[15rem] lg:left-[.20rem] xl:top-[14rem] text-center sm:text-left">
              Cena en casa de amigos Argentinos Oct 12, 2023
            </p>
          </div>
          <div class="bg-eventImageTwo bg-center bg-cover h-[200px] relative md:h-[230px] xl:h-[210px]">
            <p class="absolute w-[80%]  top-[13rem] left-[1rem] text-gray cursor-pointer sm:w-[100%] md:top-[15rem] lg:left-[.20rem] xl:top-[14rem]  sm:text-left sm:left-[.20rem]">
              Santa Fe Wine & Chile Fiesta Nov 17, 2023
            </p>
          </div>
          <div class="bg-eventImageThree bg-center bg-cover h-[200px] relative md:h-[230px] xl:h-[210px]">
            <p class="absolute w-[80%]  top-[13rem] left-[1rem] text-gray cursor-pointer sm:w-[100%] md:top-[15rem] lg:left-[.20rem] xl:top-[14rem]  sm:text-left sm:left-[.20rem]">
              New on the menu: COCKTAILS Sep 23, 2023
            </p>
          </div>
          <div class="bg-eventImageFour bg-center bg-cover  h-[200px] relative md:h-[230px] xl:h-[210px]">
            <p class="absolute w-[80%]  top-[13rem] left-[1rem] text-gray cursor-pointer sm:w-[100%] md:top-[15rem] lg:left-[.20rem] xl:top-[14rem]  sm:text-left sm:left-[.20rem]">
              Tango Milonga & Beginners Crash Course Dec 16, 2023
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Events;
