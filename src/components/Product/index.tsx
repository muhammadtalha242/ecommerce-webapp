import { popularProducts } from "../../Utils/data";
import { ProductContainer } from "./container";
import Item from "./item";

export interface IProduct {
  id: number;
  img: string;
}

const Product = () => {
  return (
    <ProductContainer>
      {popularProducts.map((product: IProduct) => (
        <Item {...product} key={product.id} />
      ))}
    </ProductContainer>
  );
};

export default Product;
