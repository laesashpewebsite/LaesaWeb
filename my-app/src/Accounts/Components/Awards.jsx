import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "@material-ui/core";
class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      description: ""
    };
  }
  handleForm = event => {
    event.preventDefault();
  };
  getTitle = e => {
    this.setState({ title: e.target.value });
  };
  getDescritption = e => {
    this.setState({ description: e.target.value });
  };
  getLink = e => {
    this.setState({ link: e.target.value });
  };
  memberView = title => {
    if (title === "" || title === "Director") {
      return <div>{this.showAwards()}</div>;
    }
  };

  showAwards = () => {
    return (
      <div>
        <h3>Scholarship/Awards</h3>
        <table className="event-table">
          <tbody>
            <tr className="event-row">
              <th className="event-col">Awards/Scholarship</th>
              <th className="event-col">Description</th>
              <th className="event-col">Due Date</th>
            </tr>
            <tr className="event-row">
              <td className="event-col">Title</td>
              <td className="event-col">description</td>
              <td className="event-col">Date</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  addAwards = () => {
    return (
      <Form onSubmit={this.handleForm}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Scholarship</Form.Label>
              <Form.Control
                as="input"
                value={this.state.title}
                type="text"
                placeholder="Title"
                onChange={this.getTitle}
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
              <Form.Label>Link/Apply</Form.Label>
              <Form.Control
                as="input"
                value={this.state.link}
                type="text"
                placeholder="Link"
                onChange={this.getLink}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                as="input"
                value={this.state.link}
                type="date"
                placeholder="Date"
                onChange={this.getLink}
              ></Form.Control>
            </Col>
            <Col>
              <Button
                variant="outlined"
                color="inherit"
                style={{ padding: "10px", margin: "10px" }}
              >
                Add
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
          {this.addAwards()}
          {this.showAwards()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="events-standard">
        {this.memberView(this.props.MembersRole)}
        {this.eboardView(this.props.MembersRole)}
      </div>
    );
  }
}
export default Awards;
