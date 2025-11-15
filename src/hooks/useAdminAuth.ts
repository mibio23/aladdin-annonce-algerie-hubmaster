import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/silentLogger';

interface AdminRole {
  role: string;
  isActive: boolean;
  grantedAt: string;
}

export const useAdminAuth = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModerator, setIsModerator] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<AdminRole | null>(null);

  useEffect(() => {
    const checkUserRole = async () => {
      if (!user) {
        setIsAdmin(false);
        setIsModerator(false);
        setUserRole(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('user_roles' as any)
          .select('role, is_active, granted_at')
          .eq('user_id', user.id)
          .eq('is_active', true)
          .single() as { data: any; error: any };

        if (error && error.code !== 'PGRST116') {
          logger.error('Error checking user role:', error);
          // En cas d'erreur, on considère que l'utilisateur n'est pas admin
          setIsAdmin(false);
          setIsModerator(false);
          setUserRole(null);
          setLoading(false);
          return;
        }

        if (data) {
          const roleData: AdminRole = {
            role: data.role,
            isActive: data.is_active,
            grantedAt: data.granted_at
          };
          
          setUserRole(roleData);
          setIsAdmin(data.role === 'admin');
          setIsModerator(data.role === 'moderator' || data.role === 'admin');
          
          logger.info(`User ${user.email} has role: ${data.role}`);
        } else {
          setIsAdmin(false);
          setIsModerator(false);
          setUserRole(null);
        }
      } catch (error) {
        logger.error('Error in checkUserRole:', error);
        setIsAdmin(false);
        setIsModerator(false);
        setUserRole(null);
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, [user]);

  const canAccessAdmin = () => {
    return isAdmin || isModerator;
  };

  const canManageAllContent = () => {
    return isAdmin;
  };

  const canModerateContent = () => {
    return isModerator;
  };

  return {
    isAdmin,
    isModerator,
    canAccessAdmin,
    canManageAllContent,
    canModerateContent,
    userRole,
    loading
  };
};

// Hook pour protéger les routes admin
export const useRequireAdmin = () => {
  const { canAccessAdmin, loading } = useAdminAuth();
  
  return {
    isAuthorized: canAccessAdmin(),
    loading,
    // Vous pouvez ajouter une logique de redirection ici si nécessaire
  };
};