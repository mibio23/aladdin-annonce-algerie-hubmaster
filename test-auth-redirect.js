// Script de test pour vérifier que la redirection automatique après la connexion a été correctement implémentée

import fs from 'fs';

console.log('=== TEST DE LA REDIRECTION AUTOMATIQUE APRÈS CONNEXION ===');
console.log('Vérification de l\'implémentation de la redirection automatique après connexion...\n');

// Test 1: Vérifier que AdvertisingHeroCarousel stocke l'URL de redirection
console.log('=== Test 1: Vérification du stockage de l\'URL de redirection dans AdvertisingHeroCarousel.tsx ===');
const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');

if (carouselFile.includes('sessionStorage.setItem(\'authRedirectUrl\', slide.buttonLink)')) {
  console.log('✅ AdvertisingHeroCarousel stocke correctement l\'URL de redirection');
} else {
  console.log('❌ AdvertisingHeroCarousel ne stocke pas correctement l\'URL de redirection');
}

// Test 2: Vérifier que DeposerOffreMetier stocke l'URL de redirection
console.log('\n=== Test 2: Vérification du stockage de l\'URL de redirection dans DeposerOffreMetier.tsx ===');
const deposerFile = fs.readFileSync('./src/pages/DeposerOffreMetier.tsx', 'utf8');

if (deposerFile.includes('sessionStorage.setItem(\'authRedirectUrl\', window.location.pathname)')) {
  console.log('✅ DeposerOffreMetier stocke correctement l\'URL de redirection');
} else {
  console.log('❌ DeposerOffreMetier ne stocke pas correctement l\'URL de redirection');
}

// Test 3: Vérifier que LocalizedButtonLink gère la redirection
console.log('\n=== Test 3: Vérification de la gestion de la redirection dans LocalizedButtonLink ===');
const linkUtilsFile = fs.readFileSync('./src/utils/linkUtils.tsx', 'utf8');

if (linkUtilsFile.includes('sessionStorage.setItem(\'authRedirectUrl\', localizedPath)') &&
    linkUtilsFile.includes('requiresAuth') &&
    linkUtilsFile.includes('/deposer-offre-metier')) {
  console.log('✅ LocalizedButtonLink gère correctement la redirection pour les liens nécessitant une authentification');
} else {
  console.log('❌ LocalizedButtonLink ne gère pas correctement la redirection pour les liens nécessitant une authentification');
}

// Test 4: Vérifier que AuthContext utilise l'URL de redirection stockée
console.log('\n=== Test 4: Vérification de l\'utilisation de l\'URL de redirection dans AuthContext.tsx ===');
const authContextFile = fs.readFileSync('./src/contexts/AuthContext.tsx', 'utf8');

if (authContextFile.includes('sessionStorage.getItem(\'authRedirectUrl\')') &&
    authContextFile.includes('sessionStorage.removeItem(\'authRedirectUrl\')') &&
    authContextFile.includes('window.location.href = redirectUrl')) {
  console.log('✅ AuthContext utilise correctement l\'URL de redirection stockée');
} else {
  console.log('❌ AuthContext n\'utilise pas correctement l\'URL de redirection stockée');
}

// Test 5: Vérifier que tous les imports nécessaires sont présents
console.log('\n=== Test 5: Vérification des imports nécessaires ===');
if (linkUtilsFile.includes('import { useAuth } from \'@/contexts/AuthContext\';')) {
  console.log('✅ L\'import useAuth est correctement ajouté à linkUtils.tsx');
} else {
  console.log('❌ L\'import useAuth n\'est pas correctement ajouté à linkUtils.tsx');
}

console.log('\n=== TEST TERMINÉ ===');
console.log('Vérifiez les résultats ci-dessus pour confirmer que la redirection automatique après connexion a été correctement implémentée.');
console.log('\nScénario de test attendu :');
console.log('1. Un utilisateur non connecté clique sur "Déposer votre offre de métiers"');
console.log('2. L\'URL est stockée dans sessionStorage');
console.log('3. L\'utilisateur est redirigé vers la page de connexion');
console.log('4. Après la connexion, l\'utilisateur est automatiquement redirigé vers "Déposer votre offre de métiers"');