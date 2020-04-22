import React, { Component } from "react";

import FLL_Director from "../pictures/Jean-Luc.jpg";
import FLL_Director2 from "../pictures/Cesar.jpg";
import FLL_Picture1 from "../pictures/FLL_Pictures/IMG_8317.jpg";
import FLL_Picture2 from "../pictures/FLL_Pictures/IMG_8322.jpg";
import FLL_Picture3 from "../pictures/FLL_Pictures/IMG_8315.jpg";
import FLL_Picture4 from "../pictures/FLL_Pictures/IMG_8316.jpg";
import FLL_Picture5 from "../pictures/FLL_Pictures/IMG_8309.jpg";
import FLL_Picture6 from "../pictures/FLL_Pictures/IMG_8313.jpg";

import FLL_Group from "../pictures/FLL_Pictures/IMG_8311.jpg";

import CardProfiles from "./CardProfiles";
import GalleryPic from "../Gallery";
import "./Events.css";

class FLL extends Component {
  state = {
    // directorList Array of all FLL members
    DirectorList: [
      {
        id: 1,
        Title: "FLL Co-Director",
        Name: "Jean-Luc Antoine",
        Picture: FLL_Director,
        Alts: "Jean-Luc Director",
        Bio:
          "Jean-Luc Antoine is a second-year student at The City College of New York and has been part of\
      LAESA-SHPE since the Spring 2019 semester. He has been particularly involved with FIRST(For\
      Inspiration and Recognition of Science and Technology) Lego League which is an organization\
      that creates a platform to support and help keep young elementary kids interested in STEM and\
      robotics. Jean-Luc was a volunteer in The Spring 2019 semester at the FFL event and now he is\
      the director for the FIRST Lego League program at LA in which he is organizing, coordinating\
      and planning FLL events. As part of his duties, Jean-Luc is overseeing logistics, act direct\
      communication point with event organizers and ensure that the event goes smoothly, as well\
      as recruit as many volunteers as needed.",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
        id: 2,
        Title: "FLL Co-Director",
        Name: "Ceasar Tacuri",
        Picture: FLL_Director2,
        Alts: "Ceasar Tacuri",
        Bio:
          "My name is Cesar Tacuri,and I am Civil Engineering major on his junior year. I joined\
      LAESA in Spring of 2019. Being a transfer student, it was hard adjusting to a new school\
      and a new community. As I explored my campus and its resources, I came across LAESA.\
      Throughout the next semester, I decided to become a more active member and experienced\
      what LAESA was truly about. They’re a group of students inspiring and encouraging other\
      students through a strong work ethic, accomplishments, and discipline. Personally, I wanted\
      to give new students the same tools and knowledge LAESA had given me. So, in Fall of 2019,\
      I became the co-director of Recruitment and Retention, First Lego League (FLL), and\
       Pre-College Engineering Day (PCED) Logistics. I made sure I was well known by my peers and\
      that my peers were well known, too. LAESA will forever be my life’s best chapter not only for\
      the professional development but for the friends I’ve made. I am proud to be a LAESA member.",
        styles: {
          backgroundColor: "rgb(0, 31, 91, 100)",
          color: "#f26534"
        }
      }
    ],
    // this array is a list of all the pictures taken from FLL Event
    FLLPictures: [
      {
        img: FLL_Picture1,
        title: "FLL Image1",
        author: "N/A",
        cols: 1
      },
      {
        img: FLL_Picture2,
        title: "FLL Image2",
        author: "N/A",
        cols: 2
      },
      {
        img: FLL_Picture3,
        title: "FLL Image3",
        author: "N/A",
        cols: 3
      },
      {
        img: FLL_Picture4,
        title: "FLL Image4",
        author: "N/A",
        cols: 3
      },
      {
        img: FLL_Picture5,
        title: "FLL Image5",
        author: "N/A",
        cols: 3
      }
    ]
  };
  render() {
    return (
      <div className="Events-Main">
        <header className="Events-header">
          <div className="Events-Banner">
            <h2>First LEGO League</h2>
            <img
              src={FLL_Group}
              className="Events-Picture"
              alt="FLL Group Picture"
            />
          </div>
          <div className="card-color2">
            <h2> About </h2>
            <p>
              First Lego League's mission is to inspire young adults to be
              science and technology innovators, by engaging them in exciting
              programs that help them build the necessaries skills in science,
              engineering, and technology.
            </p>
          </div>

          <div className="card-color">
            <h2>Our mission </h2>
            <p>
              "First Lego League's mission is to inspire young adults to be
              science and technology innovators, by engaging them in exciting
              programs that help them build the necessaries skills in science,
              engineering, and technology."
            </p>
          </div>
          <div className="Gallery">
            <h2>Gallery</h2>

            {/* this here displays the picture that are in the array FFLPictures
            by inputing it into Component GalleryPic */}
            <GalleryPic tileData={this.state.FLLPictures} />
          </div>

          <div className="card-color">
            <h2>Meet Our Directors!</h2>
          </div>
          {/* information taken from DirectorList array is put into CardProfiles to map out all the information needed 
          from each memberr  */}
          <CardProfiles DirectorListName={this.state.DirectorList} />
          <div className="card-color2"></div>
          <div className="card-color">
            <h2> Director Contact Info </h2>
            <ul className="lists">
              <li className="events-list">P: 347-954-7628 </li>
              <li className="events-list">Email: jeanlucmantoine@gmail.com</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default FLL;
