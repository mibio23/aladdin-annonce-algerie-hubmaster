// Script de test pour vérifier si la redirection dans le header fonctionne correctement

import fs from 'fs';

console.log('Test de la redirection dans le header...');

// Test 1: Vérifier si le lien dans HeaderUserActions pointe vers le bon formulaire
console.log('\n=== Test 1: Vérification du lien dans HeaderUserActions.tsx ===');
const headerFile = fs.readFileSync('./src/components/layout/HeaderUserActions.tsx', 'utf8');

if (headerFile.includes('to="/deposer-offre-metier"') && 
    headerFile.includes('title={t(\'header.search\')}')) {
  console.log('✅ Le lien dans HeaderUserActions.tsx pointe correctement vers /deposer-offre-metier');
} else {
  console.log('❌ Le lien dans HeaderUserActions.tsx ne pointe pas correctement vers /deposer-offre-metier');
}

// Test 2: Vérifier si la route pour "deposer-offre-metier" est définie dans routesWithLanguage.tsx
console.log('\n=== Test 2: Vérification de la route dans routesWithLanguage.tsx ===');
const routesFile = fs.readFileSync('./src/config/routesWithLanguage.tsx', 'utf8');

if (routesFile.includes('deposer-offre-metier') && routesFile.includes('DeposerOffreMetier')) {
  console.log('✅ La route pour "deposer-offre-metier" est définie dans routesWithLanguage.tsx');
} else {
  console.log('❌ La route pour "deposer-offre-metier" n\'est pas définie dans routesWithLanguage.tsx');
}

// Test 3: Vérifier si le composant DeposerOffreMetier gère correctement l'authentification
console.log('\n=== Test 3: Vérification de la gestion de l\'authentification dans DeposerOffreMetier.tsx ===');
const deposerFile = fs.readFileSync('./src/pages/DeposerOffreMetier.tsx', 'utf8');

if (deposerFile.includes('useAuth') && 
    deposerFile.includes('!user') && 
    deposerFile.includes('navigate(\'/connexion\')')) {
  console.log('✅ Le composant DeposerOffreMetier gère correctement l\'authentification');
} else {
  console.log('❌ Le composant DeposerOffreMetier ne gère pas correctement l\'authentification');
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
console.log('Si tous les tests sont ✅, les redirections devraient fonctionner correctement.');