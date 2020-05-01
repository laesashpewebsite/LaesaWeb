//used for the navigation bar on top of each page
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import logo from "./pictures/LAESA_LOGO.png";
import "./Navigation.css";
// import { makeStyles } from "@material-ui/core/styles";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  handleOpen = () => {
    this.setState({ isOpen: true }); //sets isOpen to true
  };

  handleClose = () => {
    this.setState({ isOpen: false }); //sets isOpen to false
  };

  render() {
    // const classes = useStyles();

    const history = this.props.history;
    return (
      <Navbar className="custom-nav" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="LAESA_LOGO" height="90px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link
              style={{ color: "#D23F26" }}
              eventKey={1}
              onClick={() => history.replace("/Main")}
            >
              Main
            </Nav.Link>
            <NavDropdown
              title={<span className="nav-dropdown">Events</span>}
              onMouseEnter={this.handleOpen} //if hovering over invoke handleOpen function
              onMouseLeave={this.handleClose} //if not hovering over invoke handleClose function
              show={this.state.isOpen} // if isOpen is true show if false do not show
              component="p"
            >
              <div className="events-css">
                <NavDropdown.Item
                  className="eventsDropdownItem"
                  eventKey={1}
                  onClick={() => history.replace("/Events")}
                >
                  Calendar
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="eventsDropdownItem"
                  eventKey={1}
                  onClick={() => history.replace("/PCED")}
                >
                  PCED
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="eventsDropdownItem"
                  eventKey={1}
                  onClick={() => history.replace("/SHPE.JR")}
                >
                  SHPE JR.
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="eventsDropdownItem"
                  eventKey={1}
                  onClick={() => history.replace("/FLL")}
                >
                  FLL
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="eventsDropdownItem"
                  eventKey={1}
                  onClick={() => history.replace("/Careersummit")}
                >
                  Career Summit
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link
              style={{ color: "#D23F26" }}
              eventKey={1}
              onClick={() => history.replace("/Eboard")}
            >
              Eboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(Navigation);
