import styled from "@emotion/styled";

export const CartCont = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #ffffff;

  border-radius: 12px;
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  font-size: 24px;
  font-weight: 700;

  color: #c73b0f;
`;

export const PicThumb = styled.div`
  margin-bottom: 16px;

  & > img {
    width: 128px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const Content = styled.p`
  font-size: 14px;
  font-weight: 600;

  text-align: center;

  color: #87635a;
`;

export const List = styled.ul`
  margin-bottom: 24px;
`;

export const Item = styled.li`
  padding-bottom: 16px;

  border-bottom: 1px solid #f5eeec;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const Name = styled.p`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 600;

  color: #260f08;
`;

export const SubCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DataCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export const DeleteBtn = styled.button`
  min-width: 20px;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;

  font-weight: 700;

  color: #ad8a85;

  background-color: transparent;

  border: 1px solid #ad8a85;
  border-radius: 50%;
`;

export const Quantity = styled.p`
  font-size: 14px;
  font-weight: 600;

  color: #c73b0f;
`;

export const ItemPrice = styled.p`
  font-size: 14px;

  color: #87635a;
`;

export const TotalPrice = styled.p`
  font-size: 14px;
  font-weight: 600;

  color: #87635a;
`;

export const OrderTotalCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;

  & > p{
    color: #260F08;

    &:last-of-type{
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

export const CarbonCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-bottom: 24px;

padding-top: 16px;
padding-bottom: 16px;
padding-left: 24px;
padding-right: 24px;

background-color: #FCF8F6;

border-radius: 16px;

& > img{
  width: 20px;

  margin-right: 8px;
}

& > p{
  font-size: 14px;

  color:#260F08;
}
`

export const ConfirmBtn = styled.button`
width: 100%;

padding-top: 16px;
padding-bottom: 16px;

text-align: center;

font-size: 16px;
font-weight: 600;

color: #fff;

background-color: #C73B0F;

border-radius: 16px;
`