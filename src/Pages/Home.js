import React from "react";
import { Link } from "react-router-dom";
import CTA from "../Styled/CTA";
import { Accent, StyledTitle } from "../Styled/Random";

const Home = () => {
  return (
    <div>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to="/game">
        Click or type '<Accent>S</Accent>' to start playing!
      </CTA>
    </div>
  );
};

export default Home;
