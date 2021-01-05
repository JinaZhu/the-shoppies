import React, { useState } from "react";

import {
  MovieUl,
  MovieLi,
  DetailContainer,
  InfoText,
  Button,
  DetailTypeContainer,
} from "./styled";
import downDownImg from "../../images/dropdown.svg";
import MoreInfo from "./MoreInfo";

const MovieResults = ({ searchResults }) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function selectReveal(title) {
    if (title === selectedMovie && isOpen) {
      setIsOpen(false);
      return;
    }
    setSelectedMovie(title);
    setIsOpen(true);
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
              moviePoster={movieDetail.Poster}
              movieID={movieDetail.imdbID}
              selectedMovie={selectedMovie}
              isOpen={isOpen}
            />
          </MovieLi>
        );
      })}
    </MovieUl>
  );
};

export default MovieResults;
