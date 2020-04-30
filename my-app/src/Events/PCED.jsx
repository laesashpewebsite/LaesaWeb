import React, { Component } from "react";
import "./Events.css";
import Slides from "./Fade.jsx";
import PCED_Director from "../pictures/Arelis.png";
import PCED_Director2 from "../pictures/Derwick.jpg";
import PCEDPicture1 from "../pictures/PCED_Pictures/Students.jpg";
import PCEDPicture2 from "../pictures/PCED_Pictures/Directors2019.jpg";
import PCEDPicture3 from "../pictures/PCED_Pictures/Workshop.jpg";
import PCEDPicture4 from "../pictures/PCED_Pictures/Volunteers.jpg";
import PCEDPicture5 from "../pictures/PCED_Pictures/Volunteers2.jpg";
import PCEDPicture6 from "../pictures/PCED_Pictures/Volunteers3.jpg";
import PCEDPicture7 from "../pictures/PCED_Pictures/Winners.jpg";
import PCEDPicture8 from "../pictures/PCED_Pictures/Teams.jpg";
import PCEDPicture9 from "../pictures/PCED_Pictures/Competition.jpg";

import PCED_Group from "../pictures/PCED_Pictures/Group.JPG";
import CardProfiles from "./CardProfiles";
// import GalleryPic from "../Gallery";
// import { Slide } from "@material-ui/core";

class PCED extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    DirectorList: [
      {
        id: 1,
        Title: "PCED Co-Director",
        Name: "Arelis Fienco",
        Picture: PCED_Director,
        Bio:
          "I was born and raised in Guayaquil, Ecuador. I have been part of LAESA-SHPE\
       since my freshman year in 2016 at The City College of New York. I\
       started fulfilling SHPE's mission by starting with SHPE Jr. and directing\
        Noche de Ciencias at Manhattan Bridges High \
        School in April 2017. The following academic year, I became part\
        of the PCED 2018 team by creating a meaningful project along with my \
        team that exposed high school students to leadership and real-life\
        experiences. Last academic year, I was part of the Executive\
        Board for LAESA, serving as the External Vice-President. This year\
        I'm the SHPE-NYC Sub-Regional Student Representative where I\
        form the bridge of communication between chapters across NYC. I'm\
        also directing Pre-College Engineering Day 2020 where our team's\
        goals are listed below",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
        id: 2,
        Title: "PCED Co-Director",
        Name: "Derwick Hernandez",
        Picture: PCED_Director2,
        Bio:
          "I'm a Civil Engineering major at CCNY, some of my contributions for\
      the club are Co-director for the 26th PCED and Office manager, some\
      the reasons I picked these positions are because I like to be\
      organized and also work on self-development. Some hobbies that I'm\
      into are basketball, health ( mental and physical), reading books on\
      personal growth and listening to podcast. Laesa-shpe has opened many\
      doors for new opportunities, adventures and friends. I am grateful\
      for coming across this great organization.",
        styles: {
          backgroundColor: "rgb(0, 31, 91, 100)",
          color: "#f26534"
        }
      }
    ],

    PCEDPictures: [
      {
        id: 1,
        img: PCEDPicture1,
        title: "PCED Image1",
        author: "N/A",
        cols: 1
      },
      {
        id: 2,
        img: PCEDPicture2,
        title: "PCED Image2",
        author: "N/A",
        cols: 2
      },
      {
        id: 3,
        img: PCEDPicture3,
        title: "PCED Image3",
        author: "N/A",
        cols: 3
      },
      {
        id: 4,
        img: PCEDPicture4,
        title: "PCED Image4",
        author: "N/A",
        cols: 3
      },
      {
        id: 5,
        img: PCEDPicture5,
        title: "PCED Image5",
        author: "N/A",
        cols: 3
      },
      {
        id: 1,
        img: PCEDPicture6,
        title: "PCED Image6",
        author: "N/A",
        cols: 3
      },
      {
        id: 6,
        img: PCEDPicture7,
        title: "PCED Image7",
        author: "N/A",
        cols: 3
      },
      {
        id: 7,
        img: PCEDPicture8,
        title: "PCED Image8",
        author: "N/A",
        cols: 3
      },
      {
        id: 8,
        img: PCEDPicture9,
        title: "PCED Image9",
        author: "N/A",
        cols: 3
      }
    ]
  };

  render() {
    return (
      <div className="Events-Main">
        <header className="Events-header">
          {/*could probably use a banner instead for the event*/}
          <div className="Events-Banner">
            <h2> Pre-College Engineering Day </h2>
            <img src={PCED_Group} className="Events-Picture" alt="PCED Group" />
          </div>

          <div className="box2">
            <div className="Row">
              <div className="Column1">
                <h2> About </h2>
                <p>
                  PCED is one of our largest and most memorable events that we
                  host every year. We reach out to our community and invite High
                  School students throughout New York City to our City College
                  campus. We allow them the opportunity to engage and learn
                  about Engineering fields by providing them with workshops,
                  speakers, and a friendly competition that has them build their
                  own project and compete with it.
                </p>
              </div>

              <div className="Column1">
                <h2> Mission </h2>
                <p>
                  PCED's Mission is to expose the younger Latino community to
                  STEM related careers (Science, Technology, Engineering and
                  Mathematics) while obtaining real-life project experience, and
                  developing team-building and leadership skills
                </p>
              </div>
            </div>
          </div>

          <div className="Gallery">
            {/* Slide show starts here */}
            {/* To change images in slide show just change its origin url. everything else is automatic! */}
            <div className="box1">
              <div className="slide-container">
                {/* Title */}
                <h2> PCED'S Gallery </h2>
                <Slides
                  tileData={this.state.PCEDPictures}
                  key={this.state.PCEDPictures.id}
                />
              </div>
            </div>
          </div>

          <div className="card-color2">
            <h2>Meet Our Directors!</h2>
          </div>
          {/* instantiates CardProfiles with items in array Directorlists */}

          <CardProfiles
            DirectorListName={this.state.DirectorList}
            key={this.state.DirectorList.id}
          />

          <div className="card-color2">
            <h2>Goals</h2>
            <ul className="lists">
              <li className="events-list">Host event for 350+ students.</li>
              <li className="events-list">
                Provide leadership, team-building, and managing experience to
                both attendees and volunteers.{" "}
              </li>
              <li className="events-list">
                Establish a stronger relationship with alumni and corporations
                to be involved in future PCED events.
              </li>
              <li className="events-list">Raise female ratio by 10%.</li>
              <li className="events-list">
                Introduce the importance of sustainability.
              </li>
              <li className="events-list">
                Provide a diversity of minority ethnicities for future STEM
                jobs.{" "}
              </li>
            </ul>
          </div>

          <div className="card-color">
            <h2>Director Contact Info</h2>
            <ul className="lists">
              <li className="events-list">P: 917-392-4710 </li>
              <li className="events-list">Email: laesa.pced@gmail.com </li>
              <li className="events-list">
                Personal: arelisfienco@outlook.com
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default PCED;
