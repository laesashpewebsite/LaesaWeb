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
          <Container className="contWidth">
            <div>
              <Row className="color1">
                <Members></Members>
                {/* This calls a member and adds eboard memeber profile. */}
              </Row>
            </div>
            <div>
              <Row className="color2">
                <Col>
                  <Members></Members>
                </Col>
                <Col>
                  <Members></Members>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="color1">
                <Col>
                  <Members></Members>
                </Col>
                <Col>
                  <Members></Members>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </header>
    </div>
  );
}
export default Eboard;
