import React from "react";
import { Route, Switch } from "react-router-dom";

// import Navigation from "./Navigation";
import Main from "./Main";
import Eboard from "./Eboard/CurrentEboard";
import FLL from "./Events/FLL";
import PCED from "./Events/PCED.jsx"; // to see difference change to App.js
import SHPE_JR from "./Events/shpeJR";
import Events from "./Calendar";
import CareerSummit from "./Events/CareerSummit";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/Main" component={Main} />
    <Route path="/Eboard" component={Eboard} />
    <Route path="/FLL" component={FLL} />
    <Route path="/PCED" component={PCED} />
    <Route path="/SHPE.JR" component={SHPE_JR} />
    <Route path="/Events" component={Events} />
    <Route path="/Careersummit" component={CareerSummit} />
  </Switch>
);
