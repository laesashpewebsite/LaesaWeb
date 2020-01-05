import React from "react";
import "./Eboard.css";
import Members from "./Members";
import Eboardpic from "../pictures/Eboard_Alumni.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Eboard() {
  return (
    <div className="Eboard-main">
      <header className="Eboard-header">
        <img src={Eboardpic} alt="Eboard and Alumni" className="eboard-pic" />
        <div className="members">
          <Container className="width">
            <Row className="color1">
              <Members></Members>
            </Row>
            <Row className="color2">
              <Col>
                <Members></Members>
              </Col>
              <Col>
                <Members></Members>
              </Col>
            </Row>
            <Row className="color1">
              <Col>
                <Members></Members>
              </Col>
              <Col>
                <Members></Members>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </div>
  );
}
export default Eboard;
