import React from "react";
import { Fade } from "react-slideshow-image";

import "./Fade.css";
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
  infinite: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {}
};
function sideBar(title) {
  if (title != null) return <h2>{title}</h2>;
}

export default function Slideshow(props) {
  return (
    <React.Fragment>
      <Fade {...fadeProperties}>
        {props.tileData.map(tile => (
          <div className="each-fade" key={tile.id}>
            <div className="image-container">
              <img src={tile.img} alt={tile.alt} />
            </div>
            {sideBar(tile.Name)}
          </div>
        ))}
      </Fade>
    </React.Fragment>
  );
}
