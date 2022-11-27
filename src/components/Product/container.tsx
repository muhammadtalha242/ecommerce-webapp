import styled from "styled-components";
import { BLUE_TERTIARY, GREEN_TERTIARY, WHITE } from "../../Styles/colors";

export const ProductItemInfoContainer = styled.div`
  opacity: 0;
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductItemContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${GREEN_TERTIARY};
  position: relative;

  &:hover ${ProductItemInfoContainer} {
    opacity: 1;
  }
`;

export const ProductItemCircleContainer = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: ${WHITE};
  position: absolute;
`;

export const ProductItemIconContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${BLUE_TERTIARY};
    transform: scale(1.1);
  }
`;

export const ProductItemImageContainer = styled.img`
  height: 75%;
  z-index: 2;
`;
