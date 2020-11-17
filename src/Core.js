import React from "react";
import Project from "./Project.js";
import Match from "./Match.png";
import Footer from "./Footer.js";

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      quotes: ""
    };
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data[random].text
        });
        console.log(data[random]);
      });
    const random = Math.floor(Math.random() * 10);
  }

  render() {
    return (
      <div>
        <div class="tests">
          <h1 className="quotation">"{this.state.quote}"</h1>
          <h3>Project that makes a differences</h3>

          <Project img={Match} />
        </div>
      </div>
    );
  }
}

export default Core;
