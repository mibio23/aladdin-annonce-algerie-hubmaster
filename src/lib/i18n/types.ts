// Translation system types for type safety and auto-completion

export type Language = 'fr' | 'ar' | 'en' | 'de' | 'es' | 'it';

// Base search translations interface
export interface SearchTranslations {
  placeholder: string;
  placeholderWithLocation: string;
  placeholderConversational: string;
  submit: string;
  filters: {
    category: string;
    location: string;
    price: string;
    condition: string;
  };
  labels: {
    history: string;
    suggestion: string;
    trending: string;
    category: string;
    keyword: string;
    userInput: string;
  };
  tip: string;
  noResults: string;
  searchHistory: string;
  clearHistory: string;
}

// Common translations interface
export interface CommonTranslations {
  home: string;
  search: string;
  login: string;
  logout: string;
  register: string;
  save: string;
  cancel: string;
  delete: string;
  edit: string;
  view: string;
  viewMore: string;
  back: string;
  next: string;
  previous: string;
  loading: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  new: string;
  used: string;
  available: string;
  unavailable: string;
  active: string;
  inactive: string;
  pending: string;
  approved: string;
  rejected: string;
  price: string;
  free: string;
  currency: string;
  today: string;
  yesterday: string;
  thisWeek: string;
  thisMonth: string;
  year: string;
  month: string;
  week: string;
  day: string;
  hour: string;
  minute: string;
}

// Auth translations interface
export interface AuthTranslations {
  signIn: string;
  signUp: string;
  signOut: string;
  email: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  rememberMe: string;
  createAccount: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  resetPassword: string;
  sendResetLink: string;
  backToLogin: string;
}

// Reviews translations interface
export interface ReviewsTranslations {
  title: string;
  writeReview: string;
  rating: string;
  comment: string;
  submit: string;
  helpful: string;
  notHelpful: string;
  reportReview: string;
  noReviews: string;
  averageRating: string;
  totalReviews: string;
}

// Main translation object interface
export interface TranslationObject extends 
  CommonTranslations,
  Partial<SearchTranslations> {
  // Search specific keys
  for?: string;
  searchResults?: string;
  searchFor?: string;
  searchResultsfor?: string;
  announcementFound?: string;
  announcementsFound?: string;
  createAlert?: string;
  activeFilter?: string;
  activeFilters?: string;
  
  // Nested objects
  reviews?: ReviewsTranslations;
  
  // Dynamic keys for advanced search
  [key: string]: any;
}

// Context type
export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

// Validation types
export interface ValidationResult {
  issues: number;
  usedKeys: number;
  languages: number;
  missingKeys: string[];
  duplicateKeys: string[];
}

export interface LanguageValidation {
  language: Language;
  hasRequiredFiles: boolean;
  missingFiles: string[];
  duplicateKeys: string[];
  unusedKeys: string[];
}