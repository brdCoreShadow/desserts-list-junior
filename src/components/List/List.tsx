import * as SC from "./ListStyled";
import Item from "../Item/Item";
import { IItem } from "@/utils/types";

interface ListProps {
  desserts: IItem[] | null;
  handleOrder:(id:number, name:string, price:number)=>void;
}

const List: React.FC<ListProps> = ({desserts, handleOrder}) => {
  return (
    <SC.ListStyled>
      {desserts?.map(({ dessert_id, name, category, price, image_url }) => (
        <Item
          key={dessert_id}
          name={name}
          category={category}
          price={price}
          image_url={image_url}
          handleOrder={handleOrder}
          id={dessert_id}
        />
      ))}
    </SC.ListStyled>
  );
};

export default List;
