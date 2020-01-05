import React from "react";
import construct from "./pictures/under-construction.png";
//import './Eboard.css'

function FLL() {
  return (
    <div className="Eboard-main">
      <header className="Eboard-header">
        <img src={construct} className="constructPic" alt="logo" />
        <p className="Main-title"></p>
      </header>
    </div>
  );
}
export default FLL;
