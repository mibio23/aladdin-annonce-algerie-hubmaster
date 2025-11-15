// Script de test pour vérifier que les modifications du formulaire ont été correctement appliquées

import fs from 'fs';

console.log('=== TEST DES MODIFICATIONS DU FORMULAIRE ===');
console.log('Vérification des modifications du formulaire "Déposer votre offre de métiers"...\n');

// Test 1: Vérifier que la mention "Vérifié par la plateforme Fiable" a été supprimée
console.log('=== Test 1: Vérification de la suppression de la mention "Vérifié par la plateforme Fiable" ===');
const deposerFile = fs.readFileSync('./src/pages/DeposerOffreMetier.tsx', 'utf8');

if (!deposerFile.includes('Vérifié par la plateforme') && 
    !deposerFile.includes('Fiable')) {
  console.log('✅ La mention "Vérifié par la plateforme Fiable" a été correctement supprimée');
} else {
  console.log('❌ La mention "Vérifié par la plateforme Fiable" n\'a pas été correctement supprimée');
}

// Test 2: Vérifier que le champ de téléphone a été remplacé par un tableau
console.log('\n=== Test 2: Vérification de la modification du champ de téléphone ===');
if (deposerFile.includes('telephones: [\'\', \'\', \'\']') &&
    deposerFile.includes('handleTelephoneChange') &&
    deposerFile.includes('addTelephoneField') &&
    deposerFile.includes('removeTelephoneField')) {
  console.log('✅ Le champ de téléphone a été correctement modifié pour supporter plusieurs numéros');
} else {
  console.log('❌ Le champ de téléphone n\'a pas été correctement modifié pour supporter plusieurs numéros');
}

// Test 3: Vérifier que les fonctions de gestion des téléphones sont présentes
console.log('\n=== Test 3: Vérification des fonctions de gestion des téléphones ===');
const telephoneFunctions = [
  'handleTelephoneChange',
  'addTelephoneField',
  'removeTelephoneField'
];

let allFunctionsPresent = true;
telephoneFunctions.forEach(func => {
  if (!deposerFile.includes(`const ${func}`)) {
    console.log(`❌ La fonction ${func} n\'est pas présente`);
    allFunctionsPresent = false;
  }
});

if (allFunctionsPresent) {
  console.log('✅ Toutes les fonctions de gestion des téléphones sont présentes');
}

// Test 4: Vérifier que la validation a été mise à jour
console.log('\n=== Test 4: Vérification de la mise à jour de la validation ===');
if (deposerFile.includes('hasValidTelephone = formData.telephones.some(tel => tel.trim() !== \'\')') &&
    deposerFile.includes('au moins un numéro de téléphone')) {
  console.log('✅ La validation a été correctement mise à jour pour les numéros de téléphone');
} else {
  console.log('❌ La validation n\'a pas été correctement mise à jour pour les numéros de téléphone');
}

// Test 5: Vérifier que l'interface utilisateur a été mise à jour
console.log('\n=== Test 5: Vérification de la mise à jour de l\'interface utilisateur ===');
if (deposerFile.includes('Numéros de téléphone *') &&
    deposerFile.includes('Ajoutez jusqu\'à 3 numéros de téléphone') &&
    deposerFile.includes('formData.telephones.map') &&
    deposerFile.includes('Ajouter un numéro de téléphone')) {
  console.log('✅ L\'interface utilisateur a été correctement mise à jour pour les numéros de téléphone');
} else {
  console.log('❌ L\'interface utilisateur n\'a pas été correctement mise à jour pour les numéros de téléphone');
}

// Test 6: Vérifier que les icônes nécessaires ont été importées
console.log('\n=== Test 6: Vérification des imports d\'icônes ===');
if (deposerFile.includes('Plus, X') && 
    deposerFile.includes('from \'lucide-react\'')) {
  console.log('✅ Les icônes nécessaires ont été correctement importées');
} else {
  console.log('❌ Les icônes nécessaires n\'ont pas été correctement importées');
}

// Test 7: Vérifier que le traitement des données a été mis à jour
console.log('\n=== Test 7: Vérification du traitement des données ===');
if (deposerFile.includes('formData.telephones.filter(tel => tel.trim() !== \'\').join(\', \')') &&
    deposerFile.includes('link_url: formData.telephones.filter(tel => tel.trim() !== \'\').join(\', \')')) {
  console.log('✅ Le traitement des données a été correctement mis à jour pour les numéros de téléphone');
} else {
  console.log('❌ Le traitement des données n\'a pas été correctement mis à jour pour les numéros de téléphone');
}

console.log('\n=== TEST TERMINÉ ===');
console.log('Vérifiez les résultats ci-dessus pour confirmer que les modifications du formulaire ont été correctement appliquées.');