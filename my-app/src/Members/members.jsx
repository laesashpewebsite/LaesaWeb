import React, { Component } from "react";
import PCED_Group from "../pictures/PCED_Pictures/Group.JPG";
import GraduatesFiles from "./gradLists.jsx";
import Venmo from "../pictures/Venmo.jpg";
import Membership from "../pictures/Membership_Form.png";
import "./members.css";

import Henry from "../pictures/Graduates/Henry.png";
import Evan from "../pictures/Evan.JPG";
class Members extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    GradList: [
      {
        id: 1,
        // Title: "PCED Co-Director",
        Name: "Henry Guaman",
        Picture: Henry,
        Bio: "Acceptance"
      },
      {
        id: 2,
        // Title: "PCED Co-Director",
        Name: "Evan Vazquez",
        Picture: Evan,
        Bio: ""
      }
    ]
  };

  render() {
    return (
      <div className="members-Main">
        <header className="members-header">
          <div className="members-banner">
            <h2> Want To Become A Member? </h2>
            <img src={PCED_Group} className="Events-Picture" alt="PCED Group" />
          </div>

          <div className="card-color2">
            <h2>Registration Process</h2>
            <p>Follow the steps below to become a member!!</p>
            <div className="Row">
              <div className="Column1 columns">
                <h3> Step 1: Join our mailing list </h3>
                <p>
                  Fill out the form below so we can include you in our mailing
                  list and be updated of any on going events
                </p>
                <div style={{ textAlign: "center" }}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4tOh8jAuZJOYMdrewHTL7kUIDsXJDzHYQtgH4sJ4bCHLrcQ/viewform">
                    <img src={Membership} width="40%" />
                  </a>
                </div>
              </div>

              <div className="Column1 columns">
                <h3> Step 2: Membership Fee </h3>
                <p>
                  Our Membership fee goes towards events like General Body
                  Meetings, food, and resources for the club room which you can
                  use
                  <br />
                  Amount: $15
                </p>
                <div style={{ textAlign: "center" }}>
                  <a href="https://venmo.com/laesa_shpe?via=searchbox">
                    <img src={Venmo} width="40%"></img>
                  </a>
                </div>
              </div>

              <div className="Column1 columns">
                <h3>Step 3: Join Slack </h3>
                <p>
                  Have one of our Eboard memebers reach out to you so you can
                  join our slack channel and meet the familia
                </p>
              </div>
            </div>
          </div>

          <div className="Gallery">
            <div className="card-color">
              <h2>Graduating Class of Spring 2020</h2>
              <p>
                We want to congratulate our Graduating Seniors of Spring 2020
                for all the hard work they put into their education. You are,
                and will forever be apart of this Familia. LAESA will continue
                to grow bigger and keep on becoming a better organization for
                improving each and everyone academically and professionally!!
                Congrats to the stars that couldn't shine at graduation.
              </p>
              <GraduatesFiles
                tileData={this.state.GradList}
                key={this.state.GradList.id}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Members;
