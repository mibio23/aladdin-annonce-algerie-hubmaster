/**
 * Configuration des en-têtes de sécurité pour l'application
 */

export const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://smsvybphkdxzvgawzoru.supabase.co wss://smsvybphkdxzvgawzoru.supabase.co",
    "media-src 'self' blob:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};

/**
 * Configuration des métadonnées de sécurité pour le HTML
 */
export const securityMeta = [
  { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
  { httpEquiv: 'X-Frame-Options', content: 'DENY' },
  { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
  { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
  { httpEquiv: 'Permissions-Policy', content: 'geolocation=(), microphone=(), camera=()' }
];