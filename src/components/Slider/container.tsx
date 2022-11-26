import styled from "styled-components";
import { GREEN_TERTIARY, WHITE } from "../../Styles/colors";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

export const SliderArrowContainer = styled.div<{ direction: "left" | "right" }>`
  width: 50px;
  height: 50px;
  background-color: ${WHITE};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

export const TileContainer = styled.div`
  height: 100%;
`;

export const TileContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const TileImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TileStyledImage = styled.img`
  height: 80%;
`;

export const TileInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const TileTitleContainer = styled.h1`
  font-size: 70px;
`;

export const TileDescContainer = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const TileButtonContainer = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;
