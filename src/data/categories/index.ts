// Export principal pour le système de catégories refactorisé

// Types et interfaces
export * from './types';

// Constantes
export * from './constants';

// Traductions
export * from './translations';

// Icônes
export * from './icons';

// Utilitaires
export * from './utils';

// Catégories étendues (refactorisées)
export { refactoredCategories } from './refactoredCategories';

// Export par défaut pour compatibilité
export { refactoredCategories as default } from './refactoredCategories';