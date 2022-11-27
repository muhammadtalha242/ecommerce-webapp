import React from "react";
import {
  FooterCenterContainer,
  FooterCenterItemContainer,
  FooterCenterListContainer,
  FooterCenterTitleContainer,
} from "./container";

const CenterFooter = () => {
  return (
    <FooterCenterContainer>
      <FooterCenterTitleContainer>Useful Links</FooterCenterTitleContainer>
      <FooterCenterListContainer>
        <FooterCenterItemContainer>Home</FooterCenterItemContainer>
        <FooterCenterItemContainer>Cart</FooterCenterItemContainer>
        <FooterCenterItemContainer>Man Fashion</FooterCenterItemContainer>
        <FooterCenterItemContainer>Woman Fashion</FooterCenterItemContainer>
        <FooterCenterItemContainer>Accessories</FooterCenterItemContainer>
        <FooterCenterItemContainer>My Account</FooterCenterItemContainer>
        <FooterCenterItemContainer>Order Tracking</FooterCenterItemContainer>
        <FooterCenterItemContainer>Wishlist</FooterCenterItemContainer>
        <FooterCenterItemContainer>Wishlist</FooterCenterItemContainer>
        <FooterCenterItemContainer>Terms</FooterCenterItemContainer>
      </FooterCenterListContainer>
    </FooterCenterContainer>
  );
};

export default CenterFooter;
