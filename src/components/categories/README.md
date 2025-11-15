# Category Management System for Aladdin Annonce Algérie Hub

This directory contains a comprehensive category management system that supports 27 main categories in 5 languages (Arabic, French, English, German, and Spanish) with full RTL support for Arabic.

## Components Overview

### Core Components

#### CategoryProvider
A React context provider that manages category state across the application.

**Features:**
- Language switching between 5 languages
- Category selection and navigation
- Search functionality
- Loading states
- Category path (breadcrumb) generation

**Usage:**
```tsx
import { CategoryProvider, useCategories } from '@/components/categories';

function App() {
  return (
    <CategoryProvider initialLanguage="fr" initialCategorySlug="informatique-electronique">
      <YourApp />
    </CategoryProvider>
  );
}

function YourComponent() {
  const { 
    language, 
    categories, 
    selectedCategory, 
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading 
  } = useCategories();
  
  // Use category data...
}
```

#### CategoryNavigation
A responsive navigation component with search and category tree display.

**Features:**
- Search bar with real-time results
- Popular categories grid with icons
- Expandable category tree
- Mobile-responsive design
- RTL support for Arabic

**Props:**
- `className?: string` - Additional CSS classes
- `showSearch?: boolean` - Show/hide search bar (default: true)
- `maxVisibleCategories?: number` - Max categories in grid (default: 12)

#### CategoryBreadcrumb
Breadcrumb navigation component showing the current category path.

**Features:**
- Automatic path generation from selected category
- Home link option
- Custom separator support
- RTL support

**Props:**
- `className?: string` - Additional CSS classes
- `showHome?: boolean` - Show home link (default: true)
- `separator?: React.ReactNode` - Custom separator (default: ChevronRight)

#### CategorySelector
Dropdown selector for choosing categories, ideal for forms.

**Features:**
- Search within dropdown
- Hierarchical display
- Keyboard navigation
- Clear selection option
- RTL support

**Props:**
- `value?: string` - Selected category ID
- `onChange: (categoryId: string, categorySlug: string) => void` - Change handler
- `placeholder?: string` - Custom placeholder
- `className?: string` - Additional CSS classes
- `disabled?: boolean` - Disable selector
- `showSubcategories?: boolean` - Show subcategories (default: true)
- `maxDepth?: number` - Maximum depth to show (default: 3)

#### CategoryIcon
Consistent icon display component with dynamic loading.

**Features:**
- Dynamic Lucide icon loading
- Fallback icon for missing icons
- Multiple size options
- Icon cache for performance

**Props:**
- `name?: string` - Icon name from Lucide
- `size?: 'sm' | 'md' | 'lg' | 'xl'` - Icon size (default: 'md')
- `className?: string` - Additional CSS classes
- `fallback?: React.ReactNode` - Custom fallback

#### CategoryIcons
Predefined icon components for common categories:
```tsx
import { CategoryIcons } from '@/components/categories';

<CategoryIcons.Monitor size="lg" />
<CategoryIcons.Car size="md" />
<CategoryIcons.Home size="sm" />
```

#### LanguageSwitcher
Language selection component with flag display.

**Features:**
- 5 language support (Arabic, French, English, German, Spanish)
- Flag emojis
- Native language names
- RTL/LTR direction handling
- Document direction updates

#### CategoryStats
Statistics display for category data.

**Features:**
- Total categories count
- Maximum depth calculation
- Icon coverage percentage
- Subcategory coverage
- Compact and detailed views
- Localized number formatting

**Props:**
- `className?: string` - Additional CSS classes
- `showDetails?: boolean` - Show detailed stats (default: true)
- `compact?: boolean` - Compact view (default: false)

#### CategoryPage
Complete category page with listings, filters, and navigation.

**Features:**
- Breadcrumb navigation
- Category information display
- Subcategory filtering
- Sort options
- Grid/List view toggle
- Language switcher
- Statistics display

**Props:**
- `categorySlug: string` - Category slug from URL
- `className?: string` - Additional CSS classes
- `showFilters?: boolean` - Show filters (default: true)
- `showStats?: boolean` - Show statistics (default: true)
- `showLanguageSwitcher?: boolean` - Show language switcher (default: true)

## Data Structure

### Category Interface
```tsx
interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  subcategories?: Category[];
  level?: number;
  parent?: string;
}
```

### Language Support
The system supports 5 languages:
- `ar` - Arabic (RTL)
- `fr` - French
- `en` - English
- `de` - German
- `es` - Spanish

### Category Data Files
Category data is stored in separate files for each language:
- `src/data/categories/main27CategoriesAr.ts` - Arabic
- `src/data/categories/main27CategoriesFr.ts` - French
- `src/data/categories/main27CategoriesEn.ts` - English
- `src/data/categories/main27CategoriesDe.ts` - German
- `src/data/categories/main27CategoriesEs.ts` - Spanish

## Utility Functions

### Core Functions
- `getCategoriesByLanguage(language)` - Get categories for specific language
- `getFlattenedCategories(language)` - Get flattened category list
- `findCategoryBySlug(slug, language)` - Find category by slug
- `findCategoryById(id, language)` - Find category by ID
- `getCategoryPath(categoryId, language)` - Get breadcrumb path
- `getSubcategories(categoryId, language)` - Get subcategories
- `searchCategories(query, language)` - Search categories
- `getPopularCategories(language, limit)` - Get popular categories
- `getCategoryTree(language)` - Get category tree structure
- `validateCategoryStructure(categories)` - Validate category structure
- `getCategoryStats(language)` - Get category statistics
- `validateAllCategories()` - Validate all language categories

## Implementation Examples

### Basic Category Navigation
```tsx
import { CategoryProvider, CategoryNavigation } from '@/components/categories';

function Layout({ children }) {
  return (
    <CategoryProvider>
      <div className="min-h-screen">
        <header>
          <CategoryNavigation />
        </header>
        <main>
          {children}
        </main>
      </div>
    </CategoryProvider>
  );
}
```

### Category Page with Filters
```tsx
import { CategoryProvider, CategoryPage } from '@/components/categories';

export default function CategoryPageWrapper({ params }) {
  return (
    <CategoryProvider initialCategorySlug={params.slug}>
      <CategoryPage 
        categorySlug={params.slug}
        showFilters={true}
        showStats={true}
      />
    </CategoryProvider>
  );
}
```

### Form with Category Selector
```tsx
import { CategoryProvider, CategorySelector } from '@/components/categories';

function AdPostForm() {
  const [categoryId, setCategoryId] = useState('');
  
  return (
    <CategoryProvider>
      <form>
        <div className="mb-4">
          <label htmlFor="category">Category</label>
          <CategorySelector
            value={categoryId}
            onChange={(id, slug) => setCategoryId(id)}
            placeholder="Select a category"
          />
        </div>
        {/* Other form fields... */}
      </form>
    </CategoryProvider>
  );
}
```

## Styling Considerations

### RTL Support
All components properly handle RTL (right-to-left) for Arabic:
- Text alignment switches based on language
- Icon positioning adjusts for RTL
- Layout direction changes dynamically

### Responsive Design
Components are fully responsive:
- Mobile-first approach
- Collapsible navigation on mobile
- Touch-friendly interactions

### Dark Mode
All components support dark mode:
- Proper color contrast
- Dark mode class integration
- Smooth transitions

## Performance Optimizations

### Icon Caching
Icons are dynamically loaded and cached to prevent duplicate imports.

### Category Flattening
Categories are flattened once per language and cached for quick lookups.

### Search Optimization
Search is debounced and uses efficient string matching.

## Accessibility

### ARIA Labels
All interactive elements have proper ARIA labels:
- `aria-label` for navigation
- `aria-expanded` for dropdowns
- `aria-selected` for options
- `role` attributes for semantic HTML

### Keyboard Navigation
Full keyboard navigation support:
- Tab navigation
- Arrow keys for dropdowns
- Enter to select
- Escape to close

### Screen Reader Support
Components are optimized for screen readers:
- Semantic HTML structure
- Descriptive text
- Focus management

## Browser Compatibility

The category system is compatible with:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Accessibility tools (JAWS, NVDA)

## Future Enhancements

Potential improvements to consider:
1. Server-side category loading
2. Category analytics tracking
3. Advanced filtering options
4. Category favorites
5. Recent category history
6. Category comparison tools
7. Bulk category operations
8. Category import/export
9. API integration for dynamic categories
10. Category permission management