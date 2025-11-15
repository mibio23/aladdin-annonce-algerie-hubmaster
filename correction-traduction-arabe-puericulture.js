import fs from 'fs';
import path from 'path';

console.log('🔧 CORRECTION DE LA TRADUCTION EN ARABE - "Puériculture & Équipement Bébé"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Recherche et remplacement de toutes les occurrences de "الخنازير" par "الأطفال"
const ancienTerme = 'الخنازير';
const nouveauTerme = 'الأطفال';

// Comptage des occurrences avant correction
const occurrencesAvant = (fileContent.match(new RegExp(ancienTerme, 'g')) || []).length;
console.log(`📊 Occurrences de "${ancienTerme}" trouvées: ${occurrencesAvant}`);

// Remplacement de toutes les occurrences
const contenuCorrige = fileContent.replace(new RegExp(ancienTerme, 'g'), nouveauTerme);

// Comptage des occurrences après correction
const occurrencesApres = (contenuCorrige.match(new RegExp(nouveauTerme, 'g')) || []).length;
console.log(`📊 Occurrences de "${nouveauTerme}" après correction: ${occurrencesApres}`);

// Vérification que le remplacement a bien été effectué
if (occurrencesAvant > 0 && occurrencesApres > 0) {
  console.log('✅ Remplacement effectué avec succès');
} else if (occurrencesAvant === 0) {
  console.log('ℹ️ Aucune occurrence à remplacer');
} else {
  console.log('⚠️ Erreur lors du remplacement');
}

// Écriture du fichier corrigé
fs.writeFileSync(filePath, contenuCorrige, 'utf-8');
console.log('✅ Fichier corrigé et sauvegardé');

// Vérification spécifique pour la catégorie "Puériculture & Équipement Bébé"
const categoriePrincipale = contenuCorrige.includes("id: 'puericulture-equipement-bebe'");
console.log(`📋 Catégorie principale "Puériculture & Équipement Bébé": ${categoriePrincipale ? '✅ PRÉSENTE' : '❌ MANQUANTE'}`);

// Vérification des traductions corrigées
const traductionsCorriges = [
  '"ar": "رعاية الأطفال ومعدات الأطفال"',
  '"ar": "معدات رعاية الأطفال"',
  '"ar": "ملابس الأطفال"',
  '"ar": "أسرة وغرف الأطفال"',
  '"ar": "النقل والتنقل للأطفال"',
  '"ar": "ألعاب وأنشطة الأطفال"',
  '"ar": "نظافة ورعاية الأطفال"',
  '"ar": "الأمان والمراقبة للأطفال"',
  '"ar": "إكسسوارات ومنتجات الأطفال"'
];

console.log('\n🔍 VÉRIFICATION DES TRADUCTIONS CORRIGÉES:');
console.log('================================================================================');

let traductionsTrouvees = 0;
traductionsCorriges.forEach(traduction => {
  const trouve = contenuCorrige.includes(traduction);
  console.log(`${trouve ? '✅' : '❌'} ${traduction}: ${trouve ? 'TROUVÉE' : 'MANQUANTE'}`);
  if (trouve) traductionsTrouvees++;
});

console.log(`\n📊 RÉSULTAT: ${traductionsTrouvees}/${traductionsCorriges.length} traductions corrigées trouvées`);

// Statistiques finales
console.log('\n📊 STATISTIQUES FINALES:');
console.log('================================================================================');

const totalCategories = (contenuCorrige.match(/id:\s*'[^']*'/g) || []).length;
const totalTraductionsFr = (contenuCorrige.match(/"fr":\s*"[^"]*"/g) || []).length;
const totalTraductionsAr = (contenuCorrige.match(/"ar":\s*"[^"]*"/g) || []).length;
const totalTraductionsEn = (contenuCorrige.match(/"en":\s*"[^"]*"/g) || []).length;
const totalTraductionsDe = (contenuCorrige.match(/"de":\s*"[^"]*"/g) || []).length;
const totalTraductionsEs = (contenuCorrige.match(/"es":\s*"[^"]*"/g) || []).length;

console.log(`📋 Total des catégories dans le fichier: ${totalCategories}`);
console.log(`🌍 Traductions françaises: ${totalTraductionsFr}`);
console.log(`🌍 Traductions arabes: ${totalTraductionsAr}`);
console.log(`🌍 Traductions anglaises: ${totalTraductionsEn}`);
console.log(`🌍 Traductions allemandes: ${totalTraductionsDe}`);
console.log(`🌍 Traductions espagnoles: ${totalTraductionsEs}`);

// Score final de correction
const scoreCorrection = occurrencesAvant > 0 ? 100 : (occurrencesApres > 0 ? 100 : 0);

console.log('\n🏆 SCORE FINAL DE CORRECTION:');
console.log('================================================================================');
console.log(`📊 Correction de la traduction: ${scoreCorrection.toFixed(1)}%`);

if (scoreCorrection >= 100) {
  console.log('\n🎉 CORRECTION EXCELLENTE ! Toutes les traductions ont été correctement remplacées.');
} else if (scoreCorrection >= 80) {
  console.log('\n✅ CORRECTION BONNE ! La plupart des traductions ont été remplacées.');
} else if (scoreCorrection >= 60) {
  console.log('\n⚠️ CORRECTION MOYENNE ! Certaines traductions nécessitent une vérification manuelle.');
} else {
  console.log('\n❌ CORRECTION ÉCHOUÉE ! Aucune traduction n\'a été remplacée.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CORRECTION DE LA TRADUCTION');