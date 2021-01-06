import React from "react";

import arrowImg from "../../images/arrow.png";
import { RedirectLinkContainer, RedirectText } from "./styled";

const RedirectLink = ({ whereTo, toLink }) => {
  return (
    <RedirectLinkContainer to={toLink}>
      <RedirectText>To {whereTo}</RedirectText>
      <img src={arrowImg} alt="arrow redirect" height="30" />
    </RedirectLinkContainer>
  );
};

export default RedirectLink;
