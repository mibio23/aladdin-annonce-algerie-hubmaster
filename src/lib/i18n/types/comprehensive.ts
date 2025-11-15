// Comprehensive type definitions for all translation domains
export type Language = 'fr' | 'ar' | 'en' | 'de' | 'es' | 'it';

// Auth domain translations
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
  welcomeBack: string;
  createYourAccount: string;
  enterEmail: string;
  enterPassword: string;
  confirmNewPassword: string;
  loginSuccess: string;
  signupSuccess: string;
  invalidCredentials: string;
  passwordMismatch: string;
  weakPassword: string;
  emailAlreadyExists: string;
  resetEmailSent: string;
}

// Search domain translations
export interface SearchTranslations {
  placeholder: string;
  placeholderWithLocation: string;
  placeholderConversational: string;
  submit: string;
  searchResults: string;
  searchFor: string;
  noResults: string;
  searchHistory: string;
  clearHistory: string;
  filters: {
    category: string;
    location: string;
    price: string;
    condition: string;
    distance: string;
    sortBy: string;
  };
  labels: {
    history: string;
    suggestion: string;
    trending: string;
    category: string;
    keyword: string;
    userInput: string;
    location: string;
    price: string;
  };
  advanced: {
    title: string;
    filters: string;
    category: string;
    subcategory: string;
    priceRange: string;
    condition: string;
    location: string;
    distance: string;
    distanceMax: string;
    keywords: string;
    sortBy: string;
    datePosted: string;
    reset: string;
    apply: string;
  };
  sorting: {
    relevant: string;
    newest: string;
    oldest: string;
    priceAsc: string;
    priceDesc: string;
    distance: string;
  };
  suggestions: {
    history: string;
    trending: string;
    categories: string;
    locations: string;
    smart: string;
  };
}

// Navigation domain translations
export interface NavigationTranslations {
  home: string;
  search: string;
  categories: string;
  favorites: string;
  messages: string;
  profile: string;
  settings: string;
  help: string;
  about: string;
  contact: string;
  terms: string;
  privacy: string;
  announcements: string;
  myAccount: string;
  dashboard: string;
  notifications: string;
  language: string;
  theme: string;
  logout: string;
}

// Categories domain translations
export interface CategoriesTranslations {
  all: string;
  vehicles: string;
  realEstate: string;
  electronics: string;
  fashion: string;
  home: string;
  sports: string;
  books: string;
  services: string;
  jobs: string;
  [key: string]: string;
}

// Announcements domain translations
export interface AnnouncementsTranslations {
  title: string;
  description: string;
  price: string;
  location: string;
  contact: string;
  images: string;
  category: string;
  condition: string;
  datePosted: string;
  edit: string;
  delete: string;
  share: string;
  report: string;
  favorite: string;
  view: string;
  details: string;
  seller: string;
  sellerProfile: string;
  contactSeller: string;
  sendMessage: string;
  makeOffer: string;
  negotiable: string;
  fixed: string;
  new: string;
  used: string;
  excellent: string;
  good: string;
  fair: string;
  poor: string;
}

// Reviews domain translations
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
  stars: string;
  verified: string;
  anonymous: string;
  recommended: string;
  wouldBuyAgain: string;
}

// User Menu domain translations
export interface UserMenuTranslations {
  myProfile: string;
  myAnnouncements: string;
  myFavorites: string;
  myMessages: string;
  accountSettings: string;
  paymentMethods: string;
  transactionHistory: string;
  savedSearches: string;
  notifications: string;
  helpCenter: string;
  reportProblem: string;
  logout: string;
  deleteAccount: string;
  privacy: string;
  security: string;
  language: string;
  theme: string;
}

// Profile domain translations
export interface ProfileTranslations {
  editProfile: string;
  personalInfo: string;
  contactInfo: string;
  preferences: string;
  verification: string;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  region: string;
  country: string;
  postalCode: string;
  avatar: string;
  coverPhoto: string;
  joinedDate: string;
  lastActive: string;
  verified: string;
  ratings: string;
  reviews: string;
  totalAnnouncements: string;
  activeAnnouncements: string;
  soldItems: string;
  memberSince: string;
}

// Common domain translations
export interface CommonTranslations {
  // Actions
  save: string;
  cancel: string;
  delete: string;
  edit: string;
  view: string;
  viewMore: string;
  back: string;
  next: string;
  previous: string;
  submit: string;
  confirm: string;
  close: string;
  open: string;
  
  // States
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
  
  // Units and measures
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
  
  // General
  yes: string;
  no: string;
  maybe: string;
  ok: string;
  all: string;
  none: string;
  other: string;
  unknown: string;
  optional: string;
  required: string;
  recommended: string;
}

// PWA domain translations
export interface PWATranslations {
  installApp: string;
  addToHomeScreen: string;
  offlineMode: string;
  updateAvailable: string;
  installPrompt: string;
  laterButton: string;
  installButton: string;
  updateButton: string;
  refreshButton: string;
  offlineMessage: string;
  connectionRestored: string;
}

// Intelligent Assistant domain translations
export interface IntelligentAssistantTranslations {
  title: string;
  placeholder: string;
  thinking: string;
  analyzing: string;
  suggestions: string;
  recommendations: string;
  smartSearch: string;
  voiceSearch: string;
  imageSearch: string;
  conversationalSearch: string;
  aiPowered: string;
  getStarted: string;
  examples: string;
  tips: string;
  settings: string;
  feedback: string;
}

// Hero section translations
export interface HeroTranslations {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  ctaButton: string;
  secondaryButton: string;
  featuredCategories: string;
  popularSearches: string;
  trustBadge: string;
  statisticsLabel: string;
}

// Footer translations
export interface FooterTranslations {
  aboutUs: string;
  contactUs: string;
  help: string;
  privacy: string;
  terms: string;
  sitemap: string;
  followUs: string;
  newsletter: string;
  subscribe: string;
  copyright: string;
  allRightsReserved: string;
  quickLinks: string;
  support: string;
  legal: string;
  social: string;
}

// Statistics translations
export interface StatsTranslations {
  totalUsers: string;
  totalAnnouncements: string;
  successfulTransactions: string;
  satisfaction: string;
  averageRating: string;
  responseTime: string;
  dailyVisitors: string;
  monthlyGrowth: string;
}

// Notifications translations
export interface NotificationsTranslations {
  title: string;
  markAllRead: string;
  noNotifications: string;
  newMessage: string;
  newReview: string;
  priceAlert: string;
  favoriteUpdated: string;
  accountUpdate: string;
  systemNotification: string;
  securityAlert: string;
  paymentNotification: string;
  reminderNotification: string;
  settings: string;
}

// Banner translations
export interface BannerTranslations {
  welcome: string;
  announcement: string;
  promotion: string;
  update: string;
  maintenance: string;
  alert: string;
  info: string;
  warning: string;
  success: string;
  error: string;
  close: string;
  learnMore: string;
  dismiss: string;
}

// Main comprehensive translation interface
export interface ComprehensiveTranslations extends CommonTranslations {
  auth: AuthTranslations;
  search: SearchTranslations;
  navigation: NavigationTranslations;
  categories: CategoriesTranslations;
  announcements: AnnouncementsTranslations;
  reviews: ReviewsTranslations;
  userMenu: UserMenuTranslations;
  profile: ProfileTranslations;
  pwa: PWATranslations;
  intelligentAssistant: IntelligentAssistantTranslations;
  hero: HeroTranslations;
  footer: FooterTranslations;
  stats: StatsTranslations;
  notifications: NotificationsTranslations;
  banner: BannerTranslations;
  
  // Dynamic keys for flexibility
  [key: string]: any;
}

// Context type with enhanced features
export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isRTL: boolean;
  isLoading: boolean;
  hasTranslation: (key: string) => boolean;
  getAvailableLanguages: () => Language[];
  getFallbackChain: () => Language[];
  getMissingTranslations: () => { key: string; languages: Language[] }[];
}

// Validation and reporting types
export interface ValidationResult {
  totalKeys: number;
  translatedKeys: number;
  missingKeys: string[];
  coverage: number;
  issues: ValidationIssue[];
}

export interface ValidationIssue {
  type: 'missing' | 'empty' | 'invalid' | 'deprecated';
  key: string;
  language?: Language;
  message: string;
  severity: 'error' | 'warning' | 'info';
}

export interface TranslationMetrics {
  totalKeys: number;
  coverage: Record<Language, number>;
  missingByLanguage: Record<Language, string[]>;
  lastUpdated: Date;
  domains: Record<string, ValidationResult>;
}

// Development and tooling types
export interface TranslationTools {
  validate: () => ValidationResult;
  export: (language: Language) => Record<string, any>;
  import: (language: Language, data: Record<string, any>) => void;
  sync: () => Promise<void>;
  generateTypes: () => string;
  audit: () => TranslationMetrics;
}