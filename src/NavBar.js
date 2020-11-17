import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Text from "./Text.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Core from "./Core.js";
import Footer from "./Footer.js";

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div class="content">
          <div class="vertical center">
            <div class="right">
              <Link className="space" style={{ textDecoration: "none" }} to="/">
                Home
              </Link>

              <Link
                className="space"
                style={{ textDecoration: "none" }}
                to="/about"
              >
                About
              </Link>

              <Link
                className="space"
                style={{ textDecoration: "none" }}
                to="/contact"
              >
                Contact
              </Link>
            </div>

            <div class="left">
              <h3>Liang Jie Zhang</h3>
            </div>
          </div>
          <hr />
          <div class="body">
            <Route exact path="/" component={Core} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default NavBar;
