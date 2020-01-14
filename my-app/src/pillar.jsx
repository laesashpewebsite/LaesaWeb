import React, { Component } from "react";
import "./pillar.css";
//import pillars from "./pictures/Column.png";

var num = 4;
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
    name: "title",
    definition: "something"
  },
  {
    number: 5,
    name: "title",
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
