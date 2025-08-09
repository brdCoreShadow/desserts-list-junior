import * as SC from "./ConfirmWindowStyled";

import confirmIcon from "../../assets/images/icon-order-confirmed.svg";
import { CartOrderItem, ICartProps } from "@/utils/types";
import { useEffect } from "react";

const ConfirmWindow: React.FC<Partial<ICartProps>> = ({ cartOrders, isShare, closeShare }) => {
let result:CartOrderItem[] = []
  let totalResult;


  if (cartOrders) {
    result = cartOrders.result;
    totalResult = cartOrders.totalResult.toFixed(2);
  }


 useEffect(() => {
    if (isShare) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShare]);

  return (
    <SC.Wrapper>
      <SC.ConfirmWindowCon>
        <SC.TitleCon>
          <SC.IconConfirmThumb>
            <img src={confirmIcon} alt="confirm" />
          </SC.IconConfirmThumb>
          <h3>Order Confirmed</h3>
          <p>We hope you enjoy your food!</p>
        </SC.TitleCon>
        <SC.ListCon>
        <SC.List>
          {result &&
            result.map(({ name, quantity, total, pic }) => {
              return (
                <SC.Item key={name}>
                  <SC.ItemCon>
                    <img src={pic} alt={name} />
                    <div>
                      <SC.Name>{name}</SC.Name>
                      <SC.QuantityCon>
                        <p>{quantity}x</p>
                        <p> @ ${(Number(total) / quantity).toFixed(2)}</p>
                      </SC.QuantityCon>
                    </div>
                  </SC.ItemCon>
                  <h4>${total}</h4>
                </SC.Item>
              );
            })}
        </SC.List>
        <SC.TotalCon>
            <p>Order Total</p>
            <p>${totalResult}</p>
        </SC.TotalCon>
        </SC.ListCon>
        <SC.SubmitBtn onClick={closeShare}>Start New Order</SC.SubmitBtn>
      </SC.ConfirmWindowCon>
    </SC.Wrapper>
  );
};

export default ConfirmWindow;
