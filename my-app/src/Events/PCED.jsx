import React, { Component } from "react";
import "./Events.css";
import CardProfiles from "./CardProfiles";
// import EventItem from "./EventItem.jsx";

import PCED_Director from "../pictures/Arelis.png";
import PCED_Director2 from "../pictures/Derwick.jpg";
// import { compose } from "@material-ui/system";

class PCED extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    DirectorList: [
      {
        id: 1,
        Title: "PCED Director",
        Name: "Arelis Fienco",
        Picture: PCED_Director,
        Bio:
          "Born and raised in Guayaquil, Ecuador. Arelis has been part of LAESA-SHPE\
          since her freshman year in 2016 at The City College of New York. She\
          started fulfilling SHPE's mission by starting with SHPE Jr. and directing\
          Noche de Ciencias at Manhattan Bridges High \
          School in April 2017. The following academic year, she became part\
          of the PCED 2018 team by creating a meaningful project along her \
          team that exposed high school students to leadership and real-life\
          experiences. Last academic year, Arelis was part of the Executive\
          Board for LAESA, serving as the External Vice-President. This year\
          Arelis is the SHPE-NYC Sub-Regional Student Representative where she\
          forms the bridge of communication between chapters across NYC. She\
          is also directing Pre-College Engineering Day 2020 where her team's\
          goals are listed below "
      },
      {
        id: 2,
        Title: "PCED CoDirector",
        Name: "Derwick ",
        Picture: PCED_Director2,
        Bio:
          "I'm a Civil Engineering major at CCNY, some of my contributions for\
        the club are Co-director for the 26th PCED and Office manager, some\
        the reasons I picked these positions are because I like to be\
        organized and also work on self-development. Some hobbies that I'm\
        into are basketball, health ( mental and physical), reading books on\
        personal growth and listening to podcast. Laesa-shpe has opened many\
        doors for new opportunities, adventures and friends. I am grateful\
        for coming across this great organization."
      }
    ]
  };
  render() {
    return (
      <div className="Events-main">
        <header className="Events-header">
          {/*could probably use a banner instead for the event*/}
          <div className="Events-GROUP-PIC">
            <h1> Pre-College Engineering Day </h1>
          </div>
          <div className="card-color2">
            <h2> About </h2>
            <p>
              LAESA–SHPE is the largest and most prominent undergraduate student
              organization at The City College of New York. In 1983, a group of
              dedicated students, with the goal to unite all Latino and other
              minority engineering students, share cultural ideas, and promote
              leadership, founded LAESA within City College. In 1986, LAESA
              joined forces with the Society of Hispanic Professional Engineers
              (SHPE) to better achieve their goals and connect with a larger
              body of professionals. This partnership has flourished over the
              years and today, LAESA is a firm supporter of the SHPE core
              values, while remaining true to its original mission. With over
              150 members, LAESA-SHPE has been able to gather motivated students
              from all engineering disciplines and a diverse pool of cultural
              backgrounds. This dynamic group of students, alongside their
              highly supportive alumni members, has had many achievements at The
              City College of New York and within the community.
            </p>
          </div>
          <div className="card-color">
            <h2>Goal</h2>
            <p>
              "The goal of PCED is to expose the younger Latino community to
              STEM related careers (Science, Technology, Engineering and
              Mathematics) while obtaining real-life project experience, and
              developing team-building and leadership skills"
            </p>
          </div>
          <CardProfiles DirectorListName={this.state.DirectorList} />
          <div className="card-color2">
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
            <h4>Director Contact Info</h4>
            <ul className="Contact">
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
