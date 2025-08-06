import { IItem } from "@/utils/types";
import * as SC from "./ItemStyled";

const Item: React.FC<IItem> = ({ name, category, imageUrl, price }) => {
  return (
    <SC.ItemStyled>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <button>Add to Cart</button>
      <div>
        <p>{category}</p>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </SC.ItemStyled>
  );
};

export default Item;
