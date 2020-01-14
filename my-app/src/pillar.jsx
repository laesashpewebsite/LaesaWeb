import React, { Component } from "react";
import column from "./pictures/Column-crop.png";
import { number } from "prop-types";

const pillarArray = [
  {
    number: 1,
    name: "Leadership",
    definition: "something"
  },
  {
    number: 2,
    name: "Scholarship",
    definition: "something"
  },
  {
    number: 3,
    name: "Community",
    definition: "something"
  },
  {
    number: 4,
    name: "",
    definition: "something"
  },
  {
    number: 5,
    name: "",
    definition: "something"
  }
];

class Pillar extends Component {
  constructor() {
    super(this);
  }
  getName(pillarArray) {
    return this.pillarArray.name;
  }

  render() {
    return (
      <div>
        <header className="backgroundPillar">
          <div>
            <h3>{this.getName}</h3>
          </div>
        </header>
      </div>
    );
  }
}
