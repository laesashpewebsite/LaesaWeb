import React, { Component } from "react";
import "./Events.css";

import CS_Director from "../pictures/Kayley.jpg";
import CS_DIrector2 from "../pictures/Valentin.jpg";
// import PCEDPicture1 from "../pictures/PCED_Pictures/Students.jpg";
// import PCEDPicture2 from "../pictures/PCED_Pictures/Directors2019.jpg";
// import PCEDPicture3 from "../pictures/PCED_Pictures/Workshop.jpg";
// import PCEDPicture4 from "../pictures/PCED_Pictures/Volunteers.jpg";
// import PCEDPicture5 from "../pictures/PCED_Pictures/Volunteers2.jpg";
// import PCEDPicture6 from "../pictures/PCED_Pictures/Volunteers3.jpg";
// import PCEDPicture7 from "../pictures/PCED_Pictures/Winners.jpg";
// import PCEDPicture8 from "../pictures/PCED_Pictures/Teams.jpg";
// import PCEDPicture9 from "../pictures/PCED_Pictures/Competition.jpg";
import Main from "../pictures/PillarsFolder/ProfessionalDevelopment.jpg";

import CardProfiles from "./CardProfiles";
class CareerSummit extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    DirectorList: [
      {
        id: 1,
        Title: "Career Summit Co-Director",
        Name: "Kayley Arias",
        Picture: CS_Director,
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
        Picture: CS_DIrector2,
        Bio:
          "My name is Valentin Martinez a Civil Engineering Graduate 19’ with a focus on Structural Engineering. I’ve been involved with LAESA-SHPE since my sophomore year and have held multiple positions within the organization: FIRST Lego League Director 17’, SHPE Jr. Director 17’, Internal Vice President 18’, and the Career Summit Director 19’.  LAESA-SHPE changes lives by impacting and influencing the Hispanic community, and building you up to become a professional leader. And, I’ve had the privilege to be part of this movement #SHPE4LIFE",
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
          <div className="Events-Banner">
            <h2> Career Summit </h2>
            <img
              src={Main}
              className="Events-Picture"
              alt="Career Summit Group "
            />
          </div>


          <div className="box2">
    <div className="Row">

    <div className="Column1">
            <h2> About </h2>
            <p>
              {" "}
              The Career Summit is a mock conference for many of our members and
              other students at CCNY we host this event so our members can get
              practice talking to recruiters and getting their resume's
              critiqued by real recruiters in the industry that we bring over
              for thie event.
            </p>
          </div>
          <div className="Column1">
            <h2>Mission</h2>
            <p>
              "Our mission is to prepare our members for the real world and
              become better candidates when applying for jobs/internships by
              helping them improve on their public speaking, resume, or
              interview skills"
            </p>
          </div>
          </div>
          </div>


          <div className="card-color2">
            {/* <h2>Gallery</h2>

            {/* this here displays the picture that are in the array FFLPictures
            by inputing it into Component GalleryPic */}
            {/* /   <GalleryPic tileData={this.state.PCEDPictures} /> */}
          </div>{" "}
          <div className="card-color">
            <h2>Meet Our Directors!</h2>
          </div>
          {/* instantiates CardProfiles with items in array Directorlists */}
          <CardProfiles
            DirectorListName={this.state.DirectorList}
            key={this.state.DirectorList.id}
          />
          
          <div className="card-color2">
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
