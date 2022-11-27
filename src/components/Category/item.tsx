import { ICategory } from ".";
import {
  CategoryItemButtonContainer,
  CategoryItemContainer,
  CategoryItemInfoContainer,
  CategoryItemStyledImage,
  CategoryItemTitleContainer,
} from "./container";

const Item = (caterogy: ICategory) => {
  return (
    <CategoryItemContainer>
      <CategoryItemStyledImage src={caterogy.img} />
      <CategoryItemInfoContainer>
        <CategoryItemTitleContainer>
          {caterogy.title}
        </CategoryItemTitleContainer>
        <CategoryItemButtonContainer>SHOP NOW</CategoryItemButtonContainer>
      </CategoryItemInfoContainer>
    </CategoryItemContainer>
  );
};

export default Item;
