import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";

import clappingBoard from "../../images/clapping-board.svg";
import search from "../../images/search.svg";
import clearIcon from "../../images/clear-icon.svg";
import {
  HomeContainer,
  ClapperText,
  ClapperInfo,
  SearchContainer,
  SearchBar,
  Button,
  Nav,
} from "./styled";
import config from "../../config";
import MovieResults from "./MovieResults";
import MaxNominationsReached from "./MaxNominationsReached";
import RedirectLink from "../../components/RedirectLink";

const apiKey = config.omdbAPIKey;

function checkMovieInLocalStorage(nominations, movieData) {
  const transformed = movieData.map((movie) => {
    const isAdded = nominations.hasOwnProperty(movie.imdbID);
    // const isAdded = movie.imdbID in nominations;

    return {
      ...movie,
      isAdded,
    };
  });
  return transformed;
}

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState(
    JSON.parse(localStorage.getItem("nominations"))
  );

  const searchMovie = async (currentInputValue) => {
    if (!currentInputValue) {
      setSearchResults([]);
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
    } catch (error) {
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
          <ClapperText margin={"20px 0 5px 0"}>THE SHOPPIES</ClapperText>
          <RedirectLink whereTo={"Nominee"} toLink={"/nominees"} />
        </Nav>
        <SearchContainer>
          <img src={search} alt="search icon" width="80" />
          <SearchBar
            type="text"
            placeholder={InputPlaceholder}
            value={searchInput}
            onChange={(e) => handleChange(e)}
            disabled={isMaxNominations}
          />
          <Button onClick={clearSearchInput}>
            <img src={clearIcon} alt="clear icon" width="80" />
          </Button>
        </SearchContainer>
        {!isMaxNominations ? (
          <MovieResults
            searchResults={searchResults}
            setNominations={setNominations}
            isMaxNominations={isMaxNominations}
          />
        ) : (
          <MaxNominationsReached />
        )}
      </ClapperInfo>
    </HomeContainer>
  );
};

export default Home;
