import { 
  getCategoriesByLanguage, 
  getFlattenedCategories, 
  findCategoryBySlug, 
  findCategoryById, 
  getCategoryPath, 
  getSubcategories, 
  searchCategories, 
  getPopularCategories, 
  getCategoryTree, 
  validateCategoryStructure, 
  getCategoryStats, 
  validateAllCategories 
} from '../categories';

// Mock category data for testing
const mockCategories = [
  {
    id: 'test-category-1',
    name: 'Test Category 1',
    slug: 'test-category-1',
    icon: 'Monitor',
    subcategories: [
      {
        id: 'test-subcategory-1',
        name: 'Test Subcategory 1',
        slug: 'test-subcategory-1',
        subcategories: []
      }
    ]
  },
  {
    id: 'test-category-2',
    name: 'Test Category 2',
    slug: 'test-category-2',
    subcategories: []
  }
];

// Mock the categoriesByLanguage function
jest.mock('../categories', () => ({
  categoriesByLanguage: {
    fr: mockCategories,
    en: mockCategories,
    de: mockCategories,
    es: mockCategories,
    ar: mockCategories
  }
}));

describe('Category Utilities', () => {
  describe('getCategoriesByLanguage', () => {
    it('should return categories for valid language', () => {
      const categories = getCategoriesByLanguage('fr');
      expect(categories).toEqual(mockCategories);
    });

    it('should return empty array for invalid language', () => {
      const categories = getCategoriesByLanguage('invalid' as any);
      expect(categories).toEqual([]);
    });
  });

  describe('getFlattenedCategories', () => {
    it('should flatten categories with correct levels', () => {
      const flattened = getFlattenedCategories('fr');
      
      expect(flattened).toHaveLength(3); // 2 main + 1 subcategory
      
      // Check main categories have level 0
      expect(flattened.find(cat => cat.id === 'test-category-1')?.level).toBe(0);
      expect(flattened.find(cat => cat.id === 'test-category-2')?.level).toBe(0);
      
      // Check subcategory has level 1
      expect(flattened.find(cat => cat.id === 'test-subcategory-1')?.level).toBe(1);
      
      // Check parent references
      expect(flattened.find(cat => cat.id === 'test-subcategory-1')?.parent).toBe('test-category-1');
    });
  });

  describe('findCategoryBySlug', () => {
    it('should find category by slug', () => {
      const category = findCategoryBySlug('test-category-1', 'fr');
      expect(category).toEqual(mockCategories[0]);
    });

    it('should return null for non-existent slug', () => {
      const category = findCategoryBySlug('non-existent', 'fr');
      expect(category).toBeNull();
    });
  });

  describe('findCategoryById', () => {
    it('should find category by ID', () => {
      const category = findCategoryById('test-category-1', 'fr');
      expect(category).toEqual(mockCategories[0]);
    });

    it('should return null for non-existent ID', () => {
      const category = findCategoryById('non-existent', 'fr');
      expect(category).toBeNull();
    });
  });

  describe('getCategoryPath', () => {
    it('should return correct path for subcategory', () => {
      const path = getCategoryPath('test-subcategory-1', 'fr');
      expect(path).toHaveLength(2);
      expect(path[0].id).toBe('test-category-1');
      expect(path[1].id).toBe('test-subcategory-1');
    });

    it('should return correct path for main category', () => {
      const path = getCategoryPath('test-category-1', 'fr');
      expect(path).toHaveLength(1);
      expect(path[0].id).toBe('test-category-1');
    });

    it('should return empty array for non-existent category', () => {
      const path = getCategoryPath('non-existent', 'fr');
      expect(path).toEqual([]);
    });
  });

  describe('getSubcategories', () => {
    it('should return subcategories for parent category', () => {
      const subcategories = getSubcategories('test-category-1', 'fr');
      expect(subcategories).toHaveLength(1);
      expect(subcategories[0].id).toBe('test-subcategory-1');
    });

    it('should return empty array for category without subcategories', () => {
      const subcategories = getSubcategories('test-category-2', 'fr');
      expect(subcategories).toEqual([]);
    });

    it('should return empty array for non-existent category', () => {
      const subcategories = getSubcategories('non-existent', 'fr');
      expect(subcategories).toEqual([]);
    });
  });

  describe('searchCategories', () => {
    it('should return categories matching name', () => {
      const results = searchCategories('Test Category 1', 'fr');
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('test-category-1');
    });

    it('should return categories matching slug', () => {
      const results = searchCategories('test-category-2', 'fr');
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('test-category-2');
    });

    it('should be case insensitive', () => {
      const results = searchCategories('test category', 'fr');
      expect(results).toHaveLength(2);
    });

    it('should return empty array for empty query', () => {
      const results = searchCategories('', 'fr');
      expect(results).toEqual([]);
    });
  });

  describe('getPopularCategories', () => {
    it('should return categories with icons', () => {
      const popular = getPopularCategories('fr', 10);
      expect(popular).toHaveLength(1);
      expect(popular[0].id).toBe('test-category-1');
    });

    it('should limit results', () => {
      const popular = getPopularCategories('fr', 0);
      expect(popular).toEqual([]);
    });
  });

  describe('getCategoryTree', () => {
    it('should return category tree structure', () => {
      const tree = getCategoryTree('fr');
      expect(tree).toEqual(mockCategories);
    });
  });

  describe('validateCategoryStructure', () => {
    it('should validate correct structure', () => {
      const isValid = validateCategoryStructure(mockCategories);
      expect(isValid).toBe(true);
    });

    it('should detect duplicate IDs', () => {
      const invalidCategories = [
        { id: 'duplicate', name: 'Category 1', slug: 'category-1' },
        { id: 'duplicate', name: 'Category 2', slug: 'category-2' }
      ];
      
      const isValid = validateCategoryStructure(invalidCategories);
      expect(isValid).toBe(false);
    });

    it('should detect invalid parent references', () => {
      const invalidCategories = [
        { id: 'parent', name: 'Parent', slug: 'parent' },
        { id: 'child', name: 'Child', slug: 'child', parent: 'non-existent' }
      ];
      
      const isValid = validateCategoryStructure(invalidCategories);
      expect(isValid).toBe(false);
    });
  });

  describe('getCategoryStats', () => {
    it('should return correct statistics', () => {
      const stats = getCategoryStats('fr');
      
      expect(stats.totalCategories).toBe(3); // 2 main + 1 subcategory
      expect(stats.maxDepth).toBe(1); // Level 1 for subcategory
      expect(stats.categoriesWithIcons).toBe(1); // Only test-category-1 has icon
      expect(stats.categoriesWithSubcategories).toBe(1); // Only test-category-1 has subcategories
    });
  });

  describe('validateAllCategories', () => {
    it('should validate all languages', () => {
      const isValid = validateAllCategories();
      expect(isValid).toBe(true);
    });
  });
});