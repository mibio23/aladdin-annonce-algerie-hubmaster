import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface SecurityEvent {
  actionType: string;
  resourceType: string;
  resourceId?: string;
  metadata?: Record<string, any>;
}

export const useSecurityAudit = () => {
  const [loading, setLoading] = useState(false);
  const { user, session } = useAuth();

  const logSecurityEvent = useCallback(async (event: SecurityEvent) => {
    if (!session) return;

    try {
      setLoading(true);
      
      // Generate a session ID for tracking
      const sessionId = session.access_token.substring(0, 32);
      
      await supabase.rpc('log_security_event', {
        p_user_id: user?.id || null as any,
        p_session_id: sessionId,
        p_action_type: event.actionType,
        p_resource_type: event.resourceType,
        p_resource_id: event.resourceId,
        p_metadata: event.metadata || {}
      });
    } catch (error) {
      console.error('[Security] Failed to log security event:', error);
    } finally {
      setLoading(false);
    }
  }, [user, session]);

  const logProfileAccess = useCallback((profileId: string, accessType: 'view' | 'edit') => {
    return logSecurityEvent({
      actionType: `profile_${accessType}`,
      resourceType: 'profile',
      resourceId: profileId,
      metadata: { timestamp: new Date().toISOString() }
    });
  }, [logSecurityEvent]);

  const logContactAccess = useCallback((contactType: string, resourceId: string) => {
    return logSecurityEvent({
      actionType: 'contact_access',
      resourceType: contactType,
      resourceId: resourceId,
      metadata: { 
        timestamp: new Date().toISOString(),
        contact_type: contactType 
      }
    });
  }, [logSecurityEvent]);

  const logSensitiveDataAccess = useCallback((dataType: string, resourceId: string) => {
    return logSecurityEvent({
      actionType: 'sensitive_data_access',
      resourceType: dataType,
      resourceId: resourceId,
      metadata: { 
        timestamp: new Date().toISOString(),
        data_type: dataType 
      }
    });
  }, [logSecurityEvent]);

  return {
    logSecurityEvent,
    logProfileAccess,
    logContactAccess,
    logSensitiveDataAccess,
    loading
  };
};