import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";

import logo from './pictures/LAESA_LOGO.png';
import './Navigation.css';

const Navigation = ({ history }) => (
  <div className= "Navigation">
    <Navbar className=" custom-nav" variant = "dark">
      <Navbar.Brand href="#home">
       <Link to="/">
          <img src={logo} alt="LAESA_LOGO" height="60px" />
       </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link eventKey={1} onClick={() => history.push("Main/")}>
            Main   
          </Nav.Link>
          <NavDropdown title="Events" className="eventsDropdown" id="collasible-nav-dropdown">
          <div className="events-css">
            <NavDropdown.Item className="eventsDropdownItem" eventKey={1} onClick={() => history.push("/PCED")}>
              PCED
            </NavDropdown.Item>
            <NavDropdown.Item className="eventsDropdownItem"eventKey={1} onClick={() => history.push("/SHPE.JR")}>
              SHPE JR.
            </NavDropdown.Item>
            <NavDropdown.Item className="eventsDropdownItem" eventKey={1} onClick={() => history.push("/FLL")}>
              FLL
            </NavDropdown.Item>  
          </div>       
          </NavDropdown>
          <Nav.Link eventKey={1} onClick={() => history.push("/Eboard")}>
            Eboard 
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Navigation);
