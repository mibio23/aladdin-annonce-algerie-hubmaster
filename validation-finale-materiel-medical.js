import fs from 'fs';
import path from 'path';

console.log('🏥️ VALIDATION FINALE - "Matériel Professionnel Médicale"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Vérification de la présence de la nouvelle catégorie
const categoriePrincipale = fileContent.includes("id: 'materiel-professionnel-medical'");
console.log(`📋 Catégorie principale "Matériel Professionnel Médicale": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Sous-catégories attendues
const sousCategoriesAttendues = [
  'materiel-diagnostic',
  'instruments-medicaux',
  'materiel-urgence',
  'materiel-hospitalier',
  'materiel-laboratoire',
  'equipements-sterilisation',
  'consommables-medicaux'
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
  'equipements-imagerie-medicale',
  'appareils-mesure-medicale',
  'equipements-depistage',
  'moniteurs-medicaux',
  'instruments-chirurgie',
  'instruments-dentisterie',
  'instruments-ophtalmologie',
  'instruments-orl',
  'instruments-specialises',
  'equipements-reanimation',
  'materiel-secourisme',
  'defibrillateurs',
  'equipements-urgence',
  'lits-medicaux',
  'equipements-salle-operation',
  'materiel-soins-intensifs',
  'equipements-chambre',
  'microscopes',
  'centrifugeuses',
  'autoclaves',
  'equipements-analyse',
  'autoclaves-sterilisation',
  'sterilisateurs',
  'desinfecteurs',
  'equipements-sterilisation',
  'gants-medicaux',
  'masques-protection',
  'blouses-medicales',
  'produits-soin',
  'equipements-protection'
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
    fr: "Matériel Professionnel Médicale",
    ar: "المعدات الطبية الاحترافية",
    en: "Professional Medical Equipment",
    de: "Professionelle Medizinausrüstung",
    es: "Equipo Médico Profesional"
  },
  sousCategories: {
    'materiel-diagnostic': {
      fr: "Matériel de Diagnostic",
      ar: "معدات التشخيص",
      en: "Diagnostic Equipment",
      de: "Diagnoseausrüstung",
      es: "Equipo de Diagnóstico"
    },
    'instruments-medicaux': {
      fr: "Instruments Médicaux",
      ar: "الأدوات الطبية",
      en: "Medical Instruments",
      de: "Medizinische Instrumente",
      es: "Instrumentos Médicos"
    },
    'materiel-urgence': {
      fr: "Matériel d'Urgence",
      ar: "معدات الطوارئ",
      en: "Emergency Equipment",
      de: "Notfallausrüstung",
      es: "Equipo de Emergencia"
    },
    'materiel-hospitalier': {
      fr: "Matériel Hospitalier",
      ar: "معدات المستشفيات",
      en: "Hospital Equipment",
      de: "Krankenhausausrüstung",
      es: "Equipo Hospitalario"
    },
    'materiel-laboratoire': {
      fr: "Matériel de Laboratoire",
      ar: "معدات المختبرات",
      en: "Laboratory Equipment",
      de: "Laborausrüstung",
      es: "Equipo de Laboratorio"
    },
    'equipements-sterilisation': {
      fr: "Équipements de Stérilisation",
      ar: "معدات التعقيم",
      en: "Sterilization Equipment",
      de: "Sterilisationsausrüstung",
      es: "Equipos de Esterilización"
    },
    'consommables-medicaux': {
      fr: "Consommables Médicaux",
      ar: "المواد الطبية المستهلكة",
      en: "Medical Consumables",
      de: "Medizinische Verbrauchsmaterialien",
      es: "Consumibles Médicos"
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
  console.log('\n🎉 INTÉGRATION EXCELLENTE ! La catégorie "Matériel Professionnel Médicale" est parfaitement intégrée.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ INTÉGRATION BONNE ! La catégorie est fonctionnelle avec quelques améliorations possibles.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ INTÉGRATION MOYENNE ! La catégorie nécessite des corrections importantes.');
} else {
  console.log('\n❌ INTÉGRATION ÉCHOUÉE ! La catégorie nécessite une refonte complète.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE');