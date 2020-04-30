import React from "react";
import SocialMedia from "./SocialMedia.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shpelogo from "./pictures/SHPE_logo_FullColor.png";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment className="Footer-container">
      <header className="Footer-header">
        <Container>
          <Row>
            <Col>
              <img src={shpelogo} className="shpelogo" alt="SHPE Logo" />
            </Col>
            <Col className="info">
              <h4>LAESA-SHPE Contact info</h4>
              <ul className="Contact">
                <li>Room #: CM-12 </li>
                <li>Email: laesashpe@gmail.com </li>
                <li>Tel: (212)-650-7220</li>
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
