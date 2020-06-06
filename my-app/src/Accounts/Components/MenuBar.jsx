import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PointsSystem from "./PointsSystem.jsx";
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
      return;
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
          >
            Events
          </Button>
          <Button
            onClick={() => this.ClickMenuBar("Awards")}
            variant="outlined"
            color="inherit"
          >
            Scholarships/Awards
          </Button>
          {this.showMenuBar()}
        </div>
      </div>
    );
  }
}

export default MenuBar;
