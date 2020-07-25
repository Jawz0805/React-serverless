import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./Pages/Game";
import GameOver from "./Pages/Gameover";
import Highscores from "./Pages/Highscores";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import { Container } from "./Styled/Container";
import { Main } from "./Styled/Main";
import GlobalStyle from "./Styled/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Main>
          <Container>
            <NavBar />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/highscores" component={Highscores} />
              <Route path="/gameover" component={GameOver} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </Main>
      </Router>
    </div>
  );
}

export default App;
