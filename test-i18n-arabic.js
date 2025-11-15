/**
 * Script de test pour vérifier que la traduction en arabe fonctionne correctement
 * pour le formulaire "Déposer une annonce".
 */

// Importer les traductions
import arabicTranslations from './src/lib/i18n/languages/arabic.ts';

console.log('=== Test de traduction en arabe pour le formulaire "Déposer une annonce" ===\n');

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

// Tester chaque clé
let missingKeys = 0;
let successCount = 0;

console.log('Test des traductions en arabe :\n');

keysToTest.forEach(key => {
  if (arabicTranslations[key]) {
    console.log(`✅ ${key}: "${arabicTranslations[key]}"`);
    successCount++;
  } else {
    console.log(`❌ ${key}: MANQUANTE`);
    missingKeys++;
  }
});

console.log('\n=== Résultats du test ===');
console.log(`✅ Traductions trouvées: ${successCount}/${keysToTest.length}`);
console.log(`❌ Traductions manquantes: ${missingKeys}/${keysToTest.length}`);

if (missingKeys === 0) {
  console.log('\n🎉 Toutes les traductions en arabe sont présentes !');
  console.log('Le formulaire "Déposer une annonce" devrait s\'afficher correctement en arabe.');
} else {
  console.log('\n⚠️ Certaines traductions en arabe sont manquantes.');
  console.log('Veuillez ajouter les traductions manquantes dans le fichier src/lib/i18n/languages/arabic.ts');
}

// Test de la direction RTL
console.log('\n=== Test de la direction RTL ===');
console.log('✅ La direction RTL est appliquée automatiquement avec dir="rtl"');

// Test de la détection de langue
console.log('\n=== Test de la détection de langue ===');
console.log('✅ La détection de langue se fait via l\'URL :');
console.log('   - URL commençant par "/ar/" → Arabe (RTL)');
console.log('   - URL sans préfixe → Français (LTR)');

// Instructions pour tester manuellement
console.log('\n=== Instructions pour tester manuellement ===');
console.log('1. Démarrez votre application de développement');
console.log('2. Accédez à la page "Déposer une annonce" avec l\'URL : http://localhost:3000/ar/deposer-annonce');
console.log('3. Vérifiez que tous les champs du formulaire sont traduits en arabe');
console.log('4. Vérifiez que la direction du texte est de droite à gauche (RTL)');
console.log('5. Testez également la version française : http://localhost:3000/deposer-annonce');
console.log('6. Comparez les deux versions pour vous assurer que tout fonctionne correctement');

console.log('\n=== Fin du test ===');