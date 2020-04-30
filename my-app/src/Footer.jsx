import React from "react";
import SocialMedia from "./SocialMedia.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shpelogo from "./pictures/SHPE_logo_FullColor.png";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <header className="Footer-header">
        <Container>
          <Row xs={4} lg={4} md={4}>
            <Col xs={4} lg={4} md={5}>
              <img src={shpelogo} className="shpelogo" alt="SHPE Logo" />
            </Col>
            <Col className="info" xs={12} lg={5} md={7}>
              <h3>LAESA-SHPE Contact info</h3>
              <ul className="Contact">
                <li className="events-list">Room #: CM-12 </li>
                <li className="events-list">Email: laesashpe@gmail.com </li>
                <li className="events-list">Tel: (212)-650-7220</li>
              </ul>
              <SocialMedia />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        {/* 
        <div className="mainFooter">
          
          {/* adds social meida icons to the footer}
        </div> */}
      </header>
    </React.Fragment>
  );
}
export default Footer;
