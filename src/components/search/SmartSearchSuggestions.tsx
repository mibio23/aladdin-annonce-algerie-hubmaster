import { useState, useEffect, useMemo } from 'react';
import { Search, Clock, TrendingUp, Tag } from 'lucide-react';
// Dépendance aux catégories neutralisée
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { getCategoryMenu } from "@/data/megaMenu/categoryMenu";
import { safeStringify } from '@/utils/safeStringify';

interface SmartSearchSuggestionsProps {
  query: string;
  onSuggestionSelect: (suggestion: string) => void;
  isVisible: boolean;
}

// Fonction pour calculer la distance de Levenshtein (correction orthographique)
const levenshteinDistance = (str1: string, str2: string): number => {
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
};

// Hook pour l'historique de recherche
const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('aladdin_search_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const addToHistory = (term: string) => {
    const updated = [term, ...history.filter(h => h !== term)].slice(0, 10);
    setHistory(updated);
    localStorage.setItem('aladdin_search_history', safeStringify(updated));
  };

  return { history, addToHistory };
};

const SmartSearchSuggestions = ({ query, onSuggestionSelect, isVisible }: SmartSearchSuggestionsProps) => {
  const { t, language } = useSafeI18nWithRouter();
  const { history, addToHistory } = useSearchHistory();
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // Suggestions populaires par langue avec focus sur maison/mobilier/électroménager
  const popularSuggestions = useMemo(() => {
    const suggestions: { [key: string]: string[] } = {
      fr: ['Canapé', 'Réfrigérateur', 'Lave-linge', 'Table basse', 'Armoire', 'Lit', 'Four', 'Aspirateur'],
      ar: ['أريكة', 'ثلاجة', 'غسالة', 'طاولة صغيرة', 'خزانة', 'سرير', 'فرن', 'مكنسة كهربائية'],
      en: ['Sofa', 'Refrigerator', 'Washing Machine', 'Coffee Table', 'Wardrobe', 'Bed', 'Oven', 'Vacuum Cleaner'],
      de: ['Sofa', 'Kühlschrank', 'Waschmaschine', 'Couchtisch', 'Kleiderschrank', 'Bett', 'Ofen', 'Staubsauger'],
      es: ['Sofá', 'Refrigerador', 'Lavadora', 'Mesa de centro', 'Armario', 'Cama', 'Horno', 'Aspiradora']
    };
    return suggestions[language] || suggestions.fr;
  }, [language]);

  // Extraire les noms de catégories
  const categoryNames = useMemo(() => {
    const names: string[] = [];
    const visit = (cats: any[]) => {
      for (const c of cats) {
        if (c && typeof c.name === 'string') names.push(c.name);
        if (Array.isArray(c?.subcategories)) visit(c.subcategories);
      }
    };
    const cats = getCategoryMenu(language) as any[];
    visit(cats);
    return names;
  }, [language]);

  useEffect(() => {
    if (query.length > 1 && isVisible) {
      const queryLower = query.toLowerCase();
      const allTerms = [...popularSuggestions, ...categoryNames, ...history];
      
      // Priorité 1: Correspondances exactes (commence par la query)
      const startMatches = allTerms.filter(term => 
        term.toLowerCase().startsWith(queryLower)
      );

      // Priorité 2: Correspondances partielles (contient la query)
      const containsMatches = allTerms.filter(term => 
        term.toLowerCase().includes(queryLower) && !startMatches.includes(term)
      );

      // Priorité 3: Recherche avec correction orthographique
      const fuzzyMatches = allTerms.filter(term => {
        const distance = levenshteinDistance(queryLower, term.toLowerCase());
        return distance <= 2 && distance > 0 && 
               !startMatches.includes(term) && 
               !containsMatches.includes(term);
      });

      // Créer les suggestions avec type et score - RESPECTER L'ORDRE ET NE PAS FORCER LA PLURALISATION
      const suggestions = [
        // Ajouter la query exacte de l'utilisateur en premier si elle n'est pas déjà dans les suggestions
        ...(startMatches.length === 0 && containsMatches.length === 0 ? [{
          text: query, // Garder exactement ce que l'utilisateur a tapé
          type: 'user_input',
          score: 2
        }] : []),
        ...startMatches.slice(0, 4).map(term => ({
          text: term,
          type: history.includes(term) ? 'history' : 
                popularSuggestions.includes(term) ? 'popular' : 'category',
          score: 1.5
        })),
        ...containsMatches.slice(0, 3).map(term => ({
          text: term,
          type: history.includes(term) ? 'history' : 
                popularSuggestions.includes(term) ? 'popular' : 'category',
          score: 1
        })),
        ...fuzzyMatches.slice(0, 2).map(term => ({
          text: term,
          type: 'suggestion',
          score: 0.8
        }))
      ];

      setSuggestions(suggestions.slice(0, 8));
    } else {
      setSuggestions([]);
    }
  }, [query, isVisible, popularSuggestions, categoryNames, history]);

  const handleSuggestionClick = (suggestion: string) => {
    addToHistory(suggestion);
    onSuggestionSelect(suggestion);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'history': return <Clock className="h-4 w-4 text-orange-500" />;
      case 'popular': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'category': return <Tag className="h-4 w-4 text-blue-500" />;
      case 'suggestion': return <Search className="h-4 w-4 text-gray-400" />;
      case 'user_input': return <Search className="h-4 w-4 text-blue-600" />;
      default: return <Search className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'history': return t('search.labels.history');
      case 'popular': return t('search.labels.popular');
      case 'category': return t('search.labels.category');
      case 'suggestion': return t('search.labels.suggestion');
      case 'user_input': return t('search.labels.userInput');
      default: return '';
    }
  };

  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-xl z-50 mt-1 animate-in slide-in-from-top-2 duration-200">
      <div className="max-h-80 overflow-y-auto">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-3 group transition-colors first:rounded-t-lg last:rounded-b-lg"
            onClick={() => handleSuggestionClick(suggestion.text)}
          >
            {getIcon(suggestion.type)}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 dark:text-slate-100 truncate">
                {suggestion.text}
              </div>
              <div className="text-xs text-gray-500 dark:text-slate-400">
                {getTypeLabel(suggestion.type)}
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </button>
        ))}
        
        {query.length > 2 && (
          <div className="border-t border-gray-200 dark:border-slate-600 p-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
              <TrendingUp className="h-3 w-3" />
              {t('search.tip')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartSearchSuggestions;