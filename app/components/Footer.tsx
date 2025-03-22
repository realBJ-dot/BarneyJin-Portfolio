// components/Footer.tsx
'use client';
import { useState, FormEvent } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { Mail, Github, Linkedin, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    if (!email || !message) return;
    
    setLoading(true);
    setError(null);
    
    try {
      console.log("Submitting form data");
      const response = await fetch('/BarneyJin-Portfolio/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          message,
        }),
      });
      
      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        // Process JSON response
        const data = await response.json();
        
        if (response.ok) {
          setSubmitted(true);
          setEmail('');
          setName('');
          setMessage('');
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          setError(data.error || 'Failed to send message');
        }
      } else {
        // Handle non-JSON response
        const text = await response.text();
        console.error('Received non-JSON response:', text.substring(0, 200));
        setError('Server returned an invalid response. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Rest of your component remains the same...

  return (
    // Your existing JSX with updated form:
    <Form onSubmit={handleSubmit}>
      {error && (
        <div 
          className="p-3 mb-3 rounded" 
          style={{ 
            backgroundColor: 'rgba(220, 53, 69, 0.2)', 
            border: '1px solid rgba(220, 53, 69, 0.3)'
          }}
        >
          <p className="mb-0 text-danger">{error}</p>
        </div>
      )}
      
      {/* Add name field */}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name (optional)</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white'
          }}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="your@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white'
          }}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="What would you like to say?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white'
          }}
        />
      </Form.Group>
      
      <Button 
        variant="primary" 
        type="submit"
        disabled={loading}
        className="d-flex align-items-center"
        style={{ 
          background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
          border: 'none',
          transition: 'all 0.3s ease',
          transform: loading ? 'scale(0.98)' : 'scale(1)'
        }}
      >
        {loading ? 'Sending...' : (
          <>
            Send Message
            <Send size={16} className="ms-2" />
          </>
        )}
      </Button>
    </Form>
  );
};

export default Footer;