import React from "react";

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

const Home = () => {
  return (
    <HomeContainer>
      <img src={clappingBoard} alt="clapping board" width="100%" />
      <ClapperInfo>
        <ClapperText margin={"20px 0 5px 0"}>THE SHOPPIES</ClapperText>
        <SearchContainer>
          <img src={search} alt="search icon" width="80" />
          <SearchBar type="text" placeholder="Search Movie" />
          <ClearButton>
            <img src={clearIcon} alt="clear icon" width="80" />
          </ClearButton>
        </SearchContainer>
      </ClapperInfo>
    </HomeContainer>
  );
};

export default Home;
