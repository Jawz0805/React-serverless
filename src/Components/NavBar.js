import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../Styled/Navbar";
import { StyledNavBrand } from "../Styled/Navbar";
import { StyledNavItems } from "../Styled/Navbar";
import { StyledLink } from "../Styled/Navbar";
import { Accent } from "../Styled/Random";

export default function NavBar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to="/">
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/home">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highscores">HighScores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
