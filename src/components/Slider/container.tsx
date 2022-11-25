import styled from "styled-components";
import { GREEN_TERTIARY, WHITE } from "../../Styles/colors";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${GREEN_TERTIARY};
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
