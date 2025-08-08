import * as SC from "./CartStyled";

import emptyCartPic from "../../assets/images/illustration-empty-cart.svg";
import { CartOrderItem, ICartProps } from "@/utils/types";

const Cart: React.FC<ICartProps> = ({ cartOrders }) => {
  let result:CartOrderItem[] = [];
  let totalResult = 0;

  if (cartOrders) {
    result = cartOrders.result;
    totalResult = cartOrders.totalResult;
  }

  console.log(result);

  return (
    <SC.CartCont>
      {cartOrders ? (
        <div>
          <SC.Title>Your Cart (0)</SC.Title>
          <ul>
            {result.map()}
          </ul>
        </div>
      ) : (
        <>
          <SC.Title>Your Cart (0)</SC.Title>
          <SC.PicThumb>
            <img src={emptyCartPic} alt="cake" />
          </SC.PicThumb>
          <SC.Content>Your added items will appear here</SC.Content>
        </>
      )}
    </SC.CartCont>
  );
};

export default Cart;
