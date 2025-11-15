// Types de catégories pour le système de menu

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  icon?: React.ReactNode; // Type pour React si nécessaire
  translations?: {
    [key: string]: string;
  };
  subcategories?: MenuCategory[];
}

export interface CategoryGroup {
  id: string;
  name: string;
  categories: MenuCategory[];
}