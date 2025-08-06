import { mockData } from "@/data/mockData";
import * as SC from "./ListStyled";
import Item from "../Item/Item";

const List: React.FC = () => {
  return (
    <SC.ListStyled>
      {mockData.map(({ id, name, category, price, imageUrl }) => (
        <Item
          key={id}
          name={name}
          category={category}
          price={price}
          imageUrl={imageUrl}
        />
      ))}
    </SC.ListStyled>
  );
};

export default List;
