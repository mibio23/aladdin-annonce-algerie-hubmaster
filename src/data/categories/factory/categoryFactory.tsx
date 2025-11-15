import { MenuCategory } from "@/data/categoryTypes";
import { createMenuCategory, createSubCategory, createSubSubCategory } from "@/utils/categoryUtils";

// Interface pour la configuration d'une catégorie
interface CategoryConfig {
  id: string;
  name: string;
  slug: string;
  icon: React.ReactElement;
  subcategories: SubCategoryConfig[];
}

interface SubCategoryConfig {
  id: string;
  name: string;
  slug: string;
  icon?: React.ReactElement;
  subcategories?: SubSubCategoryConfig[];
}

interface SubSubCategoryConfig {
  id: string;
  name: string;
  slug: string;
  icon?: React.ReactElement;
}

// Factory pour créer des catégories à partir de configurations
export const createCategoryFromConfig = (config: CategoryConfig): MenuCategory => {
  const subcategories = config.subcategories.map(subConfig => 
    createSubCategory(
      subConfig.id,
      subConfig.name,
      subConfig.slug,
      subConfig.icon,
      subConfig.subcategories?.map(subSubConfig =>
        createSubSubCategory(
          subSubConfig.id,
          subSubConfig.name,
          subSubConfig.slug,
          subSubConfig.icon
        )
      ) || []
    )
  );

  return createMenuCategory(
    config.id,
    config.name,
    config.slug,
    config.icon,
    subcategories
  );
};

// Factory pour créer plusieurs catégories
export const createCategoriesFromConfigs = (configs: CategoryConfig[]): MenuCategory[] => {
  return configs.map(createCategoryFromConfig);
};

// Factory pour les traductions
export const createLocalizedCategory = (
  baseConfig: CategoryConfig,
  translations: Record<string, string>
): MenuCategory => {
  const localizedConfig = {
    ...baseConfig,
    name: translations[baseConfig.name] || baseConfig.name,
    subcategories: baseConfig.subcategories.map(sub => ({
      ...sub,
      name: translations[sub.name] || sub.name,
      subcategories: sub.subcategories?.map(subSub => ({
        ...subSub,
        name: translations[subSub.name] || subSub.name,
      })) || []
    }))
  };
  
  return createCategoryFromConfig(localizedConfig);
};