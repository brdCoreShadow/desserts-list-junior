import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    margin-bottom: 32px;
  }

  @media (min-width: 1280px){
    margin-left: auto;
    margin-right: auto;
  }
`;
