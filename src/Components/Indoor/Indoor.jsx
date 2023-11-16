import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Indoor = () => {
  const slides = [
    {
      text: "home made",
      src: "https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1641416757389-D48QLLSV9Q5AHKAYS64C/Cafecito-alfajorcitos-PHKGuevara.jpg?format=2500w",
    },
    {
      text: "home made",
      src: "https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1641417041593-0E6YXNEP8UTM7LY8IUE6/CafecitoMay2021-8.jpg?format=2500w",
    },
    {
      text: "home made",
      src: "https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1609893513124-VSFA725UN23LGX3VMD4N/cafecitoOctober2020-4.jpg?format=2500w",
    },
    {
      text: "home made",
      src: "https://images.squarespace-cdn.com/content/v1/5d5c35d09c5b31000112bab9/1608228989454-N4U7RQPIXHLGYQ58IHU7/Cafecito_7_18_2020-11copy.jpg?format=2500w",
    },
  ];

  return (
    <section class="flex items-center justify-center flex-col mt-10">
      <h1 class="font-bold text-[2em] tracking-[1rem] font-roboto sm:text-[1em] sm:tracking-[.7rem] md:text-[1.2em] md:tracking-[.8rem] lg:text-[1.5em] lg:tracking-[.8rem] xl:text-[1.6em] xl:tracking-[.9rem] 2xl:text-[1.7em] 2xl:tracking-[1rem]">
        INDOOR & PATIO DINING
      </h1>

      <h4 class="tracking-[.4em] text-[1.5em]  mt-[15px]  font-[300] sm:text-[1.3em] md:text[1.5em] lg:text[1.8em] xl:text[1.9em] 2xl:text-[2em]">
        Take-Out & Delivery
      </h4>
      <h5 class="tracking-[.3em] text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Breakfast, Lunch, Brunch
      </h5>
      <p className="mt-4 tracking-widest text-gray ">
        Trailhead Compound | 922 Shoofly St. Santa Fe, NM 87505
      </p>
      <hr className="my-6  border-lightGray  w-[600px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]" />
      <div className="flex flex-row justify-evenly w-[900px] sm:w-[400px] md:w-[700px] lg:w-[750px] xl:w-[750px] 2xl:w-[750px]">
        <div>
          <Link to="/menu" className="text-redText ">
            Our Menus
          </Link>
        </div>
        <div>
          <Link to="/order" className="text-redText ">
            Order Online
          </Link>
        </div>
      </div>
      <hr className="my-6  border-lightGray  w-[600px] sm:w-[400px] md:w-[600px]  lg:w-[700px] xl:w-[800px] 2xl:w-[850px]" />
      <ul className="items-center ">
        <li className="mt-3">
          Monday to Friday
          <span className="px-2 tracking-wider">8am - 3pm</span>
        </li>
        <li className="mt-5 tracking-wider px-6">Saturday 8am - 3pm</li>
        <li className="mt-5 px-8">Sunday 9am - 3pm</li>
      </ul>
      {/* <hr className="my-6  border-lightGray  w-[600px] sm:w-[400px] md:w-[600px]  lg:w-[700px] xl:w-[800px] 2xl:w-[850px]" /> */}
      {/* Slider */}
      {/* <Carousel>
        {slides.map((slide, index) => {
          return (
            <>
              <img src={slide.src} alt={index} />
              <p>{slide.text}</p>
            </>
          );
        })}
      </Carousel> */}
    </section>
  );
};

export default Indoor;
