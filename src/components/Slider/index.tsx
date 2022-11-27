import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import {
  SliderArrowContainer,
  SliderContainer,
  TileContainer,
} from "./container";
import Tile, { ITile } from "./tile";
import { sliderItems } from "../../Utils/data";

const Slider = () => {
  const [, setCurrentIndex] = useState(0);
  const [currentTile, setCurrentTile] = useState<ITile>(sliderItems[0]);

  const handleClick = (direction: "left" | "right") => () => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => {
        const indexUpdate =
          (prevIndex - 1 + sliderItems.length) % sliderItems.length;
        setCurrentTile(sliderItems[indexUpdate]);
        return indexUpdate;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        const indexUpdate = (prevIndex + 1) % sliderItems.length;
        setCurrentTile(sliderItems[indexUpdate]);
        return indexUpdate;
      });
    }
  };

  return (
    <SliderContainer backgroundColor={currentTile.bg}>
      <SliderArrowContainer direction="left" onClick={handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </SliderArrowContainer>
      <TileContainer>
        <Tile {...currentTile} key={currentTile.id} />
      </TileContainer>
      <SliderArrowContainer direction="right" onClick={handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </SliderArrowContainer>
    </SliderContainer>
  );
};

export default Slider;
