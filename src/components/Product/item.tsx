import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IProduct } from ".";
import {
  ProductItemCircleContainer,
  ProductItemContainer,
  ProductItemIconContainer,
  ProductItemImageContainer,
  ProductItemInfoContainer,
} from "./container";

const Item = (product: IProduct) => {
  return (
    <ProductItemContainer>
      <ProductItemCircleContainer />
      <ProductItemImageContainer src={product.img} />
      <ProductItemInfoContainer>
        <ProductItemIconContainer>
          <ShoppingCartOutlinedIcon />
        </ProductItemIconContainer>
        <ProductItemIconContainer>
          <SearchIcon />
        </ProductItemIconContainer>
        <ProductItemIconContainer>
          <FavoriteBorderIcon />
        </ProductItemIconContainer>
      </ProductItemInfoContainer>
    </ProductItemContainer>
  );
};

export default Item;
