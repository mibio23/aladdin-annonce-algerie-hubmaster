
import { Announcement } from "../types/homePageTypes";
import { immobilierAnnouncements } from "../announcements/immobilierAnnouncements";
import { vehiculesAnnouncements } from "../announcements/vehiculesAnnouncements";
import { informatiqueAnnouncements } from "../announcements/informatiqueAnnouncements";
import { telephonieAnnouncements } from "../announcements/telephonieAnnouncements";
import { imageSonAnnouncements } from "../announcements/imageSonAnnouncements";
import { electromenagerAnnouncements } from "../announcements/electromenagerAnnouncements";
import { jeuxVideoConsolesAnnouncements } from "../announcements/jeuxVideoConsolesAnnouncements";
import { meublesAnnouncements } from "../announcements/meublesAnnouncements";
import { decorationAnnouncements } from "../announcements/decorationAnnouncements";
import { jardinageBricolageAnnouncements } from "../announcements/jardinageBricolageAnnouncements";
import { vetementsFemmeAnnouncements } from "../announcements/vetementsFemmeAnnouncements";
import { vetementsHommeAnnouncements } from "../announcements/vetementsHommeAnnouncements";
import { perduTrouveAnnouncements } from "../announcements/perduTrouveAnnouncements";
import { aDonnerAnnouncements } from "../announcements/aDonnerAnnouncements";
import { diversAnnouncements } from "../announcements/diversAnnouncements";
import { santeBienEtreProAnnouncements } from "../announcements/santeBienEtreProAnnouncements";
import { billetterieAnnouncements } from "../announcements/billetterieAnnouncements";
import { nautismeAnnouncements } from "../announcements/nautismeAnnouncements";
import { collectionsAnnouncements } from "../announcements/collectionsAnnouncements";
import { artAntiquitesAnnouncements } from "../announcements/artAntiquitesAnnouncements";
import { cryptoFinancesAnnouncements } from "../announcements/cryptoFinancesAnnouncements";
import { franchiseBusinessAnnouncements } from "../announcements/franchiseBusinessAnnouncements";
import { loisirsCreatifsAnnouncements } from "../announcements/loisirsCreatifsAnnouncements";
import { artisanatAnnouncements } from "../announcements/artisanatAnnouncements";
import { emploiCarriereAnnouncements } from "../announcements/emploiCarriereAnnouncements";
import { accessoiresModeBijouxAnnouncements } from "../announcements/accessoiresModeBijouxAnnouncements";
import { jeuxJouetsAnnouncements } from "../announcements/jeuxJouetsAnnouncements";
import { photographieVideoAnnouncements } from "../announcements/photographieVideoAnnouncements";
import { jardinagePlantesAnnouncements } from "../announcements/jardinagePlantesAnnouncements";
import { santeMedicalAnnouncements } from "../announcements/santeMedicalAnnouncements";
import { educationFormationAnnouncements } from "../announcements/educationFormationAnnouncements";
import { cryptoFreelanceAnnouncements } from "../announcements/cryptoFreelanceAnnouncements";
import { AnnouncementFactory } from "../factories/AnnouncementFactory";

export class AnnouncementRegistry {
  private static registry: Record<string, Announcement[]> = {};

  static registerAnnouncements() {
    this.registry = {
      // Groupes existants
      "immobilier": immobilierAnnouncements,
      "vehicules": vehiculesAnnouncements,
      "emploi-carriere": emploiCarriereAnnouncements,
      "metier-reparateur": santeBienEtreProAnnouncements,
      "mode-habillement": [...vetementsFemmeAnnouncements, ...vetementsHommeAnnouncements],
      "accessoires-mode-bijoux": accessoiresModeBijouxAnnouncements,
      "beaute-sante-bien-etre": santeBienEtreProAnnouncements,
      "maison-mobilier-gros-electromenager": [...meublesAnnouncements, ...electromenagerAnnouncements],
      "maison-decoration-cuisine-linge": decorationAnnouncements,
      "bricolage-materiaux": jardinageBricolageAnnouncements,
      "jardin-exterieur": jardinagePlantesAnnouncements,
      "informatique-tablettes": informatiqueAnnouncements,
      "image-son": imageSonAnnouncements,
      "telephonie-objets-connectes": telephonieAnnouncements,
      "consoles-jeux-video": jeuxVideoConsolesAnnouncements,
      "sports-loisirs-plein-air": nautismeAnnouncements,
      "instruments-musique-materiel-dj": imageSonAnnouncements,
      "livres-films-musique-medias-culturels": AnnouncementFactory.createDefaultAnnouncements("livres-medias"),
      "art-antiquites": [...artAntiquitesAnnouncements, ...loisirsCreatifsAnnouncements],
      "collections-brocante": collectionsAnnouncements,
      "jeux-jouets": jeuxJouetsAnnouncements,
      "puericulture-equipement-bebe": AnnouncementFactory.createDefaultAnnouncements("puericulture"),
      "services-particuliers": AnnouncementFactory.createDefaultAnnouncements("services-particuliers"),
      "services-professionnels": [...cryptoFinancesAnnouncements, ...franchiseBusinessAnnouncements],
      "evenementiel-billetterie": billetterieAnnouncements,
      "animaux": AnnouncementFactory.createDefaultAnnouncements("animaux"),
      "vacances-voyages": AnnouncementFactory.createDefaultAnnouncements("vacances-voyages"),
      "materiel-professionnel-specifique": AnnouncementFactory.createDefaultAnnouncements("materiel-pro"),
      "cours-formations-lecons": educationFormationAnnouncements,
      "communaute-echanges": [...perduTrouveAnnouncements, ...aDonnerAnnouncements, ...diversAnnouncements],
      "gastronomie-produits-terroir": AnnouncementFactory.createDefaultAnnouncements("gastronomie"),
      "artisanat-produits-traditionnels": artisanatAnnouncements,
      
      // Nouvelles catégories pour atteindre 36 catégories
      "informatique": informatiqueAnnouncements,
      "telephonie": telephonieAnnouncements,
      "meubles": meublesAnnouncements,
      "decoration": decorationAnnouncements,
      "electromenager": electromenagerAnnouncements,
      "livres-papeterie": AnnouncementFactory.createDefaultAnnouncements("livres-papeterie"),
      "jeux-video-consoles": jeuxVideoConsolesAnnouncements,
      "loisirs-collections": loisirsCreatifsAnnouncements,
      "a-donner": aDonnerAnnouncements,
      "perdu-trouve": perduTrouveAnnouncements,
      "crypto-finances": cryptoFinancesAnnouncements,
      "crypto-freelance": cryptoFreelanceAnnouncements,
      "sport-et-plein-air": nautismeAnnouncements,
      "tech-multimedia": [...informatiqueAnnouncements, ...imageSonAnnouncements],
      "services-bien-etre": santeBienEtreProAnnouncements,
      "photographie-video": photographieVideoAnnouncements,
      "jardinage-plantes": jardinagePlantesAnnouncements,
      "sante-medical": santeMedicalAnnouncements,
      "education-formation": educationFormationAnnouncements,
      "echanges-communautaires": diversAnnouncements,
    };
  }

  static getAllAnnouncements(): Record<string, Announcement[]> {
    if (Object.keys(this.registry).length === 0) {
      this.registerAnnouncements();
    }
    return this.registry;
  }

  static getAnnouncementsByCategory(category: string): Announcement[] {
    const announcements = this.getAllAnnouncements();
    return announcements[category] || [];
  }

  static ensureCategoryExists(categorySlug: string) {
    const announcements = this.getAllAnnouncements();
    if (!announcements[categorySlug]) {
      announcements[categorySlug] = AnnouncementFactory.createDefaultAnnouncements(categorySlug);
    }
  }
}
