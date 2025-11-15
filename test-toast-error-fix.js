// Script de test pour vérifier que la correction de l'erreur toast.error a été appliquée correctement

import fs from 'fs';

console.log('=== TEST DE LA CORRECTION DE L\'ERREUR TOAST.ERROR ===');
console.log('Vérification de la correction de l\'erreur "toast.error is not a function"...\n');

// Test 1: Vérifier que toast.error a été remplacé par toast({...})
console.log('=== Test 1: Vérification de la correction de toast.error dans DeposerOffreMetier.tsx ===');
const deposerFile = fs.readFileSync('./src/pages/DeposerOffreMetier.tsx', 'utf8');

if (!deposerFile.includes('toast.error(') && 
    deposerFile.includes('toast({') &&
    deposerFile.includes('variant: \'destructive\'')) {
  console.log('✅ L\'erreur toast.error a été correctement corrigée dans DeposerOffreMetier.tsx');
} else {
  console.log('❌ L\'erreur toast.error n\'a pas été correctement corrigée dans DeposerOffreMetier.tsx');
}

// Test 2: Vérifier que toutes les utilisations de toast suivent le bon format
console.log('\n=== Test 2: Vérification du format de toutes les utilisations de toast ===');
const toastUsages = deposerFile.match(/toast\({[^}]*}\)/g) || [];

let allCorrectFormat = true;
toastUsages.forEach(usage => {
  if (!usage.includes('title:') || !usage.includes('description:')) {
    console.log(`⚠️  Utilisation de toast avec un format incorrect: ${usage}`);
    allCorrectFormat = false;
  }
});

if (allCorrectFormat && toastUsages.length > 0) {
  console.log(`✅ Toutes les ${toastUsages.length} utilisations de toast suivent le bon format`);
} else if (toastUsages.length === 0) {
  console.log('⚠️  Aucune utilisation de toast trouvée dans le fichier');
} else {
  console.log('❌ Certaines utilisations de toast ne suivent pas le bon format');
}

// Test 3: Vérifier que la gestion des erreurs d'authentification est correcte
console.log('\n=== Test 3: Vérification de la gestion des erreurs d\'authentification ===');
if (deposerFile.includes('React.useEffect(() => {') &&
    deposerFile.includes('if (!authLoading && !user)') &&
    deposerFile.includes('toast({') &&
    deposerFile.includes('navigate(\'/connexion\')')) {
  console.log('✅ La gestion des erreurs d\'authentification est correctement implémentée');
} else {
  console.log('❌ La gestion des erreurs d\'authentification n\'est pas correctement implémentée');
}

console.log('\n=== TEST TERMINÉ ===');
console.log('Vérifiez les résultats ci-dessus pour confirmer que la correction de l\'erreur toast.error a été appliquée correctement.');