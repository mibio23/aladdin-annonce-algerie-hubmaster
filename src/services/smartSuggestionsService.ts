// Catégories neutralisées: suppression de la dépendance au mega menu
import { keywordDatabase, detailedKeywords } from '@/data/search/keywordDatabase';
import { Language } from '@/lib/i18n/translations';
import { arabicSearchEnhancer } from './arabicSearchEnhancer';

export interface SmartSuggestion {
  id: string;
  text: string;
  type: 'spelling' | 'category' | 'subcategory' | 'specialization' | 'condition' | 'service' | 'location' | 'trending' | 'synonym';
  priority: number;
  icon?: string;
  query?: string;
  filters?: Record<string, any>;
  confidence: number;
}

export interface SuggestionContext {
  searchType: 'quick' | 'advanced';
  originalQuery: string;
  appliedFilters: Record<string, any>;
  language: string;
  location?: string;
}

class SmartSuggestionsService {
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  }

  private calculateSimilarity(query: string, target: string): number {
    const distance = this.levenshteinDistance(query.toLowerCase(), target.toLowerCase());
    const maxLength = Math.max(query.length, target.length);
    return maxLength === 0 ? 1 : (maxLength - distance) / maxLength;
  }

  async generateSpellingSuggestions(query: string, language: string): Promise<SmartSuggestion[]> {
    // Les suggestions d'orthographe basées sur les catégories sont neutralisées.
    // On peut proposer des variantes basiques (ex: arabe) via arabicSearchEnhancer dans generateSuggestions.
    return [];
  }

  async generateCategorySuggestions(_query: string, _language: string): Promise<SmartSuggestion[]> {
    // Les suggestions de catégories et sous-catégories sont neutralisées.
    return [];
  }

  async generateKeywordSuggestions(query: string): Promise<SmartSuggestion[]> {
    const suggestions: SmartSuggestion[] = [];
    const queryLower = query.toLowerCase();

    // Recherche dans keywordDatabase
    Object.entries(keywordDatabase).forEach(([category, keywords]) => {
      keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(queryLower)) {
          suggestions.push({
            id: `keyword_${category}_${keyword}`,
            text: keyword,
            type: 'synonym',
            priority: 70,
            icon: '🔍',
            query: keyword,
            confidence: 0.7
          });
        }
      });
    });

    // Recherche dans detailedKeywords
    Object.entries(detailedKeywords).forEach(([subcategory, keywords]) => {
      keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(queryLower)) {
          suggestions.push({
            id: `detailed_${subcategory}_${keyword}`,
            text: keyword,
            type: 'synonym',
            priority: 75,
            icon: '🔍',
            query: keyword,
            confidence: 0.75
          });
        }
      });
    });

    return suggestions.sort((a, b) => b.priority - a.priority).slice(0, 5);
  }

  async generateConditionSuggestions(query: string, language: string): Promise<SmartSuggestion[]> {
    const conditions = {
      fr: [
        { key: 'new', name: 'Neuf' },
        { key: 'like_new', name: 'Comme neuf' },
        { key: 'good', name: 'Bon état' },
        { key: 'fair', name: 'État correct' },
        { key: 'poor', name: 'À rénover' },
        { key: 'refurbished', name: 'Reconditionné' }
      ],
      en: [
        { key: 'new', name: 'New' },
        { key: 'like_new', name: 'Like New' },
        { key: 'good', name: 'Good' },
        { key: 'fair', name: 'Fair' },
        { key: 'poor', name: 'Poor' },
        { key: 'refurbished', name: 'Refurbished' }
      ],
      ar: [
        { key: 'new', name: 'جديد' },
        { key: 'like_new', name: 'مثل الجديد' },
        { key: 'good', name: 'حالة جيدة' },
        { key: 'fair', name: 'حالة مقبولة' },
        { key: 'poor', name: 'يحتاج إصلاح' },
        { key: 'refurbished', name: 'مجدد' }
      ],
      es: [
        { key: 'new', name: 'Nuevo' },
        { key: 'like_new', name: 'Como Nuevo' },
        { key: 'good', name: 'Buen Estado' },
        { key: 'fair', name: 'Estado Regular' },
        { key: 'poor', name: 'A Renovar' },
        { key: 'refurbished', name: 'Reacondicionado' }
      ],
      de: [
        { key: 'new', name: 'Neu' },
        { key: 'like_new', name: 'Wie Neu' },
        { key: 'good', name: 'Guter Zustand' },
        { key: 'fair', name: 'Ordentlicher Zustand' },
        { key: 'poor', name: 'Zu Renovieren' },
        { key: 'refurbished', name: 'Aufbereitet' }
      ]
    };

    const suggestions: SmartSuggestion[] = [];
    const langConditions = conditions[language as keyof typeof conditions] || conditions.fr;
    const queryLower = query.toLowerCase();

    langConditions.forEach((condition) => {
      if (condition.name.toLowerCase().includes(queryLower)) {
        suggestions.push({
          id: `condition_${condition.key}`,
          text: condition.name,
          type: 'condition',
          priority: 85,
          icon: '⭐',
          filters: { condition: condition.key },
          confidence: 0.85
        });
      }
    });

    return suggestions;
  }

  async generateLocationSuggestions(query: string, currentLocation?: string): Promise<SmartSuggestion[]> {
    const wilayas = [
      'Alger', 'Oran', 'Constantine', 'Blida', 'Batna', 'Djelfa', 'Sétif', 'Sidi Bel Abbès',
      'Biskra', 'Tébessa', 'El Oued', 'Skikda', 'Tiaret', 'Béjaïa', 'Tlemcen', 'Ouargla',
      'Mostaganem', 'Bordj Bou Arréridj', 'Chlef', 'Médéa', 'El Tarf', 'Jijel', 'Relizane',
      'Mila', 'Ain Defla', 'Naama', 'Ain Témouchent', 'Ghardaïa', 'Mascara'
    ];

    const suggestions: SmartSuggestion[] = [];
    const queryLower = query.toLowerCase();

    // Suggestions de wilayas
    wilayas.forEach((wilaya) => {
      if (wilaya.toLowerCase().includes(queryLower)) {
        suggestions.push({
          id: `location_${wilaya}`,
          text: wilaya,
          type: 'location',
          priority: 80,
          icon: '📍',
          filters: { location: wilaya },
          confidence: 0.8
        });
      }
    });

    // Suggestion d'élargissement géographique si localisation actuelle
    if (currentLocation) {
      suggestions.push({
        id: 'expand_location',
        text: `Élargir la recherche autour de ${currentLocation}`,
        type: 'location',
        priority: 60,
        icon: '🌍',
        filters: { location: '', expandRadius: true },
        confidence: 0.6
      });
    }

    return suggestions.slice(0, 5);
  }

  async generateTrendingSuggestions(language: string): Promise<SmartSuggestion[]> {
    const trendingByLanguage = {
      fr: ['iPhone', 'Voiture', 'Appartement', 'Ordinateur', 'Télévision'],
      en: ['iPhone', 'Car', 'Apartment', 'Computer', 'Television'],
      ar: ['آيفون', 'سيارة', 'شقة', 'حاسوب', 'تلفزيون', 'طوموبيل', 'بورطابل', 'شامبر'],
      es: ['iPhone', 'Coche', 'Apartamento', 'Ordenador', 'Televisión'],
      de: ['iPhone', 'Auto', 'Wohnung', 'Computer', 'Fernseher']
    };

    const trending = trendingByLanguage[language as keyof typeof trendingByLanguage] || trendingByLanguage.fr;
    
    // Ajouter des suggestions contextuelles algériennes pour l'arabe
    if (language === 'ar') {
      const contextualSuggestions = arabicSearchEnhancer.getContextualSuggestions();
      const combinedTrending = [...trending, ...contextualSuggestions.slice(0, 3)];
      
      return combinedTrending.map((term, index) => ({
        id: `trending_${term}`,
        text: term,
        type: 'trending' as const,
        priority: 50 - index,
        icon: contextualSuggestions.includes(term) ? '🇩🇿' : '🔥',
        query: term,
        confidence: 0.5
      }));
    }
    
    return trending.map((term, index) => ({
      id: `trending_${term}`,
      text: term,
      type: 'trending' as const,
      priority: 50 - index,
      icon: '🔥',
      query: term,
      confidence: 0.5
    }));
  }

  async generateSuggestions(context: SuggestionContext): Promise<SmartSuggestion[]> {
    const { searchType, originalQuery, appliedFilters, language, location } = context;
    
    if (!originalQuery || originalQuery.length < 2) {
      return await this.generateTrendingSuggestions(language);
    }

    const allSuggestions: SmartSuggestion[] = [];

    // Améliorations spécifiques à l'arabe
    if (language === 'ar') {
      const arabicEnhanced = await arabicSearchEnhancer.enhanceArabicSearch(originalQuery);
      
      // Ajouter les variantes phonétiques comme suggestions de correction
      arabicEnhanced.phoneticVariants.forEach((variant, index) => {
        allSuggestions.push({
          id: `arabic_phonetic_${index}`,
          text: variant,
          type: 'spelling',
          priority: 95 - index,
          icon: '🔤',
          query: variant,
          confidence: arabicEnhanced.confidence
        });
      });

      // Ajouter les synonymes arabes
      arabicEnhanced.synonyms.forEach((synonym, index) => {
        allSuggestions.push({
          id: `arabic_synonym_${index}`,
          text: synonym,
          type: 'synonym',
          priority: 90 - index,
          icon: '🔍',
          query: synonym,
          confidence: 0.8
        });
      });

      // Ajouter les variantes algériennes
      arabicEnhanced.algerianVariants.forEach((variant, index) => {
        allSuggestions.push({
          id: `arabic_algerian_${index}`,
          text: variant,
          type: 'synonym',
          priority: 85 - index,
          icon: '🇩🇿',
          query: variant,
          confidence: 0.85
        });
      });

      // Ajouter quelques suggestions basées sur les racines
      arabicEnhanced.rootBasedSuggestions.slice(0, 3).forEach((rootSuggestion, index) => {
        allSuggestions.push({
          id: `arabic_root_${index}`,
          text: rootSuggestion,
          type: 'synonym',
          priority: 75 - index,
          icon: '🌱',
          query: rootSuggestion,
          confidence: 0.7
        });
      });

      // Suggestions contextuelles algériennes
      const contextualSuggestions = arabicSearchEnhancer.getContextualSuggestions();
      contextualSuggestions.slice(0, 3).forEach((suggestion, index) => {
        allSuggestions.push({
          id: `arabic_contextual_${index}`,
          text: suggestion,
          type: 'trending',
          priority: 60 - index,
          icon: '🔥',
          query: suggestion,
          confidence: 0.6
        });
      });
    }

    // Niveau 1: Corrections orthographiques
    const spellingSuggestions = await this.generateSpellingSuggestions(originalQuery, language);
    allSuggestions.push(...spellingSuggestions);

    // Niveau 2: Catégories et sous-catégories
    const categorySuggestions = await this.generateCategorySuggestions(originalQuery, language);
    allSuggestions.push(...categorySuggestions);

    // Niveau 3: Mots-clés et synonymes
    const keywordSuggestions = await this.generateKeywordSuggestions(originalQuery);
    allSuggestions.push(...keywordSuggestions);

    // Niveau 4: Conditions du produit
    const conditionSuggestions = await this.generateConditionSuggestions(originalQuery, language);
    allSuggestions.push(...conditionSuggestions);

    // Niveau 5: Suggestions géographiques
    const locationSuggestions = await this.generateLocationSuggestions(originalQuery, location);
    allSuggestions.push(...locationSuggestions);

    // Niveau 6: Tendances si peu de suggestions
    if (allSuggestions.length < 5) {
      const trendingSuggestions = await this.generateTrendingSuggestions(language);
      allSuggestions.push(...trendingSuggestions);
    }

    // Ajuster la priorité selon le type de recherche
    if (searchType === 'quick') {
      // Privilégier les corrections et catégories principales pour la recherche rapide
      allSuggestions.forEach(suggestion => {
        if (suggestion.type === 'spelling' || suggestion.type === 'category') {
          suggestion.priority += 10;
        }
        // Bonus pour les suggestions arabes en recherche rapide
        if (language === 'ar' && suggestion.icon === '🇩🇿') {
          suggestion.priority += 5;
        }
      });
    }

    // Déduplication et tri
    const uniqueSuggestions = allSuggestions
      .filter((suggestion, index, self) => 
        index === self.findIndex(s => s.text === suggestion.text)
      )
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 15);

    return uniqueSuggestions;
  }
}

export const smartSuggestionsService = new SmartSuggestionsService();