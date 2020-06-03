import React from "react";
import {Route, Switch} from "react-router-dom";

// import Navigation from "./Navigation";
import Main from "./Main";
import Eboard from "./Eboard/Eboard";
import FLL from "./Events/FLL";
import PCED from "./Events/PCED.jsx";
import SHPE_JR from "./Events/shpeJR";
import Events from "./Calendar";
import CareerSummit from "./Events/CareerSummit";
import Members from "./Members/members";
import Login from "./Accounts/Login";
import MakeAccount from "./Accounts/MakeAccount";
import Profile from "./Accounts/ProfilePage";

export default() => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/Main" component={Main}/>
        <Route path="/Eboard" component={Eboard}/>
        <Route path="/FLL" component={FLL}/>
        <Route path="/PCED" component={PCED}/>
        <Route path="/SHPE.JR" component={SHPE_JR}/>
        <Route path="/Events" component={Events}/>
        <Route path="/CareerSummit" component={CareerSummit}/>
        <Route path="/Members" component={Members}/>
        <Route path="/Login" component={Login}/>
        <Route path="/MakeAccount" component={MakeAccount}/>
        <Route path="/Profile" component={Profile}/>

    </Switch>
);
