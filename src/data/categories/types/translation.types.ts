import { CategoryTranslations } from './category.types';

export type SupportedLanguage = keyof CategoryTranslations;

export interface TranslationNamespace {
  [key: string]: string | TranslationNamespace;
}

export interface TranslationData {
  categories: TranslationNamespace;
  common: TranslationNamespace;
  errors: TranslationNamespace;
}

export interface TranslationOptions {
  fallback?: boolean;
  fallbackLanguage?: SupportedLanguage;
  interpolate?: Record<string, string>;
}

export interface TranslationFunction {
  (key: string, options?: TranslationOptions): string;
}

export interface TranslationContext {
  language: SupportedLanguage;
  namespace: string;
  translations: TranslationData;
}