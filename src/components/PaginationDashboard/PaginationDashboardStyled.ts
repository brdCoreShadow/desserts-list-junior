import styled from "@emotion/styled";

export const PaginationDashboardCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  & > button {
    width: 80px;

    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 14px;
    font-weight: 600;

    color: #260f08;

    background-color: #ffffff;

    border: 1px solid #ad8a85;

    border-radius: 26px;

    &:disabled {
      opacity: 0.3;
    }

    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }
`;
