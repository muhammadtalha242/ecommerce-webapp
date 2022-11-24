import styled from "styled-components";
import { WHITE } from "../../Styles/colors";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SliderArrowContainer = styled.div<{ direction: "left" | "right" }>`
  width: 50px;
  height: 50px;
  background-color: ${WHITE};
  border-radius: 50%;
`;
