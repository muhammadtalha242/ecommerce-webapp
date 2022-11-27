import styled from "styled-components";
import {
  GREEN_PRIMARY,
  GREEN_TERTIARY,
  GREY_PRIMARY,
  WHITE,
} from "../../Styles/colors";

export const NewsletterContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${GREEN_TERTIARY};
`;

export const NewsletterTitleContainer = styled.h1`
  font-size: 70px;
  margin: 20px;
`;

export const NewsletterDescContainer = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const NewsletterFormContainer = styled.form`
  width: 50%;
  border: 1px solid ${GREY_PRIMARY};
  display: flex;
  justify-content: space-between;
`;

export const NewsletterInputContainer = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;

export const NewsletterButtonContainer = styled.button`
  flex: 1;
  border: none;
  color: ${WHITE};
  background-color: ${GREEN_PRIMARY};
`;
