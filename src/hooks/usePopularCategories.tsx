
import React from "react";
import { useCategories } from "@/services/supabaseCategoriesService";
import { ExplorerCategory, MenuCategory } from "@/data/categoryTypes";
import { iconMappingManager } from "@/data/categories/optimized/iconMappingManager";
import { Image as ImageIcon } from "lucide-react";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

// On construit dynamiquement la liste des catégories à afficher
function uniqBySlug(arr: any[]) {
  const seen = new Set();
  return arr.filter((cat) => {
    if (seen.has(cat.slug)) return false;
    seen.add(cat.slug);
    return true;
  });
}

export const usePopularCategories = () => {
  const { language } = useSafeI18nWithRouter();
  const { data: categories = [], isLoading } = useCategories(language);

  // Transformer les catégories de Supabase en ExplorerCategory
  const explorerCategories: ExplorerCategory[] = categories
    .map((cat: MenuCategory) => {
      // Utiliser d'abord le mapping des nouvelles images téléchargées
      let imageUrl = iconMappingManager.getIconUrl(cat.slug);
      
      // Si pas d'image dans le mapping, utiliser les images par défaut selon certains slugs
      if (!imageUrl) {
        if (cat.slug === "meubles") imageUrl = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc";
        else if (cat.slug === "maison-mobilier-electromenager") imageUrl = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc";
        else if (cat.slug === "decoration") imageUrl = "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15";
        else if (cat.slug === "jeux-video-consoles") imageUrl = "https://images.unsplash.com/photo-1580327332925-a6a2a5b11baa";
        else if (cat.slug === "informatique") imageUrl = "https://images.unsplash.com/photo-1517430818847-5569f32d6df1";
        else if (cat.slug === "telephonie") imageUrl = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9";
        else if (cat.slug === "image-son") imageUrl = "https://images.unsplash.com/photo-1596468427678-4a5a68237ed1";
        else if (cat.slug === "vehicules") imageUrl = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d";
        else if (cat.slug === "immobilier") imageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2";
        else imageUrl = `https://picsum.photos/seed/${cat.slug}/80/80`;
      }

      return {
        ...cat,
        icon: cat.icon || React.createElement(ImageIcon, { className: "h-5 w-5 text-gray-400" }),
        imageUrl: imageUrl,
      } as ExplorerCategory;
    })
    // Filtrer seulement les catégories qui ont des annonces ou permettre l'affichage même sans annonces
    .filter(() => {
      // Permettre l'affichage de toutes les catégories principales
      return true;
    });

  return explorerCategories;
};
