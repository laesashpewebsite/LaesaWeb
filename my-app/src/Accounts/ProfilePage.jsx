import React, { Component } from "react";
import Profile from "./Profile";
import PCED_Director from "../pictures/empty-profile-pic.png";
// import PointsSystem from "./Components/PointsSystem";
import MenuBar from "./Components/MenuBar";
import "./Accounts.css";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
      DirectorList: [
        {
          id: 1,
          Title: "",
          Name: "Daniel Gaston",
          Picture: PCED_Director,
          // Points:1,
          Bio:
            "I was born and raised in Guayaquil, Ecuador. I have been part of LAESA-SHPE since my freshman year in 2016 at The City College of New York. I started fulfilling SHPE's mission by starting with SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High School in April 2017. The following academic year, I became part of the PCED 2018 team by creating a meaningful project along with my  team that exposed high school students to leadership and real-life experiences. Last academic year, I was part of the Executive Board for LAESA, serving as the External Vice-President. This year I'm the SHPE-NYC Sub-Regional Student Representative where I form the bridge of communication between chapters across NYC. I'm also directing Pre-College Engineering Day 2020 where our team's goals are listed below ",
          styles: {
            backgroundColor: "#72a9be",
            color: "#282c34"
          },
          newColor: { color: "black" }
        }
      ]
    };
  }

  render() {
    return (
      <div className="card-color2">
        {/* <div className="profiles"> */}
        <Profile Members={this.state.DirectorList}></Profile>
        <MenuBar
          MembersPoints={this.state.DirectorList[0].Points}
          MembersRole={this.state.DirectorList[0].Title}
        />
        {/* </div> */}
      </div>
    );
  }
}

export default ProfilePage;
