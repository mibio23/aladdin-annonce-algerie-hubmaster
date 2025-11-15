
import { MenuCategory } from "@/data/categoryTypes";

// Fonction utilitaire pour filtrer les doublons de catégories par slug
export function uniqBySlug(categories: MenuCategory[]): MenuCategory[] {
  const seen = new Set();
  return categories.filter(cat => {
    if (seen.has(cat.slug)) return false;
    seen.add(cat.slug);
    return true;
  });
}

// Fonction utilitaire pour grouper les catégories en listes de taille définie
export function groupCategoriesForList(categories: MenuCategory[], size: number = 6): MenuCategory[][] {
  const groups = [];
  for (let i = 0; i < categories.length; i += size) {
    groups.push(categories.slice(i, i + size));
  }
  return groups;
}

// Hook personnalisé pour la gestion du groupement de catégories
export const useCategoryGrouping = (categories: MenuCategory[]) => {
  const displayedCategories = uniqBySlug(categories);
  const groups = groupCategoriesForList(displayedCategories);

  // Splitter les groupes en deux colonnes de taille aussi égale que possible
  const middle = Math.ceil(groups.length / 2);
  const leftGroups = groups.slice(0, middle);
  const rightGroups = groups.slice(middle);

  return {
    displayedCategories,
    groups,
    leftGroups,
    rightGroups
  };
};
