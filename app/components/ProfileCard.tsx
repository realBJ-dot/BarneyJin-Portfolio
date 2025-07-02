import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { SocialLink } from '../types/interfaces';
import { socialLinks } from '../constants/socialLinks';
import { 
  ProfileContainer, 
  ProfileImageWrapper, 
  ProfileImage,
  IntroSection,
  GradientTitle,
  Tagline,
  SocialLinksContainer,
  StyledSocialLink 
} from '../styles/ProfileCard.styles';

export default function ProfileCard() {
  return (
    <ProfileContainer>
      <Row className="align-items-center">
        <Col md={3} className="text-center mb-4 mb-md-0">
          <ProfileImageWrapper>
            <ProfileImage
              src="/BarneyJin-Portfolio/images/profile.png"
              alt="Peiyuan Jin"
              width={180}
              height={180}
              className="rounded-circle"
            />
          </ProfileImageWrapper>
        </Col>
        <Col md={9}>
          <IntroSection>
            <GradientTitle>
              Hey there! I am Barney Jin:
            </GradientTitle>
            <Tagline>
              To be a dreamer, or not to be... ✌️
            </Tagline>
            <SocialLinksContainer>
              {socialLinks.map((link: SocialLink, index: number) => (
                <StyledSocialLink 
                  key={index}
                  href={link.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={link.icon} 
                    alt={link.alt} 
                    width={25} 
                    height={25}
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </StyledSocialLink>
              ))}
            </SocialLinksContainer>
          </IntroSection>
        </Col>
      </Row>
    </ProfileContainer>
  );
} 