import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <CardTitle>Oops ! Une erreur s'est produite</CardTitle>
          </div>
          <CardDescription>
            Quelque chose s'est mal passé. Veuillez réessayer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground bg-muted p-3 rounded">
            <strong>Détails de l'erreur :</strong>
            <br />
            {error.message}
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={resetErrorBoundary}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Réessayer
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
            >
              Recharger la page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface AppErrorBoundaryProps {
  children: React.ReactNode;
}

const AppErrorBoundary: React.FC<AppErrorBoundaryProps> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Application Error:', error);
        console.error('Error Info:', errorInfo);
        
        // Here you could send error reports to a service like Sentry
        // reportError(error, errorInfo);
      }}
      onReset={() => {
        // Optional: Clear any state, reload data, etc.
        window.location.hash = '';
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;