// Script de test pour les traductions du formulaire "Déposer votre offre de métiers"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Test des traductions du formulaire "Déposer votre offre de métiers"');
console.log('=' .repeat(70));

// Langues à tester
const languages = ['arabic', 'english', 'german', 'spanish', 'french'];
const translationKeys = [
  'jobOffer.title',
  'jobOffer.subtitle',
  'jobOffer.offerTitle',
  'jobOffer.offerTitlePlaceholder',
  'jobOffer.profession',
  'jobOffer.selectProfession',
  'jobOffer.specialty',
  'jobOffer.specialtyPlaceholder',
  'jobOffer.description',
  'jobOffer.descriptionPlaceholder',
  'jobOffer.experience',
  'jobOffer.selectExperience',
  'jobOffer.availability',
  'jobOffer.selectAvailability',
  'jobOffer.rate',
  'jobOffer.ratePlaceholder',
  'jobOffer.currency',
  'jobOffer.workArea',
  'jobOffer.wilaya',
  'jobOffer.selectWilaya',
  'jobOffer.phoneNumbers',
  'jobOffer.phoneNumbersDesc',
  'jobOffer.phoneNumber',
  'jobOffer.addPhoneNumber',
  'jobOffer.email',
  'jobOffer.graduateCertified',
  'jobOffer.qualified',
  'jobOffer.homeVisit',
  'jobOffer.emergencyAvailable',
  'jobOffer.URGENT',
  'jobOffer.photos',
  'jobOffer.expirationDate',
  'jobOffer.publishOffer',
  'jobOffer.offerPublishedSuccess',
  'jobOffer.offerPublishedDesc',
  'jobOffer.error',
  'jobOffer.publishErrorDesc',
  'jobOffer.requiredFields',
  'jobOffer.requiredFieldsDesc',
  'jobOffer.loadingLocation',
  'jobOffer.loadingUpload',
  'jobOffer.loadingError',
  'jobOffer.loadingErrorDesc',
  'jobOffer.refreshPage',
  'jobOffer.termsAcceptance',
  'jobOffer.experience.beginner',
  'jobOffer.experience.intermediate',
  'jobOffer.experience.confirmed',
  'jobOffer.experience.expert',
  'jobOffer.availability.fullTime',
  'jobOffer.availability.partTime',
  'jobOffer.availability.weekend',
  'jobOffer.availability.evenings',
  'jobOffer.availability.seasonal',
  'jobOffer.availability.occasional',
  // Options pour les listes déroulantes
  'jobOffer.professions.plumber',
  'jobOffer.professions.electrician',
  'jobOffer.professions.mechanic',
  'jobOffer.professions.woodworker',
  'jobOffer.professions.painter',
  'jobOffer.professions.mason',
  'jobOffer.professions.roofer',
  'jobOffer.professions.tiler',
  'jobOffer.professions.gardener',
  'jobOffer.professions.tailor',
  'jobOffer.professions.cook',
  'jobOffer.professions.hairdresser',
  'jobOffer.professions.beautician',
  'jobOffer.professions.computerTechnician',
  'jobOffer.professions.heatingTechnician',
  'jobOffer.professions.applianceRepairman',
  'jobOffer.professions.welder',
  'jobOffer.professions.ironworker',
  'jobOffer.professions.glazier',
  'jobOffer.professions.bodyworker',
  'jobOffer.professions.cabinetmaker',
  'jobOffer.professions.upholsterer',
  'jobOffer.professions.airConditioningTechnician',
  'jobOffer.professions.photographer',
  'jobOffer.professions.videographer',
  'jobOffer.professions.translator',
  'jobOffer.professions.secretary',
  'jobOffer.professions.accountant',
  'jobOffer.professions.privateTeacher',
  'jobOffer.experienceLevels.beginner',
  'jobOffer.experienceLevels.intermediate',
  'jobOffer.experienceLevels.confirmed',
  'jobOffer.experienceLevels.expert'
];

// Fonction pour vérifier si une clé de traduction existe dans un fichier
function checkTranslationKey(filePath, key) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes(`'${key}'`) || content.includes(`"${key}"`);
  } catch (error) {
    console.error(`❌ Erreur lors de la lecture du fichier ${filePath}:`, error.message);
    return false;
  }
}

// Fonction pour extraire la valeur d'une clé de traduction
function extractTranslationValue(filePath, key) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = new RegExp(`['"]${key}['"]\\s*:\\s*['"]([^'"]+)['"]`, 'i');
    const match = content.match(regex);
    return match ? match[1] : null;
  } catch (error) {
    console.error(`❌ Erreur lors de l'extraction de la clé ${key} du fichier ${filePath}:`, error.message);
    return null;
  }
}

// Test des traductions
let allTestsPassed = true;

console.log('\n📋 Vérification des clés de traduction dans chaque langue:');
console.log('-'.repeat(70));

for (const lang of languages) {
  const filePath = path.join(__dirname, `src/lib/i18n/languages/${lang}.ts`);
  console.log(`\n🌍 ${lang.toUpperCase()}:`);
  
  let langTestsPassed = true;
  let missingKeys = [];
  
  for (const key of translationKeys) {
    const keyExists = checkTranslationKey(filePath, key);
    if (!keyExists) {
      missingKeys.push(key);
      langTestsPassed = false;
      allTestsPassed = false;
    }
  }
  
  if (langTestsPassed) {
    console.log(`  ✅ Toutes les clés de traduction sont présentes`);
    
    // Afficher quelques exemples de traductions
    const sampleKeys = ['jobOffer.title', 'jobOffer.offerTitle', 'jobOffer.publishOffer'];
    console.log('  📝 Exemples de traductions:');
    for (const key of sampleKeys) {
      const value = extractTranslationValue(filePath, key);
      console.log(`    ${key}: "${value}"`);
    }
  } else {
    console.log(`  ❌ Clés manquantes (${missingKeys.length}):`);
    missingKeys.forEach(key => console.log(`    - ${key}`));
  }
}

// Vérification du composant DeposerOffreMetier.tsx
console.log('\n🔍 Vérification du composant DeposerOffreMetier.tsx:');
console.log('-'.repeat(70));

const componentPath = path.join(__dirname, 'src/pages/DeposerOffreMetier.tsx');
try {
  const componentContent = fs.readFileSync(componentPath, 'utf8');
  
  // Vérifier si le composant utilise les clés de traduction
  const usesTranslationKeys = translationKeys.some(key => 
    componentContent.includes(`t('${key}')`) || componentContent.includes(`t("${key}")`)
  );
  
  if (usesTranslationKeys) {
    console.log('  ✅ Le composant utilise les clés de traduction');
    
    // Compter le nombre d'utilisations de clés de traduction
    const translationMatches = componentContent.match(/t\(['"]([^'"]+)['"]\)/g);
    const translationCount = translationMatches ? translationMatches.length : 0;
    console.log(`  📊 Nombre d'utilisations de clés de traduction: ${translationCount}`);
    
    // Vérifier les clés les plus importantes
    const importantKeys = [
      'jobOffer.title',
      'jobOffer.offerTitle',
      'jobOffer.publishOffer',
      'jobOffer.offerPublishedSuccess',
      'jobOffer.requiredFields'
    ];
    
    console.log('  🔑 Vérification des clés importantes:');
    for (const key of importantKeys) {
      const keyUsed = componentContent.includes(`t('${key}')`) || componentContent.includes(`t("${key}")`);
      console.log(`    ${key}: ${keyUsed ? '✅ Utilisée' : '❌ Non utilisée'}`);
    }
  } else {
    console.log('  ❌ Le composant n\'utilise pas les clés de traduction');
    allTestsPassed = false;
  }
} catch (error) {
  console.error(`❌ Erreur lors de la lecture du composant:`, error.message);
  allTestsPassed = false;
}

// Résumé des tests
console.log('\n' + '='.repeat(70));
console.log('📊 RÉSUMÉ DES TESTS:');
console.log('='.repeat(70));

if (allTestsPassed) {
  console.log('✅ Tous les tests sont passés avec succès!');
  console.log('🎉 Le formulaire "Déposer votre offre de métiers" est correctement traduit dans toutes les langues.');
} else {
  console.log('❌ Certains tests ont échoué.');
  console.log('🔧 Veuillez corriger les problèmes identifiés avant de continuer.');
}

// Instructions pour tester manuellement
console.log('\n📋 INSTRUCTIONS POUR TESTER MANUELLEMENT:');
console.log('-'.repeat(70));
console.log('1. Démarrez l\'application avec npm run dev');
console.log('2. Connectez-vous à votre compte utilisateur');
console.log('3. Cliquez sur le bouton "Déposer votre offre de métiers"');
console.log('4. Changez la langue en utilisant le sélecteur de langue');
console.log('5. Vérifiez que tous les éléments du formulaire sont traduits');
console.log('6. Testez avec les langues: Français, Anglais, Arabe, Allemand, Espagnol');
console.log('7. Vérifiez que les messages d\'erreur et de succès sont également traduits');

console.log('\n🏁 Fin du test de traductions');