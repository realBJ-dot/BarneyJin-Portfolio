// components/Footer.tsx
'use client';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';
import { Github, Linkedin, Mail, MapPin, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Peiyuan (Barney) Jin</div>
          <div className={styles.footerTagline}>Software Engineer & Full-Stack Developer</div>

          <div className={styles.socialLinks}>
            <Link 
              href="https://github.com/realBJ-dot" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Github size={20} />
              <span>GitHub</span>
            </Link>

            <Link 
              href="https://www.linkedin.com/in/barneyjin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>

            <Link 
              href="mailto:realbdotjdot@gmail.com"
              className={styles.socialLink}
            >
              <Mail size={20} />
              <span>Email</span>
            </Link>

            <Link 
              href="https://drive.google.com/file/d/1yPNNrw0_pDzpVCD2-lFMD4rfo_ve7Iaw/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FileText size={20} />
              <span>Resume</span>
            </Link>
          </div>

          
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              © {currentYear} Peiyuan Jin. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;