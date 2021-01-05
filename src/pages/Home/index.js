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
} from "./styled";
import config from "../../config";
import MovieResults from "./MovieResults";

const apiKey = config.omdbAPIKey;

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
        setSearchResults(data.Search);
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

  return (
    <HomeContainer>
      <img src={clappingBoard} alt="clapping board" width="100%" />
      <ClapperInfo>
        <ClapperText margin={"20px 0 5px 0"}>THE SHOPPIES</ClapperText>
        <SearchContainer>
          <img src={search} alt="search icon" width="80" />
          <SearchBar
            type="text"
            placeholder="Search Movie"
            value={searchInput}
            onChange={(e) => handleChange(e)}
          />
          <Button onClick={clearSearchInput}>
            <img src={clearIcon} alt="clear icon" width="80" />
          </Button>
        </SearchContainer>
        <MovieResults searchResults={searchResults} />
      </ClapperInfo>
    </HomeContainer>
  );
};

export default Home;
