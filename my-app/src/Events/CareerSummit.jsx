import React, { Component } from "react";
import "./Events.css";

import PCED_Director from "../pictures/Arelis.png";
import PCED_Director2 from "../pictures/Derwick.jpg";
// import PCEDPicture1 from "../pictures/PCED_Pictures/Students.jpg";
// import PCEDPicture2 from "../pictures/PCED_Pictures/Directors2019.jpg";
// import PCEDPicture3 from "../pictures/PCED_Pictures/Workshop.jpg";
// import PCEDPicture4 from "../pictures/PCED_Pictures/Volunteers.jpg";
// import PCEDPicture5 from "../pictures/PCED_Pictures/Volunteers2.jpg";
// import PCEDPicture6 from "../pictures/PCED_Pictures/Volunteers3.jpg";
// import PCEDPicture7 from "../pictures/PCED_Pictures/Winners.jpg";
// import PCEDPicture8 from "../pictures/PCED_Pictures/Teams.jpg";
// import PCEDPicture9 from "../pictures/PCED_Pictures/Competition.jpg";

import CardProfiles from "./CardProfiles";
import GalleryPic from "../Gallery";
class CareerSummit extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    DirectorList: [
      {
        id: 1,
        Title: "Career Summit Co-Director",
        Name: "Kayley Arias",
        Picture: PCED_Director,
        Bio:
          "Hi my name is Kayley Arias and I am a senior majoring in chemical engineering. I joined LAESA-SHPE in my second year in college. Upon joining this organization, I volunteered at numerous events and obtained various leadership positions. I was the secretary for the 2018-2019 academic year. I had the opportunity to speak to high school students, middle school students, and their parents about SHPE, college, and what a career in engineering entails. This organization has provided me with mentors, scholarships, and has helped me acquire the professional skills to land internships and full-time opportunities. LAESA-SHPE has taught me so much which is why I continue to be actively involved to make sure that others acquire the resources and skills they need to become successful professionals. I will continue to be actively involved even after I graduate.",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
        id: 2,
        Title: "Career Summit Co-Director",
        Name: "Valentin Martinez",
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
    ]
    //,
    //  PCEDPictures: [
    //   {
    //     img: PCEDPicture1,
    //     title: "PCED Image1",
    //     author: "N/A",
    //     cols: 1
    //   },
    //   {
    //     img: PCEDPicture2,
    //     title: "PCED Image2",
    //     author: "N/A",
    //     cols: 2
    //   },
    //   {
    //     img: PCEDPicture3,
    //     title: "PCED Image3",
    //     author: "N/A",
    //     cols: 3
    //   },
    //   {
    //     img: PCEDPicture4,
    //     title: "PCED Image4",
    //     author: "N/A",
    //     cols: 3
    //   },
    //   {
    //     img: PCEDPicture5,
    //     title: "PCED Image5",
    //     author: "N/A",
    //     cols: 3
    //   },
    //   {
    //     img: PCEDPicture6,
    //     title: "PCED Image6",
    //     author: "N/A",
    //     cols: 3
    //   },
    //   {
    //     img: PCEDPicture7,
    //     title: "PCED Image7",
    //     author: "N/A",
    //     cols: 3
    //   },
    //   {
    //     img: PCEDPicture8,
    //     title: "PCED Image8",
    //     author: "N/A",
    //     cols: 3
    //   },
    //   {
    //     img: PCEDPicture9,
    //     title: "PCED Image9",
    //     author: "N/A",
    //     cols: 3
    //   }
    // ]
  };
  render() {
    return (
      <div className="Events-Main">
        <header className="Events-header">
          {/*could probably use a banner instead for the event*/}
          <div className="CareerSummit-GROUP-PIC">
            <h1> Career Summit </h1>
          </div>
          <div className="card-color2">
            <h2> About Career Summit</h2>
            <p>Career Summit stufff</p>
          </div>
          <div className="card-color">
            <h2>Mission</h2>
            <p>Mission Career Smmmit</p>
          </div>
          <div className="Gallery">
            <h2>Gallery</h2>

            {/* this here displays the picture that are in the array FFLPictures
            by inputing it into Component GalleryPic */}
            {/* /   <GalleryPic tileData={this.state.PCEDPictures} /> */}
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
export default CareerSummit;