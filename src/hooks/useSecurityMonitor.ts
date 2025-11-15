import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSecurityAudit } from './useSecurityAudit';

interface SecurityThreat {
  type: 'suspicious_login' | 'rapid_requests' | 'invalid_session' | 'data_breach_attempt';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  metadata?: Record<string, any>;
}

interface SecurityMetrics {
  sessionHealth: 'healthy' | 'warning' | 'critical';
  lastSecurityCheck: Date | null;
  threatLevel: 'low' | 'medium' | 'high';
  activeThreats: SecurityThreat[];
}

export const useSecurityMonitor = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    sessionHealth: 'healthy',
    lastSecurityCheck: null,
    threatLevel: 'low',
    activeThreats: []
  });
  
  const [isMonitoring, setIsMonitoring] = useState(false);
  const { user, session } = useAuth();
  const { logSecurityEvent } = useSecurityAudit();

  // Enhanced session validation with security checks
  const validateSessionSecurity = useCallback(async (): Promise<boolean> => {
    try {
      if (!session) {
        setMetrics(prev => ({
          ...prev,
          sessionHealth: 'critical',
          threatLevel: 'high'
        }));
        return false;
      }

      // Check session expiry
      const sessionExpiry = new Date(session.expires_at || 0).getTime();
      const now = Date.now();
      const timeUntilExpiry = sessionExpiry - now;

      if (timeUntilExpiry < 60 * 60 * 1000) { // Less than 1 hour remaining
        await logSecurityEvent({
          actionType: 'session_expiring',
          resourceType: 'auth',
          metadata: { timeUntilExpiry, expiresAt: session.expires_at }
        });

        setMetrics(prev => ({
          ...prev,
          sessionHealth: 'warning',
          activeThreats: [...prev.activeThreats, {
            type: 'invalid_session',
            severity: 'medium',
            timestamp: new Date(),
            metadata: { reason: 'session_expiring_soon' }
          }]
        }));
        return false;
      }

      // Check for suspicious token patterns
      if (session.access_token && session.access_token.length < 100) {
        await logSecurityEvent({
          actionType: 'suspicious_token',
          resourceType: 'auth',
          metadata: { tokenLength: session.access_token.length }
        });

        setMetrics(prev => ({
          ...prev,
          sessionHealth: 'critical',
          threatLevel: 'high',
          activeThreats: [...prev.activeThreats, {
            type: 'suspicious_login',
            severity: 'critical',
            timestamp: new Date(),
            metadata: { reason: 'invalid_token_format' }
          }]
        }));
        return false;
      }

      setMetrics(prev => ({
        ...prev,
        sessionHealth: 'healthy',
        lastSecurityCheck: new Date()
      }));

      return true;
    } catch (error) {
      console.error('[Security] Session validation failed - details hidden for security');
      
      setMetrics(prev => ({
        ...prev,
        sessionHealth: 'critical',
        threatLevel: 'high'
      }));
      
      return false;
    }
  }, [session, logSecurityEvent]);

  // Monitor for rapid API requests (potential DoS)
  const monitorRequestRate = useCallback(() => {
    const requestTimes: number[] = [];
    const MAX_REQUESTS_PER_MINUTE = 60;

    return (endpoint: string) => {
      const now = Date.now();
      requestTimes.push(now);

      // Remove requests older than 1 minute
      const oneMinuteAgo = now - 60000;
      const recentRequests = requestTimes.filter(time => time > oneMinuteAgo);

      if (recentRequests.length > MAX_REQUESTS_PER_MINUTE) {
        logSecurityEvent({
          actionType: 'rate_limit_exceeded',
          resourceType: 'api',
          metadata: { 
            endpoint, 
            requestCount: recentRequests.length,
            timeWindow: '1 minute'
          }
        });

        setMetrics(prev => ({
          ...prev,
          threatLevel: 'medium',
          activeThreats: [...prev.activeThreats, {
            type: 'rapid_requests',
            severity: 'medium',
            timestamp: new Date(),
            metadata: { endpoint, requestCount: recentRequests.length }
          }]
        }));

        return false;
      }

      return true;
    };
  }, [logSecurityEvent]);

  // Secure cleanup of sensitive data from memory
  const secureCleanup = useCallback(() => {
    try {
      // Clear any potentially sensitive data from component state
      setMetrics(prev => ({
        ...prev,
        activeThreats: [],
        lastSecurityCheck: new Date()
      }));

      // Force garbage collection hint (not guaranteed)
      if (window.gc) {
        window.gc();
      }
    } catch (error) {
      console.error('[Security] Cleanup failed - details hidden for security');
    }
  }, []);

  // Enhanced data validation for profile updates
  const validateProfileUpdate = useCallback((profileData: any): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    try {
      // Check for XSS patterns in all string fields
      const stringFields = ['display_name', 'bio', 'first_name', 'last_name', 'location', 'profession'];
      
      for (const field of stringFields) {
        if (profileData[field] && typeof profileData[field] === 'string') {
          const value = profileData[field];
          
          // Check for script tags and dangerous patterns
          if (/<script|javascript:|data:|vbscript:|<iframe|<object|<embed/i.test(value)) {
            errors.push(`Contenu dangereux détecté dans ${field}`);
            
            logSecurityEvent({
              actionType: 'xss_attempt',
              resourceType: 'profile',
              metadata: { field, attemptType: 'script_injection' }
            });
          }

          // Check for SQL injection patterns
          if (/union\s+select|drop\s+table|delete\s+from|insert\s+into/i.test(value)) {
            errors.push(`Tentative d'injection SQL détectée dans ${field}`);
            
            logSecurityEvent({
              actionType: 'sql_injection_attempt',
              resourceType: 'profile',
              metadata: { field, attemptType: 'sql_injection' }
            });
          }
        }
      }

      // Validate phone numbers for proper format
      if (profileData.phone && !/^[\+]?[0-9\-\s\(\)]{10,20}$/.test(profileData.phone)) {
        errors.push('Format de téléphone invalide - risque de sécurité');
      }

      // Check for data exfiltration attempts (overly long strings)
      for (const field of stringFields) {
        if (profileData[field] && profileData[field].length > 1000) {
          errors.push(`${field} trop long - risque de sécurité`);
          
          logSecurityEvent({
            actionType: 'data_exfiltration_attempt',
            resourceType: 'profile',
            metadata: { field, length: profileData[field].length }
          });
        }
      }

    } catch (error) {
      console.error('[Security] Profile validation failed - details hidden for security');
      errors.push('Erreur de validation sécurisée');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }, [logSecurityEvent]);

  // Start security monitoring
  useEffect(() => {
    if (user && session && !isMonitoring) {
      setIsMonitoring(true);

      // Initial security check
      validateSessionSecurity();

      // Set up periodic security checks
      const securityInterval = setInterval(() => {
        validateSessionSecurity();
      }, 5 * 60 * 1000); // Check every 5 minutes

      return () => {
        clearInterval(securityInterval);
        setIsMonitoring(false);
        secureCleanup();
      };
    }
  }, [user, session, isMonitoring, validateSessionSecurity, secureCleanup]);

  // Clear threats after they expire
  useEffect(() => {
    const threatCleanupInterval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeThreats: prev.activeThreats.filter(
          threat => Date.now() - threat.timestamp.getTime() < 30 * 60 * 1000 // 30 minutes
        )
      }));
    }, 60000); // Check every minute

    return () => clearInterval(threatCleanupInterval);
  }, []);

  return {
    metrics,
    validateSessionSecurity,
    monitorRequestRate: monitorRequestRate(),
    validateProfileUpdate,
    secureCleanup,
    isMonitoring
  };
};