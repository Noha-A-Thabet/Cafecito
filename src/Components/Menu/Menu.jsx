import React from "react";
import Lunch from "./Lunch";
import Breakfast from "./Breakfast";
import Baked from "./Baked";
import Navbar from "../Navbar/Navbar";

const Menu = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center bg-gray pt-[60px]">
        <h1 className="font-bold text-3xl tracking-[.98rem] sm:text-2xl md:text-3xl xl:text-4xl">
          OUR MENUS
        </h1>
        <p className="mt-[20px] mb-[20px] text-gray text-center tracking-widest leading-7 w-[60%] md:text-md lg:text-md">
          Serving Italian style coffee drinks. Mate, a traditional Argentine
          tea. And a variety of Empanada styles, along with many other cultural
          staple foods.
        </p>

        <Lunch />
        <Breakfast />
        <Baked />
      </section>
    </>
  );
};

export default Menu;
