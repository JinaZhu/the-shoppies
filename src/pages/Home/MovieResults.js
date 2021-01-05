import React from "react";

import {
  MovieUl,
  MovieLi,
  DetailContainer,
  InfoText,
  Button,
  DetailTypeContainer,
} from "./styled";
import downDownImg from "../../images/dropdown.svg";

const MovieResults = ({ searchResults }) => {
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
              <Button>
                <img src={downDownImg} alt="dropdown icon" width="50" />
              </Button>
            </DetailContainer>
          </MovieLi>
        );
      })}
    </MovieUl>
  );
};

export default MovieResults;
