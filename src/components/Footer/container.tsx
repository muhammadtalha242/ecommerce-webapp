import styled from "styled-components";
import { WHITE } from "../../Styles/colors";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FooterLeftLogoContainer = styled.h1``;

export const FooterLeftDescContainer = styled.p`
  margin: 20px 0px;
`;

export const FooterLeftSocialIconsContainer = styled.div`
  display: flex;
`;

export const FooterLeftIconContainer = styled.div<{ backgroundColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${WHITE};
  background-color: #${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const FooterCenterContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const FooterCenterTitleContainer = styled.h3`
  margin-bottom: 30px;
`;

export const FooterCenterListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const FooterCenterItemContainer = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const FooterRightContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const FooterRightContactContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  `;

export const FooterRightContactPaymentImageContainer = styled.img`
width: 50%;
`;
