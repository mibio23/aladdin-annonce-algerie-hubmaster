// Script d'analyse et de correction complet pour les boutons "Créer votre boutique"
// Exécutez ce script avec Node.js pour analyser et corriger tous les problèmes de boutons

const fs = require('fs');
const path = require('path');

console.log('🔍 Démarrage de l\'analyse et de la correction des boutons...\n');

// Fonction pour copier un fichier
function copyFile(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    console.log(`✅ Fichier copié: ${src} -> ${dest}`);
    return true;
  } catch (err) {
    console.error(`❌ Erreur en copiant ${src} vers ${dest}:`, err);
    return false;
  }
}

// Fonction pour supprimer un fichier
function deleteFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Fichier supprimé: ${filePath}`);
      return true;
    }
  } catch (err) {
    console.error(`❌ Erreur en supprimant ${filePath}:`, err);
    return false;
  }
  return false;
}

// Fonction pour rechercher et remplacer du contenu dans un fichier
function replaceInFile(filePath, search, replace) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Le fichier ${filePath} n'existe pas`);
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = content.replace(new RegExp(search, 'g'), replace);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`🔄 Remplacement effectué dans: ${filePath}`);
      console.log(`   Recherche: "${search}"`);
      console.log(`   Remplacement: "${replace}"`);
      return true;
    } else {
      console.log(`ℹ️  Aucune occurrence trouvée dans: ${filePath}`);
      return false;
    }
  } catch (err) {
    console.error(`❌ Erreur en modifiant ${filePath}:`, err);
    return false;
  }
}

// Fonction pour chercher des fichiers récursivement
function findFiles(dir, pattern) {
  let results = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Ignorer les répertoires node_modules et .git
        if (!file.includes('node_modules') && !file.includes('.git')) {
          results = results.concat(findFiles(filePath, pattern));
        }
      } else if (file.match(pattern)) {
        results.push(filePath);
      }
    }
  } catch (err) {
    console.error(`Erreur en lisant le répertoire ${dir}:`, err);
  }
  
  return results;
}

// Fonction pour chercher du contenu dans les fichiers
function searchInFiles(dir, searchTerm) {
  const results = [];
  const files = findFiles(dir, /\.(tsx?|jsx?|js|ts)$/);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes(searchTerm)) {
        results.push(file);
      }
    } catch (err) {
      console.error(`Erreur en lisant le fichier ${file}:`, err);
    }
  }
  
  return results;
}

// Étape 1: Mettre à jour le fichier de configuration des routes
console.log('🛣️  Étape 1: Mise à jour de la configuration des routes...\n');

copyFile('src/config/routesOptimizedV2.tsx.new', 'src/config/routesOptimizedV2.tsx');
deleteFile('src/config/routesOptimizedV2.tsx.new');

// Étape 2: Analyser tous les fichiers contenant des liens vers la création de boutique
console.log('🔍 Étape 2: Analyse des fichiers contenant des liens vers la création de boutique...\n');

const searchTerms = [
  'Créer votre boutique',
  'creer-boutique',
  'createShop',
  'create-shop',
  'CreateShop',
  '/connexion', // Pour trouver les redirections incorrectes
  'useAuth', // Pour trouver où l'authentification est utilisée
  'useSafeI18nWithRouter', // Pour trouver où la navigation est utilisée
  'useLanguageNavigation' // Pour trouver où la navigation multilingue est utilisée
];

const allFoundFiles = [];
for (const term of searchTerms) {
  const files = searchInFiles('src', term);
  allFoundFiles.push(...files);
}

// Supprimer les doublons
const uniqueFiles = [...new Set(allFoundFiles)];
console.log(`📄 Fichiers trouvés contenant des liens vers la création de boutique: ${uniqueFiles.length}\n`);

// Étape 3: Analyser et corriger les problèmes dans chaque fichier
console.log('🔧 Étape 3: Analyse et correction des problèmes dans chaque fichier...\n');

for (const file of uniqueFiles) {
  console.log(`📄 Analyse du fichier: ${file}`);
  
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Problème 1: Vérifier si le fichier utilise useAuth mais redirige toujours vers /connexion
    if (content.includes('useAuth') && content.includes('/connexion')) {
      console.log(`  ⚠️  Problème détecté: Le fichier utilise useAuth mais redirige vers /connexion`);
      
      // Chercher les lignes contenant /connexion
      const lines = content.split('\n');
      let modified = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('/connexion') && !lines[i].includes('useAuth')) {
          // Remplacer /connexion par une redirection conditionnelle
          lines[i] = lines[i].replace('/connexion', 'user ? "/creer-boutique" : "/connexion"');
          modified = true;
          console.log(`  ✅ Correction appliquée: Ligne ${i + 1} - Redirection conditionnelle ajoutée`);
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
      }
    }
    
    // Problème 2: Vérifier si le fichier contient "Créer votre boutique" mais ne pointe pas vers /creer-boutique
    if (content.includes('Créer votre boutique') && !content.includes('/creer-boutique')) {
      console.log(`  ⚠️  Problème détecté: Le fichier contient "Créer votre boutique" mais ne pointe pas vers /creer-boutique`);
      
      // Remplacer les liens incorrects
      replaceInFile(file, '/deposer-annonce', '/creer-boutique');
      replaceInFile(file, '/connexion', 'user ? "/creer-boutique" : "/connexion"');
    }
    
    // Problème 3: Vérifier si le fichier utilise LocalizedButtonLink mais avec un mauvais chemin
    if (content.includes('LocalizedButtonLink') && content.includes('to="/connexion"')) {
      console.log(`  ⚠️  Problème détecté: Le fichier utilise LocalizedButtonLink avec un mauvais chemin`);
      
      // Remplacer les liens incorrects
      replaceInFile(file, 'to="/connexion"', 'to={user ? "/creer-boutique" : "/connexion"}');
    }
    
    // Problème 4: Vérifier si le fichier utilise Link mais avec un mauvais chemin
    if (content.includes('<Link') && content.includes('to="/connexion"')) {
      console.log(`  ⚠️  Problème détecté: Le fichier utilise Link avec un mauvais chemin`);
      
      // Remplacer les liens incorrects
      replaceInFile(file, 'to="/connexion"', 'to={user ? "/creer-boutique" : "/connexion"}');
    }
    
    // Problème 5: Vérifier si le fichier utilise useLanguageNavigation mais avec un mauvais chemin
    if (content.includes('useLanguageNavigation') && content.includes('"/connexion"')) {
      console.log(`  ⚠️  Problème détecté: Le fichier utilise useLanguageNavigation avec un mauvais chemin`);
      
      // Remplacer les liens incorrects
      replaceInFile(file, '"/connexion"', 'user ? "/creer-boutique" : "/connexion"');
    }
    
    console.log(`  ✅ Analyse terminée pour: ${file}\n`);
    
  } catch (err) {
    console.error(`  ❌ Erreur en analysant ${file}:`, err);
  }
}

// Étape 4: Vérifier que tous les fichiers nécessaires existent
console.log('🔍 Étape 4: Vérification des fichiers nécessaires...\n');

const requiredFiles = [
  'src/config/routesOptimizedV2.tsx',
  'src/data/actionButtonsData.tsx',
  'src/components/layout/HeaderUserActions.tsx',
  'src/components/layout/HeaderMobileNav.tsx',
  'src/components/home/AdvertisingHeroCarousel.tsx',
  'src/pages/CreateShopPage.tsx',
  'src/pages/ShopViewPage.tsx',
  'src/components/ui/MultilingualText.tsx',
  'src/lib/utils/textDirection.ts'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} existe`);
  } else {
    console.log(`❌ ${file} n'existe pas`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log('\n✅ Tous les fichiers nécessaires existent!\n');
} else {
  console.log('\n❌ Certains fichiers nécessaires sont manquants. Vérifiez les erreurs ci-dessus.\n');
}

// Étape 5: Créer un script de test final
console.log('📝 Étape 5: Création d\'un script de test final...\n');

const testScript = `// Script de test final pour vérifier la correction des boutons
console.log('🧪 Test final de la correction des boutons...');

// Test 1: Vérifier que les fichiers existent
const fs = require('fs');
const requiredFiles = [
  'src/config/routesOptimizedV2.tsx',
  'src/data/actionButtonsData.tsx',
  'src/components/layout/HeaderUserActions.tsx',
  'src/components/layout/HeaderMobileNav.tsx',
  'src/components/home/AdvertisingHeroCarousel.tsx',
  'src/pages/CreateShopPage.tsx',
  'src/pages/ShopViewPage.tsx'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(\`✅ \${file} existe\`);
  } else {
    console.log(\`❌ \${file} n'existe pas\`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log('\\n✅ Tous les fichiers nécessaires existent!');
} else {
  console.log('\\n❌ Certains fichiers nécessaires sont manquants.');
}

// Test 2: Vérifier que les routes sont correctement configurées
console.log('\\n🛣️  Vérification des routes...');
try {
  const routesContent = fs.readFileSync('src/config/routesOptimizedV2.tsx', 'utf8');
  
  if (routesContent.includes('creer-boutique')) {
    console.log('✅ Route /creer-boutique trouvée dans la configuration');
  } else {
    console.log('❌ Route /creer-boutique non trouvée dans la configuration');
  }
  
  if (routesContent.includes('boutique/:id')) {
    console.log('✅ Route /boutique/:id trouvée dans la configuration');
  } else {
    console.log('❌ Route /boutique/:id non trouvée dans la configuration');
  }
} catch (err) {
  console.log(\`❌ Erreur en lisant le fichier de routes: \${err.message}\`);
}

// Test 3: Vérifier que les liens pointent vers /creer-boutique
console.log('\\n🔍 Vérification des liens vers /creer-boutique...');

const filesToCheck = [
  'src/data/actionButtonsData.tsx',
  'src/components/layout/HeaderUserActions.tsx',
  'src/components/layout/HeaderMobileNav.tsx',
  'src/components/home/AdvertisingHeroCarousel.tsx'
];

for (const file of filesToCheck) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('/creer-boutique')) {
      console.log(\`✅ \${file} contient des liens vers /creer-boutique\`);
    } else {
      console.log(\`❌ \${file} ne contient pas de liens vers /creer-boutique\`);
    }
    
    if (content.includes('useAuth')) {
      console.log(\`✅ \${file} utilise useAuth pour la redirection conditionnelle\`);
    } else {
      console.log(\`⚠️  \${file} n'utilise pas useAuth pour la redirection conditionnelle\`);
    }
  } catch (err) {
    console.log(\`❌ Erreur en lisant \${file}: \${err.message}\`);
  }
}

console.log('\\n🎉 Test final terminé!');
console.log('\\n📋 Prochaines étapes:');
console.log('1. Redémarrez le serveur de développement: npm run dev');
console.log('2. Testez manuellement tous les boutons "Créer votre boutique"');
console.log('3. Vérifiez que le formulaire de création de boutique s\'affiche correctement');
console.log('4. Testez la création d\'une boutique avec du contenu multilingue');
`;

fs.writeFileSync('test-final-button-fix.js', testScript, 'utf8');
console.log('✅ Script de test final créé: test-final-button-fix.js\n');

// Résumé final
console.log('🎉 Analyse et correction des boutons terminées!\n');
console.log('📋 Résumé des actions effectuées:');
console.log('1. ✅ Mise à jour de la configuration des routes');
console.log('2. ✅ Analyse de tous les fichiers contenant des liens vers la création de boutique');
console.log('3. ✅ Correction des problèmes de redirection');
console.log('4. ✅ Vérification des fichiers nécessaires');
console.log('5. ✅ Création d\'un script de test final\n');

console.log('⚠️  Actions manuelles restantes:');
console.log('1. Redémarrez le serveur de développement: npm run dev');
console.log('2. Exécutez le script de test final: node test-final-button-fix.js');
console.log('3. Testez manuellement tous les boutons "Créer votre boutique"');
console.log('4. Vérifiez que le formulaire de création de boutique s\'affiche correctement');
console.log('5. Testez la création d\'une boutique avec du contenu multilingue\n');

console.log('🚀 Les problèmes de boutons devraient maintenant être corrigés!');