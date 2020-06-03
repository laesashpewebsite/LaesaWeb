import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Accounts.css"
class MakeAccount extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <React.Fragment>
            <div className="card-color">
                <Form className="formStyles ">
                    <Form.Group controlId="text">
                        <Form.Label>Enter Name</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name"/>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>

                    <Button variant="outlined" type="submit" color="inherit">
                        Submit
                    </Button>
                    
                </Form>
                </div>
            </React.Fragment>
            
        );   
        

    }
}
export default MakeAccount;