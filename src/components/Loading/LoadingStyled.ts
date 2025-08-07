import styled from "@emotion/styled";

export const LoadingCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  gap: 12px;

  .dna-spinner {
    position: relative;
    width: 80px;
    height: 80px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      background-color: #fea36f;
      border-radius: 50%;
      transform-origin: -30px 0;
      animation: dna-spin 1.2s linear infinite;
    }
  }

  p {
    font-family: monospace;
    font-size: 16px;
    color: #666;
  }

  @keyframes dna-spin {
    0% {
      transform: rotate(0deg) translateX(30px) scale(1);
      opacity: 1;
    }
    50% {
      transform: rotate(180deg) translateX(30px) scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: rotate(360deg) translateX(30px) scale(1);
      opacity: 1;
    }
  }
`;
