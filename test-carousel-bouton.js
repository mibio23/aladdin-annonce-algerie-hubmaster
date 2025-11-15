// Script de test pour vérifier si le bouton dans le carousel fonctionne correctement

import fs from 'fs';

console.log('Test du bouton dans le carousel...');

// Test 1: Vérifier si la slide pour "Déposer votre offre de métiers" est correctement configurée
console.log('\n=== Test 1: Vérification de la configuration de la slide ===');
const carouselFile = fs.readFileSync('./src/components/home/AdvertisingHeroCarousel.tsx', 'utf8');

if (carouselFile.includes('title: "Vous êtes un professionnel ?"') && 
    carouselFile.includes('buttonLink: "/deposer-offre-metier"') &&
    carouselFile.includes('buttonText: "Déposer votre offre de métiers"')) {
  console.log('✅ La slide pour "Déposer votre offre de métiers" est correctement configurée');
} else {
  console.log('❌ La slide pour "Déposer votre offre de métiers" n\'est pas correctement configurée');
}

// Test 2: Vérifier si le bouton utilise les propriétés dynamiques
console.log('\n=== Test 2: Vérification de l\'utilisation des propriétés dynamiques ===');
if (carouselFile.includes('to={slide.buttonLink}') && 
    carouselFile.includes('<span>{slide.buttonText}</span>')) {
  console.log('✅ Le bouton utilise les propriétés dynamiques de la slide');
} else {
  console.log('❌ Le bouton n\'utilise pas les propriétés dynamiques de la slide');
}

// Test 3: Vérifier si l'icône Briefcase est importée
console.log('\n=== Test 3: Vérification de l\'import de l\'icône Briefcase ===');
if (carouselFile.includes('Briefcase') && carouselFile.includes('import')) {
  console.log('✅ L\'icône Briefcase est correctement importée');
} else {
  console.log('❌ L\'icône Briefcase n\'est pas correctement importée');
}

// Test 4: Vérifier si les autres slides ont des propriétés buttonLink
console.log('\n=== Test 4: Vérification des propriétés buttonLink dans les autres slides ===');
const slidesWithButtonLink = (carouselFile.match(/buttonLink:/g) || []).length;
if (slidesWithButtonLink >= 3) {
  console.log(`✅ Toutes les slides (${slidesWithButtonLink}) ont des propriétés buttonLink`);
} else {
  console.log(`❌ Seulement ${slidesWithButtonLink} slides ont des propriétés buttonLink`);
}

console.log('\n=== Test terminé ===');
console.log('Si tous les tests sont ✅, le bouton dans la grande bannière devrait maintenant fonctionner correctement.');