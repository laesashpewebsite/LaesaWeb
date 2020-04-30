import React, { Component } from "react";

import Eboardpic from "../pictures/Eboard_Alumni.png";

import President from "./../pictures/Luis.png";
import Secretary from "./../pictures/Gloria.jpeg";
import EVicePresident from "./../pictures/Evan.JPG";
import IVicePresident from "./../pictures/Richard.png";
import Treasurer from "./../pictures/Keivon.jpg";
// import CardProfiles from "./Eboardprofiles";
import CardProfiles from "../Events/CardProfiles";
// import "../Events/CardProfiles.css";
import "./Eboard.css";
class EboardMembers extends Component {
  state = {
    EboardList: [
      {
        id: 1,
        Title: "President",
        Name: "Luis Rodriguez",
        Picture: President,
        Bio:
          "Hello my name is Luis Rodriguez, I am the acting President for LAESA-SHPE here at CCNY. I study electrical engineering along with mathematics and Portuguese. I have been involved in LAESA for the last two years, during which I have grown at a personal, professional and academic level. A lot of really bright-minded people gravitate towards LAESA, many of whom have taught me lessons I would not have otherwise found within the classroom. If I were to start giving shoutouts to the people that have helped develop this would pan out into an essay and not a small paragraph. I would say that my two favorite things to do after school are biking and playing music. Can’t wait to see how LAESA keeps growing as an organization and how It’ll continue to bring people from all types of background into the fold.",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
        id: 2,
        Title: "Internal Vice-President",
        Name: "Richard Martinez",
        Picture: IVicePresident,
        Bio:
          "My name is Richard Martinez and I am this year’s Internal Vice President. I am currently a sophomore studying Electrical Engineering. Something interesting about myself Is that I was previously an electrician and got the opportunity to work in a Union named Local 3. This opportunity helped me realize that I wanted to explore the depths of what an electrician truly does and that was to learn the mathematical methods and not just the technical skills.",
        styles: {
          backgroundColor: "rgb(0, 31, 91, 100)",
          color: "#f26534"
        }
      },
      {
        id: 3,
        Title: "External Vice-President",
        Name: "Evan Vazquez",
        Picture: EVicePresident,
        Bio:
          "Hello everyone, my name is Evan Vasquez and I am this year’s External Vice President. I am a Senior studying Computer Science with a minor in Mathematics, I am excited to have this opportunity and finally give back to the chapter that gave me so much throughout my years as a member. Fun fact about me , I am the undefeated chess champion of LAESA.",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
        id: 4,
        Title: "Treasurer",
        Name: "Keivon Yang",
        Picture: Treasurer,
        Bio:
          "Currently, I am a Sophomore Electrical Engineering major. I have had the privilege of being recognized as someone despite the difference in the background but as a member of the amazing Familia of LAESA. Despite my time with LAESA I have committed to multiple positions and found the value of being an active member of this organization. I am a firm believer that everyone who I have met or encountered, no matter how brief, has had an impact on my life and helped in my search of the ideal version of myself for better or for worse.",
        styles: {
          backgroundColor: "rgb(0, 31, 91, 100)",
          color: "#f26534"
        }
      },
      {
        id: 5,
        Title: "Secretary",
        Name: "Gloria Hernandez",
        Picture: Secretary,
        Bio:
          "My name is Gloria Hernandez Navarrete and I am a fourth-year civil engineering student at the City College of New York. I am on the Executive Board of LAESA-SHPE as secretary for the 2019-2020 academic school year. I can proudly say that thanks to the sacrifices of my parents and those before me, I am pursuing my childhood dreams. Education is a basic human right that no individual should be denied. A lot is to come this year for our team, but I am looking forward to it all!",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      }
    ]
  };
  render() {
    return (
      <div className="Eboard-main">
        <header className="Eboard-header">
          <div className="Eboard-Banner">
            <h1 className="Text-Banner"> Meet Our Eboard from 2019-2020! </h1>
            <img
              src={Eboardpic}
              alt="Eboard and Alumni"
              className="eboard-pic"
            />
          </div>
          <img src={Eboardpic} alt="Eboard and Alumni" className="eboard-pic" />{" "}
          */}
          <div className="members">
            <CardProfiles DirectorListName={this.state.EboardList} />
          </div>
        </header>
      </div>
    );
  }
}
export default EboardMembers;
