import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";

import logo from './pictures/LAESA_LOGO.png';
import './Navigation.css';

const Navigation = ({ history }) => (
  <div className= "Navigation">
    <Navbar className=" custom-nav">
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
          
          <NavDropdown title="Events" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">PCED</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SHPE JR.</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">FLL</NavDropdown.Item>         
          </NavDropdown>
          <Nav.Link eventKey={1} onClick={() => history.push("/Eboard")}>
            Events 
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Navigation);
