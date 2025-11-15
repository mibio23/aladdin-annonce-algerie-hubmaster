import fs from 'fs';
import path from 'path';

console.log('🔧 VALIDATION FINALE DE LA CORRECTION EN ARABE');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Vérification de la présence de la nouvelle catégorie
const categoriePrincipale = fileContent.includes("id: 'puericulture-equipement-bebe'");
console.log(`📋 Catégorie principale "Puériculture & Équipement Bébé": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Vérification spécifique des traductions corrigées
console.log('\n🔍 VÉRIFICATION DES TRADUCTIONS CORRIGÉES:');
console.log('================================================================================');

const traductionsCorrigees = [
  {
    fr: "Puériculture & Équipement Bébé",
    ar: "رعاية الأطفال ومعدات الأطفال",
    en: "Poultry Farming & Baby Equipment",
    de: "Geflügelzucht & Babyausrüstung",
    es: "Avicultura y Equipamiento para Bebés"
  },
  {
    fr: "Équipements de Puériculture",
    ar: "معدات رعاية الأطفال",
    en: "Poultry Farming Equipment",
    de: "Geflügelzuchtausrüstung",
    es: "Equipos de Avicultura"
  },
  {
    fr: "Vêtements Bébé",
    ar: "ملابس الأطفال",
    en: "Baby Clothes",
    de: "Babykleidung",
    es: "Ropa de Bebé"
  },
  {
    fr: "Équipements d'Allaitement",
    ar: "معدات الرضاعة",
    en: "Breastfeeding Equipment",
    de: "Stillausrüstung",
    es: "Equipos de Lactancia"
  },
  {
    fr: "Lits et Chambres Bébé",
    ar: "أسرة وغرف الأطفال",
    en: "Baby Beds and Rooms",
    de: "Babybetten und Kinderzimmer",
    es: "Cunas y Habitaciones de Bebé"
  },
  {
    fr: "Transports et Déplacements Bébé",
    ar: "النقل والتنقل للأطفال",
    en: "Baby Transport and Mobility",
    de: "Babytransport und Mobilität",
    es: "Transporte y Movilidad para Bebés"
  },
  {
    fr: "Jouets et Activités Bébé",
    ar: "ألعاب وأنشطة الأطفال",
    en: "Baby Toys and Activities",
    de: "Babyspielzeug und Aktivitäten",
    es: "Juguetes y Actividades para Bebés"
  },
  {
    fr: "Hygiène et Soins Bébé",
    ar: "نظافة ورعاية الأطفال",
    en: "Baby Hygiene and Care",
    de: "Babyhygiene und Pflege",
    es: "Higiene y Cuidado del Bebé"
  },
  {
    fr: "Sécurité et Surveillance Bébé",
    ar: "الأمان والمراقبة للأطفال",
    en: "Baby Safety and Monitoring",
    de: "Babysicherheit und Überwachung",
    es: "Seguridad y Vigilancia para Bebés"
  },
  {
    fr: "Accessoires et Produits Bébé",
    ar: "إكسسوارات ومنتجات الأطفال",
    en: "Baby Accessories and Products",
    de: "Babyzubehör und Produkte",
    es: "Accesorios y Productos para Bebés"
  }
];

let traductionsTrouvees = 0;
const traductionsTotales = traductionsCorrigees.length * 5; // 5 langues par traduction

console.log('📋 Traductions corrigées:');
traductionsCorrigees.forEach((traduction, index) => {
  console.log(`\n📂 Traduction ${index + 1}:`);
  Object.entries(traduction).forEach(([langue, texte]) => {
    const trouve = fileContent.includes(`"${langue}": "${texte}"`);
    console.log(`${trouve ? '✅' : '❌'}   ${langue}: "${texte}" - ${trouve ? 'TROUVÉE' : 'MANQUANTE'}`);
    if (trouve) traductionsTrouvees++;
  });
});

console.log(`\n📊 RÉSULTAT: ${traductionsTrouvees}/${traductionsTotales} traductions trouvées`);

// Vérification qu'il n'y a plus d'occurrences du mot "الخنازير"
const ancienTerme = 'الخنازير';
const occurrencesAncienTerme = (fileContent.match(new RegExp(ancienTerme, 'g')) || []).length;
console.log(`\n🔍 VÉRIFICATION DE L'ABSENCE DE L'ANCIEN TERME:`);
console.log(`📊 Occurrences de "${ancienTerme}": ${occurrencesAncienTerme}`);

// Vérification de la présence du nouveau terme
const nouveauTerme = 'الأطفال';
const occurrencesNouveauTerme = (fileContent.match(new RegExp(nouveauTerme, 'g')) || []).length;
console.log(`📊 Occurrences de "${nouveauTerme}": ${occurrencesNouveauTerme}`);

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

// Score final de correction
const scoreCategoriePrincipale = categoriePrincipale ? 100 : 0;
const scoreTraductions = (traductionsTrouvees / traductionsTotales) * 100;
const scoreAncienTerme = occurrencesAncienTerme === 0 ? 100 : 0;
const scoreNouveauTerme = occurrencesNouveauTerme > 0 ? 100 : 0;

const scoreFinal = (scoreCategoriePrincipale + scoreTraductions + scoreAncienTerme + scoreNouveauTerme) / 4;

console.log('\n🏆 SCORE FINAL DE CORRECTION:');
console.log('================================================================================');
console.log(`📊 Catégorie principale: ${scoreCategoriePrincipale.toFixed(1)}%`);
console.log(`📊 Traductions corrigées: ${scoreTraductions.toFixed(1)}%`);
console.log(`📊 Absence de l'ancien terme: ${scoreAncienTerme.toFixed(1)}%`);
console.log(`📊 Présence du nouveau terme: ${scoreNouveauTerme.toFixed(1)}%`);
console.log(`🏆 SCORE FINAL: ${scoreFinal.toFixed(1)}%`);

if (scoreFinal >= 95) {
  console.log('\n🎉 CORRECTION EXCELLENTE ! Toutes les traductions ont été correctement remplacées.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ CORRECTION BONNE ! La plupart des traductions ont été remplacées.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ CORRECTION MOYENNE ! Certaines traductions nécessitent une vérification manuelle.');
} else {
  console.log('\n❌ CORRECTION ÉCHOUÉE ! Aucune traduction n\'a été remplacée.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE DE LA CORRECTION');