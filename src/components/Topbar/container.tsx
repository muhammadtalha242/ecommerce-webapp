import styled from "styled-components";

export const TopbarContainer = styled.div`
  height: 60px;
`;

export const TopbarWrapperContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopbarLeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const TopbarRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TopbarCenterContainer = styled.div`
  flex: 1;
  text-align: center;
`;

export const TopbarLeftLanguageContainer = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const TopbarLeftSearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const SearchInputContainer = styled.input`
  border: none;
`;
export const TopbarCenterLogoContainer = styled.div`
  font-weight: bold;
`;

export const TopbarRightRegisterContainer = styled.div`
  margin-left: 25px;
`;

export const TopbarRightSignInContainer = styled.div`
  margin-left: 25px;
`;

export const TopbarRightCartContainer = styled.div`
  margin-left: 25px;
`;
