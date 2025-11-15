/**
 * Service de correspondance phonétique pour l'arabe algérien
 * Gère les variations phonétiques courantes en Algérie
 */

interface PhoneticRule {
  from: string;
  to: string[];
  weight: number; // Importance de la règle (0-1)
  context?: string; // Contexte d'application optionnel
}

class ArabicPhoneticMatcher {
  private readonly phoneticRules: PhoneticRule[] = [
    // Variations ج/غ courantes en Algérie
    { from: 'ج', to: ['غ'], weight: 0.9 },
    { from: 'غ', to: ['ج'], weight: 0.9 },
    
    // Variations ح/خ
    { from: 'ح', to: ['خ'], weight: 0.8 },
    { from: 'خ', to: ['ح'], weight: 0.8 },
    
    // Variations ق/ك très courantes en darija
    { from: 'ق', to: ['ك'], weight: 0.95 },
    { from: 'ك', to: ['ق'], weight: 0.7 },
    
    // Variations ث/ت/س
    { from: 'ث', to: ['ت', 'س'], weight: 0.8 },
    { from: 'ت', to: ['ث'], weight: 0.6 },
    
    // Variations ذ/د/ز
    { from: 'ذ', to: ['د', 'ز'], weight: 0.8 },
    { from: 'د', to: ['ذ'], weight: 0.6 },
    
    // Variations ض/د courantes
    { from: 'ض', to: ['د'], weight: 0.7 },
    { from: 'د', to: ['ض'], weight: 0.5 },
    
    // Variations ظ/ز
    { from: 'ظ', to: ['ز'], weight: 0.8 },
    { from: 'ز', to: ['ظ'], weight: 0.6 },
    
    // Variations voyelles courtes (en fin de mot)
    { from: 'ة', to: ['ه', 'ت'], weight: 0.9 },
    { from: 'ه', to: ['ة'], weight: 0.8 },
    { from: 'ت', to: ['ة'], weight: 0.7 },
    
    // Variations alif
    { from: 'أ', to: ['ا'], weight: 0.95 },
    { from: 'إ', to: ['ا'], weight: 0.95 },
    { from: 'آ', to: ['ا'], weight: 0.95 },
    
    // Variations ya/alif maqsura
    { from: 'ي', to: ['ى'], weight: 0.9 },
    { from: 'ى', to: ['ي'], weight: 0.9 },
  ];

  private readonly commonMistakes: { [key: string]: string[] } = {
    // Erreurs de frappe courantes sur clavier arabe
    'جهاز': ['غهاز', 'كهاز'],
    'هاتف': ['هاثف', 'خاتف'],
    'حاسوب': ['خاسوب', 'حاصوب'],
    'قميص': ['كميص', 'غميص'],
    'سيارة': ['صيارة', 'سيارت'],
    'منزل': ['منظل', 'منسل'],
    'مطبخ': ['مطبك', 'مطبج'],
    'حديقة': ['خديقة', 'حديكة'],
    'مكتب': ['مكثب', 'مقتب'],
    'تلفزيون': ['تلفظيون', 'تلفسيون'],
    'كمبيوتر': ['قمبيوتر', 'كمبيوثر'],
    'موبايل': ['موبايى', 'موباىل'],
    'شقة': ['شكة', 'شقت'],
    'غرفة': ['جرفة', 'غرفت'],
    'مطعم': ['مطقم', 'مطعن'],
    'صيدلية': ['صيدليت', 'صيدلىة'],
    'مستشفى': ['مستشفي', 'مصتشفى'],
    'جامعة': ['غامعة', 'جامقة'],
    'مدرسة': ['مذرسة', 'مدرصة'],
    'بنك': ['بنق', 'بنج'],
    'فندق': ['فندك', 'فنذق'],
    'مول': ['مال', 'مول'],
    'ساعة': ['صاعة', 'ساقة'],
    'كتاب': ['قتاب', 'كثاب'],
    'قلم': ['كلم', 'قلن'],
    'طاولة': ['طاولت', 'طاوله'],
    'كرسي': ['قرسي', 'كرصي'],
    'نظارة': ['نظارت', 'نظاره'],
    'خاتم': ['حاتم', 'خاثم'],
    'جزمة': ['غزمة', 'جسمة'], // chaussure en darija
    'كراسة': ['قراسة', 'كراصة'], // cahier
    'طابلة': ['طابله', 'طابلت'], // table en darija
  };

  /**
   * Calcule la distance phonétique entre deux mots arabes
   */
  private calculatePhoneticDistance(word1: string, word2: string): number {
    if (word1 === word2) return 0;
    
    const len1 = word1.length;
    const len2 = word2.length;
    const matrix: number[][] = [];

    // Initialisation de la matrice
    for (let i = 0; i <= len1; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
      matrix[0][j] = j;
    }

    // Calcul avec poids phonétiques
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const char1 = word1[i - 1];
        const char2 = word2[j - 1];
        
        if (char1 === char2) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          // Vérifier si c'est une variation phonétique
          const phoneticWeight = this.getPhoneticWeight(char1, char2);
          const substitutionCost = phoneticWeight < 1 ? phoneticWeight : 1;
          
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,      // Suppression
            matrix[i][j - 1] + 1,      // Insertion
            matrix[i - 1][j - 1] + substitutionCost // Substitution
          );
        }
      }
    }

    return matrix[len1][len2];
  }

  /**
   * Obtient le poids phonétique entre deux caractères
   */
  private getPhoneticWeight(char1: string, char2: string): number {
    const rule = this.phoneticRules.find(r => 
      r.from === char1 && r.to.includes(char2)
    );
    return rule ? rule.weight : 1;
  }

  /**
   * Génère toutes les variantes phonétiques possibles d'un mot
   */
  private generateAllVariants(word: string): string[] {
    const variants = new Set<string>([word]);
    
    // Appliquer les règles phonétiques
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const applicableRules = this.phoneticRules.filter(r => r.from === char);
      
      for (const rule of applicableRules) {
        for (const replacement of rule.to) {
          const variant = word.substring(0, i) + replacement + word.substring(i + 1);
          variants.add(variant);
          
          // Générer des variantes de second niveau pour les mots courts
          if (word.length <= 6) {
            const secondLevelVariants = this.generateAllVariants(variant);
            secondLevelVariants.forEach(v => variants.add(v));
          }
        }
      }
    }

    return Array.from(variants).filter(v => v !== word);
  }

  /**
   * Obtient les variantes phonétiques d'un terme de recherche
   */
  getPhoneticVariants(query: string): string[] {
    const words = query.trim().split(/\s+/);
    const allVariants: string[] = [];

    for (const word of words) {
      // Vérifier les erreurs courantes d'abord
      if (this.commonMistakes[word]) {
        allVariants.push(...this.commonMistakes[word]);
      }

      // Vérifier si le mot est une variante d'une erreur courante
      for (const [correct, mistakes] of Object.entries(this.commonMistakes)) {
        if (mistakes.includes(word)) {
          allVariants.push(correct);
          // Ajouter aussi les autres variantes
          allVariants.push(...mistakes.filter(m => m !== word));
        }
      }

      // Générer les variantes phonétiques automatiques
      const phoneticVariants = this.generateAllVariants(word);
      allVariants.push(...phoneticVariants);
    }

    // Si c'est une phrase, générer des combinaisons
    if (words.length > 1) {
      const wordVariants = words.map(word => {
        const variants = [word];
        if (this.commonMistakes[word]) {
          variants.push(...this.commonMistakes[word].slice(0, 2)); // Limite les variantes
        }
        variants.push(...this.generateAllVariants(word).slice(0, 2));
        return variants;
      });

      // Générer quelques combinaisons (pas toutes pour éviter l'explosion combinatoire)
      for (let i = 0; i < Math.min(3, wordVariants[0].length); i++) {
        for (let j = 0; j < Math.min(3, wordVariants[1]?.length || 1); j++) {
          if (wordVariants[1]) {
            allVariants.push(`${wordVariants[0][i]} ${wordVariants[1][j]}`);
          }
        }
      }
    }

    // Dédoublonner, filtrer et trier par pertinence
    return [...new Set(allVariants)]
      .filter(variant => variant.length > 1 && variant !== query)
      .sort((a, b) => {
        const distA = this.calculatePhoneticDistance(query, a);
        const distB = this.calculatePhoneticDistance(query, b);
        return distA - distB;
      })
      .slice(0, 10); // Limite à 10 variantes
  }

  /**
   * Trouve la meilleure correspondance phonétique dans une liste
   */
  findBestMatch(query: string, candidates: string[]): string | null {
    let bestMatch = null;
    let bestDistance = Infinity;

    for (const candidate of candidates) {
      const distance = this.calculatePhoneticDistance(query, candidate);
      if (distance < bestDistance && distance <= 2) { // Seuil de tolérance
        bestDistance = distance;
        bestMatch = candidate;
      }
    }

    return bestMatch;
  }

  /**
   * Vérifie si deux termes sont phonétiquement similaires
   */
  arePhoneticallySimilar(term1: string, term2: string, threshold: number = 2): boolean {
    const distance = this.calculatePhoneticDistance(term1, term2);
    return distance <= threshold;
  }
}

export const arabicPhoneticMatcher = new ArabicPhoneticMatcher();