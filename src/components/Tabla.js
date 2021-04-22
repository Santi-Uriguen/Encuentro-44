import React from "react";
import { periodictabledata } from "../data";
import Element from "./Element.js";

export default function Tabla() {
  const handleHover = (e) => {
    const elemento = e.target;
    elemento.classList.add("hover");
    document.getElementById("atomicweight").classList.add("hover");
  };
  const handleOut = (e) => {
    const elemento = e.target;
    elemento.classList.remove("hover");
  };
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
            atomicweight={element.atomicweight}
            occurrence={element.occurrence}
            image={element.image}
            onMouseOver={handleHover}
            onMouseOut={handleOut}
          />
        );
      })}
    </div>
  );
}
