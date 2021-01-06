import React, { useState } from "react";

import {
  MovieUl,
  MovieLi,
  DetailContainer,
  TypeText,
  Button,
  DetailTypeContainer,
  LoadingContainer,
  ReelImage,
  TypeResponse,
  DropDownImg,
} from "./styled";
import MoreInfo from "./MoreInfo";

const MovieResults = ({
  searchResults,
  setNominations,
  isMaxNominations,
  isMovieResultLoading,
}) => {
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
                <TypeText>Title</TypeText>
                <TypeResponse>{movieDetail.Title}</TypeResponse>
              </DetailTypeContainer>
              <DetailTypeContainer width={"15%"}>
                <TypeText>year</TypeText>
                <TypeResponse>{movieDetail.Year}</TypeResponse>
              </DetailTypeContainer>
              <Button onClick={() => selectReveal(movieDetail.imdbID)}>
                <DropDownImg />
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
