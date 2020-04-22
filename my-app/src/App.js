// renders and adds things to the website
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./Footer.jsx";
import "./App.css";

import Navigation from "./Navigation";
import Main from "./Main";
import Eboard from "./Eboard/CurrentEboard";
import FLL from "./Events/FLL";
import PCED from "./Events/PCED.jsx"; // to see difference change to App.js
import SHPE_JR from "./Events/shpeJR";
import Events from "./Calendar";
import CareerSummit from "./Events/CareerSummit";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          {/* adds navigation to all pages */}

          <Route exact path="/" component={Main} />
          <Route path="/Main" component={Main} />
          <Route path="/Eboard" component={Eboard} />
          <Route path="/FLL" component={FLL} />
          <Route path="/PCED" component={PCED} />
          <Route path="/SHPE.JR" component={SHPE_JR} />
          <Route path="/Events" component={Events} />
          <Route path="/Careersummit" component={CareerSummit} />

          {/* adds these routes so the website can connect to these pages by clicking on links */}

          <Footer className="Footer-css" />
          {/* adds footer to all pages on the website */}
        </div>
      </Router>
    );
  }
}
export default App;
