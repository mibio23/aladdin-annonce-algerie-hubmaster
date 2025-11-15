import fs from 'fs';
import path from 'path';

console.log('👶 VALIDATION FINALE - "Puériculture & Équipement Bébé"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Vérification de la présence de la nouvelle catégorie
const categoriePrincipale = fileContent.includes("id: 'puericulture-equipement-bebe'");
console.log(`📋 Catégorie principale "Puériculture & Équipement Bébé": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Sous-catégories attendues
const sousCategoriesAttendues = [
  'equipements-puericulture',
  'vetements-bebe',
  'equipements-allaitement',
  'lits-chambres-bebe',
  'transports-deplacements-bebe',
  'jouets-activites-bebe',
  'hygiene-soins-bebe',
  'securite-surveillance-bebe',
  'accessoires-produits-bebe'
];

console.log('\n📋 VÉRIFICATION DES SOUS-CATÉGORIES:');
console.log('================================================================================');

let sousCategoriesTrouvees = 0;
sousCategoriesAttendues.forEach(sousCategorie => {
  const trouve = fileContent.includes(`id: '${sousCategorie}'`);
  console.log(`${trouve ? '✅' : '❌'} ${sousCategorie}: ${trouve ? 'TROUVÉE' : 'MANQUANTE'}`);
  if (trouve) sousCategoriesTrouvees++;
});

console.log(`\n📊 RÉSULTAT: ${sousCategoriesTrouvees}/${sousCategoriesAttendues.length} sous-catégories trouvées`);

// Sous-sous-catégories attendues
const sousSousCategoriesAttendues = [
  'pousettes-systemes-portage',
  'sieges-auto-transports',
  'accessoires-puericulture',
  'equipements-sortie',
  'vetements-nuit',
  'vetements-jour',
  'vetements-exterieur',
  'sous-vetements',
  'accessoires-vestimentaires',
  'tire-lait-coussinets-allaitement',
  'biberons-tetines',
  'sterilisateurs-chauffe-biberons',
  'sac-langer-accessoires',
  'produits-allaitement',
  'lits-bebe',
  'berceaux-moises',
  'matelas-langer',
  'mobilier-chambre-bebe',
  'decoration-chambre-bebe',
  'pousettes-landaus',
  'sieges-auto',
  'transpots-sacs-dos',
  'accessoires-transport',
  'jouets-eveil',
  'jouets-eveil-musical',
  'livres-contes',
  'tapis-eveil-jeux-sol',
  'activites-motricite',
  'couches-changes',
  'produits-toilette-bain',
  'soins-peau',
  'thermometres-moniteurs',
  'produits-hygiene',
  'barrieres-securite',
  'moniteurs-bebe',
  'detecteurs-mouvement',
  'proteges-angles-securite',
  'accessoires-securite',
  'bourses-sacs-langer',
  'couvertures-gigoteuses',
  'produits-diversification',
  'cadeaux-naissance',
  'produits-specialises'
];

console.log('\n📋 VÉRIFICATION DES SOUS-SOUS-CATÉGORIES:');
console.log('================================================================================');

let sousSousCategoriesTrouvees = 0;
sousSousCategoriesAttendues.forEach(sousSousCategorie => {
  const trouve = fileContent.includes(`id: '${sousSousCategorie}'`);
  console.log(`${trouve ? '✅' : '❌'} ${sousSousCategorie}: ${trouve ? 'TROUVÉE' : 'MANQUANTE'}`);
  if (trouve) sousSousCategoriesTrouvees++;
});

console.log(`\n📊 RÉSULTAT: ${sousSousCategoriesTrouvees}/${sousSousCategoriesAttendues.length} sous-sous-catégories trouvées`);

// Vérification des traductions
console.log('\n🌍 VÉRIFICATION DES TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');

const traductionsAttendues = {
  principale: {
    fr: "Puériculture & Équipement Bébé",
    ar: "رعاية الأطفال ومعدات الأطفال",
    en: "Poultry Farming & Baby Equipment",
    de: "Geflügelzucht & Babyausrüstung",
    es: "Avicultura y Equipamiento para Bebés"
  },
  sousCategories: {
    'equipements-puericulture': {
      fr: "Équipements de Puériculture",
      ar: "معدات رعاية الأطفال",
      en: "Poultry Farming Equipment",
      de: "Geflügelzuchtausrüstung",
      es: "Equipos de Avicultura"
    },
    'vetements-bebe': {
      fr: "Vêtements Bébé",
      ar: "ملابس الأطفال",
      en: "Baby Clothes",
      de: "Babykleidung",
      es: "Ropa de Bebé"
    },
    'equipements-allaitement': {
      fr: "Équipements d'Allaitement",
      ar: "معدات الرضاعة",
      en: "Breastfeeding Equipment",
      de: "Stillausrüstung",
      es: "Equipos de Lactancia"
    },
    'lits-chambres-bebe': {
      fr: "Lits et Chambres Bébé",
      ar: "أسرة وغرف الأطفال",
      en: "Baby Beds and Rooms",
      de: "Babybetten und Kinderzimmer",
      es: "Cunas y Habitaciones de Bebé"
    },
    'transports-deplacements-bebe': {
      fr: "Transports et Déplacements Bébé",
      ar: "النقل والتنقل للأطفال",
      en: "Baby Transport and Mobility",
      de: "Babytransport und Mobilität",
      es: "Transporte y Movilidad para Bebés"
    },
    'jouets-activites-bebe': {
      fr: "Jouets et Activités Bébé",
      ar: "ألعاب وأنشطة الأطفال",
      en: "Baby Toys and Activities",
      de: "Babyspielzeug und Aktivitäten",
      es: "Juguetes y Actividades para Bebés"
    },
    'hygiene-soins-bebe': {
      fr: "Hygiène et Soins Bébé",
      ar: "نظافة ورعاية الأطفال",
      en: "Baby Hygiene and Care",
      de: "Babyhygiene und Pflege",
      es: "Higiene y Cuidado del Bebé"
    },
    'securite-surveillance-bebe': {
      fr: "Sécurité et Surveillance Bébé",
      ar: "الأمان والمراقبة للأطفال",
      en: "Baby Safety and Monitoring",
      de: "Babysicherheit und Überwachung",
      es: "Seguridad y Vigilancia para Bebés"
    },
    'accessoires-produits-bebe': {
      fr: "Accessoires et Produits Bébé",
      ar: "إكسسوارات ومنتجات الأطفال",
      en: "Baby Accessories and Products",
      de: "Babyzubehör und Produkte",
      es: "Accesorios y Productos para Bebés"
    }
  }
};

let traductionsTrouvees = 0;
const traductionsTotales = Object.keys(traductionsAttendues.principale).length + 
                         Object.keys(traductionsAttendues.sousCategories).length * 5;

// Vérification des traductions de la catégorie principale
console.log('📋 Traductions de la catégorie principale:');
Object.entries(traductionsAttendues.principale).forEach(([langue, traduction]) => {
  const trouve = fileContent.includes(`"${langue}": "${traduction}"`);
  console.log(`${trouve ? '✅' : '❌'} ${langue}: "${traduction}" - ${trouve ? 'TROUVÉE' : 'MANQUANTE'}`);
  if (trouve) traductionsTrouvees++;
});

// Vérification des traductions des sous-catégories
console.log('\n📋 Traductions des sous-catégories:');
Object.entries(traductionsAttendues.sousCategories).forEach(([sousCatId, traductions]) => {
  console.log(`\n📂 ${sousCatId}:`);
  Object.entries(traductions).forEach(([langue, traduction]) => {
    const trouve = fileContent.includes(`"${langue}": "${traduction}"`);
    console.log(`${trouve ? '✅' : '❌'}   ${langue}: "${traduction}" - ${trouve ? 'TROUVÉE' : 'MANQUANTE'}`);
    if (trouve) traductionsTrouvees++;
  });
});

console.log(`\n📊 RÉSULTAT TRADUCTIONS: ${traductionsTrouvees}/${traductionsTotales} traductions trouvées`);

// Statistiques finales
console.log('\n📊 STATISTIQUES FINALES:');
console.log('================================================================================');

const totalCategories = (fileContent.match(/id:\s*'[^']*'/g) || []).length;
const totalTraductionsFr = (fileContent.match(/"fr":\s*"[^"]*"/g) || []).length;
const totalTraductionsAr = (fileContent.match(/"ar":\s*"[^"]*"/g) || []).length;
const totalTraductionsEn = (fileContent.match(/"en":\s*"[^"]*"/g) || []).length;
const totalTraductionsDe = (fileContent.match(/"de":\s*"[^"]*"/g) || []).length;
const totalTraductionsEs = (fileContent.match(/"es":\s*"[^"]*"/g) || []).length;

console.log(`📋 Total des catégories dans le fichier: ${totalCategories}`);
console.log(`🌍 Traductions françaises: ${totalTraductionsFr}`);
console.log(`🌍 Traductions arabes: ${totalTraductionsAr}`);
console.log(`🌍 Traductions anglaises: ${totalTraductionsEn}`);
console.log(`🌍 Traductions allemandes: ${totalTraductionsDe}`);
console.log(`🌍 Traductions espagnoles: ${totalTraductionsEs}`);

// Score final
const scoreCategoriePrincipale = categoriePrincipale ? 100 : 0;
const scoreSousCategories = (sousCategoriesTrouvees / sousCategoriesAttendues.length) * 100;
const scoreSousSousCategories = (sousSousCategoriesTrouvees / sousSousCategoriesAttendues.length) * 100;
const scoreTraductions = (traductionsTrouvees / traductionsTotales) * 100;

const scoreFinal = (scoreCategoriePrincipale + scoreSousCategories + scoreSousSousCategories + scoreTraductions) / 4;

console.log('\n🏆 SCORE FINAL D\'INTÉGRATION:');
console.log('================================================================================');
console.log(`📊 Catégorie principale: ${scoreCategoriePrincipale.toFixed(1)}%`);
console.log(`📊 Sous-catégories: ${scoreSousCategories.toFixed(1)}%`);
console.log(`📊 Sous-sous-catégories: ${scoreSousSousCategories.toFixed(1)}%`);
console.log(`📊 Traductions: ${scoreTraductions.toFixed(1)}%`);
console.log(`🏆 SCORE FINAL: ${scoreFinal.toFixed(1)}%`);

if (scoreFinal >= 95) {
  console.log('\n🎉 INTÉGRATION EXCELLENTE ! La catégorie "Puériculture & Équipement Bébé" est parfaitement intégrée.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ INTÉGRATION BONNE ! La catégorie est fonctionnelle avec quelques améliorations possibles.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ INTÉGRATION MOYENNE ! La catégorie nécessite des corrections importantes.');
} else {
  console.log('\n❌ INTÉGRATION ÉCHOUÉE ! La catégorie nécessite une refonte complète.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE');