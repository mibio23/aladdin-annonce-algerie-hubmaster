import fs from 'fs';
import path from 'path';

console.log('🍽️ VALIDATION FINALE - "Gastronomie & Produits du Terroir"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Vérification de la présence de la nouvelle catégorie
const categoriePrincipale = fileContent.includes("id: 'gastronomie-produits-terroir'");
console.log(`📋 Catégorie principale "Gastronomie & Produits du Terroir": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Sous-catégories attendues
const sousCategoriesAttendues = [
  'produits-terroir-algerien',
  'produits-gastronomiques-artisanaux',
  'equipements-gastronomiques',
  'services-gastronomiques'
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
  'huiles-traditionnelles',
  'epices-locales',
  'condiments-artisanaux',
  'saveurs-regionales',
  'conserves-artisanales',
  'produits-suces',
  'produits-sales',
  'specialites-regionales',
  'ustensiles-traditionnels',
  'equipements-professionnels',
  'materiel-conservation',
  'degustations',
  'formations-culinaires',
  'conseils-gastronomiques'
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
    fr: "Gastronomie & Produits du Terroir",
    ar: "الطبخ ومنتجات الأرض",
    en: "Gastronomy & Terroir Products",
    de: "Gastronomie & Terroirprodukte",
    es: "Gastronomía y Productos del Terruño"
  },
  sousCategories: {
    'produits-terroir-algerien': {
      fr: "Produits du Terroir Algérien",
      ar: "منتجات الأرض الجزائرية",
      en: "Algerian Terroir Products",
      de: "Algerische Terroirprodukte",
      es: "Productos del Terruño Argelino"
    },
    'produits-gastronomiques-artisanaux': {
      fr: "Produits Gastronomiques Artisanaux",
      ar: "المنتجات الغذائية الحرفية",
      en: "Artisanal Gastronomic Products",
      de: "Handwerkliche Gastronomieprodukte",
      es: "Productos Gastronómicos Artesanales"
    },
    'equipements-gastronomiques': {
      fr: "Équipements Gastronomiques",
      ar: "المعدات الغذائية",
      en: "Gastronomic Equipment",
      de: "Gastronomieausrüstung",
      es: "Equipamiento Gastronómico"
    },
    'services-gastronomiques': {
      fr: "Services Gastronomiques",
      ar: "الخدمات الغذائية",
      en: "Gastronomic Services",
      de: "Gastronomiedienste",
      es: "Servicios Gastronómicos"
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
  console.log('\n🎉 INTÉGRATION EXCELLENTE ! La catégorie "Gastronomie & Produits du Terroir" est parfaitement intégrée.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ INTÉGRATION BONNE ! La catégorie est fonctionnelle avec quelques améliorations possibles.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ INTÉGRATION MOYENNE ! La catégorie nécessite des corrections importantes.');
} else {
  console.log('\n❌ INTÉGRATION ÉCHOUÉE ! La catégorie nécessite une refonte complète.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE');