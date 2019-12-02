import React from 'react';
import construct from './pictures/under-construction.png';
import './Eboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Eboard() {
  return (
  
  <div className="Eboard-main">
   	<header className="Eboard-header">

    <p className='Main-title'>
    "Welcome to the E-board for the school year of 2019-2020!"
    </p>

    <Container>
      <Row> 
        <img src={construct} className="dot" alt="logo" />
      </Row>
      <Row> 
        <Col>
        <img src={construct} className="dot" alt="logo" />
        </Col> 
        <Col>
        <img src={construct} className="dot" alt="logo" />
        </Col>
      </Row>
      <Row> 
        <Col>
        <img src={construct} className="dot" alt="logo" />
        </Col> 
        <Col>
        <img src={construct} className="dot" alt="logo" />
        </Col>
        </Row>
    </Container>
        
      </header>
    </div>
  );
}
export default Eboard;