import React, { Component } from 'react';
import PCED_Director from "./pictures/Arelis.png";
import PCED_Director2 from "./pictures/Derwick.jpg";


var num = 0;
const DirectorList = [
  {
    Title: "PCED Director",
    Name: "Arelis Fienco",
    Picture: PCED_Director,
    Bio:
      "Born and raised in Guayaquil, Ecuador. Arelis has been part of LAESA-SHPE since her freshman year in 2016 at The City College of New York. She started fulfilling SHPE's mission by starting with SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High"
      // School in April 2017. The following academic year, she became part
      // of the PCED 2018 team by creating a meaningful project along her
      // team that exposed high school students to leadership and real-life
      // experiences. Last academic year, Arelis was part of the Executive
      // Board for LAESA, serving as the External Vice-President. This year
      // Arelis is the SHPE-NYC Sub-Regional Student Representative where she
      // forms the bridge of communication between chapters across NYC. She
      // is also directing Pre-College Engineering Day 2020 where her team's
      // goals are listed below"
  },
  {
    Title: "PCED CoDirector",
    Name: "Derwick ",
    Picture: PCED_Director2,
    Bio:
      "I'm a Civil Engineering major at CCNY, some of my contributions for"
      // the club are Co-director for the 26th PCED and Office manager, some
      // the reasons I picked these positions are because I like to be
      // organized and also work on self-development. Some hobbies that I'm
      // into are basketball, health ( mental and physical), reading books on
      // personal growth and listening to podcast. Laesa-shpe has opened many
      // doors for new opportunities, adventures and friends. I am grateful
      // for coming across this great organization."
  }
];

class Director extends Component {
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
    if (num === 1) num = 0;
    else num++;
  }

  render() {
    return (
      <div >
        <header>
          <div>
            <img
              src={this.getPic()}
              width="10%"
              height="10%"
              alt="Eboard_member"
            />
            <h4>
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
export default Director;