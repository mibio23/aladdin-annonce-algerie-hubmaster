// Script de test pour vérifier si la redirection de l'URL directe fonctionne correctement

import fs from 'fs';

console.log('Test de la redirection de l\'URL directe...');

// Test 1: Vérifier si la route de redirection pour "rechercher-reparateur" est définie
console.log('\n=== Test 1: Vérification de la route de redirection dans routesWithLanguage.tsx ===');
const routesFile = fs.readFileSync('./src/config/routesWithLanguage.tsx', 'utf8');

if (routesFile.includes('legacy-rechercher-reparateur') && 
    routesFile.includes('path="/rechercher-reparateur"') &&
    routesFile.includes('Navigate to={`/${languageConfig.defaultLanguage}/deposer-offre-metier`}')) {
  console.log('✅ La route de redirection pour "rechercher-reparateur" est correctement définie');
} else {
  console.log('❌ La route de redirection pour "rechercher-reparateur" n\'est pas correctement définie');
}

// Test 2: Vérifier si la correction du lien dans useAdvertisingBanners.ts est toujours active
console.log('\n=== Test 2: Vérification de la correction du lien dans useAdvertisingBanners.ts ===');
const bannersFile = fs.readFileSync('./src/hooks/useAdvertisingBanners.ts', 'utf8');

if (bannersFile.includes('rechercher-reparateur') && 
    bannersFile.includes('bannerData.link_url.replace(\'rechercher-reparateur\', \'deposer-offre-metier\')')) {
  console.log('✅ La correction du lien "rechercher-reparateur" est toujours active');
} else {
  console.log('❌ La correction du lien "rechercher-reparateur" n\'est pas active');
}

// Test 3: Vérifier si la route "deposer-offre-metier" est définie dans createLanguageRoutes
console.log('\n=== Test 3: Vérification de la route "deposer-offre-metier" dans createLanguageRoutes ===');
if (routesFile.includes('deposer-offre-metier-${language}') && 
    routesFile.includes('path={`${prefix}/deposer-offre-metier`}')) {
  console.log('✅ La route "deposer-offre-metier" est correctement définie dans createLanguageRoutes');
} else {
  console.log('❌ La route "deposer-offre-metier" n\'est pas correctement définie dans createLanguageRoutes');
}

// Test 4: Vérifier si le bouton dans AdvertisingHeroCarousel gère correctement l'authentification
console.log('\n=== Test 4: Vérification de la gestion de l\'authentification dans AdvertisingHeroCarousel.tsx ===');
const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');

if (carouselFile.includes('slide.id === 1 && !user') && 
    carouselFile.includes('to="/connexion"')) {
  console.log('✅ Le bouton dans AdvertisingHeroCarousel gère correctement l\'authentification');
} else {
  console.log('❌ Le bouton dans AdvertisingHeroCarousel ne gère pas correctement l\'authentification');
}

console.log('\n=== Test terminé ===');
console.log('Si tous les tests sont ✅, la redirection de l\'URL directe devrait fonctionner correctement.');
console.log('L\'URL http://localhost:8086/fr/rechercher-reparateur devrait maintenant rediriger vers http://localhost:8086/fr/deposer-offre-metier');