//This is for the social media Icons that can be added anywhere throughout the website

import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="Main-socialIcons">
      <div className="social-links">
        <SocialIcon
          // automatically changes to a default social media icon based on the url.
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
