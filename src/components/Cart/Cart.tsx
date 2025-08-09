import * as SC from "./CartStyled";
import emptyCartPic from "../../assets/images/illustration-empty-cart.svg";
import carbonPic from "../../assets/images/icon-carbon-neutral.svg";

import { CartOrderItem, ICartProps } from "@/utils/types";

const Cart: React.FC<ICartProps> = ({ cartOrders, handleDelete }) => {
  let result: CartOrderItem[] = [];
  let totalResult;

  if (cartOrders) {
    result = cartOrders.result;
    totalResult = cartOrders.totalResult.toFixed(2);
  }

const deleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
  const currentValue = e.currentTarget.getAttribute("data-name");
  console.log(currentValue);
  if (currentValue) {
    handleDelete(currentValue);
  }
};

  console.log(result);

  return (
    <SC.CartCont>
      {result.length > 0 ? (
        <div>
          <SC.Title>Your Cart ({result.length})</SC.Title>
          <SC.List>
            {result.map(({ name, quantity, total }) => (
              <SC.Item key={name}>
                <SC.SubCon>
                  <div>
                    <SC.Name>{name}</SC.Name>
                    <SC.DataCon>
                      <SC.Quantity>{quantity}x</SC.Quantity>
                      <SC.ItemPrice>
                        @ ${(Number(total) / quantity).toFixed(2)}
                      </SC.ItemPrice>
                      <SC.TotalPrice>${total}</SC.TotalPrice>
                    </SC.DataCon>
                  </div>
                  <SC.DeleteBtn type="button" data-name={name} onClick={deleteItem}>x</SC.DeleteBtn>
                </SC.SubCon>
              </SC.Item>
            ))}
          </SC.List>
          <SC.OrderTotalCon>
            <p>Order Total</p>
            <p>${totalResult}</p>
          </SC.OrderTotalCon>
          <SC.CarbonCon>
            <img src={carbonPic} alt="carbon_neutral" />
            <p>This is a carbon-neutral delivery</p>
          </SC.CarbonCon>
          <SC.ConfirmBtn>Confirm Order</SC.ConfirmBtn>
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
