import React from "react";

const Gallery = () => {
  return (
    <div>
      <section>
        {/*parent*/}
        <div className="grid grid-cols-2 gap-[18rem] border border-red-600 h-[100vh] w-[98vw]">
          {/* one */}
          <div className="h-[70vh] w-[58vw] border border-red-500">
            <div className="h-[70vh] w-[58vw]  bg-fixedImageOne border border-red-500 bg-cover bg-center"></div>
          </div>
          {/* two */}
          <div className="w-[38vw] h-[70vh] border border-green-500 grid grid-cols-1 gap-5">
            <div className="h-[34vh]  bg-fixedImageTwo  bg-cover bg-center"></div>
            <div className="h-[33vh]  bg-fixedImageThree  bg-cover bg-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
