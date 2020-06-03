import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from "@material-ui/core";
// import {Link} from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Accounts.css"
class MakeAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            verifyPassword: ""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.getFirstName = this.getFirstName.bind(this)
        this.getLastName = this.getLastName.bind(this)
        this.getEmail = this.getEmail.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.getVerifyPassword = this.getVerifyPassword.bind(this)

    }
    onSubmit = () => {
        console.log(this.state.password, "also here")
        if (this.state.firstName === "") {
            console.log(this.state.password, "also here")
            alert("Enter a password")
        }
        if (this.state.password === this.state.verifyPasssword) {

            this.setState({ firstName: "" })
            this.setState({ lastName: "" })
            this.setState({ email: "" })
            this.setState({ password: "" })
            this.setState({ verifyPasssword: "" })
        }
    }
    getFirstName = (e) => {
        this.setState({ firstName: e.target.value })
    }
    getLastName = (e) => {
        this.setState({ lastName: e.target.value })
    }
    getEmail =
        (e) => {
            this.setState({ email: e.target.value })
        }
    getPassword = (e) => {
        this.setState({ email: e.target.value })
    }
    getVerifyPassword = (e) => {
        this.setState({ email: e.target.value })
    }

    render() {

        return (
            <React.Fragment>
                {/* {console.log(this.state.password, "is here")} */}
                <div className="card-color extra-style">
                    <Form className="formStyles ">
                    <Form.Group >
                        <Form.Label>Enter Name</Form.Label>
                        <Row>
                            <Col>
                                    <Form.Control
                                        value={this.state.firstName}
                                        type="text" placeholder="First name"
                                        onChange={() => this.getFirstName} />
                            </Col>
                            <Col>
                                    <Form.Control
                                        as="input"
                                        value={this.state.lastName}
                                        type="text" placeholder="Last name"
                                        onChange={() => this.getLastName} />
                            </Col>
                        </Row>                                </Form.Group>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={this.state.email}
                                type="email"
                                placeholder="Enter email" 
                                onChange={() => this.getEmail} />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Create Password</Form.Label>
                            <Form.Control
                                value={this.state.password}
                                type="password"
                                placeholder="Password"
                                onChange={() => this.getPassword} />
                        </Form.Group>
                        <Form.Group controlId="formBasicVerifyPassword">
                            <Form.Label>Verify Password</Form.Label>
                            <Form.Control
                                value={this.state.verifyPassword}
                                type="password"
                                placeholder="Password"
                                onChange={() => this.getVerifyPassword} />
                        </Form.Group>

                        <Button
                            variant="outlined"
                            type="submit"
                            color="inherit"
                            onClick={() => this.onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </React.Fragment>

        );

    }
}
export default MakeAccount;