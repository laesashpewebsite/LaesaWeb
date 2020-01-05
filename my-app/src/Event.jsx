import React from "react";
import construct from "./pictures/under-construction.png";
import "./Events.css";

function Events() {
  return (
    <div className="Events-main">
      <header className="Events-header">
        <img src={construct} className="constructPic" alt="logo" />
        <p className="Main-title"></p>
      </header>
    </div>
  );
}
export default Events;
