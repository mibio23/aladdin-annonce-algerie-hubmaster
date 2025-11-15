
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState, validatePasswordClient } from '@/utils/authUtils';

export const authService = {
  async signInWithPassword(email: string, password: string) {
    try {
      // Client-side password validation
      const passwordValidation = validatePasswordClient(password);
      if (!passwordValidation.isValid) {
        return {
          data: null,
          error: { message: 'Mot de passe invalide: ' + passwordValidation.errors.join(', ') }
        };
      }

      // Clean up any existing auth state first
      cleanupAuthState();

      // Attempt global sign out to ensure clean state
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (signOutError) {
        console.warn('Global sign out warning:', signOutError);
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password
      });

      return { data, error };
    } catch (error) {
      console.error('Sign in error:', error);
      return { data: null, error };
    }
  },

  async signUp(email: string, password: string, additionalData?: any) {
    try {
      // Enhanced client-side password validation
      const passwordValidation = validatePasswordClient(password);
      if (!passwordValidation.isValid) {
        return {
          data: null,
          error: { message: 'Mot de passe trop faible: ' + passwordValidation.errors.join(', ') }
        };
      }

      // Clean up any existing auth state
      cleanupAuthState();

      // Use the current site URL, avoiding localhost in production
      const redirectUrl = window.location.origin.includes('localhost') 
        ? window.location.origin.replace('localhost:3000', window.location.hostname !== 'localhost' ? window.location.host : 'lovable.app')
        : `${window.location.origin}/`;

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: additionalData
        }
      });

      return { data, error };
    } catch (error) {
      console.error('Sign up error:', error);
      return { data: null, error };
    }
  },

  async signOut() {
    try {
      cleanupAuthState();
      
      // Attempt global sign out
      const { error } = await supabase.auth.signOut({ scope: 'global' });
      
      if (error) {
        console.warn('Sign out warning:', error);
      }
      
      // Force page refresh for clean state
      setTimeout(() => {
        window.location.href = '/connexion';
      }, 100);
      
    } catch (error) {
      console.error('Sign out error:', error);
      // Force redirect even on error
      window.location.href = '/connexion';
    }
  },

  async getSession() {
    try {
      return await supabase.auth.getSession();
    } catch (error) {
      console.error('Get session error:', error);
      return { data: { session: null }, error };
    }
  },

  async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim().toLowerCase(),
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );

      return { error };
    } catch (error) {
      console.error('Reset password error:', error);
      return { error };
    }
  }
};
