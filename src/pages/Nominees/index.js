import React from "react";

import NominationStack from "../../components/NominationStack";
import {
  NomineesContainer,
  LeftSwipeImg,
  RightSwipeImg,
  SwipeDirectionContainer,
  SwipeContainer,
  NomineeNav,
  SwipeText,
} from "./styled";
import RedirectLink from "../../components/RedirectLink";
import NoNomination from "../../components/NominationStack/NoNomination";

const Nominees = () => {
  // if (!JSON.parse(localStorage.getItem("nominations"))) {
  //   return <NoNomination />;
  // }
  return (
    <NomineesContainer>
      <NomineeNav>
        <RedirectLink whereTo={"home"} toLink={"/"} />
      </NomineeNav>
      {JSON.parse(localStorage.getItem("nominations")) ? (
        <NominationStack />
      ) : (
        <NoNomination />
      )}
      <SwipeDirectionContainer>
        <SwipeContainer>
          <SwipeText>Swipe left to view next nomination movie poster</SwipeText>
          <LeftSwipeImg />
        </SwipeContainer>
        <SwipeContainer>
          <SwipeText>Swipe right to remove movie from nominations</SwipeText>
          <RightSwipeImg />
        </SwipeContainer>
      </SwipeDirectionContainer>
    </NomineesContainer>
  );
};

export default Nominees;
