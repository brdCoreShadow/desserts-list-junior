import * as SC from "./ConfirmWindowStyled";

import confirmIcon from "../../assets/images/icon-order-confirmed.svg"
import { ICartProps } from "@/utils/types";

const ConfirmWindow: React.FC<Partial<ICartProps>> = ({cartOrders}) => {
  
    return (
    <SC.Wrapper>
      <SC.ConfirmWindowCon>
        <div>
        <div>
            <img src={confirmIcon} alt="confirm" />
        </div>
        <h3>Order Confirmed</h3>
        <p>We hope you enjoy your food!</p>
        </div>
        <ul>

        </ul>
      </SC.ConfirmWindowCon>
    </SC.Wrapper>
  );
};

export default ConfirmWindow;
