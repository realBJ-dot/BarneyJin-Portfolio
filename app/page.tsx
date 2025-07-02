'use client';

import { Container, Row, Col } from 'react-bootstrap';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import JokeCard from './components/JokeCard';
import ResumeQA from './components/ResumeQA';
import { ScrollArrow, ScrollArrowContainer } from './styles/ScrollArrow.styles';

export default function Home() {
  return (
    <Container fluid="md">
      <Row className="align-items-center" style={{ 
        marginTop: '100px',
        marginBottom: '50px'
      }}>
        <Col md={12}>
          <ProfileCard />
          <JokeCard />
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <ScrollArrowContainer>
            <ScrollArrow>⇩</ScrollArrow>
          </ScrollArrowContainer>
          <ExperienceTimeline />
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <ResumeQA />
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}
