import React from "react";

const Lunch = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-LunchBg w-[90vw] h-[40vh] bg-cover bg-center "></div>
      <h1 className="pt-[50px] font-bold text-3xl tracking-[.98rem] sm:text-2xl md:text-3xl xl:text-4xl">
        LUNCH
      </h1>
      <h3 className="tracking-[.3em] text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Served from 11am
      </h3>
      <hr className="my-6  border-lightGray  w-[600px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]" />

      <h4 className="tracking-widest text-gray text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Choice of Pasta
      </h4>

      <ul className="flex flex-col items-center justify-center  w-[45%] text-center my-[20px] pb">
        <li className="py-[20px]">
          <h3 className="text-xl font-bold">Pasta de la casa</h3>
          <p className="text-gray leading-7 tracking-wider">
            Fettuccine or penne with pomodoro, pesto, or bolognese sauce
          </p>
        </li>
        <li className="pt-[20px]">
          <h3 className="text-xl font-bold">Pasta Paradiso</h3>
          <p className="text-gray leading-7 tracking-wider">
            Penne pasta with roasted broccoli, zucchini, diced tomato, onion,
            red pepper, garlic, olive oil, and parmesano cheese
          </p>
        </li>
        <li className="pt-[20px]">
          <h3 className="text-xl font-bold">
            Gnocchi Specials on the 29th of each month
          </h3>
        </li>
      </ul>
      <h3 className="text-2xl  py-[40px]">Add</h3>
      <ul className="text-center mb-[30px]">
        <li className="text-xl font-bold text-gray leading-8 py-[10px]">
          Organic chicken strips
        </li>
        <li className="text-xl font-bold text-gray leading-8 py-[10px]">
          Grilled beef strips
        </li>
        <li className="text-xl font-bold text-gray leading-8 py-[10px]">
          Argentine red shrimp
        </li>
      </ul>
    </div>
  );
};

export default Lunch;
