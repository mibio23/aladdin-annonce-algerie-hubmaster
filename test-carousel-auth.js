// Script de test pour vérifier si la gestion de l'authentification fonctionne correctement

import fs from 'fs';

console.log('Test de la gestion de l\'authentification dans le carousel...');

// Test 1: Vérifier si le hook useAuth est importé
console.log('\n=== Test 1: Vérification de l\'import du hook useAuth ===');
const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');

if (carouselFile.includes('import { useAuth } from \'@/contexts/AuthContext\'')) {
  console.log('✅ Le hook useAuth est correctement importé');
} else {
  console.log('❌ Le hook useAuth n\'est pas correctement importé');
}

// Test 2: Vérifier si le hook useAuth est utilisé
console.log('\n=== Test 2: Vérification de l\'utilisation du hook useAuth ===');
if (carouselFile.includes('const { user } = useAuth()')) {
  console.log('✅ Le hook useAuth est correctement utilisé');
} else {
  console.log('❌ Le hook useAuth n\'est pas correctement utilisé');
}

// Test 3: Vérifier si la gestion de l'authentification est implémentée
console.log('\n=== Test 3: Vérification de la gestion de l\'authentification ===');
if (carouselFile.includes('slide.id === 1 && !user') && 
    carouselFile.includes('to="/connexion"')) {
  console.log('✅ La gestion de l\'authentification est correctement implémentée');
} else {
  console.log('❌ La gestion de l\'authentification n\'est pas correctement implémentée');
}

// Test 4: Vérifier si le lien normal est préservé pour les utilisateurs connectés
console.log('\n=== Test 4: Vérification du lien normal pour les utilisateurs connectés ===');
if (carouselFile.includes('to={slide.buttonLink}')) {
  console.log('✅ Le lien normal est préservé pour les utilisateurs connectés');
} else {
  console.log('❌ Le lien normal n\'est pas préservé pour les utilisateurs connectés');
}

console.log('\n=== Test terminé ===');
console.log('Si tous les tests sont ✅, la gestion de l\'authentification devrait fonctionner correctement.');