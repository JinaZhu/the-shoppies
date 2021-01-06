import React from "react";

import { RedirectLink } from "../../globalStyles";
import { MaxNominationsContainer } from "./styled";

const isMaxNominationsReached = () => {
  return (
    <MaxNominationsContainer>
      <p>Head over to the nominee page to view and edit nominations</p>
      <RedirectLink to="/nominees">To nominations</RedirectLink>
    </MaxNominationsContainer>
  );
};

export default isMaxNominationsReached;
