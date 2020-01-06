import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./Footer.jsx";
import "./App.css";

import Navigation from "./Navigation";
import Main from "./Main";
import Events from "./Event";
import Eboard from "./Eboard/Eboard";
import FLL from "./FLL";
import PCED from "./PCED";
import SHPE_JR from "./shpeJR";

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
          <Route path="/FLL" component={FLL} />
          <Route path="/PCED" component={PCED} />
          <Route path="/SHPE.JR" component={SHPE_JR} />
          <Footer className="Footer-css" />
        </div>
      </Router>
    );
  }
}
export default App;
