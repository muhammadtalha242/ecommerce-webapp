import React from "react";
import { Badge } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  SearchInputContainer,
  TopbarCenterContainer,
  TopbarCenterLogoContainer,
  TopbarContainer,
  TopbarLeftContainer,
  TopbarLeftLanguageContainer,
  TopbarLeftSearchContainer,
  TopbarRightCartContainer,
  TopbarRightContainer,
  TopbarRightRegisterContainer,
  TopbarRightSignInContainer,
  TopbarWrapperContainer,
} from "./container";

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarWrapperContainer>
        <TopbarLeftContainer>
          <TopbarLeftLanguageContainer>EN</TopbarLeftLanguageContainer>
          <TopbarLeftSearchContainer>
            <SearchInputContainer></SearchInputContainer>
            <AiOutlineSearch style={{ color: "gray", fontSize: 16 }} />
          </TopbarLeftSearchContainer>
        </TopbarLeftContainer>
        <TopbarCenterContainer>
          <TopbarCenterLogoContainer>E-Commerce</TopbarCenterLogoContainer>
        </TopbarCenterContainer>
        <TopbarRightContainer>
          <TopbarRightRegisterContainer>Register</TopbarRightRegisterContainer>
          <TopbarRightSignInContainer>Sign In</TopbarRightSignInContainer>
          <TopbarRightCartContainer>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </TopbarRightCartContainer>
        </TopbarRightContainer>
      </TopbarWrapperContainer>
    </TopbarContainer>
  );
};

export default Topbar;
