import { useState, useEffect } from 'react';
import { TrendingUp, Clock, MapPin, Calendar, Star, Sparkles, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useSmartSearch } from '@/hooks/useSmartSearch';

interface PredictiveSuggestion {
  id: string;
  text: string;
  type: 'trending' | 'seasonal' | 'contextual' | 'behavioral' | 'location' | 'time';
  confidence: number;
  reason: string;
  metadata?: {
    category?: string;
    location?: string;
    timeContext?: string;
    popularity?: number;
  };
}

interface PredictiveSearchSuggestionsProps {
  query: string;
  onSuggestionSelect: (suggestion: string) => void;
  isVisible: boolean;
  userLocation?: { lat: number; lng: number; city?: string };
}

const PredictiveSearchSuggestions: React.FC<PredictiveSearchSuggestionsProps> = ({
  query,
  onSuggestionSelect,
  isVisible,
  userLocation
}) => {
  const [suggestions, setSuggestions] = useState<PredictiveSuggestion[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { t: _t } = useSafeI18nWithRouter();
  const { getPersonalizedSuggestions, getTrendingKeywords, trackUserPattern } = useSmartSearch();

  // Données contextuelle basées sur l'heure et la saison
  const getTimeContextualSuggestions = (): PredictiveSuggestion[] => {
    const now = new Date();
    const hour = now.getHours();
    const month = now.getMonth();
    const suggestions: PredictiveSuggestion[] = [];

    // Suggestions basées sur l'heure
    if (hour >= 6 && hour <= 10) {
      suggestions.push({
        id: 'time_morning',
        text: 'petit déjeuner équipement cuisine',
        type: 'time',
        confidence: 0.7,
        reason: 'Recherche matinale typique',
        metadata: { timeContext: 'morning', category: 'électroménager' }
      });
    } else if (hour >= 18 && hour <= 22) {
      suggestions.push({
        id: 'time_evening',
        text: 'éclairage salon ambiance',
        type: 'time',
        confidence: 0.8,
        reason: 'Recherche soirée populaire',
        metadata: { timeContext: 'evening', category: 'décoration' }
      });
    }

    // Suggestions saisonnières
    if (month >= 5 && month <= 8) { // Été
      suggestions.push({
        id: 'seasonal_summer',
        text: 'climatisation ventilateur rafraîchissement',
        type: 'seasonal',
        confidence: 0.9,
        reason: 'Demande estivale élevée',
        metadata: { timeContext: 'summer', category: 'électroménager' }
      });
    } else if (month >= 10 || month <= 2) { // Hiver
      suggestions.push({
        id: 'seasonal_winter',
        text: 'chauffage radiateur couverture',
        type: 'seasonal',
        confidence: 0.85,
        reason: 'Besoins hivernaux',
        metadata: { timeContext: 'winter', category: 'électroménager' }
      });
    }

    return suggestions;
  };

  // Suggestions basées sur la localisation
  const getLocationBasedSuggestions = (): PredictiveSuggestion[] => {
    if (!userLocation?.city) return [];

    const suggestions: PredictiveSuggestion[] = [];
    const city = userLocation.city.toLowerCase();

    // Suggestions spécifiques aux grandes villes
    if (['alger', 'algiers', 'oran', 'constantine'].includes(city)) {
      suggestions.push({
        id: 'location_urban',
        text: 'appartement centre ville transport',
        type: 'location',
        confidence: 0.8,
        reason: `Tendances urbaines à ${userLocation.city}`,
        metadata: { location: userLocation.city, category: 'immobilier' }
      });
      
      suggestions.push({
        id: 'location_urban_furniture',
        text: 'mobilier compact gain place',
        type: 'location',
        confidence: 0.75,
        reason: 'Optimisation espace urbain',
        metadata: { location: userLocation.city, category: 'mobilier' }
      });
    }

    return suggestions;
  };

  // Prédictions comportementales basées sur l'historique
  const getBehavioralPredictions = async (): Promise<PredictiveSuggestion[]> => {
    try {
      const personalizedSuggestions = await getPersonalizedSuggestions(query);
      
      return personalizedSuggestions.map((suggestion, index) => ({
        id: `behavioral_${index}`,
        text: suggestion,
        type: 'behavioral',
        confidence: 0.8 - (index * 0.1),
        reason: 'Basé sur vos recherches précédentes',
        metadata: { category: 'personnalisé' }
      }));
    } catch (error) {
      console.error('Erreur suggestions comportementales:', error);
      return [];
    }
  };

  // Suggestions trending en temps réel
  const getTrendingSuggestions = async (): Promise<PredictiveSuggestion[]> => {
    try {
      const trendingKeywords = await getTrendingKeywords();
      
      return trendingKeywords.slice(0, 3).map((keyword, index) => ({
        id: `trending_${index}`,
        text: keyword,
        type: 'trending',
        confidence: 0.9 - (index * 0.1),
        reason: 'Tendance populaire actuellement',
        metadata: { popularity: 100 - (index * 20) }
      }));
    } catch (error) {
      console.error('Erreur suggestions trending:', error);
      return [];
    }
  };

  // Auto-correction et suggestions contextuelles intelligentes
  const getContextualSuggestions = (inputQuery: string): PredictiveSuggestion[] => {
    const suggestions: PredictiveSuggestion[] = [];
    const queryLower = inputQuery.toLowerCase();

    // Détection d'intention et expansion de requête
    const intentionPatterns = [
      {
        pattern: /pas cher|bon marché|économique|abordable/,
        expansion: 'occasion bon état petit prix',
        confidence: 0.85,
        reason: 'Recherche orientée prix'
      },
      {
        pattern: /moderne|récent|neuf|nouveau/,
        expansion: 'dernière génération design contemporain',
        confidence: 0.8,
        reason: 'Préférence pour le moderne'
      },
      {
        pattern: /urgent|rapidement|vite/,
        expansion: 'disponible immédiatement livraison rapide',
        confidence: 0.9,
        reason: 'Besoin urgent détecté'
      },
      {
        pattern: /famille|enfant|kids/,
        expansion: 'sécurisé adapté famille spacieux',
        confidence: 0.8,
        reason: 'Contexte familial'
      }
    ];

    intentionPatterns.forEach((pattern, index) => {
      if (pattern.pattern.test(queryLower)) {
        suggestions.push({
          id: `contextual_${index}`,
          text: `${inputQuery} ${pattern.expansion}`,
          type: 'contextual',
          confidence: pattern.confidence,
          reason: pattern.reason,
          metadata: { category: 'intention' }
        });
      }
    });

    return suggestions;
  };

  // Génération de toutes les suggestions prédictives
  const generatePredictiveSuggestions = async (searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsGenerating(true);

    try {
      const [
        timeContextual,
        locationBased,
        behavioral,
        trending,
        contextual
      ] = await Promise.all([
        Promise.resolve(getTimeContextualSuggestions()),
        Promise.resolve(getLocationBasedSuggestions()),
        getBehavioralPredictions(),
        getTrendingSuggestions(),
        Promise.resolve(getContextualSuggestions(searchQuery))
      ]);

      // Combiner et trier toutes les suggestions
      const allSuggestions = [
        ...timeContextual,
        ...locationBased,
        ...behavioral,
        ...trending,
        ...contextual
      ].sort((a, b) => b.confidence - a.confidence);

      // Limiter à 8 suggestions maximum
      setSuggestions(allSuggestions.slice(0, 8));

      // Tracker les patterns pour l'apprentissage
      trackUserPattern(
        [searchQuery],
        ['predictive_suggestions'],
        1000,
        false,
        'exploration'
      );

    } catch (error) {
      console.error('Erreur génération suggestions prédictives:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (query && isVisible) {
      const debounceTimer = setTimeout(() => {
        generatePredictiveSuggestions(query);
      }, 200);
      
      return () => clearTimeout(debounceTimer);
    } else {
      setSuggestions([]);
    }
  }, [query, isVisible, userLocation]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'trending': return <TrendingUp className="w-3 h-3 text-green-500" />;
      case 'seasonal': return <Calendar className="w-3 h-3 text-blue-500" />;
      case 'contextual': return <Sparkles className="w-3 h-3 text-purple-500" />;
      case 'behavioral': return <Star className="w-3 h-3 text-orange-500" />;
      case 'location': return <MapPin className="w-3 h-3 text-red-500" />;
      case 'time': return <Clock className="w-3 h-3 text-indigo-500" />;
      default: return <Zap className="w-3 h-3 text-gray-400" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      trending: 'Tendance',
      seasonal: 'Saisonnier',
      contextual: 'Contextuel',
      behavioral: 'Personnel',
      location: 'Local',
      time: 'Temporel'
    } as Record<string, string>;
    return labels[type] || 'Suggestion';
  };

  if (!isVisible || (!isGenerating && suggestions.length === 0)) {
    return null;
  }

  return (
    <Card className="mt-2 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <h4 className="font-medium text-sm text-blue-900 dark:text-blue-100">
          Suggestions Prédictives IA
        </h4>
        {isGenerating && (
          <Zap className="w-3 h-3 text-blue-500 animate-pulse" />
        )}
      </div>

      {isGenerating ? (
        <div className="text-center py-2">
          <div className="inline-flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Génération de suggestions intelligentes...
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.id}
              variant="ghost"
              className="w-full justify-start h-auto p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              onClick={() => onSuggestionSelect(suggestion.text)}
            >
              <div className="flex items-start gap-3 w-full">
                <div className="flex-shrink-0 mt-0.5">
                  {getTypeIcon(suggestion.type)}
                </div>
                
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-slate-100 truncate">
                      {suggestion.text}
                    </span>
                    <Badge 
                      variant="secondary" 
                      className="text-xs flex-shrink-0"
                    >
                      {Math.round(suggestion.confidence * 100)}%
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-slate-400">
                      {suggestion.reason}
                    </span>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                    >
                      {getTypeLabel(suggestion.type)}
                    </Badge>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      )}
    </Card>
  );
};

export default PredictiveSearchSuggestions;