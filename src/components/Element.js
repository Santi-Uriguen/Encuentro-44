import React from "react";
export default function Element(props) {
  return (
    <div className={`elemento ${props.category}`}>
      <p className="atomicnumber">{props.atomicnumber}</p>
      <h2>{props.symbol}</h2>
      <p>{props.name}</p>
    </div>
  );
}
