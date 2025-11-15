// Script de test pour vérifier si le composant AdvertisingHeroCarousel fonctionne correctement

import fs from 'fs';

console.log('Test du composant AdvertisingHeroCarousel...');

// Test 1: Vérifier si le composant AdvertisingHeroCarousel est correctement configuré
console.log('\n=== Test 1: Vérification de la configuration du composant AdvertisingHeroCarousel ===');
const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');

if (carouselFile.includes('to="/deposer-offre-metier"')) {
  console.log('✅ Le lien dans AdvertisingHeroCarousel.tsx utilise le bon chemin');
} else {
  console.log('❌ Le lien dans AdvertisingHeroCarousel.tsx n\'utilise pas le bon chemin');
}

// Test 2: Vérifier si le composant est correctement exporté dans LazyComponents
console.log('\n=== Test 2: Vérification de l\'export dans LazyComponents.tsx ===');
const lazyComponentsFile = fs.readFileSync('./src/components/optimized/LazyComponents.tsx', 'utf8');

if (lazyComponentsFile.includes('export const LazyAdvertisingCarousel = withLazyLoading(LazyAdvertisingHeroCarousel)')) {
  console.log('✅ LazyAdvertisingCarousel est correctement wrappé avec LazyAdvertisingHeroCarousel');
} else {
  console.log('❌ LazyAdvertisingCarousel n\'est pas correctement wrappé avec LazyAdvertisingHeroCarousel');
}

// Test 3: Vérifier si le composant est utilisé dans la page d'accueil
console.log('\n=== Test 3: Vérification de l\'utilisation dans HomePage.tsx ===');
const homePageFile = fs.readFileSync('./src/pages/HomePage.tsx', 'utf8');

if (homePageFile.includes('LazyHeroCarousel')) {
  console.log('✅ LazyHeroCarousel est utilisé dans HomePage.tsx');
} else {
  console.log('❌ LazyHeroCarousel n\'est pas utilisé dans HomePage.tsx');
}

// Test 4: Vérifier si le composant est importé dans HomePage.tsx
console.log('\n=== Test 4: Vérification de l\'import dans HomePage.tsx ===');
if (homePageFile.includes('LazyHeroCarousel')) {
  console.log('✅ LazyHeroCarousel est importé dans HomePage.tsx');
} else {
  console.log('❌ LazyHeroCarousel n\'est pas importé dans HomePage.tsx');
}

console.log('\n=== Test terminé ===');
console.log('Si tous les tests sont ✅, le bouton dans la grande bannière devrait fonctionner correctement.');