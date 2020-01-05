import React from "react";
import construct from "./../pictures/under-construction.png";
import "./Eboard.css";
import Members from "./Members";

function Eboard() {
  return (
    <div className="Eboard-main">
      <header className="Eboard-header">
        <div className="members">
          <div className="row1">
            <Members> what if i type inside this</Members>
          </div>
          <div className="row2">
            <Members></Members>
            <Members></Members>
          </div>
          <div className="row3">
            <Members></Members>
            <Members></Members>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Eboard;
