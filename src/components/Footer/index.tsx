import React from "react";
import CenterFooter from "./center";
import { FooterContainer } from "./container";
import LeftFooter from "./left";
import RightFooter from "./right";

const Footer = () => {
  return (
    <FooterContainer>
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </FooterContainer>
  );
};

export default Footer;
