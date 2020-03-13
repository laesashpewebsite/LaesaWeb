import React, { Component } from "react";
import "./Members.css";
import PCED_Director from "./pictures/Arelis.png";
import PCED_Director2 from "./pictures/Derwick.jpg";


var num = 2;
const DirectorList = [
  {
    Title: "PCED Director",
    Name: "Arelis Fienco",
    Picture: PCED_Director,
    Bio:
      "Born and raised in Guayaquil, Ecuador. Arelis has been part of
      LAESA-SHPE since her freshman year in 2016 at The City College of
      New York. She started fulfilling SHPE's mission by starting with
      SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High
      School in April 2017. The following academic year, she became part
      of the PCED 2018 team by creating a meaningful project along her
      team that exposed high school students to leadership and real-life
      experiences. Last academic year, Arelis was part of the Executive
      Board for LAESA, serving as the External Vice-President. This year
      Arelis is the SHPE-NYC Sub-Regional Student Representative where she
      forms the bridge of communication between chapters across NYC. She
      is also directing Pre-College Engineering Day 2020 where her team's
      goals are listed below"
  },
  {
    Title: "PCED CoDirector",
    Name: "Derwick ",
    Picture: PCED_Director2,
    Bio:
      "I'm a Civil Engineering major at CCNY, some of my contributions for
      the club are Co-director for the 26th PCED and Office manager, some
      the reasons I picked these positions are because I like to be
      organized and also work on self-development. Some hobbies that I'm
      into are basketball, health ( mental and physical), reading books on
      personal growth and listening to podcast. Laesa-shpe has opened many
      doors for new opportunities, adventures and friends. I am grateful
      for coming across this great organization."
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
    Picture: President,
    Bio:
      "Lorem ipsum dolor sit amet, cum eu corrumpit consectetuer. Ea sit falli doming, cu eos vide oblique, ei errem neglegentur nec. Cu has adhuc vivendo phaedrum, an vel lobortis pertinax erroribus, ex sonet oblique evertitur ius. Ius porro graeco vidisse et.    "
  }
];
class Members extends Component {
  getName() {
    return DirectorList[num].Name;
  }
  getBio() {
    return DirectorList[num].Bio;
  }
  getPic() {
    return DirectorList[num].Picture;
  }
  getTitle() {
    return DirectorList[num].Title;
  }
  inc() {
    if (num === 0) num = 4;
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