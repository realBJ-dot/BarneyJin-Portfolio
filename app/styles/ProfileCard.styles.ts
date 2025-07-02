import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const ProfileContainer = styled.div`
  background: linear-gradient(145deg, rgba(10, 84, 127, 0.4), rgba(10, 84, 127, 0.2));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

export const ProfileImageWrapper = styled.div`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: fit-content;
  margin: 0 auto;
`;

export const ProfileImage = styled(Image)`
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.1);
`;

export const IntroSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const GradientTitle = styled.h1`
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 300;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const StyledSocialLink = styled(Link)`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`; 