import React, { useState, useEffect } from 'react';
import { Settings, Database, TrendingUp, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import SearchAnalytics from '@/components/search/SearchAnalytics';

interface SearchSystemStatus {
  isHealthy: boolean;
  lastCleanup: string;
  totalSearches: number;
  totalSuggestions: number;
  totalKeywords: number;
  avgResponseTime: number;
}

const SearchManagement: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<SearchSystemStatus>({
    isHealthy: true,
    lastCleanup: '',
    totalSearches: 0,
    totalSuggestions: 0,
    totalKeywords: 0,
    avgResponseTime: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isRunningCleanup, setIsRunningCleanup] = useState(false);

  const loadSystemStatus = async () => {
    try {
      setIsLoading(true);
      
      // Charger les statistiques du système
      const [searchesResult, suggestionsResult, keywordsResult] = await Promise.all([
        supabase.from('search_queries').select('id', { count: 'exact' }),
        supabase.from('search_suggestions').select('id', { count: 'exact' }),
        supabase.from('popular_keywords').select('id', { count: 'exact' })
      ]);

      // Simuler quelques métriques (en attendant l'implémentation complète)
      setSystemStatus({
        isHealthy: true,
        lastCleanup: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        totalSearches: searchesResult.count || 0,
        totalSuggestions: suggestionsResult.count || 0,
        totalKeywords: keywordsResult.count || 0,
        avgResponseTime: 240
      });
    } catch (error) {
      console.error('Erreur lors du chargement du statut:', error);
      setSystemStatus(prev => ({ ...prev, isHealthy: false }));
    } finally {
      setIsLoading(false);
    }
  };

  const runMonthlyCleanup = async () => {
    try {
      setIsRunningCleanup(true);
      
      const { data, error } = await supabase.functions.invoke('monthly-cleanup');
      
      if (error) {
        throw error;
      }
      
      console.log('Nettoyage mensuel terminé:', data);
      
      // Recharger le statut après le nettoyage
      await loadSystemStatus();
      
      // Afficher une notification de succès
      alert('Nettoyage mensuel terminé avec succès !');
    } catch (error) {
      console.error('Erreur lors du nettoyage:', error);
      alert('Erreur lors du nettoyage mensuel. Vérifiez les logs.');
    } finally {
      setIsRunningCleanup(false);
    }
  };

  const optimizeDatabase = async () => {
    try {
      // Pour le moment, simuler l'optimisation
      console.log('Optimisation de la base de données...');
      
      // Ici on pourrait ajouter d'autres optimisations manuelles
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Optimisation terminée');
      alert('Optimisation de la base de données simulée !');
    } catch (error) {
      console.error('Erreur lors de l\'optimisation:', error);
      alert('Erreur lors de l\'optimisation de la base de données.');
    }
  };

  useEffect(() => {
    loadSystemStatus();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg">Chargement du système...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestion du Système de Recherche</h1>
            <p className="text-muted-foreground">Surveillance et maintenance du moteur de recherche intelligent</p>
          </div>
        </div>
        <Button onClick={loadSystemStatus} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Actualiser
        </Button>
      </div>

      {/* Statut du système */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Statut du Système</CardTitle>
            {systemStatus.isHealthy ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${systemStatus.isHealthy ? 'text-green-600' : 'text-red-600'}`}>
              {systemStatus.isHealthy ? 'Opérationnel' : 'Problème'}
            </div>
            <p className="text-xs text-muted-foreground">
              Temps de réponse: {systemStatus.avgResponseTime}ms
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Recherches</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{systemStatus.totalSearches.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Toutes les recherches enregistrées
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suggestions Actives</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{systemStatus.totalSuggestions}</div>
            <p className="text-xs text-muted-foreground">
              Suggestions d'auto-complétion
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mots-clés Populaires</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{systemStatus.totalKeywords}</div>
            <p className="text-xs text-muted-foreground">
              Mots-clés suivis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Actions de maintenance */}
      <Card>
        <CardHeader>
          <CardTitle>Actions de Maintenance</CardTitle>
          <CardDescription>
            Outils pour maintenir et optimiser le système de recherche
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Nettoyage Mensuel</h3>
              <p className="text-sm text-muted-foreground">
                Dernière exécution: {new Date(systemStatus.lastCleanup).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <Button 
              onClick={runMonthlyCleanup}
              disabled={isRunningCleanup}
              variant="outline"
            >
              {isRunningCleanup ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  En cours...
                </>
              ) : (
                'Exécuter Maintenant'
              )}
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Optimisation Base de Données</h3>
              <p className="text-sm text-muted-foreground">
                Optimiser les index et nettoyer les tables de recherche
              </p>
            </div>
            <Button onClick={optimizeDatabase} variant="outline">
              Optimiser
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Recalculer les Scores</h3>
              <p className="text-sm text-muted-foreground">
                Recalculer les scores de tendance et de pertinence
              </p>
            </div>
            <Button 
              onClick={() => alert('Fonctionnalité en cours de développement')}
              variant="outline"
            >
              Recalculer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analytics intégrés */}
      <SearchAnalytics />
    </div>
  );
};

export default SearchManagement;