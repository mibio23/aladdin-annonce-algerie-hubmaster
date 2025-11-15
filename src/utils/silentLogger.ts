/**
 * Silent logger for production - zero overhead
 */

const isProduction = process.env.NODE_ENV === 'production';

export const logger = {
  debug: (...args: any[]) => {
    if (!isProduction) console.debug(...args);
  },
  info: (...args: any[]) => {
    if (!isProduction) console.info(...args);
  },
  warn: (...args: any[]) => {
    if (!isProduction) console.warn(...args);
  },
  error: (...args: any[]) => {
    if (!isProduction) console.error(...args);
  }
};