import React from "react";

import NominationStack from "../../components/NominationStack";
import {
  NomineesContainer,
  LeftSwipeImg,
  RightSwipeImg,
  SwipeDirectionContainer,
  SwipeContainer,
} from "./styled";

const Nominees = () => {
  return (
    <NomineesContainer>
      <NominationStack />
      <SwipeDirectionContainer>
        <SwipeContainer>
          <p>Swipe left to view next nomination movie poster</p>
          <LeftSwipeImg />
        </SwipeContainer>
        <SwipeContainer>
          <p>Swipe right to remove movie from nominations</p>
          <RightSwipeImg />
        </SwipeContainer>
      </SwipeDirectionContainer>
    </NomineesContainer>
  );
};

export default Nominees;
