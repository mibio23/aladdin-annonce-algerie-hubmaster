// Re-export types
export * from "./categoryTypes";
export * from "./types/homePageTypes";

// Re-export data from new structured files
export { wilayas } from "./wilayaData";
export { categoryMenu, mainCategories } from "./menuStructureData"; // This now uses the new groups
export { popularCategories, mediumPopularCategories, otherCategories } from "./explorerCategoriesLayoutData"; // This is now updated
export { homePageTabCategories } from "./tabs/homePageTabCategories"; 
export { categorizedAnnouncements } from "./announcements/index"; // This is now updated

// Re-export new category groups if they need to be used directly, though categoryMenu is the primary export
export { newCategoriesGroup1 } from "./categories/newCategoryGroup1";
export { newCategoriesGroup2 } from "./categories/newCategoryGroup2";
export { newCategoriesGroup3 } from "./categories/newCategoryGroup3";
export { newCategoriesGroup4 } from "./categories/newCategoryGroup4";
export { newCategoriesGroup5 } from "./categories/newCategoryGroup5";
export { newCategoriesGroup6 } from "./categories/newCategoryGroup6";
export { newCategoriesGroup7 } from "./categories/newCategoryGroup7";
export { newCategoriesGroup8 } from "./categories/newCategoryGroup8"; // Ajout du groupe Sport & Plein Air
