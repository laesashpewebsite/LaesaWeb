import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "@material-ui/core";
// import {Link} from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Accounts.css";
class MakeAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      verifyPassword: ""
      // check:1
    };
    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getLastName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getVerifyPassword = this.getVerifyPassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
    // this.handleClick= this.handleClick.bind(this)
  }

  getFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  getLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  getEmail = event => {
    this.setState({ email: event.target.value });
  };
  getPassword = event => {
    this.setState({ password: event.target.value });
  };
  getVerifyPassword = event => {
    this.setState({ verifyPassword: event.target.value });
  };
  submitForm = event => {
    event.preventDefault();

    // console.log(this.state.password, "also here")
    if (this.state.firstName === "") {
      alert("Enter a password");
    }
    if (this.state.password === this.state.verifyPassword) {
      this.setState({ firstName: "" });
      this.setState({ lastName: "" });
      this.setState({ email: "" });
      this.setState({ password: "" });
      this.setState({ verifyPassword: "" });
    }
  };
  // handleClick=()=>{
  //     this.setState({check:2})
  //     console.log(this.state.check)
  // }

  render() {
    return (
      <React.Fragment>
        {/* {console.log(this.state.password, "is here")} */}
        <div className="card-color extra-style">
          <Form className="formStyles" onSubmit={this.submitForm}>
            <Form.Group>
              <Form.Label>Enter Name</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    as="input"
                    type="text"
                    placeholder="First name"
                    onChange={this.getFirstName}
                    value={this.state.firstName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    as="input"
                    value={this.state.lastName}
                    type="text"
                    placeholder="Last name"
                    onChange={this.getLastName}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                type="email"
                placeholder="Enter email"
                onChange={this.getEmail}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Create Password</Form.Label>
              <Form.Control
                value={this.state.password}
                type="password"
                placeholder="Password"
                onChange={this.getPassword}
              />
            </Form.Group>
            <Form.Group controlId="formBasicVerifyPassword">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control
                value={this.state.verifyPassword}
                type="password"
                placeholder="Password"
                onChange={this.getVerifyPassword}
              />
            </Form.Group>
            <Button
              variant="outlined"
              type="submit"
              color="inherit"
              // onClick={this.onSubmit}
            >
              Submit
            </Button>
            {this.state.check}
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
export default MakeAccount;
