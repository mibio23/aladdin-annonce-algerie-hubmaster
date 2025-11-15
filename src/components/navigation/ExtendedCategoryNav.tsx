
// Composant de navigation pour les catégories étendues
// Navigation avec support pour les sous-catégories et sous-sous-catégories
// Généré le: 2025-10-22T12:37:07.166Z

import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useExtendedCategories } from '@/services/extendedCategories/extendedCategoriesService';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

interface ExtendedCategoryNavProps {
  className?: string;
  maxDepth?: number;
}

const ExtendedCategoryNav: React.FC<ExtendedCategoryNavProps> = ({ 
  className = '', 
  maxDepth = 3 
}) => {
  const { language } = useSafeI18nWithRouter();
  const location = useLocation();
  const { extendedCategories } = useExtendedCategories();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState<Set<string>>(new Set());
  
  // Fonction pour basculer l'expansion d'une catégorie
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };
  
  // Fonction pour basculer l'expansion d'une sous-catégorie
  const toggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(subcategoryId)) {
        newSet.delete(subcategoryId);
      } else {
        newSet.add(subcategoryId);
      }
      return newSet;
    });
  };
  
  // Vérifier si un élément est actif
  const isActive = (slug: string) => {
    return location.pathname.includes(slug);
  };
  
  return (
    <nav className={`extended-category-nav ${className}`}>
      <ul className="space-y-2">
        {extendedCategories.map(category => {
          const isExpanded = expandedCategories.has(category.id);
          const isCategoryActive = isActive(category.slug);
          
          return (
            <li key={category.id} className="category-item">
              <div 
                className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${isCategoryActive ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center space-x-2">
                  {category.icon && React.isValidElement(category.icon) ? (
                    <span className="w-4 h-4 flex items-center justify-center">{category.icon}</span>
                  ) : null}
                  <Link
                    to={`/categories/${category.slug}`}
                    className={`font-medium ${isCategoryActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {category.name}
                  </Link>
                </div>
                {category.subcategories.length > 0 && (
                  <button className="p-1">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                )}
              </div>
              
              {isExpanded && category.subcategories.length > 0 && (
                <ul className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map(subcategory => {
                    const isSubExpanded = expandedSubcategories.has(subcategory.id);
                    const isSubActive = isActive(subcategory.slug);
                    
                    return (
                      <li key={subcategory.id} className="subcategory-item">
                        <div 
                          className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 ${isSubActive ? 'bg-gray-50 dark:bg-gray-900' : ''}`}
                          onClick={() => toggleSubcategory(subcategory.id)}
                        >
                          <div className="flex items-center space-x-2">
                            {subcategory.icon && React.isValidElement(subcategory.icon) ? (
                              <span className="w-4 h-4 flex items-center justify-center">{subcategory.icon}</span>
                            ) : null}
                            <Link
                              to={`/categories/${category.slug}/${subcategory.slug}`}
                              className={`text-sm ${isSubActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {subcategory.name}
                            </Link>
                          </div>
                          {subcategory.subcategories.length > 0 && (
                            <button className="p-1">
                              {isSubExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                            </button>
                          )}
                        </div>
                        
                        {isSubExpanded && subcategory.subcategories.length > 0 && maxDepth >= 3 && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {subcategory.subcategories.map(subsubcategory => (
                              <li key={subsubcategory.id} className="subsubcategory-item">
                                <Link
                                  to={`/categories/${category.slug}/${subcategory.slug}/${subsubcategory.slug}`}
                                  className={`flex items-center space-x-2 p-2 rounded text-xs hover:bg-gray-50 dark:hover:bg-gray-900 ${isActive(subsubcategory.slug) ? 'bg-gray-50 dark:bg-gray-900 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-500'}`}
                                >
                                  {subsubcategory.icon && React.isValidElement(subsubcategory.icon) ? (
                                    <span className="w-4 h-4 flex items-center justify-center">{subsubcategory.icon}</span>
                                  ) : null}
                                  <span>{subsubcategory.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ExtendedCategoryNav;
