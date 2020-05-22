// renders and adds things to the website
import React, { Component } from "react";

import Footer from "./Footer.jsx";
import "./App.css";
import "./Mobile.css";
import Navigation from "./Navigation";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes />
        <Footer className="Footer-css" />
        {/* adds footer to all pages on the website */}
      </div>
    );
  }
}
export default App;
