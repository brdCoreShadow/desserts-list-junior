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
