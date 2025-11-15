import { SupportedLanguage } from '../types';

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['fr', 'ar', 'en', 'de', 'es', 'it'];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'fr';

export const MAX_CATEGORY_LEVEL = 2;

export const CATEGORY_LEVELS = {
  ROOT: 0,
  SUBCATEGORY: 1,
  SUBSUBCATEGORY: 2,
} as const;

export const CATEGORY_STATUS = {
  ACTIVE: true,
  INACTIVE: false,
} as const;

export const ICON_SIZES = {
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
} as const;

export const SEARCH_LIMITS = {
  DEFAULT: 20,
  MAX: 100,
} as const;

export const CATEGORY_METADATA_KEYS = {
  MODULE: 'module',
  LAST_UPDATED: 'lastUpdated',
  VERSION: 'version',
  FEATURED: 'featured',
  POPULARITY: 'popularity',
} as const;

export const TRANSLATION_NAMESPACES = {
  CATEGORIES: 'categories',
  COMMON: 'common',
  ERRORS: 'errors',
} as const;