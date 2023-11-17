import React from "react";
import { Link } from "react-router-dom";
const Baked = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-BakedBg w-[80%] h-[40vh] bg-cover bg-center"></div>
      <h1>BAKED GOODS & DESSERTS</h1>
      <h3>Every day, all day</h3>
      <ul>
        <li>
          <h3>MEDIALUNA</h3>
          <p>Croissant.</p>
        </li>
        <li>
          <h3>PASTA FROLA</h3>
          <p>Dulce de membrillo (quince) sweet tart</p>
        </li>
        <li>
          <h3>PEPAS</h3>
          <p>Dulce de membrillo (quince) cookies.</p>
        </li>
        <li>
          <h3>ALFAJORCITOS DE MAICENA</h3>
          <p>
            House baked sandwich cookie filled with dulce de leche. Rolled in
            coconut.
          </p>
        </li>
        <li>
          <h3>BUDÍN DE LIMÓN</h3>
          <p>Small lemon poppy seed loaf.</p>
        </li>
      </ul>
      <Link to="/menu">back to all Menus</Link>
    </div>
  );
};

export default Baked;
