import { Image } from "lucide-react"; // Fallback icon
import { ExplorerCategory } from "../categoryTypes";
import { categoryMenu } from "../menuStructureData";
import { popularCategories } from "./popularCategories";
import { mediumPopularCategories } from "./mediumPopularCategories";
import { iconMappingManager } from "../categories/optimized/iconMappingManager";

// Slugs for categories handled by "PopularSearchedAnnouncementsSection"
// This list should match targetSlugs in PopularSearchedAnnouncementsSection.tsx
const popularSearchedSlugs = [
  "immobilier", "vehicules", "accessoires-auto-moto", "informatique", "telephonie",
  "image-son", "photo-cameras-pro", "audio-pro-studio", "electromenager",
  "accessoires-maison", "meubles", "decoration", "materiel-scolaire", "materiel-bureau",
  "btp-construction", "transport", "securite-domotique", "jardinage-bricolage",
  "energie-environnement", "beaute-bien-etre", "vetements-femme", "vetements-homme",
  "vetements-traditionnels-orientaux", "vetements-enfant-bebe", "nautisme",
  "sports-loisirs", "evenementiel", "jeux-jouets", "jeux-video-consoles",
  "livres-films-musique", "services", "emploi", "tourisme-vacances",
  "artisanat-produits-traditionnels", "agroalimentaire", "parapharmacie",
  "franchise-business", "billetterie", "animaux"
];

// Slugs for categories handled by "CategorizedAnnouncementsSection" (Autres Annonces par catégorie)
const otherSpecificSlugs = ["perdu-trouve", "a-donner", "divers"];

export const otherCategories: ExplorerCategory[] = categoryMenu
  .filter(cat => {
    const isPopular = popularCategories.some(p => p.slug === cat.slug);
    const isMediumPopular = mediumPopularCategories.some(m => m.slug === cat.slug);
    const isPopularSearched = popularSearchedSlugs.includes(cat.slug);
    const isOtherSpecific = otherSpecificSlugs.includes(cat.slug);
    
    // Keep if not in any of the specifically handled groups
    return !isPopular && !isMediumPopular && !isPopularSearched && !isOtherSpecific;
  })
  .map(cat => ({
    ...cat,
    imageUrl: iconMappingManager.getIconUrl(cat.slug) || `https://picsum.photos/seed/${cat.slug}/80/80`,
    icon: cat.icon || <Image className="h-5 w-5 text-gray-400" />
  })).filter(Boolean) as ExplorerCategory[];
