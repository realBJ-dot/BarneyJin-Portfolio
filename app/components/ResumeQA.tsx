'use client';

import { useState } from 'react';
import { resumeData } from '../constants/resumeData';
import styles from './ResumeQA.module.css';

interface Message {
  text: string;
  isUser: boolean;
}

export default function ResumeQA() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const findAnswer = (question: string): string => {
    const q = question.toLowerCase();
    
    // Name related questions
    if (q.includes('name') || q.includes('who') || q.includes('called')) {
      return `My name is ${resumeData.basics.name}, but you can call me ${resumeData.basics.nickname}!`;
    }

    // Profession/job related questions
    if (q.includes('do') || q.includes('profession') || q.includes('job') || q.includes('work')) {
      const currentJob = resumeData.work[0];
      return `I'm a ${resumeData.basics.title}. Currently, I'm working as a ${currentJob.position} at ${currentJob.company}.`;
    }

    // Education related questions
    if (q.includes('study') || q.includes('education') || q.includes('degree') || q.includes('university')) {
      const latestEdu = resumeData.education[0];
      return `I'm pursuing a ${latestEdu.studyType} in ${latestEdu.area} at ${latestEdu.institution}.`;
    }

    // Skills related questions
    if (q.includes('skill') || q.includes('technology') || q.includes('tech stack')) {
      const skills = resumeData.skills.map(skill => 
        `${skill.name}: ${skill.keywords.join(', ')}`
      ).join('\n');
      return `Here are my skills:\n${skills}`;
    }

    // Location related questions
    if (q.includes('where') || q.includes('location') || q.includes('based')) {
      return `I'm based in ${resumeData.basics.location}.`;
    }

    // Contact related questions
    if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return `You can reach me at ${resumeData.basics.email} or connect with me on LinkedIn: ${
        resumeData.basics.profiles.find(p => p.network === 'LinkedIn')?.url
      }`;
    }

    // Experience related questions
    if (q.includes('experience') || q.includes('worked')) {
      const experience = resumeData.work.map(job => 
        `${job.position} at ${job.company} (${job.startDate} - ${job.endDate})`
      ).join('\n');
      return `Here's my work experience:\n${experience}`;
    }

    return "I'm not sure about that. Try asking about my name, profession, education, skills, location, or how to contact me!";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    const botMessage: Message = { text: findAnswer(input), isUser: false };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className={styles.qaContainer}>
      <div className={styles.qaHeader}>
        Ask me anything about Barney!
        <h6>(Well not anything ... I am not a chatbot)</h6>
      </div>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.isUser ? styles.userMessage : styles.botMessage
            }`}
          >
            {message.text.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question... (e.g., What's your name? What do you do?)"
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Ask
        </button>
      </form>
    </div>
  );
} 