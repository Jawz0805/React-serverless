import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">
          Learn.Build.<span>Type</span>
        </Link>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/highscores">HighScores</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
