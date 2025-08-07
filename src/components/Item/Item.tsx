import { IItem } from "@/utils/types";
import * as SC from "./ItemStyled";

const Item: React.FC<Partial<IItem>> = ({ name, category, image_url, price }) => {
  
  const formattedPrice =
    typeof price === "number" ? price.toFixed(2) : Number(price).toFixed(2);
  
    return (
    <SC.ItemStyled >
      <SC.PicThumb>
        <img src={image_url} alt={name} />
      <SC.Button>Add to Cart</SC.Button>
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
