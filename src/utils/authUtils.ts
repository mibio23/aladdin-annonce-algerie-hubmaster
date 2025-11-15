
import { supabase } from '@/integrations/supabase/client';

// Enhanced authentication utilities with security hardening
export const cleanupAuthState = () => {
  try {
    // Clear all auth-related keys from localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        localStorage.removeItem(key);
      }
    });
    
    // Clear from sessionStorage as well
    Object.keys(sessionStorage || { /* empty */ }).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        sessionStorage.removeItem(key);
      }
    });
    
    // Clear any additional auth-related storage
    ['auth_token', 'refresh_token', 'user_session'].forEach(key => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  } catch (error) {
    console.error('[Security] Auth state cleanup error - details masked');
  }
};

// Enhanced error message mapping with security considerations
export const getSecureErrorMessage = (errorMessage: string): string => {
  const secureMessages: { [key: string]: string } = {
    'Invalid login credentials': 'Identifiants incorrects',
    'Email not confirmed': 'Veuillez confirmer votre email',
    'Too many requests': 'Trop de tentatives. Réessayez dans 15 minutes',
    'Password should be at least 6 characters': 'Mot de passe trop faible',
    'Password should be at least 8 characters': 'Le mot de passe doit contenir au moins 8 caractères',
    'User already registered': 'Un compte existe déjà pour cet email',
    'Invalid email': 'Format d\'email invalide',
    'Signup requires a valid password': 'Mot de passe requis pour l\'inscription',
    'Password is too weak': 'Mot de passe trop faible. Utilisez au moins 8 caractères avec majuscules, minuscules, chiffres et symboles',
    'Rate limit exceeded': 'Limite de tentatives dépassée. Patientez 15 minutes',
    'Email rate limit exceeded': 'Trop d\'emails envoyés. Réessayez plus tard',
    'SMS rate limit exceeded': 'Trop de SMS envoyés. Réessayez plus tard',
    'Signups not allowed for otp': 'Inscription non autorisée via OTP',
    'Invalid refresh token': 'Session expirée. Veuillez vous reconnecter'
  };

  // Return a secure, user-friendly message or a generic fallback
  // Never expose internal error details for security
  return secureMessages[errorMessage] || 'Erreur d\'authentification. Veuillez réessayer';
};

// Session validation for enhanced security
export const validateSession = async (): Promise<boolean> => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error || !session) {
      cleanupAuthState();
      return false;
    }

    // Check if session is still valid
    const now = Date.now();
    const sessionExpiry = new Date(session.expires_at || 0).getTime();
    
    if (sessionExpiry <= now) {
      cleanupAuthState();
      return false;
    }

    return true;
  } catch (error) {
    console.error('Session validation error:', error);
    cleanupAuthState();
    return false;
  }
};

// Enhanced password validation with stronger security
export const validatePasswordClient = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 12) {
    errors.push('Le mot de passe doit contenir au moins 12 caractères');
  }
  
  if (password.length > 128) {
    errors.push('Le mot de passe ne peut pas dépasser 128 caractères');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une minuscule');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une majuscule');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un chiffre');
  }
  
  if (!/[^a-zA-Z0-9]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un caractère spécial');
  }
  
  // Enhanced common password detection
  const commonPasswords = [
    'password', '123456', 'qwerty', 'admin', 'user', 'azerty',
    'motdepasse', '1234567890', 'password123', 'admin123',
    'qwerty123', 'azerty123', 'password1', 'admin1', 'welcome',
    'changeme', 'secret', 'letmein', 'trustno1', 'dragon'
  ];
  
  if (commonPasswords.some(common => password.toLowerCase().includes(common.toLowerCase()))) {
    errors.push('Le mot de passe ne doit pas contenir de mots courants');
  }
  
  // Check for repetitive patterns
  if (/(.)\1{3,}/.test(password)) {
    errors.push('Le mot de passe ne doit pas contenir de motifs répétitifs');
  }
  
  // Check for keyboard patterns
  const keyboardPatterns = ['qwerty', 'azerty', '123456', 'abcdef'];
  if (keyboardPatterns.some(pattern => password.toLowerCase().includes(pattern))) {
    errors.push('Le mot de passe ne doit pas contenir de séquences de clavier');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Secure session ID generation
export const generateSecureSessionId = (): string => {
  return crypto.randomUUID();
};
