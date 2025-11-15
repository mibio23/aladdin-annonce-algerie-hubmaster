import { Image } from "lucide-react"; // Fallback icon
import { ExplorerCategory } from "../categoryTypes";
import { categoryMenu } from "../menuStructureData";
import { iconMappingManager } from "../categories/optimized/iconMappingManager";

export const popularCategories: ExplorerCategory[] = [
  "immobilier", "vehicules", "informatique", "telephonie", "image-son", 
  "electromenager", "jardinage-bricolage", "vetements-femme", "vetements-homme", 
  "vetements-enfant-bebe", "sports-loisirs", "livres-films-musique", "animaux", 
  "services", "emploi", "voyage-tourisme", "artisanat-produits-traditionnels", 
  "nautisme", "transport-logistique", "parapharmacie", "franchise-business", 
  "evenementiel-billetterie", "beaute-sante-bien-etre", "jeux-jouets"
].map(slug => {
  const cat = categoryMenu.find(c => c.slug === slug);
  if (!cat) return null;
  
  return {
    ...cat,
    imageUrl: iconMappingManager.getIconUrl(slug) || `https://picsum.photos/seed/${slug}/80/80`,
    icon: cat.icon || <Image className="h-5 w-5 text-gray-400" />
  } as ExplorerCategory;
}).filter(Boolean) as ExplorerCategory[];
