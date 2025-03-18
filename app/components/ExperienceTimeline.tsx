'use client';
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ExperienceTimeline.module.css';
import Image from 'next/image';

const experiences = [
  {
    title: 'Master of Computer Science, UIUC 🧑‍🎓',
    icon: '/BarneyJin-Portfolio/images/UIUC_icon.png',
    duration: 'Spring 2024 - Present',
    description: (
      <>
        <h4>Core Courseworks:</h4>
        <span className={styles.courseInfo}>Fault Tolerant System, Computer System Organization, Large Language Models</span>
        
        <h4>Research Projects 🧑‍🔬</h4>
        
        <div className={styles.researchItem}>
          <h5>Fault Tolerant System Design for AVs</h5>
          <p>(Autonomous Vehicles)</p>
          <a 
            href="https://drive.google.com/file/d/1Ze3Mv3jtRBpiKniBh6ZKDQrHe5rRU_Bg/view" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Out-of-Distribution Detection and Fallback for Autonomous Vehicles
          </a>
        </div>
        
        <div className={styles.researchItem}>
          <h5>Extended Empirical Study on Fuzz4ALL</h5>
          <p>(Universal Fuzzing with Large Language Models)</p>
          <a 
            href="https://drive.google.com/file/d/1f_eW_4yI5ZAiG47OOOxi43MZze2bH8Su/view" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Extended Empirical Study on Fuzz4ALL
          </a>
        </div>
      </>
    ),
  },
  {
    title: 'Staff Software Engineer, EngineeringPeople 👨‍💻',
    icon: '/BarneyJin-Portfolio/images/EngineeringPeople_icon.png',
    duration: 'Summer 2024 - Present',
    description: (
      <>
        <h4>Co-founder of <a href="https://www.gobirdiego.com/" target="_blank" rel="noopener noreferrer">Go Birdie Go</a></h4>
        <p>A revolutionary in-pocket coach to track your putt progress in golf</p>
        
        <h4>Technical Stack</h4>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Flutter</span>
          <span className={styles['skill-label']}>Firebase</span>
          <span className={styles['skill-label']}>Python</span>
          <span className={styles['skill-label']}>Dart</span>
          <span className={styles['skill-label']}>iOS Development</span>
          <span className={styles['skill-label']}>Figma</span>
          <span className={styles['skill-label']}>Firebase Cloud Functions</span>
          <span className={styles['skill-label']}>Cloud Firestore</span>
        </div>
      </>
    ),
  },
  {
    title: 'Bachelor of Science, Mathematics and Computer Science, UIUC 🧑‍🎓',
    icon: '/BarneyJin-Portfolio/images/UIUC_icon.png',
    duration: 'Fall 2019 - Summer 2023',
    description: (
      <>
      <h4>Core Courseworks:</h4>
      <span className={styles.courseInfo}>Data Structure, Data Analytics, Algorithms, Linear Algebra, Database Design, Computer System Organization</span>
        <h4>Teaching Assistant</h4>
        <span className={styles.courseInfo}>CS125 (Intro to CS), CS222 (Software Programming Studio)</span>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Java</span>
          <span className={styles['skill-label']}>Python</span>
          <span className={styles['skill-label']}>JavaScript</span>
        </div>
        
        <h4>Open Source Developer</h4>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Android Studio</span>
          <span className={styles['skill-label']}>Restful API</span>
        </div>
      </>
    )
  },
  {
    title: 'Software Development Engineer, John Deere 👨‍💻',
    icon: '/BarneyJin-Portfolio/images/John_Deere.png',
    duration: 'Summer 2022 - Spring 2024',
    description: (
      <>
        <h4>Technical Stack</h4>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>TypeScript</span>
          <span className={styles['skill-label']}>React</span>
          <span className={styles['skill-label']}>Node.js</span>
          <span className={styles['skill-label']}>Next.js</span>
          <span className={styles['skill-label']}>tanStackQuery</span>
          <span className={styles['skill-label']}>Jotai</span>
          <span className={styles['skill-label']}>Prisma</span>
        </div>
        
        <h4>DevOps & Cloud</h4>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Terraform</span>
          <span className={styles['skill-label']}>Jenkins</span>
          <span className={styles['skill-label']}>AWS ECS</span>
          <span className={styles['skill-label']}>AWS RDS</span>
          <span className={styles['skill-label']}>Auth</span>
        </div>
        
        <div className={styles.referenceSection}>
          <h4>Professional Reference</h4>
          <div className={styles['reference-item']}>
            <h4>Shengqi Wang</h4>
            <p>The most helpful mentor on this planet</p>
            <p><strong>Senior Full-Stack Software Engineer</strong> at <strong>John Deere</strong></p>
            <a href="mailto:shengqiw97@gmail.com">shengqiw97@gmail.com</a>
          </div>
        </div>
      </>
    ),
  },
];

const ExperienceTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibility = () => {
      const timelineItems = timelineRef.current?.getElementsByClassName(styles.timelineItem);
      if (timelineItems) {
        Array.from(timelineItems).forEach((item) => {
          if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add(styles.timelineItemInView);
          } else {
            item.classList.remove(styles.timelineItemInView);
          }
        });
      }
    };

    updateVisibility(); // Call on mount to update visibility
    window.addEventListener('scroll', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  return (
    <Container className={styles.timelineContainer} ref={timelineRef}>
      <Row className="justify-content-center">
        <Col md={12}>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div className={styles.timelineItem} key={index}>
                <div className={styles.timelineContent}>
                  {exp.icon && (
                    <Image 
                      src={exp.icon} 
                      alt={`${exp.title} icon`} 
                      className={styles.icon} 
                      width={50} 
                      height={50} 
                    />
                  )}
                  <h3>{exp.title}</h3>
                  <p style={{fontStyle: 'italic'}}>{exp.duration}</p>
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceTimeline;



