import { ItemProps } from "@/utils/types";
import * as SC from "./ItemStyled";

const Item: React.FC<Partial<ItemProps>> = ({id, name, category, image_url, price, handleOrder }) => {
  
  const formattedPrice =
    typeof price === "number" ? price.toFixed(2) : Number(price).toFixed(2);
  
const addToCart = () => {
 if (id !== undefined && name && price !== undefined && image_url !== undefined && handleOrder) {
      handleOrder(id, name, price, image_url);
    }
}

    return (
    <SC.ItemStyled >
      <SC.PicThumb>
        <img src={image_url} alt={name} />
      <SC.Button onClick={addToCart}>Add to Cart</SC.Button>
      </SC.PicThumb>
      <div>
        <SC.Category>{category}</SC.Category>
        <SC.Name>{name}</SC.Name>
        <SC.Price>$ {formattedPrice}</SC.Price>
      </div>
    </SC.ItemStyled>
  );
};

export default Item;
