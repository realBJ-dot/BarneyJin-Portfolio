import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '../../utils/rate-limit';

// Create a rate limiter: max 5 requests per minute per IP
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  try {
    // Apply rate limiting
    await limiter.check(NextResponse, 5, ip);
    
    // Parse request body
    const body = await request.json();
    const { email, message, name = 'Website Visitor' } = body;
    
    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' }, 
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' }, 
        { status: 400 }
      );
    }
    
    // Sanitize inputs to prevent HTML injection
    const sanitizedMessage = message
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const sanitizedName = name
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Server configuration error' }, 
        { status: 500 }
      );
    }
    
    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    
    // Prepare and send email
    try {
      const info = await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: 'realbdotjdot@gmail.com', // Your email address
        replyTo: email, // Allow direct reply to sender
        subject: `Portfolio Contact from ${sanitizedName}`,
        html: `
          <h3>New message from your portfolio</h3>
          <p><strong>From:</strong> ${sanitizedName} (${email})</p>
          <p><strong>Sent on:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>IP Address:</strong> ${ip}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        `,
      });
      
      // Log successful email for monitoring
      console.log(`Email sent: ${info.messageId}`);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' }, 
        { status: 500 }
      );
    }
    
    return NextResponse.json({ message: 'Message sent successfully! Thank you for reaching out.' });
  } catch (error: any) {
    console.error('Contact form error:', error);
    
    // Check if it's a rate limit error
    if (error.statusCode === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' }, 
      { status: 500 }
    );
  }
}

// Handle GET requests to the endpoint
export async function GET() {
  return NextResponse.json(
    { error: 'This endpoint only accepts POST requests' }, 
    { status: 405 }
  );
}