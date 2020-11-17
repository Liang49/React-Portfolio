import React from "react";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <NavBar />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
