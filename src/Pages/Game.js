import React from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../Styled/Game";
import { Strong } from "../Styled/Random";

const Game = () => {
  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>0</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time: <Strong>00:00</Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
