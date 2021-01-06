import React, { useState } from "react";

import { MoreInfoContainer, NominationButton, NominationText } from "./styled";
import wreathImg from "../../images/wreath.png";

const MoreInfo = ({
  selectedMovie,
  isOpen,
  movieDetail,
  setNominations,
  isMaxNominations,
}) => {
  const [isMovieAdded, setIsMovieAdded] = useState(movieDetail.isAdded);
  function revealDetail(id) {
    if (id === selectedMovie && isOpen) {
      return true;
    } else {
      return false;
    }
  }

  function addNomination(nominatedMovieDetail) {
    let movieID = nominatedMovieDetail.imdbID;
    const nomination = { [movieID]: nominatedMovieDetail };
    if (!localStorage.getItem("nominations")) {
      localStorage.setItem("nominations", JSON.stringify(nomination));
    } else {
      const allNominations = JSON.parse(localStorage.getItem("nominations"));
      allNominations[movieID] = nominatedMovieDetail;
      localStorage.setItem("nominations", JSON.stringify(allNominations));
    }
    movieDetail.isAdded = true;
    setNominations(JSON.parse(localStorage.getItem("nominations")));
    setIsMovieAdded(true);
  }

  function removeNomination(movieID) {
    const nominations = JSON.parse(localStorage.getItem("nominations"));
    delete nominations[movieID];
    localStorage.setItem("nominations", JSON.stringify(nominations));
    movieDetail.isAdded = false;
    setIsMovieAdded(false);
    setNominations(JSON.parse(localStorage.getItem("nominations")));
  }

  return (
    <MoreInfoContainer isActive={revealDetail(movieDetail.imdbID)}>
      <img src={movieDetail.Poster} width="150" alt="movie poster" />
      {!isMovieAdded ? (
        <NominationButton
          onClick={() => addNomination(movieDetail)}
          disabled={isMaxNominations}
        >
          <img src={wreathImg} alt="aware" width="150" />
          <NominationText>Nominate</NominationText>
        </NominationButton>
      ) : (
        <NominationButton onClick={() => removeNomination(movieDetail.imdbID)}>
          <img src={wreathImg} alt="aware" width="150" />
          <NominationText left={"26%"}>Remove</NominationText>
        </NominationButton>
      )}
    </MoreInfoContainer>
  );
};

export default MoreInfo;
