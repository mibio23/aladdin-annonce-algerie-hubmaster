import React from "react";
import { MenuCategory, SubCategory, SubSubCategory } from "@/data/categoryTypes";

// Utilitaire pour créer une sous-catégorie
export const createSubCategory = (
  id: string,
  name: string,
  slug: string,
  icon?: React.ReactElement,
  subcategories: SubSubCategory[] = []
): SubCategory => ({
  id,
  name,
  slug,
  icon,
  subcategories,
});

// Utilitaire pour créer une sous-sous-catégorie
export const createSubSubCategory = (
  id: string,
  name: string,
  slug: string,
  icon?: React.ReactElement
): SubSubCategory => ({
  id,
  name,
  slug,
  icon,
});

// Utilitaire pour créer une catégorie de menu
export const createMenuCategory = (
  id: string,
  name: string,
  slug: string,
  icon: React.ReactElement,
  subcategories: SubCategory[],
  description?: string,
  href?: string
): MenuCategory => ({
  id,
  name,
  slug,
  icon,
  subcategories,
  description,
  href,
});

// Utilitaire pour créer des catégories de marques
export const createBrandCategories = (brands: string[]): SubSubCategory[] => {
  return brands.map(brand => createSubSubCategory(
    brand.toLowerCase().replace(/\s+/g, '-'),
    brand,
    brand.toLowerCase().replace(/\s+/g, '-')
  ));
};

// Utilitaire pour grouper des catégories
export const groupCategories = (...groups: MenuCategory[][]): MenuCategory[] => {
  return groups.flat();
};