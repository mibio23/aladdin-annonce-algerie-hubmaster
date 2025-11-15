import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Search, Zap, TrendingUp } from 'lucide-react';
import { smartSuggestionsService, SmartSuggestion, SuggestionContext } from '@/services/smartSuggestionsService';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface SmartSuggestionsDisplayProps {
  context: SuggestionContext;
  onSuggestionClick: (suggestion: SmartSuggestion) => void;
  className?: string;
}

const SmartSuggestionsDisplay: React.FC<SmartSuggestionsDisplayProps> = ({
  context,
  onSuggestionClick,
  className = ''
}) => {
  const { t, language } = useSafeI18nWithRouter();
  const [suggestions, setSuggestions] = useState<SmartSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [groupedSuggestions, setGroupedSuggestions] = useState<Record<string, SmartSuggestion[]>>({});

  useEffect(() => {
    const loadSuggestions = async () => {
      setLoading(true);
      try {
        const contextWithLanguage = { ...context, language };
        const result = await smartSuggestionsService.generateSuggestions(contextWithLanguage);
        setSuggestions(result);
        
        // Grouper les suggestions par type
        const grouped = result.reduce((acc, suggestion) => {
          if (!acc[suggestion.type]) {
            acc[suggestion.type] = [];
          }
          acc[suggestion.type].push(suggestion);
          return acc;
        }, {} as Record<string, SmartSuggestion[]>);
        
        setGroupedSuggestions(grouped);
      } catch (error) {
        console.error('Erreur lors du chargement des suggestions:', error);
        setSuggestions([]);
        setGroupedSuggestions({});
      } finally {
        setLoading(false);
      }
    };

    loadSuggestions();
  }, [context, language]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'spelling': return '🔤';
      case 'category': return '📂';
      case 'subcategory': return '📁';
      case 'specialization': return '🎯';
      case 'condition': return '⭐';
      case 'service': return '🔧';
      case 'location': return '📍';
      case 'trending': return '🔥';
      case 'synonym': return '🔍';
      default: return '💡';
    }
  };

  const getTypeTitle = (type: string) => {
    const titles = {
      spelling: t('search.suggestions.spelling') || 'Corrections suggérées',
      category: t('search.suggestions.categories') || 'Catégories',
      subcategory: t('search.suggestions.subcategories') || 'Sous-catégories',
      specialization: t('search.suggestions.specializations') || 'Spécialisations',
      condition: t('search.suggestions.conditions') || 'États du produit',
      service: t('search.suggestions.services') || 'Services',
      location: t('search.suggestions.locations') || 'Localisations',
      trending: t('search.suggestions.trending') || 'Tendances',
      synonym: t('search.suggestions.synonyms') || 'Mots-clés similaires'
    };
    return titles[type as keyof typeof titles] || t('search.suggestions.other') || 'Autres suggestions';
  };

  const handleSuggestionClick = (suggestion: SmartSuggestion) => {
    onSuggestionClick(suggestion);
  };

  if (loading) {
    return (
      <Card className={`w-full ${className}`}>
        <CardContent className="py-8">
          <LoadingSpinner size="md" />
          <p className="text-center text-muted-foreground mt-4">
            {t('search.suggestions.loading') || 'Génération de suggestions intelligentes...'}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (suggestions.length === 0) {
    return (
      <Card className={`w-full ${className}`}>
        <CardContent className="py-8 text-center">
          <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            {t('search.suggestions.noSuggestions') || 'Aucune suggestion disponible'}
          </h3>
          <p className="text-muted-foreground">
            {t('search.suggestions.tryDifferentKeywords') || 'Essayez des mots-clés différents ou plus généraux.'}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Ordre de priorité d'affichage des types
  const typeOrder = ['spelling', 'category', 'subcategory', 'specialization', 'condition', 'synonym', 'location', 'trending'];
  const orderedTypes = typeOrder.filter(type => groupedSuggestions[type]?.length > 0);

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="h-5 w-5 text-primary" />
            {t('search.suggestions.title') || 'Suggestions intelligentes'}
          </CardTitle>
          {context.searchType === 'quick' && (
            <p className="text-sm text-muted-foreground">
              {t('search.suggestions.quickSearchHint') || 'Recherche rapide - Cliquez pour affiner votre recherche'}
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {orderedTypes.map((type) => {
            const typeSuggestions = groupedSuggestions[type];
            if (!typeSuggestions || typeSuggestions.length === 0) return null;

            return (
              <div key={type} className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{getTypeIcon(type)}</span>
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    {getTypeTitle(type)}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {typeSuggestions.length}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {typeSuggestions.slice(0, 6).map((suggestion) => (
                    <Button
                      key={suggestion.id}
                      variant="ghost"
                      className="justify-start h-auto p-3 text-left hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="flex items-start gap-2 w-full">
                        <span className="flex-shrink-0 mt-0.5">
                          {suggestion.icon || getTypeIcon(suggestion.type)}
                        </span>
                        <div className="flex-grow min-w-0">
                          <div className="font-medium text-sm truncate">
                            {suggestion.text}
                          </div>
                          {suggestion.confidence > 0.8 && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              {t('search.suggestions.highConfidence') || 'Recommandé'}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Suggestion pour recherche avancée si recherche rapide */}
          {context.searchType === 'quick' && (
            <div className="mt-6 pt-4 border-t border-border">
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => {
                  // Navigate to advanced search with current query
                  window.location.href = `/search?q=${encodeURIComponent(context.originalQuery)}`;
                }}
              >
                <Zap className="h-4 w-4" />
                {t('search.suggestions.advancedSearch') || 'Affiner avec la recherche avancée'}
              </Button>
            </div>
          )}

          {/* Conseils de recherche */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">
                  {t('search.suggestions.tipsTitle') || 'Conseils pour une meilleure recherche :'}
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• {t('search.suggestions.tip1') || 'Utilisez des mots-clés simples et précis'}</li>
                  <li>• {t('search.suggestions.tip2') || 'Essayez différentes variantes du même terme'}</li>
                  <li>• {t('search.suggestions.tip3') || 'Combinez plusieurs filtres pour affiner'}</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartSuggestionsDisplay;