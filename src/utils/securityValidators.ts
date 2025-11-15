
// Enhanced security validation utilities
import { z } from 'zod';

// Enhanced password schema with stricter validation
export const passwordSchema = z.string()
  .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
  .max(128, 'Le mot de passe ne peut pas dépasser 128 caractères')
  .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
  .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
  .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
  .regex(/[^a-zA-Z0-9]/, 'Le mot de passe doit contenir au moins un caractère spécial')
  .refine((password) => {
    // Enhanced common password detection
    const commonPasswords = [
      'password', '123456', 'qwerty', 'admin', 'user', 'azerty',
      'motdepasse', '1234567890', 'password123', 'admin123',
      'qwerty123', 'azerty123', 'password1', 'admin1'
    ];
    return !commonPasswords.some(common => 
      password.toLowerCase().includes(common.toLowerCase())
    );
  }, 'Le mot de passe ne doit pas contenir de mots courants')
  .refine((password) => {
    // Check for repetitive patterns
    return !/(.)\1{3,}/.test(password); // No more than 3 consecutive identical characters
  }, 'Le mot de passe ne doit pas contenir de motifs répétitifs');

// Enhanced search query validation
export const searchQuerySchema = z.string()
  .min(1, 'La requête ne peut pas être vide')
  .max(500, 'La requête de recherche est trop longue')
  .refine((query) => {
    // Enhanced XSS protection
    const maliciousPatterns = [
      /<script/i, /javascript:/i, /data:/i, /vbscript:/i,
      /<iframe/i, /<object/i, /<embed/i, /<form/i,
      /on\w+s*=/i, /<img[^>]*srcs*=s*["']?javascript:/i,
      /expressions*(/i, /urls*(/i, /imports*(/i
    ];
    return !maliciousPatterns.some(pattern => pattern.test(query));
  }, 'La requête contient du contenu non autorisé');

// Enhanced user input validation
export const userInputSchema = z.string()
  .max(1000, 'Le texte est trop long')
  .refine((input) => {
    // Enhanced XSS filtering
    const xssPatterns = [
      /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
      /<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,
      /<object[\s\S]*?>[\s\S]*?<\/object>/gi,
      /<embed[\s\S]*?>[\s\S]*?<\/embed>/gi,
      /javascript:/gi, /vbscript:/gi,
      /on\w+\s*=\s*["'][\s\S]*?["']/gi,
      /data:\s*text\/html/gi,
      /expression\s*\(/gi
    ];
    return !xssPatterns.some(pattern => pattern.test(input));
  }, 'Le contenu contient des éléments non autorisés');

// Enhanced rate limiter with better security
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;
  private lastCleanup: number = Date.now();

  constructor(maxRequests: number = 30, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    // Removed setInterval for on-demand cleanup
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Clean old requests
    const userRequests = this.requests.get(identifier) || [];
    const validRequests = userRequests.filter(time => time > windowStart);
    
    // On-demand cleanup every 5 minutes instead of continuous interval
    if (now - this.lastCleanup > 300000) {
      this.cleanup();
      this.lastCleanup = now;
    }
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }

  getTimeUntilReset(identifier: string): number {
    const userRequests = this.requests.get(identifier) || [];
    if (userRequests.length === 0) return 0;
    
    const oldestRequest = Math.min(...userRequests);
    const resetTime = oldestRequest + this.windowMs;
    return Math.max(0, resetTime - Date.now());
  }

  private cleanup(): void {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    for (const [identifier, requests] of this.requests.entries()) {
      const validRequests = requests.filter(time => time > windowStart);
      if (validRequests.length === 0) {
        this.requests.delete(identifier);
      } else {
        this.requests.set(identifier, validRequests);
      }
    }
  }

  destroy(): void {
    // No interval to clear anymore
    this.requests.clear();
  }
}

// Enhanced rate limiters
export const apiRateLimiter = new RateLimiter(10, 60000); // 10 requests per minute
export const searchRateLimiter = new RateLimiter(30, 60000); // 30 searches per minute
export const authRateLimiter = new RateLimiter(5, 300000); // 5 auth attempts per 5 minutes

// Enhanced URL sanitization
export function sanitizeUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    
    // Allow only safe protocols
    const allowedProtocols = ['http:', 'https:', 'mailto:'];
    if (!allowedProtocols.includes(parsedUrl.protocol)) {
      throw new Error('Protocole non autorisé');
    }
    
    // Block dangerous hosts in production
    if (process.env.NODE_ENV === 'production') {
      const dangerousHosts = [
        'localhost', '127.0.0.1', '0.0.0.0', '10.0.0.0',
        '172.16.0.0', '192.168.0.0', 'metadata.google.internal'
      ];
      if (dangerousHosts.some(host => parsedUrl.hostname.includes(host))) {
        throw new Error('Host non autorisé en production');
      }
    }
    
    return parsedUrl.toString();
  } catch (error) {
    throw new Error('URL invalide');
  }
}

// Enhanced session validation
export function validateSessionId(sessionId: string): boolean {
  // More flexible session ID validation
  const sessionRegex = /^[a-zA-Z0-9-]{10,100}$/;
  return sessionRegex.test(sessionId);
}

// Enhanced HTML sanitization
export function sanitizeHtml(html: string): string {
  // Strict allowlist of safe tags
  const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'b', 'i'];
  const allowedTagsRegex = new RegExp(`<(?!/?(${allowedTags.join('|')})s*/?>)[^>]+>`, 'gi');
  
  return html
    .replace(allowedTagsRegex, '') // Remove unauthorized tags
    .replace(/javascript:/gi, '') // Remove JavaScript
    .replace(/vbscript:/gi, '') // Remove VBScript
    .replace(/data:/gi, '') // Remove data URLs
    .replace(/on\w+s*=/gi, '') // Remove event handlers
    .replace(/expressions*(/gi, '') // Remove CSS expressions
    .substring(0, 10000); // Limit length
}

// Enhanced validation function
export function validateUserInput(input: {
  password?: string;
  searchQuery?: string;
  userText?: string;
  url?: string;
  sessionId?: string;
}): SecurityValidationResult {
  const errors: string[] = [];
  
  try {
    if (input.password) {
      passwordSchema.parse(input.password);
    }
    
    if (input.searchQuery) {
      searchQuerySchema.parse(input.searchQuery);
    }
    
    if (input.userText) {
      userInputSchema.parse(input.userText);
    }
    
    if (input.url) {
      sanitizeUrl(input.url);
    }
    
    if (input.sessionId && !validateSessionId(input.sessionId)) {
      errors.push('Format de session invalide');
    }
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.push(...error.errors.map(e => e.message));
    } else if (error instanceof Error) {
      errors.push(error.message);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Types for TypeScript
export type SecurityValidationResult = {
  isValid: boolean;
  errors: string[];
};

// Auto-cleanup quand la page se ferme
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    apiRateLimiter.destroy();
    searchRateLimiter.destroy();
    authRateLimiter.destroy();
  });
}
