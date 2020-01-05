import React from "react";
import "./Eboard.css";
import Members from "./Members";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Eboard() {
  return (
    <div className="Eboard-main">
      <header className="Eboard-header">
        <div className="members">
          <Container>
            <Row>
              <Members> what if i type inside this</Members>
            </Row>
            <Row>
              <Col>
                <Members></Members>
              </Col>
              <Col>
                <Members></Members>
              </Col>
            </Row>
            <Row>
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
