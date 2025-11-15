import { useSecurityMonitor } from '@/hooks/useSecurityMonitor';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SecurityStatusIndicatorProps {
  showDetails?: boolean;
  onSecurityAction?: () => void;
}

export const SecurityStatusIndicator = ({ 
  showDetails = false, 
  onSecurityAction 
}: SecurityStatusIndicatorProps) => {
  const { metrics, validateSessionSecurity, secureCleanup } = useSecurityMonitor();

  const getStatusColor = (health: string) => {
    switch (health) {
      case 'healthy': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (health: string) => {
    switch (health) {
      case 'healthy': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'critical': return <Shield className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getThreatLevelBadge = (level: string) => {
    const variants = {
      low: 'secondary',
      medium: 'outline',
      high: 'destructive'
    } as const;

    return (
      <Badge variant={variants[level as keyof typeof variants] || 'secondary'}>
        Niveau: {level}
      </Badge>
    );
  };

  if (!showDetails) {
    return (
      <div className={`flex items-center gap-2 ${getStatusColor(metrics.sessionHealth)}`}>
        {getStatusIcon(metrics.sessionHealth)}
        <span className="text-sm font-medium">
          Sécurité: {metrics.sessionHealth === 'healthy' ? 'OK' : 'Attention'}
        </span>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          État de Sécurité
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Session:</span>
          <div className={`flex items-center gap-2 ${getStatusColor(metrics.sessionHealth)}`}>
            {getStatusIcon(metrics.sessionHealth)}
            <span className="capitalize">{metrics.sessionHealth}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Menaces:</span>
          {getThreatLevelBadge(metrics.threatLevel)}
        </div>

        {metrics.activeThreats.length > 0 && (
          <div className="space-y-2">
            <span className="text-sm font-medium text-red-600">
              Menaces actives ({metrics.activeThreats.length})
            </span>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {metrics.activeThreats.map((threat, index) => (
                <div key={index} className="text-xs p-2 bg-red-50 rounded border border-red-200">
                  <div className="font-medium">{threat.type.replace('_', ' ')}</div>
                  <div className="text-gray-600">
                    Sévérité: {threat.severity} - {threat.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {metrics.lastSecurityCheck && (
          <div className="text-xs text-muted-foreground">
            Dernier contrôle: {metrics.lastSecurityCheck.toLocaleTimeString()}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => {
              validateSessionSecurity();
              onSecurityAction?.();
            }}
          >
            Vérifier
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => {
              secureCleanup();
              onSecurityAction?.();
            }}
          >
            Nettoyer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};