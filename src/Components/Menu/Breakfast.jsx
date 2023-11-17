import React from "react";

const Breakfast = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-BreakfastBg w-[80%] h-[40vh] bg-cover bg-center"></div>
      <p>Combine with your favorite fresh juice from the barista section!</p>
      <h3>Breakfast</h3>
      <ul>
        <li>
          <h3>FRUIT SALAD VG</h3>
          <p>Freshly cut seasonal fruits.</p>
          <p>Small | large</p>
        </li>
        <li>
          <h3>PANQUEQUE CON DULCE DE LECHE V</h3>
          <p>
            1 rolled crepe filled with banana, dulce de leche, and mixed
            berries.
          </p>
          <p>+Add extra whipped cream</p>
        </li>
        <li>
          <h3>GRANOLA BOWL V</h3>
          <p>
            Choice of house made granola or müesli over yogurt with fruit and
            honey.
          </p>
        </li>
        <li>
          <h3>THE ARGENTINE WAY</h3>
          <p>
            Your choice of ham or grilled beef strips served with organic
            scrambled eggs, provolone cheese or tomatoes, and a croissant or
            toast with house-made jam or dulce de leche
          </p>
        </li>
        <li>
          <h3>MEDIALUNA SANDWICH</h3>
          <p>
            Classic: Ham and provolone cheese croissant. Caprese: Fresh
            mozzarella, tomato, & pesto V
          </p>
        </li>
        <li>
          <h3>HOUSE OMELETTE</h3>
          <p>
            Build your own organic egg and provolone omelette served with house
            potatoes.
          </p>
        </li>
        <li>
          <h3>+With up to 3 add ons:</h3>
          <p>
            Choice of house made granola or müesli over yogurt with fruit and
            honey.
          </p>
        </li>
        <li>
          <h3>GRANOLA BOWL V</h3>
          <p>+Red Pepper, Onions, Spinach, Mushrooms or Ham</p>
        </li>
      </ul>
    </div>
  );
};

export default Breakfast;
