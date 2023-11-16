import React from "react";

const Story = () => {
  return (
    <section className="mt-9  flex flex-col items-center">
      <h1 className="font-bold text-3xl tracking-[.98rem] sm:text-2xl md:text-3xl xl:text-4xl">
        OUR STORY
      </h1>

      <h2 class="tracking-[.3em] text-[1.8em] mt-3 sm:mt-4 sm:text-[1.1em] md:text-[1.3em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Blending Culture, Coffee & Delicious Food
      </h2>

      <div class="w-[50%] mt-[20px] sm:w-[80%] sm:mt-[20px] md:w-[85%] lg:w-[40%]">
        <p class="text-gray text-center tracking-widest leading-7 md:text-md lg:text-md">
          Cafecito is a family owned business blending the cultures of
          Argentina, Armenia, and Italy. Bringing you a delicious menu in our
          beautiful gathering space. The Trailhead Compound is a neighborhood
          snack place to stop by at the heart of the Baca Railyard.
        </p>
      </div>
    </section>
  );
};

export default Story;
