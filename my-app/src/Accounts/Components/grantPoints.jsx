import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "@material-ui/core";

export default class grantPoints extends Component {
  constructor(props) {
    super(props);

    this.recruitPoints = 10;
    this.examPoints = 10;
    this.quizPoints = 5;
    this.paperPoints = 5;
    this.state = {
      eventType: "Academic Donation",
      points: 0,
      donation: "Paper",
      recruitName: "",
      description: ""
    };
    this.getEventType = this.getEventType.bind(this);
  }
  handleForm = event => {
    event.preventDefault();
  };
  getDonation = event => {
    this.setState({ donation: event.target.value });
  };
  getRecruitName = event => {
    this.setState({ recruitName: event.target.value });
  };
  getDescritption = event => {
    this.setState({ description: event.target.value });
  };
  getPointsRequested = event => {
    var val = 0;
    // console.log(this.state.eventType);
    if (this.state.eventType === "Academic Donation") {
      if (this.state.donation === "Paper") {
        val = this.paperPoints;
      } else if (this.state.donation === "Exam") {
        val = this.examPoints;
      } else if (this.state.donation === "Quizzes") {
        val = this.quizPoints;
      }
    } else if (this.state.eventType === "Recruit") {
      val = this.recruitPoints;
    }
    if (val === 0) this.setState({ points: event.target.value });
    else {
      this.setState({ points: val });
    }
  };
  getEventType = event => {
    this.setState({ eventType: event.target.value });
  };
  showExtraColumn = () => {
    if (this.state.eventType === "Academic Donation") {
      return (
        <Col>
          <Form.Label>What Was Donated?</Form.Label>
          <Form.Control
            as="select"
            value={this.state.donation}
            type="text"
            placeholder="Grant Points to who?"
            onChange={this.getDonation}
          >
            <option>Exam</option>
            <option>Quizzes</option>
            <option>Paper</option>
            <option>Other</option>
          </Form.Control>
        </Col>
      );
    } else if (this.state.eventType === "Recruit") {
      return (
        <Col>
          <Form.Label>Recruited who?</Form.Label>
          <Form.Control
            as="input"
            value={this.state.recruitName}
            type="text"
            placeholder="Name"
            onChange={this.getRecruitName}
          ></Form.Control>
        </Col>
      );
    } else {
      return (
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="input"
            value={this.state.description}
            type="text"
            placeholder="description"
            onChange={this.getDescritption}
          ></Form.Control>
        </Col>
      );
    }
  };

  grantPoints = () => {
    return (
      <Form onSubmit={this.handleForm}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                as="input"
                value={this.state.eventTitle}
                type="text"
                placeholder="Grant Points to who?"
                onChange={this.getEventTitle}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="select"
                value={this.state.eventType}
                type="text"
                placeholder="Reason"
                onChange={this.getEventType}
              >
                <option>Academic Donation</option>
                <option>Won Social Event</option>
                <option>Recruit</option>
                <option>Other</option>
              </Form.Control>
            </Col>
            {this.showExtraColumn()}
            <Col>
              <Form.Label>Points</Form.Label>
              <Form.Control
                as="input"
                value={this.state.points}
                type="number"
                placeholder="How Many Points?"
                onChange={this.getPointsRequested}
              ></Form.Control>
            </Col>
            <Col>
              <Button
                variant="outlined"
                color="inherit"
                style={{ padding: "10px", margin: "10px" }}
              >
                Grant Points
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    );
  };

  listOfMembers() {
    return (
      <div>
        <h3>Member Points</h3>
        <table className="event-table">
          <tbody>
            <tr className="event-row">
              <th className="event-col">Name</th>
              <th className="event-col">Total Points</th>
              <th className="event-col">Role</th>
              <th className="event-col">Academic Donation</th>
              <th className="event-col">Event 1</th>
              <th className="event-col">Event 2</th>
            </tr>
            <tr className="event-row">
              <td className="event-col">Name</td>
              <td className="event-col">0</td>
              <td className="event-col"> </td>
              <td className="event-col">0/5</td>
              <td className="event-col">Event 1</td>
              <td className="event-col">Event 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.grantPoints()}

        {this.listOfMembers()}
      </div>
    );
  }
}
