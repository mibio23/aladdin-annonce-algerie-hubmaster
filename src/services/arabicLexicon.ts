/**
 * Lexique arabe enrichi avec synonymes, variantes algériennes et termes contextuels
 */

interface LexiconEntry {
  term: string;
  synonyms: string[];
  algerianVariants: string[];
  category?: string;
  popularity: number; // 0-1
  seasonal?: string[];
}

class ArabicLexicon {
  private readonly lexicon: LexiconEntry[] = [
    // Électronique et Technologie
    {
      term: 'هاتف',
      synonyms: ['موبايل', 'جوال', 'تليفون'],
      algerianVariants: ['بورطابل', 'تيليفون'],
      category: 'electronics',
      popularity: 0.95
    },
    {
      term: 'حاسوب',
      synonyms: ['كمبيوتر', 'جهاز كمبيوتر', 'حاسب'],
      algerianVariants: ['ميكرو', 'لا ماشين'],
      category: 'electronics',
      popularity: 0.9
    },
    {
      term: 'تلفزيون',
      synonyms: ['تلفاز', 'شاشة'],
      algerianVariants: ['تيليفيزا', 'التيلي'],
      category: 'electronics',
      popularity: 0.85
    },
    {
      term: 'ساعة',
      synonyms: ['ساعة يد', 'منبه'],
      algerianVariants: ['مونتر', 'ساعة إيد'],
      category: 'accessories',
      popularity: 0.8
    },

    // Véhicules et Transport
    {
      term: 'سيارة',
      synonyms: ['عربة', 'مركبة', 'أوتوموبيل'],
      algerianVariants: ['طوموبيل', 'الكراهبة', 'توموبيل'],
      category: 'vehicles',
      popularity: 0.95
    },
    {
      term: 'دراجة',
      synonyms: ['دراجة هوائية', 'بسكليت'],
      algerianVariants: ['بيسيكليت', 'فيلو'],
      category: 'vehicles',
      popularity: 0.7
    },
    {
      term: 'دراجة نارية',
      synonyms: ['موتوسيكل', 'نارية'],
      algerianVariants: ['موطور', 'بيكالة'],
      category: 'vehicles',
      popularity: 0.8
    },

    // Immobilier et Maison
    {
      term: 'منزل',
      synonyms: ['بيت', 'دار', 'سكن'],
      algerianVariants: ['دار', 'بيت'],
      category: 'real_estate',
      popularity: 0.9
    },
    {
      term: 'شقة',
      synonyms: ['وحدة سكنية', 'مسكن'],
      algerianVariants: ['أبارتمان', 'شقة'],
      category: 'real_estate',
      popularity: 0.85
    },
    {
      term: 'غرفة',
      synonyms: ['حجرة', 'قاعة صغيرة'],
      algerianVariants: ['شامبر', 'غرفة'],
      category: 'real_estate',
      popularity: 0.8
    },
    {
      term: 'مطبخ',
      synonyms: ['مطبخ منزلي'],
      algerianVariants: ['كوزينة', 'المطبخ'],
      category: 'real_estate',
      popularity: 0.8
    },
    {
      term: 'حديقة',
      synonyms: ['بستان', 'جنينة'],
      algerianVariants: ['جاردان', 'الحوش'],
      category: 'real_estate',
      popularity: 0.7
    },

    // Vêtements et Mode
    {
      term: 'قميص',
      synonyms: ['بلوزة', 'قميص رجالي'],
      algerianVariants: ['شميز', 'قميجة'],
      category: 'clothing',
      popularity: 0.8
    },
    {
      term: 'فستان',
      synonyms: ['ثوب', 'رداء نسائي'],
      algerianVariants: ['روب', 'فوستان'],
      category: 'clothing',
      popularity: 0.75
    },
    {
      term: 'حذاء',
      synonyms: ['جزمة', 'نعل'],
      algerianVariants: ['صباط', 'جزمة', 'سوليي'],
      category: 'clothing',
      popularity: 0.85
    },
    {
      term: 'معطف',
      synonyms: ['جاكيت', 'سترة'],
      algerianVariants: ['فيست', 'كابوط'],
      category: 'clothing',
      popularity: 0.7,
      seasonal: ['winter']
    },

    // Nourriture et Alimentation
    {
      term: 'خبز',
      synonyms: ['رغيف', 'عيش'],
      algerianVariants: ['الخبزة', 'بان'],
      category: 'food',
      popularity: 0.9
    },
    {
      term: 'لحم',
      synonyms: ['لحمة', 'لحم أحمر'],
      algerianVariants: ['لحمة', 'فياند'],
      category: 'food',
      popularity: 0.85
    },
    {
      term: 'أرز',
      synonyms: ['رز'],
      algerianVariants: ['روز', 'الروز'],
      category: 'food',
      popularity: 0.8
    },
    {
      term: 'سكر',
      synonyms: ['سكر أبيض'],
      algerianVariants: ['سوكر', 'السكر'],
      category: 'food',
      popularity: 0.8
    },

    // Meubles et Décoration
    {
      term: 'طاولة',
      synonyms: ['منضدة', 'مائدة'],
      algerianVariants: ['طابلة', 'تابل'],
      category: 'furniture',
      popularity: 0.8
    },
    {
      term: 'كرسي',
      synonyms: ['مقعد', 'كرسي للجلوس'],
      algerianVariants: ['شايز', 'الكرسي'],
      category: 'furniture',
      popularity: 0.8
    },
    {
      term: 'سرير',
      synonyms: ['فراش', 'مرقد'],
      algerianVariants: ['لي', 'السرير'],
      category: 'furniture',
      popularity: 0.85
    },
    {
      term: 'خزانة',
      synonyms: ['دولاب', 'خزانة ملابس'],
      algerianVariants: ['أرموار', 'البلاكار'],
      category: 'furniture',
      popularity: 0.75
    },

    // Services et Métiers
    {
      term: 'طبيب',
      synonyms: ['دكتور', 'طبيب معالج'],
      algerianVariants: ['طبيب', 'دوكتور'],
      category: 'services',
      popularity: 0.9
    },
    {
      term: 'معلم',
      synonyms: ['أستاذ', 'مدرس'],
      algerianVariants: ['أستاذ', 'المعلم'],
      category: 'services',
      popularity: 0.85
    },
    {
      term: 'كهربائي',
      synonyms: ['فني كهرباء', 'تقني كهرباء'],
      algerianVariants: ['إلكتريسيان', 'الكهربائي'],
      category: 'services',
      popularity: 0.8
    },
    {
      term: 'سباك',
      synonyms: ['فني سباكة', 'تقني سباكة'],
      algerianVariants: ['بلومبيي', 'السباك'],
      category: 'services',
      popularity: 0.8
    },
    {
      term: 'حلاق',
      synonyms: ['مزين', 'حلاق شعر'],
      algerianVariants: ['كوافير', 'الحلاق'],
      category: 'services',
      popularity: 0.75
    },

    // Éducation et Culture
    {
      term: 'كتاب',
      synonyms: ['مؤلف', 'مطبوع'],
      algerianVariants: ['ليفر', 'الكتاب'],
      category: 'education',
      popularity: 0.8
    },
    {
      term: 'قلم',
      synonyms: ['قلم كتابة', 'أداة كتابة'],
      algerianVariants: ['ستيلو', 'القلم'],
      category: 'education',
      popularity: 0.8
    },
    {
      term: 'كراسة',
      synonyms: ['دفتر', 'مفكرة'],
      algerianVariants: ['كاييه', 'الكراسة'],
      category: 'education',
      popularity: 0.75
    },

    // Sports et Loisirs
    {
      term: 'كرة',
      synonyms: ['كرة قدم', 'كرة رياضية'],
      algerianVariants: ['بالون', 'الكرة'],
      category: 'sports',
      popularity: 0.8
    },
    {
      term: 'ملعب',
      synonyms: ['ساحة رياضية', 'مكان اللعب'],
      algerianVariants: ['تيران', 'الملعب'],
      category: 'sports',
      popularity: 0.7
    }
  ];

  private readonly seasonalTerms: { [key: string]: string[] } = {
    summer: ['مكيف', 'مروحة', 'نظارة شمسية', 'قبعة', 'مايو', 'شاطئ'],
    winter: ['معطف', 'سترة', 'جوارب صوف', 'دفايات', 'بطانية'],
    spring: ['أزهار', 'نباتات', 'بذور', 'أدوات حديقة'],
    autumn: ['ملابس خريفية', 'أحذية مطر'],
    ramadan: ['تمر', 'قمر الدين', 'فوانيس', 'سحور', 'إفطار'],
    eid: ['ملابس العيد', 'حلويات', 'هدايا', 'زينة'],
    back_to_school: ['حقائب مدرسية', 'أدوات مدرسية', 'كتب', 'أقلام', 'كراسات']
  };

  private readonly popularAlgerianTerms: string[] = [
    'طوموبيل', 'بورطابل', 'شامبر', 'كوزينة', 'جاردان', 
    'فيست', 'صباط', 'طابلة', 'شايز', 'أرموار',
    'دوكتور', 'إلكتريسيان', 'بلومبيي', 'كوافير',
    'ليفر', 'ستيلو', 'كاييه', 'بالون', 'تيران'
  ];

  /**
   * Obtient les synonymes d'un terme
   */
  getSynonyms(term: string): string[] {
    const entry = this.lexicon.find(e => 
      e.term === term || 
      e.synonyms.includes(term) || 
      e.algerianVariants.includes(term)
    );
    
    if (!entry) return [];
    
    return [
      ...entry.synonyms,
      ...entry.algerianVariants,
      entry.term
    ].filter(s => s !== term);
  }

  /**
   * Obtient les variantes algériennes d'un terme
   */
  getAlgerianVariants(term: string): string[] {
    const entry = this.lexicon.find(e => 
      e.term === term || 
      e.synonyms.includes(term)
    );
    
    return entry ? entry.algerianVariants : [];
  }

  /**
   * Obtient les termes saisonniers
   */
  getSeasonalTerms(season?: string): string[] {
    if (!season) {
      // Déterminer la saison actuelle
      const month = new Date().getMonth() + 1;
      if (month >= 6 && month <= 8) season = 'summer';
      else if (month >= 12 || month <= 2) season = 'winter';
      else if (month >= 3 && month <= 5) season = 'spring';
      else season = 'autumn';
      
      // Vérifier le Ramadan (approximatif)
      // En réalité, il faudrait une API pour les dates précises
      if (month >= 3 && month <= 5) season = 'ramadan';
    }

    return this.seasonalTerms[season] || [];
  }

  /**
   * Obtient les termes populaires algériens
   */
  getPopularAlgerianTerms(): string[] {
    return [...this.popularAlgerianTerms];
  }

  /**
   * Obtient les termes d'une catégorie spécifique
   */
  getCategoryTerms(category: string): string[] {
    return this.lexicon
      .filter(e => e.category === category)
      .sort((a, b) => b.popularity - a.popularity)
      .flatMap(e => [e.term, ...e.synonyms.slice(0, 2), ...e.algerianVariants.slice(0, 1)])
      .slice(0, 10);
  }

  /**
   * Recherche des termes par similarité
   */
  searchSimilarTerms(query: string, limit: number = 10): string[] {
    const results: { term: string; score: number }[] = [];
    const queryLower = query.toLowerCase();

    for (const entry of this.lexicon) {
      const allTerms = [entry.term, ...entry.synonyms, ...entry.algerianVariants];
      
      for (const term of allTerms) {
        const termLower = term.toLowerCase();
        let score = 0;
        
        // Score exact
        if (termLower === queryLower) score = 1.0;
        // Score de début
        else if (termLower.startsWith(queryLower)) score = 0.8;
        // Score de contenu
        else if (termLower.includes(queryLower)) score = 0.6;
        // Score de mots contenus
        else if (queryLower.split(' ').some(word => termLower.includes(word))) score = 0.4;
        
        if (score > 0) {
          results.push({ 
            term, 
            score: score * entry.popularity 
          });
        }
      }
    }

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(r => r.term);
  }

  /**
   * Obtient des suggestions contextuelles basées sur l'historique
   */
  getContextualSuggestions(searchHistory: string[]): string[] {
    // Analyser les catégories les plus recherchées
    const categories = new Map<string, number>();
    
    for (const query of searchHistory) {
      const entry = this.lexicon.find(e => 
        e.term.includes(query) || 
        e.synonyms.some(s => s.includes(query)) ||
        e.algerianVariants.some(a => a.includes(query))
      );
      
      if (entry?.category) {
        categories.set(entry.category, (categories.get(entry.category) || 0) + 1);
      }
    }

    // Retourner des suggestions des catégories les plus populaires
    const topCategories = Array.from(categories.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([category]) => category);

    const suggestions: string[] = [];
    for (const category of topCategories) {
      suggestions.push(...this.getCategoryTerms(category).slice(0, 3));
    }

    return [...new Set(suggestions)].slice(0, 10);
  }

  /**
   * Enrichit une requête avec du contexte algérien
   */
  enrichWithAlgerianContext(query: string): string[] {
    const enriched: string[] = [query];
    
    // Remplacer par des variantes algériennes si possible
    const words = query.split(' ');
    const enrichedWords: string[][] = [];
    
    for (const word of words) {
      const variants = [word];
      const algerianVariants = this.getAlgerianVariants(word);
      if (algerianVariants.length > 0) {
        variants.push(...algerianVariants.slice(0, 2));
      }
      enrichedWords.push(variants);
    }

    // Générer quelques combinaisons
    if (enrichedWords.length === 1) {
      enriched.push(...enrichedWords[0].slice(1));
    } else if (enrichedWords.length === 2) {
      for (let i = 0; i < Math.min(2, enrichedWords[0].length); i++) {
        for (let j = 0; j < Math.min(2, enrichedWords[1].length); j++) {
          if (i !== 0 || j !== 0) { // Éviter la combinaison originale
            enriched.push(`${enrichedWords[0][i]} ${enrichedWords[1][j]}`);
          }
        }
      }
    }

    return [...new Set(enriched)];
  }
}

export const arabicLexicon = new ArabicLexicon();