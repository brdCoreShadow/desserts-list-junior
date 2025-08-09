import styled from "@emotion/styled";

export const ItemStyled = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 24px;

    @media (min-width: 768px){
      margin-bottom: 0;
    }
  }
`;

export const PicThumb = styled.div`
  position: relative;

  margin-bottom: 28px;

  & > img {
    width: 327px;
    height: 212px;

    border-radius: 8px;

    @media (min-width: 768px){
      width: 214px;
      height: 212px;
    }

    @media (min-width: 1280px){
      width: 250px;
      height: 240px;
    }
  }
`;

export const Button = styled.button`
  position: absolute;

  bottom: 0;
  left: 0;

  transform: translate(50%, 50%);

  width: 160px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 36px;
  padding-right: 20px;

  font-size: 14px;
  font-weight: 600;

  color: #260f08;

  background-color: #ffffff;

  border: 1px solid #AD8A85;
  border-radius: 36px;

  @media (min-width: 768px){
    transform: translate(15%, 50%);
  }

  @media (min-width: 1280px){
    transform: translate(25%, 50%);
  }

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    transform: translate(16px, 35%);

    display: inline-block;

    width: 28px;
    height: 28px;

    content: "";

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'><g fill='%23C73B0F' clip-path='url(%23a)'><path d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z'/><path d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'/></g><defs><clipPath id='a'><path fill='%23fff' d='M.333 0h20v20h-20z'/></clipPath></defs></svg>");

    background-repeat: no-repeat;
  }
`;

export const Category = styled.p`
  margin-bottom: 4px;

  font-size: 14px;

  color: #87635a;
`;

export const Name = styled.h3`
  margin-bottom: 4px;

  font-size: 16px;
  font-weight: 600;

  color: #260f08;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;

  color: #c73b0f;
`;
