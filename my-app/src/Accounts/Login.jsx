import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="card-color extra-style">
                <Form className="formStyles ">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    
                    <Button variant="outlined" type="submit" color="inherit" style={{padding:"10px",margin:"10px"}}>
                        Login
                    </Button>
                    <Link to="MakeAccount" style={{textDecoration:"none" ,color:"inherit"}}>
                        <Button variant="outlined" color="inherit" style={{padding:"10px",margin:"10px"}}>
                            Make Account
                        </Button>
                    </Link>
                </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;