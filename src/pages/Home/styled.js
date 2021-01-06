import styled, { css, keyframes } from "styled-components";

import reelImgPath from "../../images/film-reel.svg";
import downDownImgPath from "../../images/dropdown.svg";
import searchImgPath from "../../images/search.svg";
import clearImgPath from "../../images/clear-icon.svg";
import clappingBoardPath from "../../images/clapping-board.svg";

export const HomeContainer = styled.div`
  background-color: black;
  background-image: url(data:image/png;base64,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);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ClapperInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 90vw;
`;

export const CompanyName = styled.p`
  font-size: 60px;
  color: white;
  margin: ${(props) => props.margin || 0};

  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 70px;
  }
`;

export const SearchLogo = styled.img.attrs({
  src: `${searchImgPath}`,
  alt: "search logo",
})`
  width: 80px;

  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;

export const ClearImg = styled.img.attrs({
  src: `${clearImgPath}`,
  alt: "clear logo",
})`
  width: 80px;

  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;

export const SearchBar = styled.input`
  width: 80%;
  height: 80px;
  font-size: 50px;
  font-family: "Bebas Neue", cursive;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const MovieUl = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  user-select: none;
  will-change: transform;
  height: 48vh;

  @media screen and (max-width: 1024px) {
    height: 100%;
    margin-bottom: 25px;
  }
`;

export const MovieLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-family: "Bebas Neue", cursive;
  color: white;
  border-bottom: 3px solid white;
  width: 90vw;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TypeText = styled.p`
  font-size: 20px;
  margin: 0 20px;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const TypeResponse = styled.p`
  font-size: 50px;
  margin: 0 20px;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export const DropDownImg = styled.img.attrs({
  src: `${downDownImgPath}`,
  alt: "dropdown",
})`
  width: 50px;
  margin-left: 15px;

  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;

export const DetailTypeContainer = styled.div`
  width: ${(props) => props.width};
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  height: 0;
  overflow: hidden;

  ${(props) => {
    return (
      props.isActive &&
      css`
        height: 240px;
      `
    );
  }};
`;

export const NominationButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 30px;
  font-family: "Bebas Neue", cursive;
  position: relative;
  margin: 20px;
`;

export const NominationText = styled.p`
  position: absolute;
  font-size: 32px;
  bottom: 10%;
  left: ${(props) => props.left || "20%"};
  color: white;
  font-weight: bold;
`;

export const MaxNominationsContainer = styled.div`
  height: 48vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  color: white;
  font-size: 30px;
`;

export const Nav = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const LoadingContainer = styled.div`
  height: 48vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  color: white;
  font-size: 50px;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const ReelImage = styled.img.attrs({
  src: `${reelImgPath}`,
  alt: "reel",
})`
  animation: ${spin} 3s linear infinite;
  width: 92px;
`;
