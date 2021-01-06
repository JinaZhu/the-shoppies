import styled from "styled-components";
import { Link } from "react-router-dom";

export const RedirectLinkContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RedirectText = styled.p`
  margin: 10px 10px 10px 0;
`;
