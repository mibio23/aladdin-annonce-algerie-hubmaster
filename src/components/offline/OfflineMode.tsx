import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, Download, HardDrive, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { safeStringify } from '@/utils/safeStringify';

interface CachedData {
  announcements: any[];
  categories: any[];
  favorites: any[];
  lastSync: string;
  version: string;
}

export const OfflineMode: React.FC = () => {
  const { toast } = useToast();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [cachedData, setCachedData] = useState<CachedData | null>(null);
  const [storageUsage, setStorageUsage] = useState<{ used: number; total: number } | null>(null);
  const [syncProgress, setSyncProgress] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    // Monitor online/offline status
    const handleOnline = () => {
      setIsOnline(true);
      toast({
        title: "Connexion rétablie",
        description: "Synchronisation des données en cours...",
      });
      syncData();
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: "Hors ligne",
        description: "Mode hors ligne activé. Vos données locales sont disponibles.",
        variant: "destructive",
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Load cached data
    loadCachedData();
    checkStorageUsage();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const loadCachedData = () => {
    try {
      const cached = localStorage.getItem('aladdin_offline_data');
      if (cached) {
        setCachedData(JSON.parse(cached));
      }
    } catch (error) {
      console.error('Error loading cached data:', error);
    }
  };

  const checkStorageUsage = async () => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const estimate = await navigator.storage.estimate();
        setStorageUsage({
          used: estimate.usage || 0,
          total: estimate.quota || 0,
        });
      } catch (error) {
        console.error('Error checking storage:', error);
      }
    }
  };

  const syncData = async () => {
    if (!isOnline) return;

    setIsSyncing(true);
    setSyncProgress(0);

    try {
      // Simulate progressive sync
      const steps = [
        { name: 'Catégories', progress: 25 },
        { name: 'Annonces', progress: 50 },
        { name: 'Favoris', progress: 75 },
        { name: 'Finalisation', progress: 100 },
      ];

      for (const step of steps) {
        setSyncProgress(step.progress);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Here you would fetch actual data from Supabase
        // For demo purposes, we're just simulating
      }

      // Save to local storage
      const syncedData: CachedData = {
        announcements: [], // Would contain actual data
        categories: [],
        favorites: [],
        lastSync: new Date().toISOString(),
        version: '1.0.0',
      };

      localStorage.setItem('aladdin_offline_data', safeStringify(syncedData));
      setCachedData(syncedData);

      toast({
        title: "Synchronisation terminée",
        description: "Vos données sont maintenant à jour",
      });
    } catch (error) {
      console.error('Sync error:', error);
      toast({
        title: "Erreur de synchronisation",
        description: "Impossible de synchroniser les données",
        variant: "destructive",
      });
    } finally {
      setIsSyncing(false);
      setSyncProgress(0);
    }
  };

  const clearCache = () => {
    localStorage.removeItem('aladdin_offline_data');
    setCachedData(null);
    toast({
      title: "Cache vidé",
      description: "Toutes les données locales ont été supprimées",
    });
    checkStorageUsage();
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStoragePercentage = () => {
    if (!storageUsage) return 0;
    return (storageUsage.used / storageUsage.total) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isOnline ? (
              <Wifi className="h-5 w-5 text-green-500" />
            ) : (
              <WifiOff className="h-5 w-5 text-red-500" />
            )}
            Statut de connexion
          </CardTitle>
          <CardDescription>
            {isOnline 
              ? "Vous êtes connecté à Internet" 
              : "Vous êtes actuellement hors ligne"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge variant={isOnline ? "default" : "destructive"}>
              {isOnline ? "En ligne" : "Hors ligne"}
            </Badge>
            
            {isOnline && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={syncData}
                disabled={isSyncing}
                className="ml-auto"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Synchroniser
              </Button>
            )}
          </div>

          {isSyncing && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Synchronisation en cours...
                </span>
                <span className="text-sm font-medium">{syncProgress}%</span>
              </div>
              <Progress value={syncProgress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Cached Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Données en cache
          </CardTitle>
          <CardDescription>
            Données disponibles hors ligne
          </CardDescription>
        </CardHeader>
        <CardContent>
          {cachedData ? (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {cachedData.announcements?.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Annonces</div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {cachedData.categories?.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Catégories</div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {cachedData.favorites?.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Favoris</div>
                </div>
              </div>

              {cachedData.lastSync && (
                <div className="text-sm text-muted-foreground text-center">
                  Dernière synchronisation : {new Date(cachedData.lastSync).toLocaleString('fr-FR')}
                </div>
              )}

              <Button 
                variant="outline" 
                onClick={clearCache}
                className="w-full"
              >
                Vider le cache
              </Button>
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-muted-foreground mb-4">
                Aucune donnée en cache
              </p>
              <Button onClick={syncData} disabled={!isOnline || isSyncing}>
                <Download className="h-4 w-4 mr-2" />
                Télécharger les données
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Storage Usage */}
      {storageUsage && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              Utilisation du stockage
            </CardTitle>
            <CardDescription>
              Espace utilisé par l'application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Espace utilisé</span>
                <span className="text-sm font-medium">
                  {formatBytes(storageUsage.used)} / {formatBytes(storageUsage.total)}
                </span>
              </div>
              
              <Progress value={getStoragePercentage()} className="h-2" />
              
              <div className="text-xs text-muted-foreground">
                {getStoragePercentage().toFixed(1)}% de l'espace disponible utilisé
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Offline Features */}
      <Card>
        <CardHeader>
          <CardTitle>Fonctionnalités hors ligne</CardTitle>
          <CardDescription>
            Ce qui reste disponible sans connexion Internet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Consultation des annonces en cache</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Navigation dans les catégories</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Consultation des favoris</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Recherche limitée (données locales uniquement)</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm">Création d'annonces (nécessite une connexion)</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm">Messagerie (nécessite une connexion)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};