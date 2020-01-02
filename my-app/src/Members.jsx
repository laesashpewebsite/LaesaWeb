import React, { Component } from "react";

import Logo from "./pictures/SHPE_logo_FullColor.png";

class Members extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <img src={Logo} width="15%" height="30%" alt="Eboard_memeber" />
            <h3 className="Title">Title</h3>
            <p>Eboard Bio goes here</p>
          </div>
        </header>
      </div>
    );
  }
}
export default Members;
