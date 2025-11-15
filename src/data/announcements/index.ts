
import { Announcement } from "../types/homePageTypes";
import { AnnouncementRegistry } from "../registry/AnnouncementRegistry";
import { categoryMenu } from "../menuStructureData";

// Initialiser le registry
AnnouncementRegistry.registerAnnouncements();

// Obtenir toutes les annonces
export const categorizedAnnouncements: Record<string, Announcement[]> = AnnouncementRegistry.getAllAnnouncements();

// S'assurer que toutes les catégories du menu ont des annonces
categoryMenu.forEach(cat => {
  AnnouncementRegistry.ensureCategoryExists(cat.slug);
});

// Réexporter le registre mis à jour
export const updatedCategorizedAnnouncements = AnnouncementRegistry.getAllAnnouncements();

// Réexporter pour compatibilité
export { AnnouncementRegistry };
