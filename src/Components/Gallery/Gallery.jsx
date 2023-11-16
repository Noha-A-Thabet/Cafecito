import React from "react";

const Gallery = () => {
  return (
    <div>
      <section class=" h-[60vh] w-[96vw] mt-[50px] ">
        {/*parent grid*/}

        <div className="grid grid-cols-2 gap-[23rem] sm:gap-[10rem] md:gap-[17rem] lg:gap-[18rem] xl:gap-[19rem]  2xl:gap-[22rem] ">
          {/* one */}
          <div className="h-[60vh] w-[60vw]  bg-fixedImageOne bg-center bg-cover bg-no-repeat  sm:w-[58vw] md:w-[63vw] lg:w-[60vw] xl:w-[58vw] 2xl:w-[56vw]"></div>

          {/* two */}
          <div className="w-[40vw] h-[60vh]  grid grid-cols-1 gap-5 sm:w-[30vw] sm:gap-4 md:w-[30vw] md:gap-3 lg:w-[34vw] lg:gap-4  xl:w-[36vw] 2xl:gap-4 2xl:w-[38.5vw] xl:gap-5 ">
            <div className="bg-fixedImageTwo bg-cover bg-center md:w-[30vw] sm:w-[35vw] lg:w-[34vw] xl:w-[36vw] 2xl:w-[38.5vw]"></div>
            <div className=" bg-fixedImageThree  bg-cover bg-center md:w-[30vw] sm:w-[35vw] lg:w-[34vw] xl:w-[36vw] 2xl:w-[38.5vw]"></div>
          </div>
          {/* three */}
        </div>
      </section>
      <section
        class=" h-[60vh] grid grid-cols-2 w-[96vw] gap-[1.5rem] mt-[22px]  sm:gap-[.99rem] md:gap-[4rem] md:mt-[20px] md:w-[93vw] sm:mt-[18px]
       sm:w-[97vw] lg:mt-[20px] lg:w-[96vw]  lg:gap-[1rem] xl:gap-[1.5rem] 2xl:gap-[1.6rem]"
      >
        {/* four */}
        <div className="h-[60vh]  bg-fixedImageFour bg-cover  bg-no-repeat  sm:w-[47vw] md:w-[48vw] md:h-[60vh] lg:w-[47vw] xl:w-[47vw] 2xl:w-[47vw]"></div>
        {/* five */}
        <div className="h-[60vh]  bg-fixedImageFive bg-cover bg-center sm:w-[47vw]  md:w-[45vw] md:h-[60vh] lg:w-[47vw] xl:w-[47vw] 2xl:w-[47vw]"></div>
      </section>
    </div>
  );
};

export default Gallery;
//
// ;
