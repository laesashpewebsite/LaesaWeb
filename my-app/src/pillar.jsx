// where is this being used??
import React, { Component } from "react";
import AcademicDevelopment from "./pictures/PillarsFolder/AcademicDevelopment.jpg";
import ProfessionalDevelopment from "./pictures/PillarsFolder/ProfessionalDevelopment.jpg";
import ChapterDevelopment from "./pictures/PillarsFolder/ChapterDevelopment.jpg";
import LeadershipDevelopment from "./pictures/PillarsFolder/LeadershipDevelopment.jpg";
import CommunityOutreach from "./pictures/PillarsFolder/CommunityOutreach.jpg";
import Slides from "./Events/Fade.jsx";

class Pillar extends Component {
  state = {
    pillarArray: [
      {
        number: 1,
        Name: "Academic Development",
        Definition:
          "At LAESA we strive and encourage each and everyone of our members to be the best students that they can be and support each other academically by providing tutoring our resources.",
        img: AcademicDevelopment
      },
      {
        number: 2,
        Name: "Professional Development",
        Definition:
          "We help each other grow by providing support in areas where\
          Academia cannot help you like: public speaking, resume \
          building, and interview prep.",
        img: ProfessionalDevelopment
      },
      {
        number: 3,
        Name: "Chapter Development",
        Definition: "something",
        img: ChapterDevelopment
      },
      {
        number: 4,
        Name: "Leadership Development",
        Definition:
          "We provide many opportunities for our members to be leaders with in or outside the club that helps them grow and prepare them for challenges that they may face in the future.",
        img: LeadershipDevelopment
      },
      {
        number: 5,
        Name: "Community Outreach",
        Definition:
          "We are always pushing and reaching out to our communities to spread our values and awareness of engineering ",
        img: CommunityOutreach
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Slides tileData={this.state.pillarArray} />
      </React.Fragment>
    );
  }
}

export default Pillar;
