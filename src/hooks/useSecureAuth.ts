
import { useState, useCallback } from 'react';
import { validateUserInput } from '@/utils/securityValidators';
import { useToast } from '@/components/ui/use-toast';
import { authService } from '@/services/authService';
import { cleanupAuthState, getSecureErrorMessage, validatePasswordClient } from '@/utils/authUtils';

export const useSecureAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const secureSignIn = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Enhanced client-side validation
      const passwordValidation = validatePasswordClient(password);
      if (!passwordValidation.isValid) {
        toast({
          title: "Erreur de validation",
          description: passwordValidation.errors.join(', '),
          variant: "destructive",
        });
        return { data: null, error: { message: 'Validation échouée' } };
      }

      // Additional security validation
      const validation = validateUserInput({ password });
      if (!validation.isValid) {
        toast({
          title: "Erreur de validation",
          description: validation.errors.join(', '),
          variant: "destructive",
        });
        return { data: null, error: { message: 'Validation échouée' } };
      }

      const { data, error } = await authService.signInWithPassword(email, password);

      if (error) {
        const userMessage = getSecureErrorMessage((error as any)?.message || 'Erreur de connexion');
        
        toast({
          title: "Erreur de connexion",
          description: userMessage,
          variant: "destructive",
        });
        
        return { data: null, error };
      }

      if (data?.user) {
        toast({
          title: "Connexion réussie",
          description: "Vous êtes maintenant connecté",
        });
        
        // Secure redirection after login
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }

      return { data, error: null };

    } catch (error) {
      console.error('Erreur lors de la connexion sécurisée:', error);
      toast({
        title: "Erreur système",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
      return { data: null, error };
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const secureSignUp = useCallback(async (email: string, password: string, additionalData?: any) => {
    setIsLoading(true);
    
    try {
      // Enhanced password validation
      const passwordValidation = validatePasswordClient(password);
      if (!passwordValidation.isValid) {
        toast({
          title: "Mot de passe trop faible",
          description: passwordValidation.errors.join(', '),
          variant: "destructive",
        });
        return { data: null, error: { message: 'Mot de passe invalide' } };
      }

      const { data, error } = await authService.signUp(email, password, additionalData);

      if (error) {
        const userMessage = getSecureErrorMessage((error as any)?.message || 'Erreur d\'inscription');
        
        toast({
          title: "Erreur d'inscription",
          description: userMessage,
          variant: "destructive",
        });
        
        return { data: null, error };
      }

      if (data?.user) {
        toast({
          title: "Inscription réussie",
          description: "Vérifiez votre email pour confirmer votre compte",
        });
      }

      return { data, error: null };

    } catch (error) {
      console.error('Erreur lors de l\'inscription sécurisée:', error);
      toast({
        title: "Erreur système",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
      return { data: null, error };
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const secureSignOut = useCallback(async () => {
    setIsLoading(true);
    
    try {
      await authService.signOut();
      
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté avec succès",
      });
      
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      // Force redirect even on error
      window.location.href = '/connexion';
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const verifySession = useCallback(async () => {
    try {
      const { data: { session }, error } = await authService.getSession();
      
      if (error) {
        console.error('Erreur de vérification de session:', error);
        cleanupAuthState();
        return null;
      }
      
      return session;
    } catch (error) {
      console.error('Erreur lors de la vérification de session:', error);
      cleanupAuthState();
      return null;
    }
  }, []);

  return {
    secureSignIn,
    secureSignUp,
    secureSignOut,
    verifySession,
    cleanupAuthState,
    isLoading,
  };
};
