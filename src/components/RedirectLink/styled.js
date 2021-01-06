import styled from "styled-components";
import { Link } from "react-router-dom";

export const RedirectLinkContainer = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RedirectText = styled.p`
  margin: 10px 10px 10px 0;
  font-size: 25px;

  @media screen and (max-width: 500px) {
    margin: 5px 5px 5px 40px;
    font-size: 17px;
  }
`;
