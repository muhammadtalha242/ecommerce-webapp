import React from "react";
import {
  TileButtonContainer,
  TileContentContainer,
  TileDescContainer,
  TileImageContainer,
  TileInfoContainer,
  TileStyledImage,
  TileTitleContainer,
} from "./container";

export interface ITile {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
}

const Tile = (props: ITile) => {
  return (
    <>
      <TileContentContainer>
        <TileImageContainer>
          <TileStyledImage src={props.img} />
        </TileImageContainer>
        <TileInfoContainer>
          <TileTitleContainer>{props.title}</TileTitleContainer>
          <TileDescContainer>{props.desc}</TileDescContainer>
          <TileButtonContainer>BUY NOW</TileButtonContainer>
        </TileInfoContainer>
      </TileContentContainer>
    </>
  );
};

export default Tile;
