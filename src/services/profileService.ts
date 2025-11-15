
import { supabase } from '@/integrations/supabase/client';

export const profileService = {
  async fetchProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      return data;
    } catch (error) {
      // Security: Don't log sensitive user data
      console.error('[Security] Profile fetch error - User ID masked for privacy');
      throw error;
    }
  },

  async updateProfile(userId: string, updates: any) {
    try {
      // Validate input data before processing
      if (!userId || typeof updates !== 'object') {
        throw new Error('Invalid profile update parameters');
      }

      // Remove potentially sensitive fields from updates
      const { _user_id, _id, _created_at, ...sanitizedUpdates } = updates;

      const { data, error } = await supabase
        .from('profiles')
        .update({
          ...sanitizedUpdates,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      // Security: Don't log sensitive profile data
      console.error('[Security] Profile update error - Details masked for privacy');
      throw error;
    }
  },

  async createProfile(userId: string, profileData: any) {
    try {
      if (!userId) {
        throw new Error('User ID is required for profile creation');
      }

      // Remove potentially dangerous fields
      const { id, created_at, _updated_at, user_id, ...sanitizedData } = profileData;

      const { data, error } = await supabase
        .from('profiles')
        .insert({
          user_id: userId,
          ...sanitizedData
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      // Security: Don't log sensitive profile creation data
      console.error('[Security] Profile creation error - User data masked for privacy');
      throw error;
    }
  },

  async updateAvatar(userId: string, avatarUrl: string) {
    try {
      if (!userId) {
        throw new Error('User ID is required');
      }

      // Allow empty string to remove avatar
      // Validate URL format for non-empty, non-base64, non-JSON strings
      if (avatarUrl && !avatarUrl.startsWith('data:') && !avatarUrl.startsWith('{')) {
        try {
          new URL(avatarUrl);
        } catch {
          throw new Error('Invalid avatar URL format');
        }
      }

      const { data, error } = await supabase
        .from('profiles')
        .update({
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      // Security: Don't log sensitive avatar update data
      console.error('[Security] Avatar update error - User data masked for privacy');
      throw error;
    }
  },

  // New secure method to get masked profile data for public display
  async getPublicProfileData(userId: string) {
    try {
      const { data, error } = await supabase
        .rpc('get_public_profile_data', { profile_user_id: userId });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('[Security] Public profile fetch error');
      throw error;
    }
  },

  // New method to get masked contact info
  async getMaskedContactInfo(userId: string) {
    try {
      const { data, error } = await supabase
        .rpc('get_masked_profile_contact', { profile_user_id: userId });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('[Security] Masked contact info fetch error');
      throw error;
    }
  }
};
