// Script de validation CSS pour le projet AL@DDIN
import fs from 'fs';
import path from 'path';

console.log('🎨 VALIDATION CSS - AL@DDIN\n');

// Fonction pour vérifier les erreurs CSS courantes
function validateCSSFile(filePath, description) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${description}: Fichier manquant`);
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const errors = [];
    const warnings = [];
    
    // Vérifier les erreurs @apply avec des classes interdites
    const applyGroupMatches = content.match(/@apply.*group/g);
    if (applyGroupMatches) {
      errors.push(`@apply utilisé avec 'group': ${applyGroupMatches.length} occurrences`);
    }
    
    // Vérifier les erreurs @apply avec data attributes
    const applyDataMatches = content.match(/@apply.*data-\[/g);
    if (applyDataMatches) {
      errors.push(`@apply utilisé avec data attributes: ${applyDataMatches.length} occurrences`);
    }
    
    // Vérifier les erreurs @apply avec des classes inexistantes
    const applyDestructiveMatches = content.match(/@apply.*destructive/g);
    if (applyDestructiveMatches) {
      errors.push(`@apply utilisé avec 'destructive': ${applyDestructiveMatches.length} occurrences`);
    }
    
    // Vérifier les keyframes invalides
    const invalidKeyframeMatches = content.match(/@keyframes[^{]*[^a-zA-Z0-9_-]/g);
    if (invalidKeyframeMatches) {
      errors.push(`Noms de keyframes invalides: ${invalidKeyframeMatches.length} occurrences`);
    }
    
    // Vérifier les animations référencées mais non définies
    const animationRefs = content.match(/animation:[^;]*\s+([a-zA-Z0-9_-]+)/g) || [];
    const keyframeDefs = content.match(/@keyframes\s+([a-zA-Z0-9_-]+)/g) || [];
    
    const definedAnimations = keyframeDefs.map(def => def.replace('@keyframes ', ''));
    const referencedAnimations = animationRefs.map(ref => {
      const match = ref.match(/animation:[^;]*\s+([a-zA-Z0-9_-]+)/);
      return match ? match[1] : '';
    }).filter(Boolean);
    
    const missingAnimations = referencedAnimations.filter(anim => !definedAnimations.includes(anim));
    if (missingAnimations.length > 0) {
      warnings.push(`Animations référencées mais non définies: ${missingAnimations.join(', ')}`);
    }
    
    // Afficher les résultats
    if (errors.length === 0 && warnings.length === 0) {
      console.log(`✅ ${description}: Validation réussie`);
      return true;
    } else {
      console.log(`⚠️  ${description}: Problèmes détectés`);
      errors.forEach(error => console.log(`   ❌ Erreur: ${error}`));
      warnings.forEach(warning => console.log(`   ⚠️  Avertissement: ${warning}`));
      return false;
    }
  } catch (error) {
    console.log(`❌ ${description}: Erreur de lecture - ${error.message}`);
    return false;
  }
}

// Fonction pour vérifier la structure des fichiers CSS
function validateCSSStructure() {
  console.log('📁 Vérification de la structure CSS...');
  
  const requiredFiles = [
    { path: 'src/styles/base.css', desc: 'Styles de base' },
    { path: 'src/styles/components.css', desc: 'Styles des composants' },
    { path: 'src/styles/utilities.css', desc: 'Styles utilitaires' },
    { path: 'src/styles/rtl.css', desc: 'Styles RTL' }
  ];
  
  let structureValid = true;
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file.path)) {
      console.log(`❌ Fichier manquant: ${file.path}`);
      structureValid = false;
    } else {
      console.log(`✅ Fichier trouvé: ${file.path}`);
    }
  });
  
  return structureValid;
}

// Fonction pour vérifier les imports dans index.css
function validateCSSImports() {
  try {
    const indexPath = 'src/index.css';
    if (!fs.existsSync(indexPath)) {
      console.log('❌ Fichier index.css manquant');
      return false;
    }
    
    const content = fs.readFileSync(indexPath, 'utf8');
    const expectedImports = [
      './styles/base.css',
      './styles/components.css',
      './styles/utilities.css',
      './styles/rtl.css'
    ];
    
    const missingImports = expectedImports.filter(imp => !content.includes(imp));
    
    if (missingImports.length === 0) {
      console.log('✅ Imports CSS valides dans index.css');
      return true;
    } else {
      console.log('❌ Imports CSS manquants dans index.css:');
      missingImports.forEach(imp => console.log(`   - ${imp}`));
      return false;
    }
  } catch (error) {
    console.log(`❌ Erreur de validation des imports: ${error.message}`);
    return false;
  }
}

// Tests de validation CSS
console.log('🔍 DÉBUT DE LA VALIDATION CSS\n');

// Test 1: Structure des fichiers
const structureValid = validateCSSStructure();
console.log('');

// Test 2: Imports
const importsValid = validateCSSImports();
console.log('');

// Test 3: Validation des fichiers CSS
console.log('🎨 VALIDATION DES FICHIERS CSS');
const cssFiles = [
  { path: 'src/styles/base.css', desc: 'Styles de base' },
  { path: 'src/styles/components.css', desc: 'Styles des composants' },
  { path: 'src/styles/utilities.css', desc: 'Styles utilitaires' },
  { path: 'src/styles/rtl.css', desc: 'Styles RTL' }
];

let cssValidationPassed = 0;
cssFiles.forEach(file => {
  if (validateCSSFile(file.path, file.desc)) cssValidationPassed++;
});

console.log(`\n📊 Résultats validation CSS: ${cssValidationPassed}/${cssFiles.length} fichiers validés`);

// Test 4: Vérification des animations
console.log('\n🎬 VÉRIFICATION DES ANIMATIONS');
try {
  const baseContent = fs.readFileSync('src/styles/base.css', 'utf8');
  const componentsContent = fs.readFileSync('src/styles/components.css', 'utf8');
  
  const baseKeyframes = (baseContent.match(/@keyframes\s+([a-zA-Z0-9_-]+)/g) || [])
    .map(def => def.replace('@keyframes ', ''));
  
  const componentAnimations = (componentsContent.match(/animation:[^;]*/g) || [])
    .map(ref => ref.replace('animation:', '').trim().split(' ')[0]);
  
  console.log(`✅ Keyframes définis: ${baseKeyframes.length}`);
  console.log(`✅ Animations utilisées: ${componentAnimations.length}`);
  
  const missingAnimations = componentAnimations.filter(anim => 
    !baseKeyframes.includes(anim) && 
    !['fade-in', 'fade-out', 'scale-in', 'scale-out', 'slide-in-right', 'slide-out-right'].includes(anim)
  );
  
  if (missingAnimations.length === 0) {
    console.log('✅ Toutes les animations sont définies');
  } else {
    console.log(`⚠️  Animations manquantes: ${missingAnimations.join(', ')}`);
  }
} catch (error) {
  console.log(`❌ Erreur de vérification des animations: ${error.message}`);
}

// Résultat final
const totalTests = 3 + cssFiles.length; // structure + imports + validations
const passedTests = (structureValid ? 1 : 0) + (importsValid ? 1 : 0) + cssValidationPassed;
const successRate = Math.round((passedTests / totalTests) * 100);

console.log('\n' + '='.repeat(60));
console.log('🎉 RÉSULTATS FINAUX DE LA VALIDATION CSS');
console.log('='.repeat(60));

console.log(`\n📊 Score global: ${passedTests}/${totalTests} tests passés (${successRate}%)`);
console.log(`📁 Structure: ${structureValid ? '✅' : '❌'}`);
console.log(`📥 Imports: ${importsValid ? '✅' : '❌'}`);
console.log(`🎨 Fichiers CSS: ${cssValidationPassed}/${cssFiles.length}`);

if (successRate >= 90) {
  console.log('\n🎉 EXCELLENT ! La validation CSS est réussie');
} else if (successRate >= 75) {
  console.log('\n✅ BON ! La CSS est fonctionnelle avec quelques améliorations possibles');
} else if (successRate >= 50) {
  console.log('\n⚠️  ATTENTION ! La CSS a besoin de corrections importantes');
} else {
  console.log('\n❌ CRITIQUE ! La CSS nécessite des corrections immédiates');
}

console.log('\n🚀 Prochaines étapes:');
console.log('1. Exécuter "npm run dev" pour tester le développement');
console.log('2. Exécuter "npm run build" pour tester la production');
console.log('3. Vérifier le rendu dans le navigateur');

console.log('\n✨ Validation CSS terminée !');

// Code de sortie basé sur le succès
process.exit(successRate >= 75 ? 0 : 1);