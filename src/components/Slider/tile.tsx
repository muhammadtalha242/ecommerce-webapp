import React from "react";

export interface ITile {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
}


const Tile = (props: ITile) => {
  return <div>{props.title}</div>;
};

export default Tile;
