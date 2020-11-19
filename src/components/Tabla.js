import React from "react";
import { periodictabledata } from "../data";
import Element from "./Element.js";

export default function Tabla() {
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
          />
        );
      })}
    </div>
  );
}
