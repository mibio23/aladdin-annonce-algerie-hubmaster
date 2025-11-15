// Script de test pour vérifier si le bouton "Déposer votre offre de métiers" fonctionne correctement

import fs from 'fs';

console.log('Test du bouton "Déposer votre offre de métiers"...');

// Test 1: Vérifier si la route est définie dans routesWithLanguage.tsx
console.log('\n=== Test 1: Vérification de la route dans routesWithLanguage.tsx ===');
const routesFile = fs.readFileSync('./src/config/routesWithLanguage.tsx', 'utf8');

if (routesFile.includes('deposer-offre-metier') && routesFile.includes('DeposerOffreMetier')) {
  console.log('✅ La route pour "deposer-offre-metier" est définie dans routesWithLanguage.tsx');
} else {
  console.log('❌ La route pour "deposer-offre-metier" n\'est pas définie dans routesWithLanguage.tsx');
}

// Test 2: Vérifier si la route de redirection legacy est définie
console.log('\n=== Test 2: Vérification de la route de redirection legacy ===');
if (routesFile.includes('legacy-deposer-offre-metier')) {
  console.log('✅ La route de redirection legacy pour "deposer-offre-metier" est définie');
} else {
  console.log('❌ La route de redirection legacy pour "deposer-offre-metier" n\'est pas définie');
}

// Test 3: Vérifier si les liens dans les composants utilisent les chemins relatifs
console.log('\n=== Test 3: Vérification des liens dans les composants ===');

const quickActionsFile = fs.readFileSync('./src/components/dashboard/QuickActions.tsx', 'utf8');
if (quickActionsFile.includes('link: "/deposer-offre-metier"')) {
  console.log('✅ Le lien dans QuickActions.tsx utilise un chemin relatif');
} else {
  console.log('❌ Le lien dans QuickActions.tsx n\'utilise pas un chemin relatif');
}

const homePageFile = fs.readFileSync('./src/pages/HomePage.tsx', 'utf8');
if (homePageFile.includes('to="/deposer-offre-metier"')) {
  console.log('✅ Le lien dans HomePage.tsx utilise un chemin relatif');
} else {
  console.log('❌ Le lien dans HomePage.tsx n\'utilise pas un chemin relatif');
}

const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');
if (carouselFile.includes('to="/deposer-offre-metier"')) {
  console.log('✅ Le lien dans AdvertisingHeroCarousel.tsx utilise un chemin relatif');
} else {
  console.log('❌ Le lien dans AdvertisingHeroCarousel.tsx n\'utilise pas un chemin relatif');
}

// Test 4: Vérifier si le composant DeposerOffreMetier est exporté correctement
console.log('\n=== Test 4: Vérification de l\'export du composant DeposerOffreMetier ===');
const deposerOffreFile = fs.readFileSync('./src/pages/DeposerOffreMetier.tsx', 'utf8');
if (deposerOffreFile.includes('export default DeposerOffreMetier')) {
  console.log('✅ Le composant DeposerOffreMetier est exporté correctement');
} else {
  console.log('❌ Le composant DeposerOffreMetier n\'est pas exporté correctement');
}

console.log('\n=== Test terminé ===');
console.log('Si tous les tests sont ✅, le bouton "Déposer votre offre de métiers" devrait fonctionner correctement.');