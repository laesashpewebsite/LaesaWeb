import React from "react";
import ShowEboard from "./CurrentEboard";
import Eboardpic from "../pictures/Eboard_Alumni.png";

function Eboard() {
  return (
    <React.Fragment>
      <header className="Eboard-header">
        <div className="Eboard-Banner">
          <h1 className="Text-Banner"> Meet Our Eboard Members </h1>
          <img src={Eboardpic} alt="Eboard and Alumni" className="eboard-pic" />
        </div>
        <ShowEboard />
      </header>
    </React.Fragment>
  );
}
export default Eboard;
