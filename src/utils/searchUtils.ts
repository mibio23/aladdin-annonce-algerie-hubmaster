
import { generateSecureSessionId } from './authUtils';

// Enhanced session ID generation with security
export const generateSessionId = (): string => {
  return generateSecureSessionId();
};

// Secure search history management
export const manageSearchHistory = {
  get: (): string[] => {
    try {
      const history = localStorage.getItem('search_history');
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error getting search history:', error);
      return [];
    }
  },

  add: (query: string): string[] => {
    try {
      // Sanitize the query before storing
      const sanitizedQuery = query.trim().substring(0, 100); // Limit length
      
      if (!sanitizedQuery) return manageSearchHistory.get();

      const history = manageSearchHistory.get();
      const newHistory = [sanitizedQuery, ...history.filter(q => q !== sanitizedQuery)].slice(0, 10);
      
      localStorage.setItem('search_history', JSON.stringify(newHistory));
      return newHistory;
    } catch (error) {
      console.error('Error adding to search history:', error);
      return manageSearchHistory.get();
    }
  },

  clear: (): void => {
    try {
      localStorage.removeItem('search_history');
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  }
};

// Input sanitization for search queries
export const sanitizeSearchInput = (input: string): string => {
  // Remove potentially dangerous characters and patterns
  return input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .trim()
    .substring(0, 500); // Limit length
};

// Validate search parameters
export const validateSearchParams = (query: string, sessionId: string): boolean => {
  if (!query || !sessionId) return false;
  if (query.length > 500) return false;
  if (sessionId.length < 10 || sessionId.length > 100) return false;
  if (/[<>"';&]/.test(sessionId)) return false;
  
  return true;
};
