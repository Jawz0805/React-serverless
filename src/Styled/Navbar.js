import Styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = Styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const StyledNavBrand = Styled.div`
    font-size: 1.4rem;
    & > a {
        text-decoration: none;
    }
`;

export const StyledNavItems = Styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
`;

export const StyledLink = Styled(Link)`
    text-decoration: none;
    &:hover{
        color: #e16365;
    }
`;
