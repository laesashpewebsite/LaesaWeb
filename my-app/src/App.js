import React, { Component } from "react";
import logo from './pictures/LAESA_LOGO.png';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Navigation from "./Navigation";
import Main from "./Main";
import Events from "./Event";
import Eboard from "./Eboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Main} />
          <Route path="/Main" component={Main} />
          <Route path="/Events" component={Events} />
          <Route path="/Eboard" component={Eboard} />

          
        </div>
      </Router>
    );
  }
}
export default App;
