import styled from "styled-components";
import { GREY_SECONDARY, WHITE } from "../../Styles/colors";

export const CategoryContainer = styled.div`
  display: flex;
`;

export const CategoryItemContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const CategoryItemStyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryItemInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CategoryItemTitleContainer = styled.h1`
  color: ${WHITE};
`;

export const CategoryItemButtonContainer = styled.button`
  padding: 10px;
  font-weight: 600;
  border: none;
  background-color: ${WHITE};
  cursor: pointer;
  color: ${GREY_SECONDARY};
`;
