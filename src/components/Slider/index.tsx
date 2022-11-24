import React from "react";
import { SliderArrowContainer, SliderContainer } from "./container";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";


const Slider = () => {
  return (
    <SliderContainer>
      Slider
      <SliderArrowContainer direction="left">
        <ArrowBackIosNewOutlinedIcon />
      </SliderArrowContainer>
      <SliderArrowContainer direction="right">
        <ArrowForwardIosOutlinedIcon />
      </SliderArrowContainer>
    </SliderContainer>
  );
};

export default Slider;
