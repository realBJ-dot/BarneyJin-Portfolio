import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container className="text-center">
        <h2 className={styles.heading}>About</h2>
        <p>If you wanna reach out
             <Link href="mailto:realbdotjdot@gmail.com" target="_blank" rel="noopener noreferrer" className='haha'> click me!</Link></p>
        <div className="mt-4">
          <p>© 2024 Peiyuan (Barney) Jin.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
