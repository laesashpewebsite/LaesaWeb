import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@material-ui/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestPoints: 0,
      eventTitle: "",
      description: ""
    };
    this.getPointsRequested = this.getPointsRequested.bind(this);
    this.getDescritption = this.getDescritption.bind(this);
    this.getEventTitle = this.getEventTitle.bind(this);
  }

  handleForm = event => {
    event.preventDefault();
    //Adds to the events list
    //update events list
  };
  getDescritption = event => {
    this.setState({ description: event.target.value });
  };
  getEventTitle = event => {
    this.setState({ eventTitle: event.target.value });
  };

  getPointsRequested = event => {
    this.setState({ requestPoints: event.target.value });
  };
  memberView = title => {
    // for regulr members
    if (title === "" || title === "Director") {
      return (
        <React.Fragment>
          {this.eventMembersLists()}
          {this.memberLog()}
        </React.Fragment>
      );
    }
  };
  eventMembersLists = () => {
    return (
      <React.Fragment>
        <h3>LAESA Events</h3>
        <table className="event-table">
          <tr className="event-row">
            <th className="event-col">Event</th>
            <th className="event-col">Points</th>
            <th className="event-col">Description </th>
            <th className="event-col">Date</th>
            <th className="event-col">Attended</th>
          </tr>
          <tr className="event-row">
            <th className="event-col">Event</th>
            <th className="event-col">Points</th>
            <th className="event-col">Description </th>
            <th className="event-col">Date</th>
            <th className="event-col">Yes/no</th>
          </tr>
        </table>
        <Button
          variant="outlined"
          style={{ padding: "10px", margin: "10px" }}
          color="inherit"
        >
          Request Points
        </Button>
      </React.Fragment>
    );
  };
  eBoardLog = () => {
    return (
      <div>
        <h3>Log</h3>
        <ul>
          <li className="lists points-log">
            Rejected Daniel Gaston 10pts for Event 3
          </li>
        </ul>
      </div>
    );
  };
  memberLog = () => {
    return (
      <div>
        <h3>Log</h3>
        <ul>
          <li className="lists points-log">
            You have been granted 10pts for Event 3
          </li>
        </ul>
      </div>
    );
  };
  eventLists = () => {
    return (
      <div>
        <h3>Events Created</h3>
        <table className="event-table">
          <tr className="event-row">
            <th className="event-col">Event</th>
            <th className="event-col">Points</th>
            <th className="event-col">Description </th>
            <th className="event-col">Date</th>
            <th className="event-col">Modify</th>
          </tr>
          <tr className="event-row">
            <th className="event-col">Event</th>
            <th className="event-col">Points</th>
            <th className="event-col">Description </th>
            <th className="event-col">Date</th>
            <th className="event-col">
              <Button
                variant="outlined"
                style={{ padding: "10px", margin: "10px" }}
                color="inherit"
              >
                Edit
              </Button>
            </th>
          </tr>
        </table>
      </div>
    );
  };
  pointRequested = () => {
    return (
      <table className="event-table">
        <tr className="event-row">
          <th className="event-col">Descitption</th>
          <th className="event-col">points</th>
          <th className="event-col">Approve/Reject</th>
        </tr>
        <tr className="event-row">
          <th className="event-col">Descitption</th>
          <th className="event-col">points</th>
          <th className="event-col">
            <Button
              variant="outlined"
              style={{ padding: "10px", margin: "10px" }}
              color="inherit"
            >
              Approve
            </Button>
            <Button
              variant="outlined"
              style={{ padding: "10px", margin: "10px" }}
              color="inherit"
            >
              Reject
            </Button>
          </th>
        </tr>
      </table>
    );
  };
  addEvent = () => {
    return (
      <Form onSubmit={this.handleForm}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Event</Form.Label>
              <Form.Control
                as="input"
                value={this.state.eventTitle}
                type="text"
                placeholder="Event"
                onChange={this.getEventTitle}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Points Value</Form.Label>
              <Form.Control
                as="input"
                value={this.state.requestPoints}
                type="number"
                placeholder="How Many Points?"
                onChange={this.getPointsRequested}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="input"
                value={this.state.description}
                type="text"
                placeholder="Description"
                onChange={this.getDescritption}
              ></Form.Control>
            </Col>
            <Col>
              <Button
                variant="outlined"
                color="inherit"
                style={{ padding: "10px", margin: "10px" }}
              >
                Create Event
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    );
  };
  eboardView = title => {
    if (
      title === "President" ||
      title === "Secretary" ||
      title === "Treasurer" ||
      title === "External Vice-President " ||
      title === "Internal Vice-President"
    ) {
      return (
        <div>
          {this.addEvent()}
          {this.eventLists()}
          {this.pointRequested()}
          {this.eBoardLog()}
        </div>
      );
    }
  };
  render(props) {
    return (
      <div className="events-standard">
        {this.memberView(this.props.MembersRole)}
        {this.eboardView(this.props.MembersRole)}
      </div>
    );
  }
}
export default Request;
