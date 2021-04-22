import React from "react";
import { periodictabledata } from "../data";
import Element from "./Element.js";

export default function Tabla() {
<<<<<<< HEAD
  const handleHover = (e) => {
    const elemento = e.target;
    elemento.classList.add("hover");
    document.getElementById("atomicweight").classList.add("hover");
  };
  const handleOut = (e) => {
    const elemento = e.target;
    elemento.classList.remove("hover");
  };
=======
>>>>>>> 2f5756b4c1b16f0ef890f27ce415fa50465b2a1f
  return (
    <div className="tabla">
      {periodictabledata.map((element) => {
        return (
          <Element
            key={element.atomicnumber}
            name={element.name}
            atomicnumber={element.atomicnumber}
            symbol={element.symbol}
            category={element.category}
<<<<<<< HEAD
            atomicweight={element.atomicweight}
            occurrence={element.occurrence}
            image={element.image}
            onMouseOver={handleHover}
            onMouseOut={handleOut}
=======
>>>>>>> 2f5756b4c1b16f0ef890f27ce415fa50465b2a1f
          />
        );
      })}
    </div>
  );
}
