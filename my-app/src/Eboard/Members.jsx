import React, { Component } from "react";
import "./Members.css";

import Logo from "./../pictures/SHPE_logo_FullColor.png";
import Secretary from "./../pictures/Gloria.jpeg";
import EVicePresident from "./../pictures/Evan.JPG";
import IVicePresident from "./../pictures/Richard.png";
import Treasurer from "./../pictures/Keivon.jpg";

var num = 4;
const EboardList = [
  {
    Title: "Secretary",
    Name: "Gloria",
    Picture: Secretary,
    Bio:
      "My name is Gloria Hernandez Navarrete and I am a fourth-year civil engineering student at the City College of New York. I am on the Executive Board of LAESA-SHPE as secretary for the 2019-2020 academic school year. I can proudly say that thanks to the sacrifices of my parents and those before me, I am pursuing my childhood dreams. Education is a basic human right that no individual should be denied. A lot is to come this year for our team, but I am looking forward to it all!"
  },
  {
    Title: "Treasurer",
    Name: "Keivon",
    Picture: Treasurer,
    Bio:
      "Currently, I am a Sophomore Electrical Engineering major. I have had the privilege of being recognized as someone despite the difference in the background but as a member of the amazing Familia of LAESA. Despite my time with LAESA I have committed to multiple positions and found the value of being an active member of this organization. I am a firm believer that everyone who I have met or encountered, no matter how brief, has had an impact on my life and helped in my search of the ideal version of myself for better or for worse."
  },
  {
    Title: "External Vice-President",
    Name: "Evan",
    Picture: EVicePresident,
    Bio:
      "Hello everyone, my name is Evan Vasquez and I am this year’s External Vice President. I am a Senior studying Computer Science with a minor in Mathematics, I am excited to have this opportunity and finally give back to the chapter that gave me so much throughout my years as a member. Fun fact about me , I am the undefeated chess champion of LAESA."
  },
  {
    Title: "Internal Vice-President",
    Name: "Richard",
    Picture: IVicePresident,
    Bio:
      "My name is Richard Martinez and I am this year’s Internal Vice President. I am currently a sophomore studying Electrical Engineering. Something interesting about myself Is that I was previously an electrician and got the opportunity to work in a Union named Local 3. This opportunity helped me realize that I wanted to explore the depths of what an electrician truly does and that was to learn the mathematical methods and not just the technical skills."
  },
  {
    Title: "President",
    Name: "Luis",
    Picture: Logo,
    Bio:
      "Lorem ipsum dolor sit amet, cum eu corrumpit consectetuer. Ea sit falli doming, cu eos vide oblique, ei errem neglegentur nec. Cu has adhuc vivendo phaedrum, an vel lobortis pertinax erroribus, ex sonet oblique evertitur ius. Ius porro graeco vidisse et.    "
  }
];
class Members extends Component {
  constructor(props) {
    super(props);
  }
  getName() {
    return EboardList[num].Name;
  }
  getBio() {
    return EboardList[num].Bio;
  }
  getPic() {
    return EboardList[num].Picture;
  }
  getTitle() {
    return EboardList[num].Title;
  }
  inc() {
    if (num == 0) num = 4;
    else num--;
  }

  render() {
    return (
      <div className="MainEboard">
        <header className="membersHeader">
          <div>
            <img
              src={this.getPic()}
              width="10%"
              height="10%"
              alt="Eboard_member"
              className="eboardPic"
            />
            <h4 className="Title">
              {this.getTitle()}: {this.getName()}
            </h4>
            <p className="bio">{this.getBio()}</p>
          </div>
          {this.inc()}
        </header>
      </div>
    );
  }
}
export default Members;
