import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";

import clappingBoard from "../../images/clapping-board.svg";
import {
  HomeContainer,
  CompanyName,
  ClapperInfo,
  SearchContainer,
  SearchBar,
  Button,
  Nav,
  SearchLogo,
  ClearImg,
} from "./styled";
import config from "../../config";
import MovieResults from "./MovieResults";
import MaxNominationsReached from "./MaxNominationsReached";
import RedirectLink from "../../components/RedirectLink";

const apiKey = config.omdbAPIKey;

function checkMovieInLocalStorage(nominations, movieData) {
  const transformed = movieData.map((movie) => {
    const isAdded = nominations.hasOwnProperty(movie.imdbID);

    return {
      ...movie,
      isAdded,
    };
  });
  return transformed;
}

const settingNominations = JSON.parse(localStorage.getItem("nominations"))
  ? JSON.parse(localStorage.getItem("nominations"))
  : {};

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMovieResultLoading, setIsMovieResultLoading] = useState(false);
  const [nominations, setNominations] = useState(settingNominations);

  const searchMovie = async (currentInputValue) => {
    setIsMovieResultLoading(true);
    if (!currentInputValue) {
      setSearchResults([]);
      setIsMovieResultLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://omdbapi.com/?apikey=${apiKey}&type=movie&s=${currentInputValue}`
      );
      const data = await response.json();
      if (data.Search) {
        const nominations = JSON.parse(localStorage.getItem("nominations"));
        if (nominations) {
          const updatedNominations = checkMovieInLocalStorage(
            nominations,
            data.Search
          );
          setSearchResults(updatedNominations);
        } else {
          setSearchResults(data.Search);
        }
      }
      setIsMovieResultLoading(false);
    } catch (error) {
      setIsMovieResultLoading(false);
      console.log("error", error);
    }
  };

  const debouncedSearch = useCallback(
    debounce((currentInputValue) => searchMovie(currentInputValue), 1000),
    []
  );

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  function clearSearchInput() {
    setSearchInput("");
    setSearchResults([]);
  }

  const isMaxNominations = Object.keys(nominations).length < 5 ? false : true;

  const InputPlaceholder =
    Object.keys(nominations).length < 5
      ? "Search Movie"
      : "All nominations has been selected";

  return (
    <HomeContainer>
      <img src={clappingBoard} alt="clapping board" width="100%" />
      <ClapperInfo>
        <Nav>
          <CompanyName margin={"20px 0 5px 0"}>THE SHOPPIES</CompanyName>
          <RedirectLink whereTo={"Nominee"} toLink={"/nominees"} />
        </Nav>
        <SearchContainer>
          <SearchLogo />
          <SearchBar
            type="text"
            placeholder={InputPlaceholder}
            value={searchInput}
            onChange={(e) => handleChange(e)}
            disabled={isMaxNominations}
          />
          <Button onClick={clearSearchInput}>
            <ClearImg />
          </Button>
        </SearchContainer>
        {!isMaxNominations ? (
          <MovieResults
            searchResults={searchResults}
            setNominations={setNominations}
            isMaxNominations={isMaxNominations}
            isMovieResultLoading={isMovieResultLoading}
          />
        ) : (
          <MaxNominationsReached />
        )}
      </ClapperInfo>
    </HomeContainer>
  );
};

export default Home;
