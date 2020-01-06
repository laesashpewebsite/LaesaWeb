import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="Main-socialIcons">
      <div className="social-links">
        <SocialIcon
          className="pos-social"
          url="https://www.instagram.com/laesa_shpe/"
          bgColor="#D23F26"
          fgColor="#ffffff"
        />
        <SocialIcon
          className="pos-social"
          url="https://www.facebook.com/LaesaShpe/"
          bgColor="#D23F26"
          fgColor="#ffffff"
        />
        <SocialIcon
          className="pos-social"
          url="https://www.linkedin.com/company/laesa-shpe/about/"
          bgColor="#D23F26"
          fgColor="#ffffff"
        />
      </div>
    </div>
  );
}

export default SocialMedia;
