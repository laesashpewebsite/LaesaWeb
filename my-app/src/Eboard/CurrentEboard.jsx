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
        Title: "President",
        Name: "Luis Rodriguez",
        Picture: President,
        Bio:
          "Lorem ipsum dolor sit amet, cum eu corrumpit consectetuer. Ea sit falli doming, cu eos vide oblique, ei errem neglegentur nec. Cu has adhuc vivendo phaedrum, an vel lobortis pertinax erroribus, ex sonet oblique evertitur ius. Ius porro graeco vidisse et.    ",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
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
            <h2> Meet Our Eboard from 2019-2020! </h2>
            <img
              src={Eboardpic}
              alt="Eboard and Alumni"
              className="eboard-pic"
            />
          </div>
          {/* <h2>Meet our Eboard from 2019-2020</h2>
          <img src={Eboardpic} alt="Eboard and Alumni" className="eboard-pic" /> */}
          <div className="members">
            <CardProfiles DirectorListName={this.state.EboardList} />
          </div>
        </header>
      </div>
    );
  }
}
export default EboardMembers;
