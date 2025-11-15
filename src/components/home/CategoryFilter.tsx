
import { ExplorerCategory } from "@/data/categoryTypes";
import { otherCategories } from "@/data/categoryData";
import { iconMappingManager } from "@/data/categories/optimized/iconMappingManager";

const excludedCategories = [
  "billetterie", "nautisme", "collections", "art-antiquites", 
  "crypto-finances", "franchise-business", "loisirs-creatifs", 
  "sante-bien-etre-pro", "divers", "a-donner", "perdu-trouve",
  "immobilier-neuf", "informatique-pro", "emploi-carriere",
  "artisanat-produits-traditionnels",
  "avis-de-recherche-objets-perdus-trouves",
  "dons-dobjets",
  "communaute-echanges",
  "metier-reparateur"
];

// Hook pour filtrer et préparer les catégories avec limitation pour éviter un DOM excessif
export const useFilteredCategories = (limit?: number): ExplorerCategory[] => {
  const uniqueCategories = otherCategories.filter((cat, index, self) => 
    index === self.findIndex(c => c.slug === cat.slug)
  );
  
  const filteredCategories = uniqueCategories
    .filter(cat => !excludedCategories.includes(cat.slug))
    .map(cat => ({
      ...cat,
      imageUrl: iconMappingManager.getIconUrl(cat.slug) || cat.imageUrl 
    }));
    
  // Limiter le nombre de catégories pour réduire la taille du DOM
  return limit ? filteredCategories.slice(0, limit) : filteredCategories;
};
