import { ExplorerCategory, MenuCategory } from "./categoryTypes";
import { categoryMenu } from "./menuStructureData";
import { iconMappingManager } from "./categories/optimized/iconMappingManager";

// Helper to create ExplorerCategory from MenuCategory, now adding styling
const toExplorerCategory = (
  category: MenuCategory, 
  imageUrl: string,
  styling: { bg: string; text: string; hoverBg: string }
): ExplorerCategory & { styling: { bg: string; text: string; hoverBg: string } } => ({
  ...category,
  icon: category.icon, // Ensure icon is passed through if present
  imageUrl,
  styling,
});

// Default images for categories, updated with w=256 for better grid display
const defaultCategoryImages: Record<string, string> = {
  "immobilier": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "vehicules": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "informatique-tablettes": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "mode-habillement": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "maison-mobilier-gros-electromenager": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "sports-loisirs-plein-air": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "telephonie-objets-connectes": "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "consoles-jeux-video": "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBnYW1lJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "puericulture-equipement-bebe": "https://images.unsplash.com/photo-1525904903205-a6a0e9530246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFieSUyMHN0dWZmfGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "beaute-sante-bien-etre": "https://images.unsplash.com/photo-15405552318VFUZEdLTiFKeZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80", // Original URL seemed incomplete, used placeholder
  "jardin-exterieur": "https://images.unsplash.com/photo-1447102077388-586b3a6a0c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "animaux": "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=256&q=80", // Using one of the provided placeholders
  "emploi-carriere": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "accessoires-mode-bijoux": "https://images.unsplash.com/photo-1588849530243-5905c8fd4d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "maison-decoration-cuisine-linge": "https://images.unsplash.com/photo-1534570122623-99e8378a9959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "bricolage-materiaux": "https://images.unsplash.com/photo-1581182800629-7d90925ad072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "image-son": "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=256&q=80", // Using drone placeholder
  "instruments-musique-materiel-dj": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "livres-films-musique-medias-culturels": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "art-antiquites": "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=256&q=80", // Using placeholder
  "collections-brocante": "https://images.unsplash.com/photo-1567284415178-349391296e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW50aXF1ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "jeux-jouets": "https://images.unsplash.com/photo-1560857504-2295c0353371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "services-particuliers": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "services-professionnels": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=256&q=80",
  "evenementiel-billetterie": "https://images.unsplash.com/photo-1505236873119-cde6b64vonN8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "vacances-voyages": "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=256&q=80", // Using placeholder
  "materiel-professionnel-specifique": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=256&q=80",
  "cours-formations-lecons": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=256&q=80",
  "communaute-echanges": "https://images.unsplash.com/photo-1520880900540-3a39f0a39424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80",
  "gastronomie-produits-terroir": "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=256&q=80", // Using placeholder
  "photographie-video": "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=256&q=80",
  "jardinage-plantes": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=256&q=80",
  "sante-medical": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=256&q=80",
  "education-formation": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=256&q=80",
  "crypto-freelance": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=256&q=80",
  "default": "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VuZXJhbCUyMGNhdGVnb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=256&q=80"
};

// Palette de couleurs pour les nouvelles catégories
const categoryStyling: Record<string, { bg: string; text: string; hoverBg: string }> = {
  "immobilier": { bg: "bg-sky-100 dark:bg-sky-900", text: "text-sky-800 dark:text-sky-200", hoverBg: "hover:bg-sky-200 dark:hover:bg-sky-800" },
  "vehicules": { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-200", hoverBg: "hover:bg-red-200 dark:hover:bg-red-800" },
  "emploi-carriere": { bg: "bg-emerald-100 dark:bg-emerald-900", text: "text-emerald-800 dark:text-emerald-200", hoverBg: "hover:bg-emerald-200 dark:hover:bg-emerald-800" },
  "mode-habillement": { bg: "bg-pink-100 dark:bg-pink-900", text: "text-pink-800 dark:text-pink-200", hoverBg: "hover:bg-pink-200 dark:hover:bg-pink-800" },
  "accessoires-mode-bijoux": { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-200", hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800" },
  "beaute-sante-bien-etre": { bg: "bg-teal-100 dark:bg-teal-900", text: "text-teal-800 dark:text-teal-200", hoverBg: "hover:bg-teal-200 dark:hover:bg-teal-800" },
  "maison-mobilier-gros-electromenager": { bg: "bg-amber-100 dark:bg-amber-900", text: "text-amber-800 dark:text-amber-200", hoverBg: "hover:bg-amber-200 dark:hover:bg-amber-800" },
  "maison-decoration-cuisine-linge": { bg: "bg-yellow-100 dark:bg-yellow-900", text: "text-yellow-800 dark:text-yellow-200", hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800" },
  "bricolage-materiaux": { bg: "bg-lime-100 dark:bg-lime-900", text: "text-lime-800 dark:text-lime-200", hoverBg: "hover:bg-lime-200 dark:hover:bg-lime-800" },
  "jardin-exterieur": { bg: "bg-green-100 dark:bg-green-900", text: "text-green-800 dark:text-green-200", hoverBg: "hover:bg-green-200 dark:hover:bg-green-800" },
  "informatique-tablettes": { bg: "bg-cyan-100 dark:bg-cyan-900", text: "text-cyan-800 dark:text-cyan-200", hoverBg: "hover:bg-cyan-200 dark:hover:bg-cyan-800" },
  "image-son": { bg: "bg-indigo-100 dark:bg-indigo-900", text: "text-indigo-800 dark:text-indigo-200", hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800" },
  "telephonie-objets-connectes": { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-800 dark:text-blue-200", hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800" },
  "consoles-jeux-video": { bg: "bg-fuchsia-100 dark:bg-fuchsia-900", text: "text-fuchsia-800 dark:text-fuchsia-200", hoverBg: "hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800" },
  "sports-loisirs-plein-air": { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-800 dark:text-orange-200", hoverBg: "hover:bg-orange-200 dark:hover:bg-orange-800" },
  "instruments-musique-materiel-dj": { bg: "bg-rose-100 dark:bg-rose-900", text: "text-rose-800 dark:text-rose-200", hoverBg: "hover:bg-rose-200 dark:hover:bg-rose-800" },
  "livres-films-musique-medias-culturels": { bg: "bg-violet-100 dark:bg-violet-900", text: "text-violet-800 dark:text-violet-200", hoverBg: "hover:bg-violet-200 dark:hover:bg-violet-800" },
  "art-antiquites": { bg: "bg-stone-200 dark:bg-stone-700", text: "text-stone-800 dark:text-stone-200", hoverBg: "hover:bg-stone-300 dark:hover:bg-stone-600" },
  "collections-brocante": { bg: "bg-neutral-200 dark:bg-neutral-700", text: "text-neutral-800 dark:text-neutral-200", hoverBg: "hover:bg-neutral-300 dark:hover:bg-neutral-600" },
  "jeux-jouets": { bg: "bg-red-200 dark:bg-red-800", text: "text-red-800 dark:text-red-100", hoverBg: "hover:bg-red-300 dark:hover:bg-red-700" },
  "puericulture-equipement-bebe": { bg: "bg-sky-200 dark:bg-sky-700", text: "text-sky-800 dark:text-sky-100", hoverBg: "hover:bg-sky-300 dark:hover:bg-sky-600" },
  "services-particuliers": { bg: "bg-emerald-200 dark:bg-emerald-700", text: "text-emerald-800 dark:text-emerald-100", hoverBg: "hover:bg-emerald-300 dark:hover:bg-emerald-600" },
  "services-professionnels": { bg: "bg-indigo-200 dark:bg-indigo-700", text: "text-indigo-800 dark:text-indigo-100", hoverBg: "hover:bg-indigo-300 dark:hover:bg-indigo-600" },
  "evenementiel-billetterie": { bg: "bg-pink-200 dark:bg-pink-700", text: "text-pink-800 dark:text-pink-100", hoverBg: "hover:bg-pink-300 dark:hover:bg-pink-600" },
  "animaux": { bg: "bg-amber-200 dark:bg-amber-700", text: "text-amber-800 dark:text-amber-100", hoverBg: "hover:bg-amber-300 dark:hover:bg-amber-600" },
  "vacances-voyages": { bg: "bg-teal-200 dark:bg-teal-700", text: "text-teal-800 dark:text-teal-100", hoverBg: "hover:bg-teal-300 dark:hover:bg-teal-600" },
  "materiel-professionnel-specifique": { bg: "bg-cyan-200 dark:bg-cyan-700", text: "text-cyan-800 dark:text-cyan-100", hoverBg: "hover:bg-cyan-300 dark:hover:bg-cyan-600" },
  "cours-formations-lecons": { bg: "bg-purple-200 dark:bg-purple-700", text: "text-purple-800 dark:text-purple-100", hoverBg: "hover:bg-purple-300 dark:hover:bg-purple-600" },
  "communaute-echanges": { bg: "bg-fuchsia-200 dark:bg-fuchsia-700", text: "text-fuchsia-800 dark:text-fuchsia-100", hoverBg: "hover:bg-fuchsia-300 dark:hover:bg-fuchsia-600" },
  "gastronomie-produits-terroir": { bg: "bg-orange-200 dark:bg-orange-700", text: "text-orange-800 dark:text-orange-100", hoverBg: "hover:bg-orange-300 dark:hover:bg-orange-600" },
  "photographie-video": { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-100", hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800" },
  "jardinage-plantes": { bg: "bg-green-100 dark:bg-green-900", text: "text-green-800 dark:text-green-200", hoverBg: "hover:bg-green-200 dark:hover:bg-green-800" },
  "sante-medical": { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-200", hoverBg: "hover:bg-red-200 dark:hover:bg-red-800" },
  "education-formation": { bg: "bg-sky-100 dark:bg-sky-900", text: "text-sky-800 dark:text-sky-200", hoverBg: "hover:bg-sky-200 dark:hover:bg-sky-800" },
  "crypto-freelance": { bg: "bg-yellow-100 dark:bg-yellow-900", text: "text-yellow-800 dark:text-yellow-200", hoverBg: "hover:bg-yellow-200 dark:hover:bg-yellow-800" },
  "default": { bg: "bg-gray-100 dark:bg-gray-700", text: "text-gray-800 dark:text-gray-200", hoverBg: "hover:bg-gray-200 dark:hover:bg-gray-600" }
};

export type StyledExplorerCategory = ExplorerCategory & { styling: { bg: string; text: string; hoverBg: string } };

export const popularCategories: StyledExplorerCategory[] = categoryMenu
  .map(category => {
    const catWithPossibleIcon = { icon: undefined, ...category };
    const imageUrl = iconMappingManager.getIconUrl(category.slug) || 
                    defaultCategoryImages[category.slug] || 
                    defaultCategoryImages["default"];
    
    return toExplorerCategory(
      catWithPossibleIcon, 
      imageUrl,
      categoryStyling[category.slug] || categoryStyling["default"]
    );
  })
  .filter(Boolean) as StyledExplorerCategory[];

// These are not directly used by the updated ShopByCategorySection but kept for potential future use or other components.
export const mediumPopularCategories: ExplorerCategory[] = []; 
export const otherCategories: ExplorerCategory[] = [];
