import styled from "styled-components";
import { Link } from "react-router-dom";

export const StackContainer = styled.div`
  background: transparent;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 30px;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    div {
      background-color: white;
      height: 425px;
      width: 250px;
      will-change: transform;
      box-shadow: 0 8px 30px -15px rgba(50, 50, 73, 0.4),
        0 10px 10px -10px rgba(50, 50, 73, 0.3);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      border: 10px solid white;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
      }
    }
  }
`;

export const MovieSearchLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 30px;
  border: 2px solid white;
  padding: 10px;
  background-color: white;

  &:hover {
    box-shadow: 0 0 10px white, 0 0 40px white, 0 0 80px white;
  }
`;
