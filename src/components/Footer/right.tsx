import { LocationOn, Call, Email } from "@mui/icons-material";

import {
  FooterCenterTitleContainer,
  FooterRightContactContainer,
  FooterRightContactPaymentImageContainer,
  FooterRightContainer,
} from "./container";

const RightFooter = () => {
  return (
    <FooterRightContainer>
      <FooterCenterTitleContainer>Contact</FooterCenterTitleContainer>
      <FooterRightContactContainer>
        <LocationOn style={{ marginRight: "10px" }} /> 622 Dixie Path , South
        Tobinchester 98336
      </FooterRightContactContainer>
      <FooterRightContactContainer>
        <Call style={{ marginRight: "10px" }} /> +1 234 56 78
      </FooterRightContactContainer>
      <FooterRightContactContainer>
        <Email style={{ marginRight: "10px" }} /> contact@eco.dev
      </FooterRightContactContainer>
      <FooterRightContactPaymentImageContainer src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </FooterRightContainer>
  );
};

export default RightFooter;
