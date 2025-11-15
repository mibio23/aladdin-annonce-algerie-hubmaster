/**
 * Script de test pour vérifier que les traductions du formulaire "Créer votre boutique"
 * sont présentes dans toutes les langues.
 */

import arabicTranslations from './src/lib/i18n/languages/arabic.ts';
import frenchTranslations from './src/lib/i18n/languages/french.ts';
import englishTranslations from './src/lib/i18n/languages/english.ts';
import germanTranslations from './src/lib/i18n/languages/german.ts';
import spanishTranslations from './src/lib/i18n/languages/spanish.ts';

console.log('=== Test de traduction multilingue pour le formulaire "Créer votre boutique" ===\n');

// Liste des clés de traduction à tester pour le formulaire "Créer votre boutique"
const keysToTest = [
  'createShop.title',
  'createShop.subtitle',
  'createShop.tips.title',
  'createShop.tips.clearName',
  'createShop.tips.qualityLogo',
  'createShop.tips.attractivePhotos',
  'createShop.tips.detailedDescription',
  'createShop.tips.reliableContact',
  'createShop.shopInfo.title',
  'createShop.shopInfo.name',
  'createShop.shopInfo.namePlaceholder',
  'createShop.shopInfo.description',
  'createShop.shopInfo.descriptionPlaceholder',
  'createShop.shopInfo.maxChars',
  'createShop.shopInfo.characters',
  'createShop.shopInfo.wilaya',
  'createShop.shopInfo.selectWilaya',
  'createShop.shopInfo.phoneNumbers',
  'createShop.shopInfo.phonePlaceholder',
  'createShop.shopInfo.addPhone',
  'createShop.shopInfo.logo',
  'createShop.shopInfo.addLogo',
  'createShop.shopInfo.productImages',
  'createShop.shopInfo.maxImages',
  'createShop.shopInfo.addImages',
  'createShop.options.isOnline',
  'createShop.options.hasVideoStory',
  'createShop.createShop',
  'createShop.creating',
  'createShop.validation.nameMinLength',
  'createShop.validation.descriptionMinLength',
  'createShop.validation.wilayaRequired',
  'createShop.help.title',
  'createShop.help.increasedVisibility.title',
  'createShop.help.increasedVisibility.description',
  'createShop.help.simplifiedManagement.title',
  'createShop.help.simplifiedManagement.description',
  'createShop.help.directContact.title',
  'createShop.help.directContact.description',
  'createShop.success.title',
  'createShop.success.description',
  'createShop.errors.loginRequiredTitle',
  'createShop.errors.loginRequiredDesc',
  'createShop.errors.requiredFieldsTitle',
  'createShop.errors.requiredFieldsDesc',
  'createShop.errors.genericErrorTitle',
  'createShop.errors.genericErrorDesc',
  'common.cancel',
  'common.delete',
  'common.loading'
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
  
  console.log(`\n=== Test des traductions du formulaire "Créer votre boutique" en ${language.name} (${language.code}) ===`);
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
    console.log(`🎉 Toutes les traductions du formulaire "Créer votre boutique" en ${language.name} sont présentes !`);
  }
});

// Résumé global
console.log('\n=== Résumé global ===');

if (overallSuccess) {
  console.log('🎉 Toutes les traductions du formulaire "Créer votre boutique" sont présentes dans toutes les langues !');
  console.log('Le formulaire "Créer votre boutique" devrait s\'afficher correctement dans toutes les langues.');
} else {
  console.log('⚠️ Certaines traductions du formulaire "Créer votre boutique" sont manquantes dans une ou plusieurs langues.');
  console.log('Veuillez ajouter les traductions manquantes dans les fichiers de langue correspondants.');
}

// Instructions pour tester manuellement
console.log('\n=== Instructions pour tester manuellement ===');
console.log('1. Démarrez votre application de développement');
console.log('2. Testez les différentes langues en utilisant les URL suivantes :');
console.log('   - Arabe: http://localhost:3000/ar/creer-boutique');
console.log('   - Français: http://localhost:3000/creer-boutique');
console.log('   - Anglais: http://localhost:3000/en/create-shop');
console.log('   - Allemand: http://localhost:3000/de/shop-erstellen');
console.log('   - Espagnol: http://localhost:3000/es/crear-tienda');
console.log('3. Vérifiez que tous les champs du formulaire "Créer votre boutique" sont traduits correctement');
console.log('4. Vérifiez que la direction du texte est correcte (RTL pour l\'arabe, LTR pour les autres)');

console.log('\n=== Fin du test ===');