import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * Safely formats a date string to a relative time format
 * @param dateString - The date string to format (ISO string expected)
 * @param fallback - Fallback text if date is invalid
 * @returns Formatted relative time string
 */
export const formatSafeRelativeTime = (
  dateString: string | null | undefined, 
  fallback: string = 'Récent'
): string => {
  if (!dateString) return fallback;
  
  try {
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // If it's a French relative string like "Il y a 2 jours", just return it
      if (typeof dateString === 'string' && dateString.includes('Il y a')) {
        return dateString;
      }
      return fallback;
    }
    
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: fr
    });
  } catch (error) {
    // If it's a French relative string, return it as is
    if (typeof dateString === 'string' && dateString.includes('Il y a')) {
      return dateString;
    }
    return fallback;
  }
};

/**
 * Safely converts any date input to a valid ISO string
 * @param dateInput - Date input (string, Date, or null)
 * @returns Valid ISO date string
 */
export const toSafeISOString = (dateInput: string | Date | null | undefined): string => {
  if (!dateInput) return new Date().toISOString();
  
  try {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
};

/**
 * Checks if a date string is a valid date
 * @param dateString - The date string to validate
 * @returns True if valid, false otherwise
 */
export const isValidDate = (dateString: string | null | undefined): boolean => {
  if (!dateString) return false;
  
  try {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  } catch {
    return false;
  }
};