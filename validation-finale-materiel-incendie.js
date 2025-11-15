import fs from 'fs';
import path from 'path';

console.log('🔥 VALIDATION FINALE - "Matériel Professionnel d\'Incendie"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Vérification de la présence de la nouvelle catégorie
const categoriePrincipale = fileContent.includes("id: 'materiel-professionnel-incendie'");
console.log(`📋 Catégorie principale "Matériel Professionnel d'Incendie": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Sous-catégories attendues
const sousCategoriesAttendues = [
  'equipements-detection',
  'systemes-alarme',
  'extincteurs-materiel-extinction',
  'equipements-protection-individuelle',
  'materiel-sauvetage-evacuation',
  'equipements-prevention-formation',
  'vehicules-intervention-incendie'
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
  'detecteurs-fumee',
  'detecteurs-chaleur',
  'detecteurs-flamme',
  'systemes-detection-centralises',
  'alarmes-sonores',
  'alarmes-visuelles',
  'systemes-alarme-centralises',
  'equipements-alerte',
  'extincteurs-eau',
  'extincteurs-poudre',
  'extincteurs-co2',
  'extincteurs-mousse',
  'materiel-extinction-specialise',
  'vetements-protection',
  'equipements-protection-respiratoire',
  'casques-protections-tete',
  'gants-protections-mains',
  'echelles-escabeaux',
  'corde-materiel-assurage',
  'equipements-sauvetage',
  'materiel-evacuation-urgence',
  'materiel-formation',
  'equipements-prevention',
  'documentation-signalisation',
  'outils-prevention',
  'camions-pompiers',
  'vehicules-intervention-rapide',
  'equipements-mobiles',
  'accessoires-vehicules'
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
    fr: "Matériel Professionnel d'Incendie",
    ar: "معدات مكافحة الحرائق الاحترافية",
    en: "Professional Firefighting Equipment",
    de: "Professionelle Feuerwehrausrüstung",
    es: "Equipo Profesional contra Incendios"
  },
  sousCategories: {
    'equipements-detection': {
      fr: "Équipements de Détection",
      ar: "معدات الكشف",
      en: "Detection Equipment",
      de: "Detektionsausrüstung",
      es: "Equipos de Detección"
    },
    'systemes-alarme': {
      fr: "Systèmes d'Alarme",
      ar: "أنظمة الإنذار",
      en: "Alarm Systems",
      de: "Alarmsysteme",
      es: "Sistemas de Alarma"
    },
    'extincteurs-materiel-extinction': {
      fr: "Extincteurs et Matériel d'Extinction",
      ar: "طفايات الحريق ومعدات الإطفاء",
      en: "Extinguishers and Extinguishing Equipment",
      de: "Löscher und Löschgeräte",
      es: "Extintores y Equipos de Extinción"
    },
    'equipements-protection-individuelle': {
      fr: "Équipements de Protection Individuelle",
      ar: "معدات الحماية الفردية",
      en: "Personal Protective Equipment",
      de: "Persönliche Schutzausrüstung",
      es: "Equipos de Protección Personal"
    },
    'materiel-sauvetage-evacuation': {
      fr: "Matériel de Sauvetage et d'Évacuation",
      ar: "معدات الإنقاذ والإخلاء",
      en: "Rescue and Evacuation Equipment",
      de: "Rettungs- und Evakuierungsausrüstung",
      es: "Equipos de Rescate y Evacuación"
    },
    'equipements-prevention-formation': {
      fr: "Équipements de Prévention et de Formation",
      ar: "معدات الوقاية والتدريب",
      en: "Prevention and Training Equipment",
      de: "Präventions- und Schulungsausrüstung",
      es: "Equipos de Prevención y Formación"
    },
    'vehicules-intervention-incendie': {
      fr: "Véhicules d'Intervention Incendie",
      ar: "مركبات مكافحة الحرائق",
      en: "Fire Intervention Vehicles",
      de: "Feuerwehreinsatzfahrzeuge",
      es: "Vehículos de Intervención contra Incendios"
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
  console.log('\n🎉 INTÉGRATION EXCELLENTE ! La catégorie "Matériel Professionnel d\'Incendie" est parfaitement intégrée.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ INTÉGRATION BONNE ! La catégorie est fonctionnelle avec quelques améliorations possibles.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ INTÉGRATION MOYENNE ! La catégorie nécessite des corrections importantes.');
} else {
  console.log('\n❌ INTÉGRATION ÉCHOUÉE ! La catégorie nécessite une refonte complète.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE');