'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import Jokes from './components/Jokes';
import Head from 'next/head'


export default function Home() {
  return (
    <Container fluid="md">
      
      
      
      <Row className="align-items-center my-5" style={{ marginTop: '100px' }}>
        <Col md={8} lg={8} className="d-flex align-items-center">
          <div>
            <h1 className="display-4 font-weight-bold">
              Hey there! I am Peiyuan (Barney) Jin
            </h1>
            <p className="lead">
              To be a dreamer, or not to be... ✌️
            </p>
            <Row>
              <Col xs="auto">
                <Link href="https://github.com/realBJ-dot/" target="_blank" rel="noopener noreferrer">
                  <Image src="/BarneyJin-Portfolio/github.png" alt="GitHub" width={30} height={30} />
                </Link>
              </Col>
              <Col xs="auto">
                <Link href="https://www.linkedin.com/in/barneyjin/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" width={30} height={30} />
                </Link>
              </Col>
              <Col xs="auto">
                <Link href="https://drive.google.com/file/d/1yPNNrw0_pDzpVCD2-lFMD4rfo_ve7Iaw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Image src="/BarneyJin-Portfolio/resume.png" alt="resume" width={30} height={30} />
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4} lg={4} className="d-flex align-items-center">
          <Image
            src="/BarneyJin-Portfolio/images/profile.png"
            alt="Peiyuan Jin"
            width={100}  // Adjust the width as needed
            height={100} // Adjust the height to match the intro height
            layout="responsive"
            className="rounded-circle"
          />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <Jokes />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <div className='scrollDownArrow'>
            <span>⇩</span>
          </div>
          <h2 className="text-center mb-4" style={{ opacity: 0 }}>My Experiences 🔽</h2>
          <ExperienceTimeline />
        </Col>
      </Row>
  
      <Footer />
    </Container>
  );
}
