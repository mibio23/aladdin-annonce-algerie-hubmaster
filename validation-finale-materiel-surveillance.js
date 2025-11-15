import fs from 'fs';
import path from 'path';

console.log('📹 VALIDATION FINALE - "Matériel Professionnel de Surveillance"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Vérification de la présence de la nouvelle catégorie
const categoriePrincipale = fileContent.includes("id: 'materiel-professionnel-surveillance'");
console.log(`📋 Catégorie principale "Matériel Professionnel de Surveillance": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Sous-catégories attendues
const sousCategoriesAttendues = [
  'cameras-surveillance',
  'systemes-videosurveillance',
  'equipements-detection-intrusion',
  'systemes-controle-acces',
  'equipements-surveillance-sans-fil',
  'logiciels-surveillance',
  'equipements-enregistrement',
  'materiel-surveillance-specialise'
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
  'cameras-dome',
  'cameras-bullet',
  'cameras-ptz',
  'cameras-box',
  'cameras-cachees',
  'cameras-specialisees',
  'systemes-enregistrement',
  'moniteurs-surveillance',
  'serveurs-video',
  'logiciels-gestion',
  'equipements-transmission',
  'detecteurs-mouvement',
  'detecteurs-ouverture',
  'capteurs-vitrage',
  'barrieres-infrarouges',
  'systemes-alarme',
  'lecteurs-cartes',
  'claviers-numeriques',
  'serrures-electroniques',
  'controle-biometrique',
  'systemes-controle-distance',
  'cameras-ip',
  'systemes-wifi',
  'equipements-4g-5g',
  'reseaux-surveillance',
  'logiciels-analyse-video',
  'logiciels-detection',
  'logiciels-alerte',
  'enregistreurs-numeriques',
  'enregistreurs-reseau',
  'stockage-donnees',
  'equipements-sauvegarde',
  'equipements-surveillance-industrielle',
  'materiel-surveillance-routiere',
  'equipements-surveillance-maritime',
  'materiel-surveillance-aerienne'
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
    fr: "Matériel Professionnel de Surveillance",
    ar: "معدات المراقبة الاحترافية",
    en: "Professional Surveillance Equipment",
    de: "Professionelle Überwachungsausrüstung",
    es: "Equipo Profesional de Vigilancia"
  },
  sousCategories: {
    'cameras-surveillance': {
      fr: "Caméras de Surveillance",
      ar: "كاميرات المراقبة",
      en: "Surveillance Cameras",
      de: "Überwachungskameras",
      es: "Cámaras de Vigilancia"
    },
    'systemes-videosurveillance': {
      fr: "Systèmes de Vidéosurveillance",
      ar: "أنظمة المراقبة بالفيديو",
      en: "Video Surveillance Systems",
      de: "Videoüberwachungssysteme",
      es: "Sistemas de Videovigilancia"
    },
    'equipements-detection-intrusion': {
      fr: "Équipements de Détection d'Intrusion",
      ar: "معدات كشف الاختراق",
      en: "Intrusion Detection Equipment",
      de: "Einbruchdetektionsausrüstung",
      es: "Equipos de Detección de Intrusión"
    },
    'systemes-controle-acces': {
      fr: "Systèmes de Contrôle d'Accès",
      ar: "أنظمة التحكم في الوصول",
      en: "Access Control Systems",
      de: "Zutrittskontrollsysteme",
      es: "Sistemas de Control de Acceso"
    },
    'equipements-surveillance-sans-fil': {
      fr: "Équipements de Surveillance Sans Fil",
      ar: "معدات المراقبة اللاسلكية",
      en: "Wireless Surveillance Equipment",
      de: "Drahtlose Überwachungsausrüstung",
      es: "Equipos de Vigilancia Inalámbricos"
    },
    'logiciels-surveillance': {
      fr: "Logiciels de Surveillance",
      ar: "برامج المراقبة",
      en: "Surveillance Software",
      de: "Überwachungssoftware",
      es: "Software de Vigilancia"
    },
    'equipements-enregistrement': {
      fr: "Équipements d'Enregistrement",
      ar: "معدات التسجيل",
      en: "Recording Equipment",
      de: "Aufzeichnungsausrüstung",
      es: "Equipos de Grabación"
    },
    'materiel-surveillance-specialise': {
      fr: "Matériel de Surveillance Spécialisé",
      ar: "معدات مراقبة متخصصة",
      en: "Specialized Surveillance Equipment",
      de: "Spezialisierte Überwachungsausrüstung",
      es: "Equipos de Vigilancia Especializados"
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
  console.log('\n🎉 INTÉGRATION EXCELLENTE ! La catégorie "Matériel Professionnel de Surveillance" est parfaitement intégrée.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ INTÉGRATION BONNE ! La catégorie est fonctionnelle avec quelques améliorations possibles.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ INTÉGRATION MOYENNE ! La catégorie nécessite des corrections importantes.');
} else {
  console.log('\n❌ INTÉGRATION ÉCHOUÉE ! La catégorie nécessite une refonte complète.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE');