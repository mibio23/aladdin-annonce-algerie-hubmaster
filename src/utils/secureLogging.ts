// Secure logging utilities to prevent sensitive data exposure

interface LoggingConfig {
  enableSensitiveData: boolean;
  environment: 'development' | 'production';
}

const config: LoggingConfig = {
  enableSensitiveData: process.env.NODE_ENV === 'development',
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};

// Fields that should never be logged
const SENSITIVE_FIELDS = [
  'password', 'token', 'email', 'phone', 'address', 'ssn',
  'credit_card', 'bank_account', 'api_key', 'secret',
  'first_name', 'last_name', 'user_id', 'session_id'
];

// Sanitize object by removing or masking sensitive fields
function sanitizeData(data: any): any {
  if (!data || typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(item => sanitizeData(item));
  }

  const sanitized: any = {};
  
  for (const [key, value] of Object.entries(data)) {
    const keyLower = key.toLowerCase();
    
    if (SENSITIVE_FIELDS.some(field => keyLower.includes(field))) {
      // Mask sensitive fields
      if (typeof value === 'string' && value.length > 0) {
        sanitized[key] = value.length > 4 ? 
          value.substring(0, 2) + '*'.repeat(value.length - 4) + value.slice(-2) :
          '*'.repeat(value.length);
      } else {
        sanitized[key] = '[MASKED]';
      }
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizeData(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

// Secure console logging
export const secureLog = {
  info: (message: string, data?: any) => {
    if (config.environment === 'production') {
      console.log(`[INFO] ${message}`);
    } else {
      console.log(`[INFO] ${message}`, data ? sanitizeData(data) : '');
    }
  },

  warn: (message: string, data?: any) => {
    if (config.environment === 'production') {
      console.warn(`[WARN] ${message}`);
    } else {
      console.warn(`[WARN] ${message}`, data ? sanitizeData(data) : '');
    }
  },

  error: (message: string, error?: any) => {
    // Always log errors but sanitize sensitive data
    const sanitizedError = error && typeof error === 'object' ? 
      sanitizeData(error) : error;
    
    console.error(`[ERROR] ${message}`, sanitizedError);
  },

  debug: (message: string, data?: any) => {
    if (config.environment === 'development') {
      console.debug(`[DEBUG] ${message}`, data ? sanitizeData(data) : '');
    }
  },

  security: (message: string, data?: any) => {
    // Security events should always be logged but with minimal data
    console.warn(`[SECURITY] ${message}`, data ? { timestamp: new Date().toISOString() } : '');
  }
};

// Function to mask email addresses in logs
export const maskEmail = (email: string): string => {
  if (!email || !email.includes('@')) return email;
  
  const [localPart, domain] = email.split('@');
  const maskedLocal = localPart.length > 2 ? 
    localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1] :
    '*'.repeat(localPart.length);
  
  return `${maskedLocal}@${domain}`;
};

// Function to mask phone numbers
export const maskPhone = (phone: string): string => {
  if (!phone || phone.length < 4) return phone;
  
  return phone.substring(0, 2) + '*'.repeat(phone.length - 4) + phone.slice(-2);
};

// Function to mask user IDs for logging
export const maskUserId = (userId: string): string => {
  if (!userId) return userId;
  
  return userId.length > 8 ? 
    userId.substring(0, 4) + '-****-' + userId.slice(-4) :
    '*'.repeat(userId.length);
};