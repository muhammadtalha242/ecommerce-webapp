import { CategoryContainer } from "./container";
import { categories } from "../../Utils/data";
import Item from "./item";

export interface ICategory {
  id: number;
  img: string;
  title: string;
}
const Catergory = () => {
  return (
    <CategoryContainer>
      {categories.map((caterogy: ICategory) => {
        return <Item {...caterogy} />;
      })}
    </CategoryContainer>
  );
};

export default Catergory;
