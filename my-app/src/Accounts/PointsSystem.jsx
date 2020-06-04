import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from '@material-ui/core'

class Request extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestPoints: 0
        }
    }

    handleForm = (event) => {
        event.preventDefault()

    }
    getPointsRequested = (event) => {
        this.setState({ requestPoints: event.target.value })
    }
    requestPoints = (title, points) => {
        // for regulr members
        if (title === "" || title === "Director") {
            return (
                <React.Fragment>
                    <Form onSubmit={this.handleForm}>
                        <Form.Group>
                            <Form.Label >
                                Request Points
                            </Form.Label>
                            <Form.Control
                                as="input"
                                value={this.state.requestPoints}
                                type="text"
                                placeholder="How Many Points?"
                                onChange={this.getPointsRequested}>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="outlined">request Points</Button>
                    </Form>
                </React.Fragment>
            )
        }
    }
    addPoints = (title) => {
        if (title === "President" ||
         title === "Secretary" || 
         title === "Treasurer" || 
         title === "External Vice-President "||
         title === "Internal Vice-President") {
            return (
                <React.Fragment>
                    <Button variant="outlined">helow</Button>
                </React.Fragment>
            );
        }
    }
    render(props) {
        return (
            <div>
                {console.log()}
                {this.requestPoints("")}
                {this.addPoints("")}
            </div>
        );
    }
}

export default Request;