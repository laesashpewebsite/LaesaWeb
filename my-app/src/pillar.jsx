import React, { Component } from "react";
import "./pillar.css";

import column from "./pictures/Column-crop.png";
import { number } from "prop-types";

var num = 4;
const pillarArray = [
  {
    number: 1,
    name: "Academic Development",
    definition: "something"
  },
  {
    number: 2,
    name: "Professional Development",
    definition: "something"
  },
  {
    number: 3,
    name: "Chapter Development",
    definition: "something"
  },
  {
    number: 4,
    name: "title",
    name: "Leadership Development",
    definition: "something"
  },
  {
    number: 5,
    name: "title",
    name: "Community Outreach",
    definition: "something"
  }
];

class Pillar extends Component {
  getName() {
    return pillarArray[num].name;
  }
  getDefinition() {
    return pillarArray[num].name;
  }
  increment() {
    if (num === 0) num = 4;
    else num--;
  }
  getName(pillarArray) {
    return this.pillarArray.name;
  }

  render() {
    return (
      <div>
        <header className="backgroundPillar">
          {
            //<img src={pillars} />
          }
          <div>
            <h3>{this.getName()}</h3>
            <p className="info"> {this.getDefinition()}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Pillar;
