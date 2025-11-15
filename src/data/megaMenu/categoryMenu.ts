import { MenuCategory, SearchBarCategory } from "@/data/categoryTypes";
import { informatiqueElectroniqueFr } from "@/data/categories/megaMenuStructures/informatiqueElectronique/fr";
import { telephonieFr } from "@/data/categories/megaMenuStructures/telephonie/fr";
import { informatiqueElectroniqueEn } from "@/data/categories/megaMenuStructures/informatiqueElectronique/en";
import { informatiqueElectroniqueAr } from "@/data/categories/megaMenuStructures/informatiqueElectronique/ar";
import { informatiqueElectroniqueDe } from "@/data/categories/megaMenuStructures/informatiqueElectronique/de";
import { informatiqueElectroniqueEs } from "@/data/categories/megaMenuStructures/informatiqueElectronique/es";
import { informatiqueElectroniqueIt } from "@/data/categories/megaMenuStructures/informatiqueElectronique/it";
import { telephonieEn } from "@/data/categories/megaMenuStructures/telephonie/en";
import { telephonieAr } from "@/data/categories/megaMenuStructures/telephonie/ar";
import { telephonieDe } from "@/data/categories/megaMenuStructures/telephonie/de";
import { telephonieEs } from "@/data/categories/megaMenuStructures/telephonie/es";
import { telephonieIt } from "@/data/categories/megaMenuStructures/telephonie/it";
import { vehiculesEquipementsFr } from "@/data/categories/megaMenuStructures/vehiculesEquipements/fr";
import { vehiculesEquipementsEn } from "@/data/categories/megaMenuStructures/vehiculesEquipements/en";
import { vehiculesEquipementsAr } from "@/data/categories/megaMenuStructures/vehiculesEquipements/ar";
import { vehiculesEquipementsDe } from "@/data/categories/megaMenuStructures/vehiculesEquipements/de";
import { vehiculesEquipementsEs } from "@/data/categories/megaMenuStructures/vehiculesEquipements/es";
import { vehiculesEquipementsIt } from "@/data/categories/megaMenuStructures/vehiculesEquipements/it";
import { immobilierMaisonFr } from "@/data/categories/megaMenuStructures/immobilierMaison/fr";
import { immobilierMaisonEn } from "@/data/categories/megaMenuStructures/immobilierMaison/en";
import { immobilierMaisonAr } from "@/data/categories/megaMenuStructures/immobilierMaison/ar";
import { immobilierMaisonDe } from "@/data/categories/megaMenuStructures/immobilierMaison/de";
import { immobilierMaisonEs } from "@/data/categories/megaMenuStructures/immobilierMaison/es";
import { immobilierMaisonIt } from "@/data/categories/megaMenuStructures/immobilierMaison/it";
import { veloCyclismeEquipementsFr } from "@/data/categories/megaMenuStructures/veloCyclismeEquipements/fr";
import { veloCyclismeEquipementsEn } from "@/data/categories/megaMenuStructures/veloCyclismeEquipements/en";
import { veloCyclismeEquipementsAr } from "@/data/categories/megaMenuStructures/veloCyclismeEquipements/ar";
import { veloCyclismeEquipementsDe } from "@/data/categories/megaMenuStructures/veloCyclismeEquipements/de";
import { veloCyclismeEquipementsEs } from "@/data/categories/megaMenuStructures/veloCyclismeEquipements/es";
import { veloCyclismeEquipementsIt } from "@/data/categories/megaMenuStructures/veloCyclismeEquipements/it";
import { nautismeFr } from "@/data/categories/megaMenuStructures/nautisme/fr";
import { nautismeEn } from "@/data/categories/megaMenuStructures/nautisme/en";
import { nautismeAr } from "@/data/categories/megaMenuStructures/nautisme/ar";
import { nautismeDe } from "@/data/categories/megaMenuStructures/nautisme/de";
import { nautismeEs } from "@/data/categories/megaMenuStructures/nautisme/es";
import { nautismeIt } from "@/data/categories/megaMenuStructures/nautisme/it";
import { btpEnginsConstructionFr } from "@/data/categories/megaMenuStructures/btpEnginsConstruction/fr";
import { btpEnginsConstructionEn } from "@/data/categories/megaMenuStructures/btpEnginsConstruction/en";
import { btpEnginsConstructionAr } from "@/data/categories/megaMenuStructures/btpEnginsConstruction/ar";
import { btpEnginsConstructionDe } from "@/data/categories/megaMenuStructures/btpEnginsConstruction/de";
import { btpEnginsConstructionEs } from "@/data/categories/megaMenuStructures/btpEnginsConstruction/es";
import { btpEnginsConstructionIt } from "@/data/categories/megaMenuStructures/btpEnginsConstruction/it";
import { modeAccessoiresFr } from "@/data/categories/megaMenuStructures/vetementHommeFemmeSousVetement/fr";
import { modeAccessoiresEn } from "@/data/categories/megaMenuStructures/vetementHommeFemmeSousVetement/en";
import { modeAccessoiresAr } from "@/data/categories/megaMenuStructures/vetementHommeFemmeSousVetement/ar";
import { modeAccessoiresDe } from "@/data/categories/megaMenuStructures/vetementHommeFemmeSousVetement/de";
import { modeAccessoiresEs } from "@/data/categories/megaMenuStructures/vetementHommeFemmeSousVetement/es";
import { modeAccessoiresIt } from "@/data/categories/megaMenuStructures/vetementHommeFemmeSousVetement/it";
import { bebePuericultureFr } from "@/data/categories/megaMenuStructures/bebePuericulture/fr";
import { bebePuericultureEn } from "@/data/categories/megaMenuStructures/bebePuericulture/en";
import { bebePuericultureAr } from "@/data/categories/megaMenuStructures/bebePuericulture/ar";
import { bebePuericultureDe } from "@/data/categories/megaMenuStructures/bebePuericulture/de";
import { bebePuericultureEs } from "@/data/categories/megaMenuStructures/bebePuericulture/es";
import { bebePuericultureIt } from "@/data/categories/megaMenuStructures/bebePuericulture/it";

const allCategoryMenus: Record<string, MenuCategory[]> = {
  fr: [immobilierMaisonFr, telephonieFr, informatiqueElectroniqueFr, vehiculesEquipementsFr, veloCyclismeEquipementsFr, nautismeFr, btpEnginsConstructionFr, modeAccessoiresFr, bebePuericultureFr],
  en: [immobilierMaisonEn, telephonieEn, informatiqueElectroniqueEn, vehiculesEquipementsEn, veloCyclismeEquipementsEn, nautismeEn, btpEnginsConstructionEn, modeAccessoiresEn, bebePuericultureEn],
  ar: [immobilierMaisonAr, telephonieAr, informatiqueElectroniqueAr, vehiculesEquipementsAr, veloCyclismeEquipementsAr, nautismeAr, btpEnginsConstructionAr, modeAccessoiresAr, bebePuericultureAr],
  de: [immobilierMaisonDe, telephonieDe, informatiqueElectroniqueDe, vehiculesEquipementsDe, veloCyclismeEquipementsDe, nautismeDe, btpEnginsConstructionDe, modeAccessoiresDe, bebePuericultureDe],
  es: [immobilierMaisonEs, telephonieEs, informatiqueElectroniqueEs, vehiculesEquipementsEs, veloCyclismeEquipementsEs, nautismeEs, btpEnginsConstructionEs, modeAccessoiresEs, bebePuericultureEs],
  it: [immobilierMaisonIt, telephonieIt, informatiqueElectroniqueIt, vehiculesEquipementsIt, veloCyclismeEquipementsIt, nautismeIt, btpEnginsConstructionIt, modeAccessoiresIt, bebePuericultureIt],
};

export const getCategoryMenu = (lang: string): MenuCategory[] => {
  return allCategoryMenus[lang] || allCategoryMenus.fr;
};

export const categoryMenu: MenuCategory[] = getCategoryMenu('fr');

export const mainCategories: SearchBarCategory[] = getCategoryMenu('fr').map(cat => ({
  id: cat.slug,
  name: cat.name,
  value: cat.slug,
  icon: cat.icon,
}));