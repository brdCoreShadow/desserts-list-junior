import * as SC from "./ListStyled";
import Item from "../Item/Item";
import { IItem } from "@/utils/types";

interface ListProps {
  desserts: IItem[] | null;
}

const List: React.FC<ListProps> = ({desserts}) => {
  return (
    <SC.ListStyled>
      {desserts?.map(({ dessert_id, name, category, price, image_url }) => (
        <Item
          key={dessert_id}
          name={name}
          category={category}
          price={price}
          image_url={image_url}
          
        />
      ))}
    </SC.ListStyled>
  );
};

export default List;
