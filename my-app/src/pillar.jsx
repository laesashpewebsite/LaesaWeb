import React, { Component } from 'react';
import column from './pictures/Column-crop.png';
import { number } from 'prop-types';

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
    name: "Leadership Development",
    definition: "something"
  },
  {
    number: 5,
    name: "Community Outreach",
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