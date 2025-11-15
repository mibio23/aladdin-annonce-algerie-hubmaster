import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export type ConsentType = 'behavioral_tracking' | 'data_collection' | 'marketing';

interface PrivacyConsent {
  id: string;
  consentType: ConsentType;
  consentGiven: boolean;
  consentVersion: string;
  createdAt: string;
  updatedAt: string;
}

export const usePrivacyConsent = () => {
  const [consents, setConsents] = useState<PrivacyConsent[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, session } = useAuth();

  const fetchConsents = useCallback(async () => {
    if (!session) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const sessionId = session.access_token.substring(0, 32);

      const { data, error } = await supabase
        .from('user_privacy_consents')
        .select('*')
        .or(`user_id.eq.${user?.id || 'null'},session_id.eq.${sessionId}`)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setConsents(data?.map(consent => ({
        id: consent.id,
        consentType: consent.consent_type as ConsentType,
        consentGiven: consent.consent_given,
        consentVersion: consent.consent_version,
        createdAt: consent.created_at,
        updatedAt: consent.updated_at
      })) || []);
    } catch (error) {
      console.error('[Privacy] Failed to fetch consents:', error);
    } finally {
      setLoading(false);
    }
  }, [user, session]);

  const updateConsent = useCallback(async (
    consentType: ConsentType, 
    consentGiven: boolean
  ) => {
    if (!session) return false;

    try {
      const sessionId = session.access_token.substring(0, 32);

      const { error } = await supabase
        .from('user_privacy_consents')
        .upsert({
          user_id: user?.id || null,
          session_id: sessionId,
          consent_type: consentType,
          consent_given: consentGiven,
          consent_version: '1.0',
          ip_address: null, // Would need to be set server-side
          user_agent: navigator.userAgent
        }, {
          onConflict: 'user_id,session_id,consent_type'
        });

      if (error) throw error;

      // Refresh consents
      await fetchConsents();
      return true;
    } catch (error) {
      console.error('[Privacy] Failed to update consent:', error);
      return false;
    }
  }, [user, session, fetchConsents]);

  const hasConsent = useCallback((consentType: ConsentType): boolean => {
    const consent = consents.find(c => c.consentType === consentType);
    return consent?.consentGiven || false;
  }, [consents]);

  const requiresConsent = useCallback((consentType: ConsentType): boolean => {
    return !hasConsent(consentType);
  }, [hasConsent]);

  useEffect(() => {
    fetchConsents();
  }, [fetchConsents]);

  return {
    consents,
    loading,
    updateConsent,
    hasConsent,
    requiresConsent,
    refetch: fetchConsents
  };
};