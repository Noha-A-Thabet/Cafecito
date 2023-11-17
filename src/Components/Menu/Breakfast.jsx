import React from "react";

const Breakfast = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-BreakfastBg w-[90vw] h-[60vh] bg-cover bg-center sm:w-[92vw] sm:bg-contain sm:bg-no-repeat lg:w-[90vw] lg:bg-cover"></div>
      <h1 className="pt-[50px] font-bold text-3xl tracking-[.98rem] sm:text-2xl md:text-3xl xl:text-4xl">
        Breakfast
      </h1>
      <h3 className="tracking-[.3em] text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        All Day
      </h3>
      <hr className="my-6  border-lightGray  w-[600px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]" />

      <p className="mt-[20px] mb-[20px] text-gray text-center tracking-widest leading-7 w-[60%] md:text-md lg:text-md">
        Combine with your favorite fresh juice from the barista section!
      </p>
      <h3 className="tracking-widest  text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Breakfast
      </h3>

      <ul className="flex flex-col items-center justify-center  w-[45%] text-center my-[20px] sm:w-[60%]">
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">FRUIT SALAD VG</h3>
          <p className="text-gray leading-7 tracking-wider">
            Freshly cut seasonal fruits.
          </p>
          <p className="text-gray leading-7 tracking-wider">Small | large</p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold">PANQUEQUE CON DULCE DE LECHE V</h3>
          <p className="text-gray leading-7 tracking-wider">
            1 rolled crepe filled with banana, dulce de leche, and mixed
            berries.
          </p>
          <p className="text-gray leading-7 tracking-wider">
            +Add extra whipped cream
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">GRANOLA BOWL V</h3>
          <p className="text-gray leading-7 tracking-wider">
            Choice of house made granola or müesli over yogurt with fruit and
            honey.
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">THE ARGENTINE WAY</h3>
          <p className="text-gray leading-7 tracking-wider">
            Your choice of ham or grilled beef strips served with organic
            scrambled eggs, provolone cheese or tomatoes, and a croissant or
            toast with house-made jam or dulce de leche
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">MEDIALUNA SANDWICH</h3>
          <p className="text-gray leading-7 tracking-wider">
            Classic: Ham and provolone cheese croissant. Caprese: Fresh
            mozzarella, tomato, & pesto V
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">HOUSE OMELETTE</h3>
          <p className="text-gray leading-7 tracking-wider">
            Build your own organic egg and provolone omelette served with house
            potatoes.
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">+With up to 3 add ons:</h3>
          <p className="text-gray leading-7 tracking-wider">
            Choice of house made granola or müesli over yogurt with fruit and
            honey.
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">GRANOLA BOWL V</h3>
          <p className="text-gray leading-7 tracking-wider">
            +Red Pepper, Onions, Spinach, Mushrooms or Ham
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Breakfast;
