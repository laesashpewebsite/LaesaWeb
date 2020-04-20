// where is this being used??
import React, { Component } from "react";
import "./pillar.css";

import column from "./pictures/Column.jpeg";
import { number } from "prop-types";

var num = 0;
const pillarArray = [
  {
    number: 1,
    Name: "Academic Development",
    Definition:
      "At LAESA we strive and encourage each and everyone of our members to be the best students that they can be and support each other academically by providing tutoring our resources."
  },
  {
    number: 2,
    Name: "Professional Development",
    Definition:
      "We help each other grow by providing support in areas where\
      Academia cannot help you like: public speaking, resume \
      reviewing, and interview prep."
  },
  {
    number: 3,
    Name: "Chapter Development",
    Definition: "something"
  },
  {
    number: 4,
    Name: "Leadership Development",
    Definition:
      "We provide many opportunities for our members to be leaders with in or outside the club that helps them grow and prepare them for challenges that they may face in the future."
  },
  {
    number: 5,
    Name: "Community Outreach",
    Definition:
      "We are always pushing and reaching out to our communities to spread our values and awareness of engineering "
  }
];

class Pillar extends Component {
  getName() {
    return pillarArray[num].Name;
  }
  getDefinition() {
    return pillarArray[num].Definition;
  }
  increment() {
    if (num === 4) num = 0;
    else num++;
  }
  // getName(pillarArray) {
  //   return this.pillarArray.name;
  // }

  render() {
    return (
      <div>
        <header className="pillar-header">
          <div className="background-Pillar">
            {/* {<img src={column} />} */}
            <div>
              <h3 className="Name">{this.getName()}</h3>
            </div>
          </div>
          <h6 className="info" style={{ textIndent: "0" }}>
            {this.getDefinition()}
          </h6>

          {this.increment()}
        </header>
      </div>
    );
  }
}

export default Pillar;
