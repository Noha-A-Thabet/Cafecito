// import React, { useState } from "react";
// import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

// const Carousel = ({ children: slides }) => {
//   const [curr, setCurr] = useState(0);

//   const prevSlide = () => {
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//     console.log("prev");
//   };
//   const nextSlide = () => {
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//     console.log("next");
//   };

//   const currentSlideText = slides[curr]?.text || "";

//   return (
//     <div className="overflow-hidden relative">
//       <h2 class="text-2xl">{currentSlideText}</h2>

//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>

//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button class="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white">
//           <CiCircleChevLeft size={40} onClick={nextSlide} />
//         </button>
//         <button class="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white">
//           <CiCircleChevRight size={40} onClick={prevSlide} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <h2 className="text-2xl">{slides[curr]?.text}</h2>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={index === curr ? "block" : "hidden"}>
            <img src={slide.src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white">
          <CiCircleChevLeft size={40} onClick={prevSlide} />
        </button>
        <button className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white">
          <CiCircleChevRight size={40} onClick={nextSlide} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
