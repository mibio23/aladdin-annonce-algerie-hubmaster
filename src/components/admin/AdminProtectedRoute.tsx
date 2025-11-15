import { useRequireAdmin, useAdminAuth } from '@/hooks/useAdminAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean; // false pour moderator+, true pour admin uniquement
  fallback?: React.ReactNode;
}

export const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ 
  children, 
  fallback 
}) => {
  const { isAuthorized, loading } = useRequireAdmin();
  const { getLocalizedPath } = useLanguageNavigation();

  // Pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Vérification des autorisations...</p>
        </div>
      </div>
    );
  }

  // Si non autorisé
  if (!isAuthorized) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-red-800">Accès Restreint</CardTitle>
            <CardDescription className="text-gray-600">
              Vous n'avez pas les permissions nécessaires pour accéder à cette page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
              <p className="font-medium mb-1">Pourquoi cette restriction ?</p>
              <ul className="text-xs space-y-1">
                <li>• Cette zone est réservée aux administrateurs</li>
                <li>• Vous devez avoir un compte actif</li>
                <li>• Votre compte doit avoir les permissions appropriées</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.history.back()}
              >
                Retour
              </Button>
              <Button 
                className="w-full"
                onClick={() => window.location.href = getLocalizedPath('/')}
              >
                Accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Si autorisé, afficher les enfants
  return <>{children}</>;
};

// Composant pour vérifier les permissions spécifiques
export const AdminPermissionCheck: React.FC<{
  children: React.ReactNode;
  permission: 'admin' | 'moderator' | 'user';
  fallback?: React.ReactNode;
}> = ({ children, permission, fallback }) => {
  const { isAdmin, isModerator, loading } = useAdminAuth();

  if (loading) {
    return <div>Chargement...</div>;
  }

  const hasPermission =
    permission === 'admin' ? isAdmin :
    permission === 'moderator' ? isModerator :
    true; // user

  if (!hasPermission) {
    return <>{fallback || <div>Permission refusée</div>}</>;
  }

  return <>{children}</>;
};