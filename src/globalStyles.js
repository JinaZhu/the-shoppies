import styled from "styled-components";
import { Link } from "react-router-dom";

export const RedirectLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 30px;
  border: 2px solid white;
  padding: 10px;
  background-color: white;

  &:hover {
    box-shadow: 0 0 10px white, 0 0 40px white, 0 0 80px white;
  }
`;
