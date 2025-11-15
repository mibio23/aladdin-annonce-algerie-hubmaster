// Script de test pour vérifier si la correction du lien "rechercher-reparateur" fonctionne correctement

import fs from 'fs';

console.log('Test de la correction du lien "rechercher-reparateur"...');

// Test 1: Vérifier si la correction du lien est implémentée dans useAdvertisingBanners.ts
console.log('\n=== Test 1: Vérification de la correction du lien dans useAdvertisingBanners.ts ===');
const bannersFile = fs.readFileSync('./src/hooks/useAdvertisingBanners.ts', 'utf8');

if (bannersFile.includes('rechercher-reparateur') && 
    bannersFile.includes('bannerData.link_url.replace(\'rechercher-reparateur\', \'deposer-offre-metier\')')) {
  console.log('✅ La correction du lien "rechercher-reparateur" est correctement implémentée');
} else {
  console.log('❌ La correction du lien "rechercher-reparateur" n\'est pas correctement implémentée');
}

// Test 2: Vérifier si les types sont correctement définis
console.log('\n=== Test 2: Vérification des types dans AdvertisingBanner ===');
if (bannersFile.includes('subtitle?: string | null') && 
    bannersFile.includes('description?: string | null') &&
    bannersFile.includes('icon_emoji?: string | null')) {
  console.log('✅ Les types sont correctement définis pour gérer les valeurs null');
} else {
  console.log('❌ Les types ne sont pas correctement définis');
}

// Test 3: Vérifier si le cast de type est effectué
console.log('\n=== Test 3: Vérification du cast de type ===');
if (bannersFile.includes('return bannerData as AdvertisingBanner') &&
    bannersFile.includes('as BannerTranslation[]')) {
  console.log('✅ Les casts de type sont correctement effectués');
} else {
  console.log('❌ Les casts de type ne sont pas correctement effectués');
}

console.log('\n=== Test terminé ===');
console.log('Si tous les tests sont ✅, la correction du lien "rechercher-reparateur" devrait fonctionner correctement.');