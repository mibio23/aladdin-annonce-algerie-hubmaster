/**
 * Utilitaires pour la gestion de la direction du texte multilingue
 */

/**
 * Détecte si un texte contient principalement des caractères RTL (Right-to-Left)
 * @param text Le texte à analyser
 * @returns true si le texte est principalement RTL, false sinon
 */
export function isTextRTL(text: string): boolean {
  if (!text) return false;
  
  // Expressions régulières pour détecter les caractères RTL
  const rtlChars = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const ltrChars = /[A-Za-z]/;
  
  // Compter les caractères RTL et LTR
  const rtlMatches = text.match(rtlChars);
  const ltrMatches = text.match(ltrChars);
  
  const rtlCount = rtlMatches ? rtlMatches.length : 0;
  const ltrCount = ltrMatches ? ltrMatches.length : 0;
  
  // Si le texte contient plus de caractères RTL que LTR, considérer comme RTL
  return rtlCount > ltrCount;
}

/**
 * Détermine la direction CSS appropriée pour un élément de texte
 * @param text Le texte à analyser
 * @returns 'rtl' ou 'ltr'
 */
export function getTextDirection(text: string): 'rtl' | 'ltr' {
  return isTextRTL(text) ? 'rtl' : 'ltr';
}

/**
 * Détecte les langues présentes dans un texte
 * @param text Le texte à analyser
 * @returns Un tableau des codes de langue détectés
 */
export function detectLanguages(text: string): string[] {
  if (!text) return [];
  
  const languages: string[] = [];
  
  // Détection de l'arabe
  if (/[\u0600-\u06FF]/.test(text)) {
    languages.push('ar');
  }
  
  // Détection du français
  if (/[àâäéèêëïîôöùûüÿç]/.test(text) || /\b(le|la|les|de|du|des|et|est|dans|pour|avec|sur|par|que|qui|quoi|où|quand|comment|pourquoi)\b/i.test(text)) {
    languages.push('fr');
  }
  
  // Détection de l'anglais
  if (/\b(the|and|is|in|to|of|a|that|it|with|for|as|on|be|at|one|have|this|from|or|had|by|hot|but|some|what|there|we|can|out|other|were|all|there|when|up|use|your|how|said|each|she)\b/i.test(text)) {
    languages.push('en');
  }
  
  // Détection de l'espagnol
  if (/[ñáéíóúü]/.test(text) || /\b(el|la|los|las|de|del|y|en|un|una|con|por|para|como|está|son|han|ha|me|te|se|nos|os|sus|mi|tu|su|nuestro|nuestra)\b/i.test(text)) {
    languages.push('es');
  }
  
  // Détection de l'allemand
  if (/[äöüß]/.test(text) || /\b(der|die|das|und|ist|in|zu|den|von|mit|sich|des|auf|für|dem|das|nicht|ein|eine|als|auch|es|an|werden|aus|hat|dass|sie|nach|wird|bei|einer|um|am)\b/i.test(text)) {
    languages.push('de');
  }
  
  return [...new Set(languages)]; // Éliminer les doublons
}

/**
 * Formate un texte multilingue avec les attributs HTML appropriés
 * @param text Le texte à formater
 * @returns Un objet avec les attributs CSS et HTML appropriés
 */
export function formatMultilingualText(text: string) {
  const direction = getTextDirection(text);
  const languages = detectLanguages(text);
  
  return {
    style: { direction, textAlign: direction === 'rtl' ? 'right' : 'left' },
    dir: direction,
    lang: languages[0] || undefined,
    className: direction === 'rtl' ? 'text-right' : 'text-left',
    detectedLanguages: languages
  };
}