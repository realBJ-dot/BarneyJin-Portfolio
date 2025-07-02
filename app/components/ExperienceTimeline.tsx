'use client';
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ExperienceTimeline.module.css';
import Image from 'next/image';

const sideProjects = [
  {
    title: 'Yes!Chef - Smart Kitchen Assistant App',
    icon: '/BarneyJin-Portfolio/images/YesChef.png',
    duration: 'March 2024',
    description: (
      <>
        <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '20px' }}>
          <li>Smart kitchen assistant app that helps prevent food waste and improves meal planning</li>
          <li>Recommends recipes based on available ingredients in your kitchen</li>
          <li>Generates smart grocery lists to prevent overbuying</li>
          <li>Features ingredient tracking and recipe recommendation system</li>
        </ul>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Swift</span>
          <span className={styles['skill-label']}>Firebase</span>
          <span className={styles['skill-label']}>IOS development</span>
          <span className={styles['skill-label']}>UI/UX Design</span>
        </div>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7345604483235663873/" target="_blank" rel="noopener noreferrer"
           style={{ color: '#4facfe', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>
          View Demo →
        </a>
      </>
    ),
  },
  {
    title: 'Personal Portfolio Website',
    icon: '/BarneyJin-Portfolio/images/profile.png',
    duration: 'February 2024',
    description: (
      <>
        <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '20px' }}>
          <li>Modern, responsive portfolio website showcasing professional experience</li>
          <li>Built with Next.js and TypeScript for optimal performance</li>
          <li>Features interactive timeline, dynamic content, and modern UI elements</li>
        </ul>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Next.js</span>
          <span className={styles['skill-label']}>TypeScript</span>
          <span className={styles['skill-label']}>React</span>
          <span className={styles['skill-label']}>Bootstrap</span>
          <span className={styles['skill-label']}>CSS Modules</span>
        </div>
        <a href="https://github.com/realBJ-dot/BarneyJin-Portfolio" target="_blank" rel="noopener noreferrer"
           style={{ color: '#4facfe', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>
          View on GitHub →
        </a>
      </>
    ),
  },
];

const educationExperiences = [
  {
    title: 'Master of Computer Science, UIUC 🧑‍🎓',
    icon: '/BarneyJin-Portfolio/images/UIUC_icon.png',
    duration: 'Spring 2024 - Present',
    description: (
      <>
        <h4>Core Courseworks</h4>
        <div className={styles.courseInfo}>
          Fault Tolerant System, Computer System Organization, Large Language Models
        </div>
        
        <h4>Research Projects 🧑‍🔬</h4>
        
        <div className={styles.researchItem}>
          <h5>Fault Tolerant System Design for AVs</h5>
          <p>(Autonomous Vehicles)</p>
          <a 
            href="https://drive.google.com/file/d/1Ze3Mv3jtRBpiKniBh6ZKDQrHe5rRU_Bg/view" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#4facfe', textDecoration: 'none' }}
          >
            Out-of-Distribution Detection and Fallback for Autonomous Vehicles →
          </a>
        </div>
        
        <div className={styles.researchItem}>
          <h5>Extended Empirical Study on Fuzz4ALL</h5>
          <p>(Universal Fuzzing with Large Language Models)</p>
          <a 
            href="https://drive.google.com/file/d/1f_eW_4yI5ZAiG47OOOxi43MZze2bH8Su/view" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#4facfe', textDecoration: 'none' }}
          >
            Extended Empirical Study on Fuzz4ALL →
          </a>
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
        <h4>Core Courseworks</h4>
        <div className={styles.courseInfo}>
          Data Structure, Data Analytics, Algorithms, Linear Algebra, Database Design, Computer System Organization
        </div>
        
        <h4>Teaching Assistant</h4>
        <div className={styles.courseInfo}>
          CS125 (Intro to CS), CS222 (Software Programming Studio)
        </div>
        
        <h4>Key Skills</h4>
        <div className={styles.skillContainer}>
          <span className={styles['skill-label']}>Java</span>
          <span className={styles['skill-label']}>Python</span>
          <span className={styles['skill-label']}>JavaScript</span>
          <span className={styles['skill-label']}>Android Studio</span>
          <span className={styles['skill-label']}>RESTful API</span>
        </div>
      </>
    ),
  },
];

const workExperiences = [
  {
    title: 'Staff Software Engineer, EngineeringPeople 👨‍💻',
    icon: '/BarneyJin-Portfolio/images/EngineeringPeople_icon.png',
    duration: 'Summer 2024 - Present',
    description: (
      <>
        <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '20px' }}>
          <li>Leading the development of Go Birdie Go, a revolutionary golf coaching app</li>
          <li>Architecting the full-stack solution using Flutter and Firebase</li>
          <li>Managing the development lifecycle from design to deployment</li>
        </ul>
        
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
          <span className={styles['skill-label']}>Swift</span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px',
          marginTop: '30px'
        }}>
          <a href="https://www.gobirdiego.com/" target="_blank" rel="noopener noreferrer" 
             style={{ color: '#4facfe', textDecoration: 'none' }}>
            Visit Website →
          </a>
          <Image 
            src="/BarneyJin-Portfolio/images/go_birdie_go_enterprises_logo.jpeg"
            alt="Go Birdie Go Enterprise"
            width={50}
            height={50}
            style={{ 
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '4px'
            }}
          />
        </div>
      </>
    ),
  },
  {
    title: 'Software Development Engineer, John Deere 👨‍💻',
    icon: '/BarneyJin-Portfolio/images/John_Deere.png',
    duration: 'Summer 2022 - Spring 2024',
    description: (
      <>
        <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '20px' }}>
          <li>Developed and maintained enterprise-level web applications for internal HR management</li>
          <li>Implemented data analytics solutions for improved business insights</li>
          <li>Led infrastructure modernization initiatives including containerization and CI/CD</li>
          <li>Optimized application hosting and deployment strategies</li>
        </ul>
        
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
          <div className={styles.researchItem}>
            <h5>Shengqi Wang</h5>
            <p>Senior Full-Stack Software Engineer at John Deere</p>
            <p style={{ fontStyle: 'italic' }}>&ldquo;The most helpful mentor on this planet&rdquo;</p>
            <a href="mailto:shengqiw97@gmail.com" style={{ color: '#4facfe', textDecoration: 'none' }}>
              shengqiw97@gmail.com →
            </a>
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
          }
        });
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  return (
    <Container className={styles.timelineContainer} ref={timelineRef}>
      

      <h2 className="text-center mb-5" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '2.5rem', fontWeight: '700' }}>
        Experience & Education
      </h2>
      <div className={styles.splitContainer}>
        <div className={`${styles.splitColumn} ${styles.splitColumnLeft}`}>
          <h3 className="text-end mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.8rem' }}>
            Education 🎓
          </h3>
          {educationExperiences.map((exp, index) => (
            <div className={styles.timelineItem} key={`edu-${index}`}>
              <div className={styles.timelineContent}>
                {exp.icon && (
                  <Image 
                    src={exp.icon} 
                    alt={`${exp.title} icon`} 
                    className={styles.icon} 
                    width={60} 
                    height={60} 
                  />
                )}
                <h3>{exp.title}</h3>
                <span className={styles.duration}>{exp.duration}</span>
                {exp.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className={`${styles.splitColumn} ${styles.splitColumnRight}`}>
          <h3 className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.8rem' }}>
            Work Experience 💼
          </h3>
          {workExperiences.map((exp, index) => (
            <div className={styles.timelineItem} key={`work-${index}`}>
              <div className={styles.timelineContent}>
                {exp.icon && (
                  <Image 
                    src={exp.icon} 
                    alt={`${exp.title} icon`} 
                    className={styles.icon} 
                    width={60} 
                    height={60} 
                  />
                )}
                <h3>{exp.title}</h3>
                <span className={styles.duration}>{exp.duration}</span>
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-center mb-5" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '2.5rem', fontWeight: '700' }}>
        Siddies
      </h2>
      <Row className="justify-content-center mb-5">
        <Col md={12}>
          <div className={styles.timeline}>
            {sideProjects.map((project, index) => (
              <div className={styles.timelineItem} key={`project-${index}`}>
                <div className={styles.timelineContent}>
                  {project.icon && (
                    <Image 
                      src={project.icon} 
                      alt={`${project.title} icon`} 
                      className={styles.icon} 
                      width={60} 
                      height={60} 
                    />
                  )}
                  <h3>{project.title}</h3>
                  <span className={styles.duration}>{project.duration}</span>
                  {project.description}
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



