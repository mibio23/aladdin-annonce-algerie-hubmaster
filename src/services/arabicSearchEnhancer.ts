import { arabicPhoneticMatcher } from './arabicPhoneticMatcher';
import { arabicLexicon } from './arabicLexicon';

export interface ArabicSearchOptions {
  enablePhonetic: boolean;
  enableRootSearch: boolean;
  enableDiacriticNormalization: boolean;
  includeAlgerianTerms: boolean;
  contextualSuggestions: boolean;
}

export interface ArabicEnhancedResult {
  originalQuery: string;
  normalizedQuery: string;
  phoneticVariants: string[];
  synonyms: string[];
  rootBasedSuggestions: string[];
  algerianVariants: string[];
  confidence: number;
}

class ArabicSearchEnhancer {
  private readonly defaultOptions: ArabicSearchOptions = {
    enablePhonetic: true,
    enableRootSearch: true,
    enableDiacriticNormalization: true,
    includeAlgerianTerms: true,
    contextualSuggestions: true
  };

  /**
   * Normalise le texte arabe en supprimant les diacritiques
   */
  private normalizeDiacritics(text: string): string {
    return text
      .replace(/[\u064B-\u0652\u0670\u0640]/g, '') // Supprime diacritiques et tatweel
      .replace(/[\u0671]/g, 'ا') // Normalise alif wasla
      .replace(/[\u0622\u0623\u0625]/g, 'ا') // Normalise variantes alif
      .replace(/[\u0629]/g, 'ة') // Normalise ta marbouta
      .trim();
  }

  /**
   * Détecte si le texte contient de l'arabe
   */
  private isArabicText(text: string): boolean {
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return arabicRegex.test(text);
  }

  /**
   * Extrait les racines trilittères possibles
   */
  private extractRoots(word: string): string[] {
    if (word.length < 3) return [];
    
    const normalized = this.normalizeDiacritics(word);
    const roots: string[] = [];
    
    // Patterns de racines courantes
    const rootPatterns = [
      // فعل
      { pattern: /^(.)(.)(.)[ةهت]?$/, indices: [1, 2, 3] },
      // مفعل
      { pattern: /^م(.)(.)(.)[ةهت]?$/, indices: [1, 2, 3] },
      // فاعل
      { pattern: /^(.)ا(.)(.)([ةهت])?$/, indices: [1, 2, 3] },
      // فعال
      { pattern: /^(.)(.)ا(.)([ةهت])?$/, indices: [1, 2, 3] },
    ];

    for (const { pattern, indices } of rootPatterns) {
      const match = normalized.match(pattern);
      if (match) {
        const root = indices.map(i => match[i]).join('');
        if (root.length === 3) {
          roots.push(root);
        }
      }
    }

    return [...new Set(roots)];
  }

  /**
   * Génère des suggestions basées sur les racines
   */
  private generateRootBasedSuggestions(roots: string[]): string[] {
    const suggestions: string[] = [];
    
    for (const root of roots) {
      // Génère des formes courantes à partir de la racine
      const forms = [
        root, // forme de base
        `م${root}`, // nom d'instrument/lieu
        `${root}ة`, // nom féminin
        `${root[0]}ا${root[1]}${root[2]}`, // forme فاعل
        `${root[0]}${root[1]}ا${root[2]}`, // forme فعال
        `ت${root}`, // forme تفعل
      ];
      
      suggestions.push(...forms);
    }
    
    return [...new Set(suggestions)];
  }

  /**
   * Améliore une requête de recherche arabe
   */
  async enhanceArabicSearch(
    query: string, 
    options: Partial<ArabicSearchOptions> = {}
  ): Promise<ArabicEnhancedResult> {
    const opts = { ...this.defaultOptions, ...options };
    
    if (!this.isArabicText(query)) {
      return {
        originalQuery: query,
        normalizedQuery: query,
        phoneticVariants: [],
        synonyms: [],
        rootBasedSuggestions: [],
        algerianVariants: [],
        confidence: 0
      };
    }

    const normalizedQuery = opts.enableDiacriticNormalization 
      ? this.normalizeDiacritics(query) 
      : query;

    // Variantes phonétiques
    const phoneticVariants = opts.enablePhonetic 
      ? arabicPhoneticMatcher.getPhoneticVariants(normalizedQuery)
      : [];

    // Synonymes du lexique
    const synonyms = arabicLexicon.getSynonyms(normalizedQuery);

    // Suggestions basées sur les racines
    const words = normalizedQuery.split(/\s+/);
    const allRoots = words.flatMap(word => this.extractRoots(word));
    const rootBasedSuggestions = opts.enableRootSearch 
      ? this.generateRootBasedSuggestions(allRoots)
      : [];

    // Variantes algériennes
    const algerianVariants = opts.includeAlgerianTerms 
      ? arabicLexicon.getAlgerianVariants(normalizedQuery)
      : [];

    // Calcul de confiance basé sur le nombre de suggestions trouvées
    const totalSuggestions = phoneticVariants.length + synonyms.length + 
                           rootBasedSuggestions.length + algerianVariants.length;
    const confidence = Math.min(totalSuggestions / 10, 1);

    return {
      originalQuery: query,
      normalizedQuery,
      phoneticVariants,
      synonyms,
      rootBasedSuggestions,
      algerianVariants,
      confidence
    };
  }

  /**
   * Génère des suggestions contextuelles pour l'Algérie
   */
  getContextualSuggestions(category?: string, season?: string): string[] {
    const seasonal = arabicLexicon.getSeasonalTerms(season);
    const categorySpecific = category ? arabicLexicon.getCategoryTerms(category) : [];
    const popular = arabicLexicon.getPopularAlgerianTerms();

    return [...seasonal, ...categorySpecific, ...popular.slice(0, 5)];
  }

  /**
   * Améliore les suggestions de recherche existantes
   */
  async enhanceSuggestions(
    baseSuggestions: string[], 
    originalQuery: string
  ): Promise<string[]> {
    const enhanced = await this.enhanceArabicSearch(originalQuery);
    
    const allEnhanced = [
      ...baseSuggestions,
      ...enhanced.phoneticVariants,
      ...enhanced.synonyms,
      ...enhanced.algerianVariants,
      ...enhanced.rootBasedSuggestions.slice(0, 3) // Limite les suggestions de racines
    ];

    // Dédoublonne et trie par pertinence
    return [...new Set(allEnhanced)]
      .filter(suggestion => suggestion.length > 1)
      .sort((a, b) => {
        // Privilégie les suggestions qui contiennent des mots de la requête originale
        const aContains = enhanced.normalizedQuery.split(' ').some(word => 
          a.includes(word) || word.includes(a)
        );
        const bContains = enhanced.normalizedQuery.split(' ').some(word => 
          b.includes(word) || word.includes(b)
        );
        
        if (aContains && !bContains) return -1;
        if (!aContains && bContains) return 1;
        return 0;
      })
      .slice(0, 15); // Limite finale
  }
}

export const arabicSearchEnhancer = new ArabicSearchEnhancer();