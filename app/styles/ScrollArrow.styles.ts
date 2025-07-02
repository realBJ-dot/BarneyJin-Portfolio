import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollArrowContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const ScrollArrow = styled.span`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.6);
  animation: ${bounce} 2s infinite;
`; 