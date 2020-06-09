import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@material-ui/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Request extends Component {
  constructor(props) {
    super(props);
    this.workshopPoints = 15;
    this.volunteerPoints = 25;
    this.conferencePoints = 30;
    this.socialPoints = 5;
    this.state = {
      points: 0,
      eventTitle: "",
      eventType: "",
      description: "",
      date: "",
      eventHost: ""
    };
    this.getPointsRequested = this.getPointsRequested.bind(this);
    this.getDescritption = this.getDescritption.bind(this);
    this.getEventTitle = this.getEventTitle.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getEventType = this.getEventType.bind(this);
    this.getEventHost = this.getEventHost.bind(this);
  }

  handleForm = event => {
    event.preventDefault();
  };
  getEventHost = event => {
    this.setState({ eventHost: event.target.value });
  };
  getDate = event => {
    this.setState({ date: event.target.value });
  };
  getDescritption = event => {
    this.setState({ description: event.target.value });
  };
  getEventTitle = event => {
    this.setState({ eventTitle: event.target.value });
  };
  getEventType = event => {
    this.setState({ eventType: event.target.value });
  };
  getPointsRequested = event => {
    var val = 0;
    // console.log(this.state.eventType);
    if (this.state.eventType === "Workshop") {
      val = this.workshopPoints;
    } else if (this.state.eventType === "Conference") {
      val = this.conferencePoints;
    } else if (this.state.eventType === "Event") {
      val = this.volunteerPoints;
    } else if (this.state.eventType === "Social Event") {
      val = this.socialPoints;
    }
    if (this.state.eventType === "Other")
      this.setState({ points: event.target.value });
    else {
      this.setState({ points: val });
    }
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
          <tbody>
            <tr className="event-row">
              <th className="event-col">Event</th>
              <th className="event-col">Points</th>
              <th className="event-col">Description </th>
              <th className="event-col">Date</th>
              <th className="event-col">Attended</th>
            </tr>
            <tr className="event-row">
              <td className="event-col">Event</td>
              <td className="event-col">Points</td>
              <td className="event-col">Description </td>
              <td className="event-col">Date</td>
              <td className="event-col">Yes/no</td>
            </tr>
          </tbody>
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
          <tbody>
            <tr className="event-row">
              <th className="event-col">Event</th>
              <th className="event-col">Points</th>
              <th className="event-col">Description </th>
              <th className="event-col">Date</th>
              <th className="event-col">Modify</th>
            </tr>
            <tr className="event-row">
              <td className="event-col">Event</td>
              <td className="event-col">Points</td>
              <td className="event-col">Description </td>
              <td className="event-col">Date</td>
              <td className="event-col">
                <Button
                  variant="outlined"
                  style={{ padding: "10px", margin: "10px" }}
                  color="inherit"
                >
                  Edit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  pointRequested = () => {
    return (
      <table className="event-table">
        <tbody>
          <tr className="event-row">
            <th className="event-col">Descitption</th>
            <th className="event-col">points</th>
            <th className="event-col">Approve/Reject</th>
          </tr>
          <tr className="event-row">
            <td className="event-col">Descitption</td>
            <td className="event-col">points</td>
            <td className="event-col">
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
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  showWorkshop() {
    // console.log(this.state.eventType);
    if (this.state.eventType === "Workshop") {
      return (
        <Col>
          <Form.Label> Host Name</Form.Label>
          <Form.Control
            as="select"
            value={this.state.eventType}
            type="text"
            placeholder="Event"
            onChange={this.getEventType}
          ></Form.Control>
        </Col>
      );
    }
  }

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
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="input"
                value={this.state.description}
                type="text"
                placeholder="Description"
                onChange={this.getDescritption}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Date</Form.Label>
              <Form.Control
                as="input"
                value={this.state.date}
                type="date"
                onChange={this.getDate}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Event Type</Form.Label>
              <Form.Control
                as="select"
                value={this.state.eventType}
                type="text"
                placeholder="Event"
                onChange={this.getEventType}
              >
                <option>Event</option>
                <option>Workshop</option>
                <option>Social Event</option>
                <option>Conference</option>
                <option>Other</option>
              </Form.Control>
            </Col>
            {/* {console.log(this.state.eventType)} */}
            {this.showWorkshop()}

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

            <Button
              variant="outlined"
              color="inherit"
              style={{ padding: "10px", margin: "10px" }}
            >
              Create Event
            </Button>
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
          {/* {this.listOfMembers()} */}
          {/* {this.assignRoles()} */}
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
