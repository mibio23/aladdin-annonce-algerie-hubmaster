import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  
  TrendingDown,
  Users,
  Globe,
  FileText,
  Zap,
  Bell,
  X
} from 'lucide-react';
import { Language, TranslationMetrics } from '../types/comprehensive';
import { translationValidator } from '../validation/advanced-validator';

interface MonitoringData {
  realTimeStats: RealTimeStats;
  usageMetrics: UsageMetrics;
  performanceMetrics: PerformanceMetrics;
  alerts: TranslationAlert[];
  trends: TrendData[];
}

interface RealTimeStats {
  activeUsers: number;
  translationsServed: number;
  fallbacksUsed: number;
  errorRate: number;
  averageResponseTime: number;
  languageDistribution: Record<Language, number>;
}

interface UsageMetrics {
  mostUsedKeys: Array<{ key: string; count: number }>;
  leastUsedKeys: Array<{ key: string; count: number }>;
  domainUsage: Record<string, number>;
  peakUsageHours: Array<{ hour: number; usage: number }>;
}

interface PerformanceMetrics {
  cacheHitRate: number;
  averageLoadTime: number;
  memoryUsage: number;
  bundleSize: Record<Language, number>;
}

interface TranslationAlert {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
  language?: Language;
  key?: string;
  resolved: boolean;
}

interface TrendData {
  date: string;
  coverage: number;
  usage: number;
  errors: number;
}

interface MonitorProps {
  onClose?: () => void;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const TranslationMonitor: React.FC<MonitorProps> = ({ 
  onClose, 
  autoRefresh = true, 
  refreshInterval = 30000 
}) => {
  const [monitoringData, setMonitoringData] = useState<MonitoringData | null>(null);
  const [metrics, setMetrics] = useState<TranslationMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [alerts, setAlerts] = useState<TranslationAlert[]>([]);

  const languages: Language[] = ['fr', 'ar', 'en', 'de', 'es', 'it'];

  useEffect(() => {
    loadMonitoringData();
    
    if (autoRefresh) {
      const interval = setInterval(loadMonitoringData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  const loadMonitoringData = async () => {
    setIsLoading(true);
    try {
      // Load validation metrics
      const validationMetrics = await translationValidator.validateAll();
      setMetrics(validationMetrics);

      // Generate mock monitoring data (in real app, this would come from analytics)
      const mockData = generateMockMonitoringData();
      setMonitoringData(mockData);

      // Check for new alerts
      checkForAlerts(validationMetrics);

      setLastUpdate(new Date());
    } catch (error) {
      console.error('Failed to load monitoring data:', error);
    }
    setIsLoading(false);
  };

  const generateMockMonitoringData = (): MonitoringData => {
    return {
      realTimeStats: {
        activeUsers: Math.floor(Math.random() * 500) + 100,
        translationsServed: Math.floor(Math.random() * 10000) + 5000,
        fallbacksUsed: Math.floor(Math.random() * 100) + 10,
        errorRate: parseFloat((Math.random() * 2).toFixed(2)),
        averageResponseTime: Math.floor(Math.random() * 50) + 10,
        languageDistribution: {
          fr: 40,
          ar: 22,
          en: 14,
          de: 10,
          es: 7,
          it: 7,
        },
      },
      usageMetrics: {
        mostUsedKeys: [
          { key: 'search.placeholder', count: 1250 },
          { key: 'navigation.home', count: 980 },
          { key: 'auth.login', count: 750 },
          { key: 'common.save', count: 620 },
          { key: 'search.submit', count: 580 },
        ],
        leastUsedKeys: [
          { key: 'admin.advanced.debug', count: 2 },
          { key: 'error.network.timeout', count: 5 },
          { key: 'help.advanced.troubleshoot', count: 8 },
        ],
        domainUsage: {
          search: 35,
          navigation: 20,
          auth: 15,
          common: 12,
          categories: 8,
          profile: 6,
          reviews: 4,
        },
        peakUsageHours: Array.from({ length: 24 }, (_, i) => ({
          hour: i,
          usage: Math.floor(Math.random() * 100) + 20,
        })),
      },
      performanceMetrics: {
        cacheHitRate: 94.5,
        averageLoadTime: 125,
        memoryUsage: 15.2,
        bundleSize: {
          fr: 45.2,
          ar: 48.1,
          en: 42.8,
          de: 46.3,
          es: 44.7,
          it: 43.9,
        },
      },
      alerts: alerts,
      trends: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        coverage: 85 + Math.random() * 10,
        usage: Math.floor(Math.random() * 1000) + 500,
        errors: Math.floor(Math.random() * 10),
      })).reverse(),
    };
  };

  const checkForAlerts = (metrics: TranslationMetrics) => {
    const newAlerts: TranslationAlert[] = [];

    // Check coverage alerts
    Object.entries(metrics.coverage).forEach(([lang, coverage]) => {
      if (coverage < 85) {
        newAlerts.push({
          id: `coverage-${lang}-${Date.now()}`,
          type: 'warning',
          message: `Translation coverage for ${lang.toUpperCase()} is below 85% (${coverage.toFixed(1)}%)`,
          timestamp: new Date(),
          language: lang as Language,
          resolved: false,
        });
      }
    });

    // Check for missing translations
    Object.entries(metrics.missingByLanguage).forEach(([lang, missing]) => {
      if (missing.length > 50) {
        newAlerts.push({
          id: `missing-${lang}-${Date.now()}`,
          type: 'error',
          message: `${missing.length} missing translations in ${lang.toUpperCase()}`,
          timestamp: new Date(),
          language: lang as Language,
          resolved: false,
        });
      }
    });

    // Add performance alerts (mock)
    if (Math.random() < 0.3) {
      newAlerts.push({
        id: `performance-${Date.now()}`,
        type: 'info',
        message: 'Translation cache performance is optimal',
        timestamp: new Date(),
        resolved: false,
      });
    }

    setAlerts(prev => [...prev.filter(a => !a.resolved), ...newAlerts]);
  };

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  };


  const getStatusBadge = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'default';
    if (value >= thresholds.warning) return 'secondary';
    return 'destructive';
  };

  if (!monitoringData || !metrics) {
    return (
      <div className="flex justify-center items-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-7xl h-[90vh] flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Activity className="h-6 w-6" />
              Translation Monitoring Dashboard
            </h2>
            <p className="text-muted-foreground">
              Real-time monitoring and analytics for the translation system
            </p>
            {lastUpdate && (
              <p className="text-xs text-muted-foreground mt-1">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadMonitoringData} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="overview" className="flex-1 flex flex-col">
          <TabsList className="mx-6 mt-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="alerts">
              Alerts
              {alerts.filter(a => !a.resolved).length > 0 && (
                <Badge variant="destructive" className="ml-2 text-xs">
                  {alerts.filter(a => !a.resolved).length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="flex-1 p-6 overflow-auto">
            <div className="space-y-6">
              {/* Real-time stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <Card className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold">{monitoringData.realTimeStats.activeUsers}</p>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </Card>
                <Card className="p-4 text-center">
                  <Globe className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <p className="text-2xl font-bold">{monitoringData.realTimeStats.translationsServed.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Translations Served</p>
                </Card>
                <Card className="p-4 text-center">
                  <Zap className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                  <p className="text-2xl font-bold">{monitoringData.realTimeStats.fallbacksUsed}</p>
                  <p className="text-xs text-muted-foreground">Fallbacks Used</p>
                </Card>
                <Card className="p-4 text-center">
                  <TrendingDown className="h-6 w-6 mx-auto mb-2 text-red-600" />
                  <p className="text-2xl font-bold">{monitoringData.realTimeStats.errorRate}%</p>
                  <p className="text-xs text-muted-foreground">Error Rate</p>
                </Card>
                <Card className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <p className="text-2xl font-bold">{monitoringData.realTimeStats.averageResponseTime}ms</p>
                  <p className="text-xs text-muted-foreground">Avg Response</p>
                </Card>
                <Card className="p-4 text-center">
                  <FileText className="h-6 w-6 mx-auto mb-2 text-indigo-600" />
                  <p className="text-2xl font-bold">{metrics.totalKeys}</p>
                  <p className="text-xs text-muted-foreground">Total Keys</p>
                </Card>
              </div>

              {/* Language coverage */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Language Coverage & Usage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {languages.map(lang => (
                    <div key={lang} className="text-center">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{lang.toUpperCase()}</span>
                        <Badge variant={getStatusBadge(metrics.coverage[lang], { good: 95, warning: 85 })}>
                          {metrics.coverage[lang].toFixed(1)}%
                        </Badge>
                      </div>
                      <Progress value={metrics.coverage[lang]} className="mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {monitoringData.realTimeStats.languageDistribution[lang]}% usage
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent alerts */}
              <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Recent Alerts</h3>
                  <Badge variant="outline">
                    {alerts.filter(a => !a.resolved).length} active
                  </Badge>
                </div>
                <div className="space-y-2 max-h-64 overflow-auto">
                  {alerts.slice(0, 5).map(alert => (
                    <Alert key={alert.id} className={alert.resolved ? 'opacity-50' : ''}>
                      {alert.type === 'error' && <AlertTriangle className="h-4 w-4" />}
                      {alert.type === 'warning' && <AlertTriangle className="h-4 w-4" />}
                      {alert.type === 'info' && <CheckCircle className="h-4 w-4" />}
                      <AlertDescription>
                        <div className="flex justify-between items-center">
                          <span>{alert.message}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              {alert.timestamp.toLocaleTimeString()}
                            </span>
                            {!alert.resolved && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => resolveAlert(alert.id)}
                              >
                                Resolve
                              </Button>
                            )}
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="usage" className="flex-1 p-6 overflow-auto">
            <div className="space-y-6">
              {/* Most used keys */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Most Used Translation Keys</h3>
                  <div className="space-y-3">
                    {monitoringData.usageMetrics.mostUsedKeys.map((item, index) => (
                      <div key={item.key} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">{item.key}</p>
                          <p className="text-xs text-muted-foreground">#{index + 1}</p>
                        </div>
                        <Badge variant="outline">{item.count.toLocaleString()}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Domain Usage Distribution</h3>
                  <div className="space-y-3">
                    {Object.entries(monitoringData.usageMetrics.domainUsage)
                      .sort(([,a], [,b]) => b - a)
                      .map(([domain, percentage]) => (
                      <div key={domain} className="flex justify-between items-center">
                        <span className="font-medium capitalize">{domain}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={percentage} className="w-20" />
                          <span className="text-sm font-medium w-12">{percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Usage trends (placeholder) */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Usage Trends (Last 24 Hours)</h3>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <p>Usage trend chart would be displayed here in a production environment</p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="flex-1 p-6 overflow-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {monitoringData.performanceMetrics.cacheHitRate}%
                  </p>
                  <p className="text-sm text-muted-foreground">Cache Hit Rate</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {monitoringData.performanceMetrics.averageLoadTime}ms
                  </p>
                  <p className="text-sm text-muted-foreground">Avg Load Time</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-600">
                    {monitoringData.performanceMetrics.memoryUsage}MB
                  </p>
                  <p className="text-sm text-muted-foreground">Memory Usage</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600">
                    {Object.values(monitoringData.performanceMetrics.bundleSize).reduce((a, b) => a + b, 0).toFixed(1)}KB
                  </p>
                  <p className="text-sm text-muted-foreground">Total Bundle Size</p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Bundle Size by Language</h3>
                <div className="space-y-4">
                  {Object.entries(monitoringData.performanceMetrics.bundleSize).map(([lang, size]) => (
                    <div key={lang} className="flex justify-between items-center">
                      <span className="font-medium">{lang.toUpperCase()}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={(size / 50) * 100} className="w-32" />
                        <span className="text-sm font-medium w-16">{size}KB</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="flex-1 p-6 overflow-auto">
            <div className="space-y-4">
              {alerts.length === 0 ? (
                <Card className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-semibold mb-2">No Active Alerts</h3>
                  <p className="text-muted-foreground">
                    Your translation system is running smoothly!
                  </p>
                </Card>
              ) : (
                alerts.map(alert => (
                  <Alert key={alert.id} className={alert.resolved ? 'opacity-50' : ''}>
                    {alert.type === 'error' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                    {alert.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                    {alert.type === 'info' && <Bell className="h-4 w-4 text-blue-600" />}
                    <AlertDescription>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{alert.message}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <p className="text-xs text-muted-foreground">
                              {alert.timestamp.toLocaleString()}
                            </p>
                            {alert.language && (
                              <Badge variant="outline" className="text-xs">
                                {alert.language.toUpperCase()}
                              </Badge>
                            )}
                            {alert.key && (
                              <Badge variant="outline" className="text-xs">
                                {alert.key}
                              </Badge>
                            )}
                            <Badge variant={alert.resolved ? 'default' : 'destructive'} className="text-xs">
                              {alert.resolved ? 'Resolved' : alert.type.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        {!alert.resolved && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => resolveAlert(alert.id)}
                          >
                            Resolve
                          </Button>
                        )}
                      </div>
                    </AlertDescription>
                  </Alert>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default TranslationMonitor;