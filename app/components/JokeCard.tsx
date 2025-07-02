'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Jokes.module.css';

export default function JokeCard() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('/api/jokes');
      const data = await response.json();
      setJoke(data.joke);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke("Why did the programmer quit his job? Because he didn&apos;t get arrays! 😄");
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.jokeCardContainer}>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className={styles.toggleButton}
      >
        {isVisible ? '🙈' : 'A hint of humor? 🐵'}
      </button>
      
      {isVisible && (
        <div className={styles.chatContainer}>
          <div className={styles.profileSection}>
            <Image 
              src="/BarneyJin-Portfolio/images/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className={styles.profileImage}
            />
            <span className={styles.profileName}>Barney&apos;s Daily Joke</span>
          </div>
          <div className={styles.chatBubble}>
            {isLoading ? (
              <div className={styles.loadingSpinner}>Loading...</div>
            ) : (
              <>
                <p className={styles.jokeText}>{joke}</p>
                <button 
                  onClick={fetchJoke} 
                  className={styles.refreshButton}
                >
                  Another one! 🔄
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 