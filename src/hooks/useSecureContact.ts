import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useSecurityAudit } from './useSecurityAudit';

interface ContactRequest {
  announcementId: string;
  requesterEmail: string;
  requesterName: string;
  message?: string;
}

// BusinessContact interface removed - unused

export const useSecureContact = () => {
  const [loading, setLoading] = useState(false);
  const { logContactAccess } = useSecurityAudit();

  const getSecureAnnouncementDetails = useCallback(async (announcementId: string) => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .rpc('get_announcement_with_protected_contact', { 
          announcement_id: announcementId 
        });

      if (error) throw error;

      await logContactAccess('announcement_view', announcementId);
      
      return { 
        success: true, 
        announcement: data?.[0] || null 
      };
    } catch (error) {
      console.error('[Contact] Failed to get secure announcement details:', error);
      return { success: false, announcement: null, error };
    } finally {
      setLoading(false);
    }
  }, [logContactAccess]);

  const requestContactAccess = useCallback(async (announcementId: string) => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .rpc('request_contact_access', { 
          announcement_id: announcementId 
        });

      if (error) throw error;

      const result = data?.[0];
      
      if (result?.contact_allowed) {
        await logContactAccess('contact_revealed', announcementId);
        return { 
          success: true, 
          phoneNumber: result.phone_number,
          contactAllowed: true 
        };
      } else {
        return { 
          success: false, 
          phoneNumber: null,
          contactAllowed: false,
          message: 'Authentication required to access contact information'
        };
      }
    } catch (error) {
      console.error('[Contact] Failed to request contact access:', error);
      return { 
        success: false, 
        phoneNumber: null,
        contactAllowed: false,
        error 
      };
    } finally {
      setLoading(false);
    }
  }, [logContactAccess]);

  const submitContactRequest = useCallback(async (request: ContactRequest) => {
    try {
      setLoading(true);

      const { error } = await supabase
        .from('contact_requests')
        .insert({
          announcement_id: request.announcementId,
          requester_email: request.requesterEmail,
          requester_name: request.requesterName,
          message: request.message,
          status: 'pending'
        });

      if (error) throw error;

      await logContactAccess('announcement', request.announcementId);
      return { success: true };
    } catch (error) {
      console.error('[Contact] Failed to submit contact request:', error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [logContactAccess]);

  const getBusinessContacts = useCallback(async (shopId: string, authenticated: boolean = false) => {
    try {
      setLoading(true);

      // Build query based on authentication status
      let query = supabase
        .from('business_contacts')
        .select('*')
        .eq('shop_id', shopId);

      if (authenticated) {
        query = query.or('is_public.eq.true,requires_auth.eq.true');
      } else {
        query = query.eq('is_public', true);
      }

      const { data, error } = await query;

      if (error) throw error;

      await logContactAccess('shop_contacts', shopId);

      return {
        success: true,
        contacts: data?.map(contact => ({
          id: contact.id,
          shopId: contact.shop_id,
          contactType: contact.contact_type,
          contactValue: contact.contact_value,
          isPublic: contact.is_public,
          requiresAuth: contact.requires_auth
        })) || []
      };
    } catch (error) {
      console.error('[Contact] Failed to get business contacts:', error);
      return { success: false, error, contacts: [] };
    } finally {
      setLoading(false);
    }
  }, [logContactAccess]);

  const getMaskedPhoneNumber = useCallback(async (phoneNumber: string) => {
    try {
      const { data, error } = await supabase
        .rpc('mask_phone_number', { phone_number: phoneNumber });

      if (error) throw error;

      return { success: true, maskedPhone: data };
    } catch (error) {
      console.error('[Contact] Failed to mask phone number:', error);
      return { success: false, maskedPhone: phoneNumber };
    }
  }, []);

  const checkContactRateLimit = useCallback(async (sessionId: string, contactType: string) => {
    try {
      const { data, error } = await supabase
        .rpc('rate_limit_contact_access', { 
          user_session: sessionId, 
          contact_type: contactType 
        });

      if (error) throw error;

      return { allowed: data };
    } catch (error) {
      console.error('[Contact] Failed to check rate limit:', error);
      return { allowed: false };
    }
  }, []);

  return {
    loading,
    submitContactRequest,
    getBusinessContacts,
    getMaskedPhoneNumber,
    checkContactRateLimit,
    getSecureAnnouncementDetails,
    requestContactAccess
  };
};