export interface CategoryTranslations {
  fr: string;
  ar: string;
  en: string;
  de: string;
  es: string;
  it: string;
}

export interface CategoryBase {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface Category extends CategoryBase {
  translations?: Partial<CategoryTranslations>;
  subcategories?: Category[];
  level: number; // 0, 1, 2 pour hiérarchie
  parentId?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface CategoryTree {
  [key: string]: Category;
}

export interface CategoryModule {
  id: string;
  name: string;
  categories: Category[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface CategorySearchOptions {
  query?: string;
  level?: number;
  parentId?: string;
  isActive?: boolean;
  limit?: number;
  offset?: number;
}

export interface CategoryBreadcrumb {
  id: string;
  name: string;
  slug: string;
  level: number;
}