import { Image } from "lucide-react"; // Fallback icon
import { ExplorerCategory } from "../categoryTypes";
import { categoryMenu } from "../megaMenu/categoryMenu";
import { iconMappingManager } from "../categories/optimized/iconMappingManager";

export const mediumPopularCategories: ExplorerCategory[] = [
  "montres-bijoux", "collections", "entreprises-commerces", "materiel-agricole", 
  "materiel-industriel", "materiel-medical", "art-antiquites", 
  "gastronomie-specialites-locales", "crypto-finances-principal"
].map(slug => {
  const cat = categoryMenu.find(c => c.slug === slug);
  if (!cat) return null;
  
  return {
    ...cat,
    imageUrl: iconMappingManager.getIconUrl(slug) || `https://picsum.photos/seed/${slug}/80/80`,
    icon: cat.icon || <Image className="h-5 w-5 text-gray-400" />
  } as ExplorerCategory;
}).filter(Boolean) as ExplorerCategory[];
