import { NextResponse } from 'next/server';

export interface RateLimitConfig {
  interval: number; // milliseconds
  uniqueTokenPerInterval: number;
}

interface RateLimitContextItem {
  count: number;
  resetTime: number;
}

interface RateLimitContext {
  [key: string]: RateLimitContextItem;
}

// Store for rate limit data (in-memory)
// Note: This will reset when your server restarts
// For production, consider using Redis or another persistent store
const rateLimitContext: RateLimitContext = {};

export function rateLimit(options: RateLimitConfig) {
  const { interval, uniqueTokenPerInterval } = options;
  
  // Clean up expired entries periodically
  const cleanup = () => {
    const now = Date.now();
    for (const key of Object.keys(rateLimitContext)) {
      if (rateLimitContext[key].resetTime < now) {
        delete rateLimitContext[key];
      }
    }
  };
  
  // Run cleanup every interval
  setInterval(cleanup, interval);
  
  return {
    check: async (
      res: typeof NextResponse,
      limit: number,
      token: string
    ): Promise<void> => {
      const now = Date.now();
      const resetTime = now + interval;
      
      // Cleanup old data when we have too many entries
      if (Object.keys(rateLimitContext).length > uniqueTokenPerInterval) {
        cleanup();
      }
      
      // Initialize or get the existing token data
      if (!rateLimitContext[token]) {
        rateLimitContext[token] = {
          count: 1,
          resetTime
        };
        return;
      }
      
      // If the reset time has passed, reset the counter
      if (rateLimitContext[token].resetTime < now) {
        rateLimitContext[token] = {
          count: 1,
          resetTime
        };
        return;
      }
      
      // Check if we've hit the limit
      const tokenCount = rateLimitContext[token].count;
      if (tokenCount >= limit) {
        const error: any = new Error('Rate limit exceeded');
        error.statusCode = 429;
        throw error;
      }
      
      // Increment the count
      rateLimitContext[token].count++;
    }
  };
}