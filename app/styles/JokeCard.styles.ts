import styled from 'styled-components';

export const JokeContainer = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.05));
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;

export const JokeLabel = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  background: linear-gradient(145deg, #4facfe, #00f2fe);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  color: #fff;
`;

export const JokeText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.9);
`;

export const JokeDelivery = styled.p`
  font-size: 1.1rem;
  color: #4facfe;
  font-style: italic;
`;

export const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`; 