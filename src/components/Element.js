import React from "react";
export default function Element(props) {
<<<<<<< HEAD
  const handleHover = () => {
    const element = document.getElementById(props.name);
    element.classList.add("hovered");
    element.classList.remove("unhovered");
  };
  const handleOut = () => {
    const element = document.getElementById(props.name);
    element.classList.add("unhovered");
    element.classList.remove("hovered");
  };
  return (
    <div
      className={`elemento unhovered ${props.category}`}
      id={props.name}
      onMouseEnter={handleHover}
      onMouseLeave={handleOut}
    >
      <div className="infoUp">
        <p className="atomicnumber">{props.atomicnumber}</p>
        <p className="atomicweight" id={props.atomicweight}>
          {props.atomicweight}
        </p>
      </div>
=======
  return (
    <div className={`elemento ${props.category}`}>
      <p className="atomicnumber">{props.atomicnumber}</p>
>>>>>>> 2f5756b4c1b16f0ef890f27ce415fa50465b2a1f
      <h2>{props.symbol}</h2>
      <p>{props.name}</p>
    </div>
  );
}
