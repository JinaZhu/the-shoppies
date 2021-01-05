import React from "react";

import { MoreInfoContainer } from "./styled";

const MoreInfo = ({ moviePoster, movieID, selectedMovie, isOpen }) => {
  function revealDetail(id) {
    if (id === selectedMovie && isOpen) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <MoreInfoContainer isActive={revealDetail(movieID)}>
      <img src={moviePoster} width="150" alt="movie poster" />
    </MoreInfoContainer>
  );
};

export default MoreInfo;
