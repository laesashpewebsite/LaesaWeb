import React from "react";
import SocialMedia from "./SocialMedia.js";
import shpelogo from "./pictures/SHPE_logo_FullColor.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer-container">
      <header className="Footer-header">
        <img src={shpelogo} className="shpelogo" alt="SHPE Logo" />
        <div className="mainFooter">
          <h4>LAESA-SHPE Contact info</h4>
          <ul className="Contact">
            {/* basic info of the club for the website */}
            <li>Room #: CM-12 </li>
            <li>Email: laesashpe@gmail.com </li>
            <li>Tel: (212)-650-7220</li>
          </ul>
          <SocialMedia />
          {/* adds social meida icons to the footer*/}
        </div>
      </header>
    </div>
  );
}
export default Footer;
