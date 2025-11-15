// Script de test final pour vérifier que toutes les corrections ont été appliquées correctement

import fs from 'fs';

console.log('=== TEST FINAL DE LA SOLUTION ===');
console.log('Vérification de toutes les corrections appliquées...\n');

// Test 1: Vérifier que le lien a été corrigé dans actionButtonsData.tsx
console.log('=== Test 1: Vérification du lien dans actionButtonsData.tsx ===');
const actionButtonsFile = fs.readFileSync('./src/data/actionButtonsData.tsx', 'utf8');

if (actionButtonsFile.includes('to: "/deposer-offre-metier"') && 
    !actionButtonsFile.includes('to: "/rechercher-reparateur"')) {
  console.log('✅ Le lien a été correctement corrigé dans actionButtonsData.tsx');
} else {
  console.log('❌ Le lien n\'a pas été correctement corrigé dans actionButtonsData.tsx');
}

// Test 2: Vérifier que la route de redirection est définie dans routesWithLanguage.tsx
console.log('\n=== Test 2: Vérification de la route de redirection dans routesWithLanguage.tsx ===');
const routesFile = fs.readFileSync('./src/config/routesWithLanguage.tsx', 'utf8');

if (routesFile.includes('legacy-rechercher-reparateur') && 
    routesFile.includes('path="/rechercher-reparateur"') &&
    routesFile.includes('Navigate to={`/${languageConfig.defaultLanguage}/deposer-offre-metier`}')) {
  console.log('✅ La route de redirection pour "rechercher-reparateur" est correctement définie');
} else {
  console.log('❌ La route de redirection pour "rechercher-reparateur" n\'est pas correctement définie');
}

// Test 3: Vérifier que la route "deposer-offre-metier" est définie dans createLanguageRoutes
console.log('\n=== Test 3: Vérification de la route "deposer-offre-metier" dans createLanguageRoutes ===');
if (routesFile.includes('deposer-offre-metier-${language}') && 
    routesFile.includes('path={`${prefix}/deposer-offre-metier`}')) {
  console.log('✅ La route "deposer-offre-metier" est correctement définie dans createLanguageRoutes');
} else {
  console.log('❌ La route "deposer-offre-metier" n\'est pas correctement définie dans createLanguageRoutes');
}

// Test 4: Vérifier que la correction du lien dans useAdvertisingBanners.ts est toujours active
console.log('\n=== Test 4: Vérification de la correction du lien dans useAdvertisingBanners.ts ===');
const bannersFile = fs.readFileSync('./src/hooks/useAdvertisingBanners.ts', 'utf8');

if (bannersFile.includes('rechercher-reparateur') && 
    bannersFile.includes('bannerData.link_url.replace(\'rechercher-reparateur\', \'deposer-offre-metier\')')) {
  console.log('✅ La correction du lien "rechercher-reparateur" est toujours active');
} else {
  console.log('❌ La correction du lien "rechercher-reparateur" n\'est pas active');
}

// Test 5: Vérifier que le bouton dans AdvertisingHeroCarousel gère correctement l'authentification
console.log('\n=== Test 5: Vérification de la gestion de l\'authentification dans AdvertisingHeroCarousel.tsx ===');
const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');

if (carouselFile.includes('slide.id === 1 && !user') && 
    carouselFile.includes('to="/connexion"')) {
  console.log('✅ Le bouton dans AdvertisingHeroCarousel gère correctement l\'authentification');
} else {
  console.log('❌ Le bouton dans AdvertisingHeroCarousel ne gère pas correctement l\'authentification');
}

// Test 6: Vérifier que le composant DeposerOffreMetier gère correctement l'authentification
console.log('\n=== Test 6: Vérification de la gestion de l\'authentification dans DeposerOffreMetier.tsx ===');
const deposerFile = fs.readFileSync('./src/pages/DeposerOffreMetier.tsx', 'utf8');

if (deposerFile.includes('useAuth') && 
    deposerFile.includes('!user') && 
    deposerFile.includes('navigate(\'/connexion\')')) {
  console.log('✅ Le composant DeposerOffreMetier gère correctement l\'authentification');
} else {
  console.log('❌ Le composant DeposerOffreMetier ne gère pas correctement l\'authentification');
}

// Test 7: Vérifier que le lien dans HeaderUserActions.tsx pointe vers le bon formulaire
console.log('\n=== Test 7: Vérification du lien dans HeaderUserActions.tsx ===');
const headerFile = fs.readFileSync('./src/components/layout/HeaderUserActions.tsx', 'utf8');

if (headerFile.includes('to="/deposer-offre-metier"') && 
    headerFile.includes('title={t(\'header.search\')}')) {
  console.log('✅ Le lien dans HeaderUserActions.tsx pointe correctement vers /deposer-offre-metier');
} else {
  console.log('❌ Le lien dans HeaderUserActions.tsx ne pointe pas correctement vers /deposer-offre-metier');
}

// Test 8: Vérifier qu'il n'y a plus d'occurrences de "rechercher-reparateur" dans les fichiers du projet (hors tests et commentaires)
console.log('\n=== Test 8: Vérification des occurrences restantes de "rechercher-reparateur" ===');
const searchResults = [
  'deep-analysis.js',
  'test-reparateur-link.js',
  'test-url-redirection.js',
  'test-final-solution.js',
  'find-action-buttons-usage.js',
  'find-hero-banner-usage.js'
];

let remainingOccurrences = false;
const filesToCheck = [
  'src/data/actionButtonsData.tsx',
  'src/config/routesWithLanguage.tsx',
  'src/hooks/useAdvertisingBanners.ts',
  'src/components/home/AdvertisingHeroCarousel.tsx',
  'src/components/layout/HeaderUserActions.tsx',
  'src/pages/DeposerOffreMetier.tsx'
];

for (const file of filesToCheck) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('rechercher-reparateur') && !searchResults.some(test => file.includes(test))) {
      console.log(`⚠️  Occurrence restante dans ${file}`);
      remainingOccurrences = true;
    }
  } catch (error) {
    // Ignorer les erreurs de lecture de fichiers
  }
}

if (!remainingOccurrences) {
  console.log('✅ Aucune occurrence restante de "rechercher-reparateur" dans les fichiers du projet (hors tests et commentaires)');
} else {
  console.log('❌ Il reste des occurrences de "rechercher-reparateur" dans les fichiers du projet');
}

console.log('\n=== TEST FINAL TERMINÉ ===');
console.log('Vérifiez les résultats ci-dessus pour confirmer que toutes les corrections ont été appliquées correctement.');