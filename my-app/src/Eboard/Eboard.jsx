import React from "react";
import ShowEboard from "./CurrentEboard";
import Eboardpic from "../pictures/Eboard_Alumni.png";

function Eboard() {
  return (
    <React.Fragment>
      <header className="Eboard-header">
        <div className="Eboard-Banner">
          <div className="card-color fitting">
            <h2> Meet Our Eboard Members </h2>
            <img
              src={Eboardpic}
              alt="Eboard and Alumni"
              className="eboard-pic"
            />
          </div>
        </div>
        <ShowEboard />
      </header>
    </React.Fragment>
  );
}
export default Eboard;
