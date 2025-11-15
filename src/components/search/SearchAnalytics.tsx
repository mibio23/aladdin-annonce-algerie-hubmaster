import React, { useState, useEffect } from 'react';
import { TrendingUp, Search, Clock, Target, BarChart3, Users } from 'lucide-react';
import { useSmartSearch } from '@/hooks/useSmartSearch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SearchStats {
  popularKeywords: Array<{ keyword: string; count: number; trend: number }>;
  recentQueries: string[];
  successRate: number;
  avgResponseTime: number;
  conversionRate: number;
}

const SearchAnalytics: React.FC = () => {
  const { getTrendingKeywords, searchHistory } = useSmartSearch();
  const [stats, setStats] = useState<SearchStats>({
    popularKeywords: [],
    recentQueries: [],
    successRate: 0,
    avgResponseTime: 0,
    conversionRate: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setIsLoading(true);
        
        // Charger les mots-clés tendance
        const trendingKeywords = await getTrendingKeywords();
        
        // Simuler des statistiques (en attendant l'implémentation complète)
        const mockStats: SearchStats = {
          popularKeywords: trendingKeywords.slice(0, 8).map((keyword, _index) => ({
            keyword,
            count: Math.floor(Math.random() * 1000) + 100,
            trend: Math.floor(Math.random() * 40) - 20
          })),
          recentQueries: searchHistory.slice(0, 10),
          successRate: 85.7,
          avgResponseTime: 240,
          conversionRate: 23.4
        };
        
        setStats(mockStats);
      } catch (error) {
        console.error('Erreur lors du chargement des analytics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalytics();
  }, [getTrendingKeywords, searchHistory]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-muted rounded w-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Analytics de Recherche</h2>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Succès</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.successRate}%</div>
            <p className="text-xs text-muted-foreground">
              Recherches avec résultats pertinents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps de Réponse</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.avgResponseTime}ms</div>
            <p className="text-xs text-muted-foreground">
              Temps moyen de traitement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Conversion</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.conversionRate}%</div>
            <p className="text-xs text-muted-foreground">
              Utilisateurs ayant trouvé ce qu'ils cherchaient
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Mots-clés populaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Mots-clés Tendance
          </CardTitle>
          <CardDescription>
            Les termes les plus recherchés cette semaine
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stats.popularKeywords.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.keyword}</div>
                    <div className="text-sm text-muted-foreground">{item.count} recherches</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  item.trend > 0 ? 'text-green-600' : item.trend < 0 ? 'text-red-600' : 'text-muted-foreground'
                }`}>
                  {item.trend > 0 && <TrendingUp className="h-3 w-3" />}
                  {item.trend !== 0 && `${item.trend > 0 ? '+' : ''}${item.trend}%`}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Historique récent */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Historique de Recherche
          </CardTitle>
          <CardDescription>
            Vos dernières recherches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {stats.recentQueries.length > 0 ? (
              stats.recentQueries.map((query, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-md cursor-pointer transition-colors"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{query}</span>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Aucune recherche récente</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchAnalytics;