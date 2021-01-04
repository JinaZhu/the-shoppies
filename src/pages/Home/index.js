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
  ClearButton,
} from "./styled";
import config from "../../config";

const apiKey = config.omdbAPIKey;

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchMovie = async (currentInputValue) => {
    console.log("searching api");
    if (!currentInputValue) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(
        `http://omdbapi.com/?apikey=${apiKey}&type=movie&s=${currentInputValue}`
      );
      const data = await response.json();
      console.log(data);
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
          <ClearButton onClick={clearSearchInput}>
            <img src={clearIcon} alt="clear icon" width="80" />
          </ClearButton>
        </SearchContainer>
      </ClapperInfo>
    </HomeContainer>
  );
};

export default Home;
