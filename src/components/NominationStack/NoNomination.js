import React from "react";

import { StackContainer } from "./styled";
import { RedirectLink } from "../../globalStyles";

const NoNominations = () => {
  return (
    <StackContainer>
      <p>There are no nominations yet</p>
      <RedirectLink to="/">Nominate a movie</RedirectLink>
    </StackContainer>
  );
};

export default NoNominations;
