
import React from "react";

export interface MenuItemProps {
  id: string;
  name: string;
  slug: string;
  icon?: React.ReactElement;
  subcategories?: MenuItemProps[];
  description?: string;
  href?: string;
}

export interface MegaMenuProps {
  categories: MenuItemProps[];
  isOpen: boolean;
  onClose: () => void;
}

export interface NavigationState {
  activeCategory: string | null;
  hoveredItem: string | null;
  isMenuOpen: boolean;
}
