//used for the navigation bar on top of each page
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import logo from "./pictures/LAESA_LOGO.png";
import "./Navigation.css";

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

  render(props) {
    const history = this.props.history;
    return (
      <Navbar className=" custom-nav" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="LAESA_LOGO" height="90px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link eventKey={1} onClick={() => history.replace("Main/")}>
              Main
            </Nav.Link>
            <NavDropdown
              title="Events"
              className="eventsDropdown"
              onMouseEnter={this.handleOpen} //if hovering over invoke handleOpen function
              onMouseLeave={this.handleClose} //if not hovering over invoke handleClose function
              show={this.state.isOpen} // if isOpen is true show if false do not show
              id="collasible-nav-dropdown"
            >
              <div className="events-css">
                <NavDropdown.Item
                  className="eventsDropdownItem"
                  eventKey={1}
                  onClick={() => history.replace("/Events")}
                >
                  All Events
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
              </div>
            </NavDropdown>
            <Nav.Link eventKey={1} onClick={() => history.replace("/Eboard")}>
              Eboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(Navigation);
// }
// const Navigation = ({ history }) => (
//   <div className="Navigation">
//     <Navbar className=" custom-nav" variant="dark">
//       <Navbar.Brand href="#home">
//         <Link to="/">
//           <img src={logo} alt="LAESA_LOGO" height="90px" />
//         </Link>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
//         <Nav className="justify-content-end">
//           <Nav.Link eventKey={1} onClick={() => history.push("Main/")}>
//             Main
//           </Nav.Link>
//           <NavDropdown
//             title="Events"
//             className="eventsDropdown"
//             onMouseEnter={this.handleOpen}
//             onMouseLeave={this.handleClose}
//             open={this.state.isOpen}
//             id="collasible-nav-dropdown"
//           >
//             <div className="events-css">
//               <NavDropdown.Item
//                 className="eventsDropdownItem"
//                 eventKey={1}
//                 onClick={() => history.push("/PCED")}
//               >
//                 PCED
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 className="eventsDropdownItem"
//                 eventKey={1}
//                 onClick={() => history.push("/SHPE.JR")}
//               >
//                 SHPE JR.
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 className="eventsDropdownItem"
//                 eventKey={1}
//                 onClick={() => history.push("/FLL")}
//               >
//                 FLL
//               </NavDropdown.Item>
//             </div>
//           </NavDropdown>
//           <Nav.Link eventKey={1} onClick={() => history.push("/Eboard")}>
//             Eboard
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </div>
// );
