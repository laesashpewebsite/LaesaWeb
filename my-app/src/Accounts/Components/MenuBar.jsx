import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PointsSystem from "./PointsSystem.jsx";
import Awards from "./Awards.jsx";
import GrantPoints from "./grantPoints.jsx";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Events"
    };
  }

  ClickMenuBar = onPage => {
    this.setState({ page: onPage });
  };
  showMenuBar = () => {
    if (this.state.page === "Events") {
      return (
        <PointsSystem
          MembersPoints={this.props.MembersPoints}
          MembersRole={this.props.MembersRole}
        />
      );
    }
    if (this.state.page === "Awards") {
      return (
        <Awards
          MembersPoints={this.props.MembersPoints}
          MembersRole={this.props.MembersRole}
        ></Awards>
      );
    }
    if (this.state.page === "Points") {
      return (
        <GrantPoints
          MembersPoints={this.props.MembersPoints}
          MembersRole={this.props.MembersRole}
        ></GrantPoints>
      );
    }
  };
  render() {
    return (
      <div className="card-color extra-style">
        <div className="menu-btn">
          <Button
            onClick={() => this.ClickMenuBar("Events")}
            variant="outlined"
            color="inherit"
            style={{ padding: "10px", margin: "10px" }}
          >
            Events
          </Button>
          <Button
            onClick={() => this.ClickMenuBar("Awards")}
            variant="outlined"
            color="inherit"
            style={{ padding: "10px", margin: "10px" }}
          >
            Scholarships/Awards
          </Button>
          <Button
            onClick={() => this.ClickMenuBar("Points")}
            variant="outlined"
            color="inherit"
            style={{ padding: "10px", margin: "10px" }}
          >
            Points
          </Button>
          {this.showMenuBar()}
        </div>
      </div>
    );
  }
}

export default MenuBar;
