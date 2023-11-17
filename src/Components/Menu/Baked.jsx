import React from "react";

const Baked = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-BakedBg w-[90vw] h-[65vh] bg-cover bg-center"></div>
      <h1 className="pt-[50px] font-bold text-3xl tracking-[.98rem] sm:text-2xl md:text-3xl xl:text-4xl">
        BAKED GOODS & DESSERTS
      </h1>
      <h3 className="tracking-[.3em] text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Every day, all day
      </h3>
      <hr className="my-6  border-lightGray  w-[600px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]" />

      <h3 className="tracking-widest  text-[1.8em] mt-3 sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[1.7em]">
        Baked Goods & Desserts
      </h3>

      <ul className="flex flex-col items-center justify-center  w-[45%] text-center my-[20px] pb">
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">MEDIALUNA</h3>
          <p className="text-gray leading-7 tracking-wider">Croissant.</p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">PASTA FROLA</h3>
          <p className="text-gray leading-7 tracking-wider">
            Dulce de membrillo (quince) sweet tart
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">PEPAS</h3>
          <p className="text-gray leading-7 tracking-wider">
            Dulce de membrillo (quince) cookies.
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">ALFAJORCITOS DE MAICENA</h3>
          <p className="text-gray leading-7 tracking-wider">
            House baked sandwich cookie filled with dulce de leche. Rolled in
            coconut.
          </p>
        </li>
        <li className="py-[20px]">
          <h3 className="text-xl font-bold ">BUDÍN DE LIMÓN</h3>
          <p className="text-gray leading-7 tracking-wider">
            Small lemon poppy seed loaf.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Baked;
