import React, { Component } from "react";
import PCED_Group from "../pictures/PCED_Pictures/Group.JPG";
import GraduatesFiles from "./gradLists.jsx";

class Members extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    GradList: [
      {
        id: 1,
        // Title: "PCED Co-Director",
        Name: "Arelis Fienco",
        Picture: PCED_Group,
        Bio: ""
      },
      {
        id: 2,
        // Title: "PCED Co-Director",
        Name: "Evan Vazquez",
        Picture: PCED_Group,
        Bio: ""
      }
    ]
  };

  render() {
    return (
      <div className="Events-Main">
        <header className="Events-header">
          <div className="Events-Banner">
            <h2> Want To Become A Member? </h2>
            <img src={PCED_Group} className="Events-Picture" alt="PCED Group" />
          </div>

          <div className="card-color2">
            <div className="Row">
              <div className="Column1">
                <h2> Membership Fee </h2>
                <p>
                  Our Membership fee goes towards events like General Body
                  Meetings, food, and resources for the club room which you can
                  use!
                  <br />
                  Amount: $15
                </p>
              </div>

              <div className="Column1">
                <h2> Join our mailing list and Slack channel! </h2>
                <p></p>
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