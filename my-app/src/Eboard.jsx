import React from "react";
import construct from "./pictures/under-construction.png";
import "./Eboard.css";

import Logo from "./pictures/SHPE_logo_FullColor.png";
import Secretary from "./pictures/Gloria.jpg";
import EVicePresident from "./pictures/Evan.JPG";
import IVicePresident from "./pictures/Richard.png";
import Treasurer from "./pictures/Keivon.jpg";
import Members from "./Members";
const EboardList = [
  {
    Title: "Secretary",
    Name: "Gloria",
    Picture: Secretary,
    Bio: "something"
  },
  {
    Title: "Treasurer",
    Name: "Keivon",
    Picture: Treasurer,
    Bio: "Something"
  },
  {
    Title: "External Vice-President",
    Name: "Evan",
    Picture: EVicePresident,
    Bio: "Something"
  },
  {
    Title: "Internal Vice-President",
    Name: "Richard",
    Picture: IVicePresident,
    Bio: "Something"
  },
  {
    Title: "President",
    Name: "Luis",
    Picture: Logo,
    Bio: "Something"
  }
];
function Eboard() {
  return (
    <div className="Eboard-main">
      <Members></Members>
      <Members></Members>
      {/* <header className="Eboard-header">
        <img src={construct} className="constructPic" alt="logo" />
        <p className='Main-title'>
        </p>
      </header>
      */}
    </div>
  );
}
export default Eboard;
