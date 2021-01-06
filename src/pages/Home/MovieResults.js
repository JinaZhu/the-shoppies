import React, { useState } from "react";

import {
  MovieUl,
  MovieLi,
  DetailContainer,
  InfoText,
  Button,
  DetailTypeContainer,
  LoadingContainer,
  ReelImage,
} from "./styled";
import downDownImg from "../../images/dropdown.svg";
import MoreInfo from "./MoreInfo";

const MovieResults = ({
  searchResults,
  setNominations,
  isMaxNominations,
  isMovieResultLoading,
}) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log(isMovieResultLoading);

  function selectReveal(title) {
    if (title === selectedMovie && isOpen) {
      setIsOpen(false);
      return;
    }
    setSelectedMovie(title);
    setIsOpen(true);
  }

  if (isMovieResultLoading) {
    return (
      <LoadingContainer>
        <p>Loading Movies...</p>
        <ReelImage />
      </LoadingContainer>
    );
  }

  return (
    <MovieUl>
      {searchResults.map((movieDetail) => {
        return (
          <MovieLi key={movieDetail.imdbID}>
            <DetailContainer>
              <DetailTypeContainer width={"70%"}>
                <InfoText>Title</InfoText>
                <InfoText size="50">{movieDetail.Title}</InfoText>
              </DetailTypeContainer>
              <DetailTypeContainer width={"15%"}>
                <InfoText>year</InfoText>
                <InfoText size="50">{movieDetail.Year}</InfoText>
              </DetailTypeContainer>
              <Button onClick={() => selectReveal(movieDetail.imdbID)}>
                <img src={downDownImg} alt="dropdown icon" width="50" />
              </Button>
            </DetailContainer>
            <MoreInfo
              movieDetail={movieDetail}
              selectedMovie={selectedMovie}
              isOpen={isOpen}
              setNominations={setNominations}
              isMaxNominations={isMaxNominations}
            />
          </MovieLi>
        );
      })}
    </MovieUl>
  );
};

export default MovieResults;
