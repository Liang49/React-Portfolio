import React from "react";
import Match from "./Match.png";
import tic from "./tic.png";
import pac from "./pac.jpg";
import frogger from "./frogger.jpg";
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: [
        {
          id: 0,
          img: 0,
          text: "hello"
        },

        {
          id: 1,
          img: 1,
          text: "hi"
        },
        {
          id: 2,
          img: 2
        }
      ]
    };
  }

  render() {
    return (
      <div class="test">
        <div class="resppnsive">
          <div class="gallery">
            <img className="icon" src={Match} alt="web" />
            <div class="text">
              <h3>Memory Game</h3>
              Match the tile
              <p>
                <a href="https://liang49.github.io/Memory-Game/">View</a>
              </p>
            </div>
          </div>
        </div>
        <div class="resppnsive">
          <div class="gallery">
            <img className="icon" src={frogger} alt="game" />
            <div class="text">
              <h3>Frogger Game</h3>
              Reach the end
              <p>
                <a href="https://liang49.github.io/arcade-game-masters/">
                  View
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="resppnsive">
          <div class="gallery">
            <img className="icon" src={pac} alt="pixel" />
            <div class="text">
              <h3>Pixel</h3>
              Draw on Canvas
              <p>
                <a href="https://github.com/Liang49/pixel">View</a>
              </p>
            </div>
          </div>
        </div>
        <div class="resppnsive">
          <div class="gallery">
            <img className="icon" src={tic} alt="tic-tac-toe" />
            <div class="text">
              <h3>Tic-Tac-Toe</h3>
              Player Vs Player
              <p>
                <a href="https://ei5ch.csb.app/">View</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
