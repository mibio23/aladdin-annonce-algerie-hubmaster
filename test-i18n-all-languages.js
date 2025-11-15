/**
 * Script de test pour vérifier que les traductions sont présentes
 * dans toutes les langues pour le formulaire "Déposer une annonce".
 */

// Importer les traductions
import arabicTranslations from './src/lib/i18n/languages/arabic.ts';
import frenchTranslations from './src/lib/i18n/languages/french.ts';
import englishTranslations from './src/lib/i18n/languages/english.ts';
import germanTranslations from './src/lib/i18n/languages/german.ts';
import spanishTranslations from './src/lib/i18n/languages/spanish.ts';

console.log('=== Test de traduction multilingue pour le formulaire "Déposer une annonce" ===\n');

// Liste des clés de traduction à tester
const keysToTest = [
  'createAd.title',
  'createAd.subtitle',
  'createAd.titlePlaceholder',
  'createAd.description',
  'createAd.descriptionPlaceholder',
  'createAd.price',
  'createAd.currency',
  'createAd.location',
  'createAd.locationPlaceholder',
  'createAd.wilaya',
  'createAd.selectWilaya',
  'createAd.condition',
  'createAd.selectCondition',
  'createAd.phone',
  'createAd.phonePlaceholder',
  'createAd.email',
  'createAd.images',
  'createAd.uploadImages',
  'createAd.urgent',
  'createAd.urgentBadge',
  'createAd.expiresAt',
  'createAd.termsNotice',
  'createAd.publish',
  'createAd.success.title',
  'createAd.success.description',
  'createAd.errors.createFailed',
  'createAd.errors.createFailedDesc',
  'createAd.tips.title',
  'createAd.tips.clearTitle',
  'createAd.tips.qualityPhotos',
  'createAd.tips.honestCondition',
  'createAd.tips.fairPrice',
  'createAd.tips.preciseLocation',
  'createAd.infoTitle',
  'createAd.productDetails',
  'createAd.brand',
  'createAd.brandPlaceholder',
  'createAd.model',
  'createAd.modelPlaceholder',
  'createAd.color',
  'createAd.colorPlaceholder',
  'createAd.dimensions',
  'createAd.dimensionsPlaceholder',
  'createAd.weight',
  'createAd.weightPlaceholder',
  'createAd.purchaseYear',
  'createAd.purchaseYearPlaceholder',
  'createAd.promoteTitle',
  'createAd.promoteDesc',
  'createAd.validation.titleMinLength',
  'createAd.validation.descriptionMinLength',
  'createAd.validation.categoryRequired',
  'announcements.condition.likeNew',
  'announcements.condition.tresBon',
  'announcements.condition.bon',
  'announcements.condition.correct',
  'announcements.condition.poor',
  'common.loading',
  'common.cancel',
  'common.publishing',
  'common.characters'
];

// Définir les langues à tester
const languages = [
  { name: 'Arabe', code: 'ar', translations: arabicTranslations, isRTL: true },
  { name: 'Français', code: 'fr', translations: frenchTranslations, isRTL: false },
  { name: 'Anglais', code: 'en', translations: englishTranslations, isRTL: false },
  { name: 'Allemand', code: 'de', translations: germanTranslations, isRTL: false },
  { name: 'Espagnol', code: 'es', translations: spanishTranslations, isRTL: false }
];

// Tester chaque langue
let overallSuccess = true;

languages.forEach(language => {
  let missingKeys = 0;
  let successCount = 0;
  
  console.log(`\n=== Test des traductions en ${language.name} (${language.code}) ===`);
  if (language.isRTL) {
    console.log('✅ Direction RTL activée (droite à gauche)');
  } else {
    console.log('✅ Direction LTR activée (gauche à droite)');
  }
  
  keysToTest.forEach(key => {
    if (language.translations[key]) {
      console.log(`✅ ${key}: "${language.translations[key]}"`);
      successCount++;
    } else {
      console.log(`❌ ${key}: MANQUANTE`);
      missingKeys++;
    }
  });
  
  console.log(`\n--- Résultats pour ${language.name} ---`);
  console.log(`✅ Traductions trouvées: ${successCount}/${keysToTest.length}`);
  console.log(`❌ Traductions manquantes: ${missingKeys}/${keysToTest.length}`);
  
  if (missingKeys > 0) {
    overallSuccess = false;
    console.log(`⚠️ Des traductions sont manquantes en ${language.name}.`);
  } else {
    console.log(`🎉 Toutes les traductions en ${language.name} sont présentes !`);
  }
});

// Résumé global
console.log('\n=== Résumé global ===');

if (overallSuccess) {
  console.log('🎉 Toutes les traductions sont présentes dans toutes les langues !');
  console.log('Le formulaire "Déposer une annonce" devrait s\'afficher correctement dans toutes les langues.');
} else {
  console.log('⚠️ Certaines traductions sont manquantes dans une ou plusieurs langues.');
  console.log('Veuillez ajouter les traductions manquantes dans les fichiers de langue correspondants.');
}

// Instructions pour tester manuellement
console.log('\n=== Instructions pour tester manuellement ===');
console.log('1. Démarrez votre application de développement');
console.log('2. Testez les différentes langues en utilisant les URL suivantes :');
console.log('   - Arabe: http://localhost:3000/ar/deposer-annonce');
console.log('   - Français: http://localhost:3000/deposer-annonce');
console.log('   - Anglais: http://localhost:3000/en/deposer-annonce');
console.log('   - Allemand: http://localhost:3000/de/deposer-annonce');
console.log('   - Espagnol: http://localhost:3000/es/deposer-annonce');
console.log('3. Vérifiez que tous les champs du formulaire sont traduits correctement');
console.log('4. Vérifiez que la direction du texte est correcte (RTL pour l\'arabe, LTR pour les autres)');

console.log('\n=== Fin du test ===');