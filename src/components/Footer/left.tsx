import { Pinterest, Twitter, Instagram, Facebook } from "@mui/icons-material";

import {
  FooterLeftContainer,
  FooterLeftDescContainer,
  FooterLeftIconContainer,
  FooterLeftLogoContainer,
  FooterLeftSocialIconsContainer,
} from "./container";

const LeftFooter = () => {
  return (
    <FooterLeftContainer>
      <FooterLeftLogoContainer>ECOM</FooterLeftLogoContainer>
      <FooterLeftDescContainer>DESCP</FooterLeftDescContainer>
      <FooterLeftSocialIconsContainer>
        <FooterLeftIconContainer backgroundColor="3B5999">
          <Facebook />
        </FooterLeftIconContainer>
        <FooterLeftIconContainer backgroundColor="E4405F">
          <Instagram />
        </FooterLeftIconContainer>
        <FooterLeftIconContainer backgroundColor="55ACEE">
          <Twitter />
        </FooterLeftIconContainer>
        <FooterLeftIconContainer backgroundColor="E60023">
          <Pinterest />
        </FooterLeftIconContainer>
      </FooterLeftSocialIconsContainer>
    </FooterLeftContainer>
  );
};

export default LeftFooter;
