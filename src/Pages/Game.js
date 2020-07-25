import React, { useState, useEffect } from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../Styled/Game";
import { Strong } from "../Styled/Random";

const Game = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((previousScore) => previousScore + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [score]);

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time: <Strong>00:00</Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
