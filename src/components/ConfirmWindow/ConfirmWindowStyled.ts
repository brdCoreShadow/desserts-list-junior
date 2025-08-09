import styled from "@emotion/styled";

export const Wrapper = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; 
`;

export const TitleCon = styled.div`
  margin-bottom: 32px;

  & > h3 {
    margin-bottom: 8px;

    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;

    color: #260f08;
  }

  & > p {
    font-size: 16px;

    color: #87635a;
  }
`;

export const ConfirmWindowCon = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;

  text-align: left;

  background-color: #fff;

  border-radius: 12px;
`;

export const IconConfirmThumb = styled.div`
  margin-bottom: 24px;
  & > img {
    width: 48px;
  }
`;

export const ListCon = styled.div`
margin-bottom: 32px;

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fcf8f6;

  border-radius: 8px;
`;

export const List = styled.ul`
  margin-bottom: 24px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 16px;

  border-bottom: 1px solid #f5eeec;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const ItemCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    width: 48px;
    height: 48px;

    margin-right: 16px;

    border-radius: 4px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 600;

  color: #260f08;
`;

export const QuantityCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p:first-of-type {
    margin-right: 8px;

    font-size: 14px;
    font-weight: 600;

    color: #c73b0f;
  }

  & > p:last-of-type{
    font-size: 14px;

    color:#87635A;
  }
`;

export const TotalCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

& > p:first-of-type{
    font-size: 14px;
    font-weight: 400;

    color:#87635A;
}

&:last-of-type{
    font-size: 24px;
    font-weight: 700;

    color: #260F08;
}
`

export const SubmitBtn = styled.button`
width: 100%;

padding-top: 16px;
padding-bottom: 16px;

color:#fff;

background-color: #C73B0F;

border-radius: 999px;
`