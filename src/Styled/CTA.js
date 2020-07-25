import Styled from "styled-components";
import { Link } from "react-router-dom";

export default Styled(Link)`
    font-size: 1.5rem;
    text-align: center;
    display: block;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;
