import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import logo from './pictures/LAESA_LOGO.png';
import './Navigation.css';

const Navigation = ({ history }) => (
  <div>
    {/*variant can only be changed from light,dark,white*/}
    <Navbar className=" custom-nav"  >
      <Navbar.Brand href="#home">
       <Link to="/">
          <img src={logo} alt="IYC Logo" height="60px" />
       </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end">
{//probabl have to make buttons now
}
          <Nav.Link eventKey={1} onClick={() => history.push("/")}>
            Main 
          </Nav.Link>

          <Nav.Link eventKey={1} onClick={() => history.push("/Events")}>
            Events 
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Navigation);
