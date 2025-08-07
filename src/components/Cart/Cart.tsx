import * as SC from "./CartStyled";

import emptyCartPic from "../../assets/images/illustration-empty-cart.svg"

const Cart: React.FC = () => {
  return (
    <SC.CartCont>
      <SC.Title>Your Cart (0)</SC.Title>
      <SC.PicThumb>
        <img src={emptyCartPic} alt="cake" />
      </SC.PicThumb>
      <SC.Content>Your added items will appear here</SC.Content>
    </SC.CartCont>
  );
};

export default Cart;
