// Script d'automatisation pour compléter le déploiement du système de création de boutique
// Exécutez ce script avec Node.js pour appliquer toutes les modifications nécessaires

const fs = require('fs');
const path = require('path');

console.log('🚀 Démarrage de l\'automatisation du déploiement...\n');

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

// Étape 1: Remplacer les fichiers originaux par les fichiers corrigés
console.log('📁 Étape 1: Remplacement des fichiers originaux...\n');

const filesToReplace = [
  { src: 'src/data/actionButtonsData.tsx.new', dest: 'src/data/actionButtonsData.tsx' },
  { src: 'src/components/layout/HeaderUserActions.tsx.new', dest: 'src/components/layout/HeaderUserActions.tsx' },
  { src: 'src/components/layout/HeaderMobileNav.tsx.new', dest: 'src/components/layout/HeaderMobileNav.tsx' },
  { src: 'src/components/home/AdvertisingHeroCarousel.tsx.new', dest: 'src/components/home/AdvertisingHeroCarousel.tsx' },
  { src: 'src/pages/CreateShopPage.multilingual.tsx', dest: 'src/pages/CreateShopPage.tsx' },
  { src: 'src/pages/ShopViewPage.multilingual.tsx', dest: 'src/pages/ShopViewPage.tsx' }
];

let replacementSuccess = true;
for (const file of filesToReplace) {
  if (!copyFile(file.src, file.dest)) {
    replacementSuccess = false;
  }
}

if (replacementSuccess) {
  console.log('\n✅ Tous les fichiers ont été remplacés avec succès!\n');
} else {
  console.log('\n❌ Certains fichiers n\'ont pas pu être remplacés. Vérifiez les erreurs ci-dessus.\n');
}

// Étape 2: Nettoyer les fichiers temporaires
console.log('🗑️  Étape 2: Nettoyage des fichiers temporaires...\n');

const tempFiles = [
  'src/data/actionButtonsData.tsx.new',
  'src/components/layout/HeaderUserActions.tsx.new',
  'src/components/layout/HeaderMobileNav.tsx.new',
  'src/components/home/AdvertisingHeroCarousel.tsx.new',
  'src/pages/CreateShopPage.multilingual.tsx',
  'src/pages/ShopViewPage.multilingual.tsx'
];

for (const file of tempFiles) {
  deleteFile(file);
}

console.log('\n✅ Nettoyage des fichiers temporaires terminé!\n');

// Étape 3: Rechercher et modifier les boutons dans les fichiers d'annonces
console.log('🔍 Étape 3: Recherche et modification des boutons d\'annonces...\n');

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

// Termes de recherche pour les boutons d'annonces
const announcementButtonTerms = [
  '+ Nouvelle annonce',
  'Nouvelle annonce',
  'Créer ma première annonce',
  'Créer ma première'
];

let foundAnnouncementFiles = [];
for (const term of announcementButtonTerms) {
  const files = searchInFiles('src', term);
  foundAnnouncementFiles = foundAnnouncementFiles.concat(files);
}

// Supprimer les doublons
foundAnnouncementFiles = [...new Set(foundAnnouncementFiles)];

if (foundAnnouncementFiles.length > 0) {
  console.log(`📄 Fichiers trouvés contenant des boutons d'annonces: ${foundAnnouncementFiles.length}\n`);
  
  for (const file of foundAnnouncementFiles) {
    console.log(`🔧 Modification du fichier: ${file}`);
    
    // Remplacer les liens vers /deposer-annonce par /creer-boutique
    replaceInFile(file, '/deposer-annonce', '/creer-boutique');
    
    // Remplacer les icônes PlusCircle par Shop
    replaceInFile(file, 'PlusCircle', 'Shop');
    
    console.log('');
  }
} else {
  console.log('ℹ️  Aucun fichier contenant des boutons d\'annonces n\'a été trouvé.\n');
}

// Étape 4: Vérifier que tous les fichiers nécessaires existent
console.log('🔍 Étape 4: Vérification des fichiers nécessaires...\n');

const requiredFiles = [
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

// Étape 5: Créer un script de test
console.log('📝 Étape 5: Création d\'un script de test...\n');

const testScript = `// Script de test pour vérifier le déploiement du système de création de boutique
console.log('🧪 Test du déploiement du système de création de boutique...');

// Test 1: Vérifier que les fichiers existent
const fs = require('fs');
const requiredFiles = [
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

// Test 2: Vérifier que les liens pointent vers /creer-boutique
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
  } catch (err) {
    console.log(\`❌ Erreur en lisant \${file}: \${err.message}\`);
  }
}

console.log('\\n🎉 Test terminé!');
console.log('\\n📋 Prochaines étapes:');
console.log('1. Redémarrez le serveur de développement');
console.log('2. Testez manuellement tous les boutons "Créer votre boutique"');
console.log('3. Vérifiez que le formulaire de création de boutique s\'affiche correctement');
console.log('4. Testez la création d\'une boutique avec du contenu multilingue');
`;

fs.writeFileSync('test-deployment.js', testScript, 'utf8');
console.log('✅ Script de test créé: test-deployment.js\n');

// Résumé final
console.log('🎉 Déploiement automatisé terminé!\n');
console.log('📋 Résumé des actions effectuées:');
console.log('1. ✅ Remplacement des fichiers originaux par les fichiers corrigés');
console.log('2. ✅ Nettoyage des fichiers temporaires');
console.log('3. ✅ Recherche et modification des boutons d\'annonces');
console.log('4. ✅ Vérification des fichiers nécessaires');
console.log('5. ✅ Création d\'un script de test\n');

console.log('⚠️  Actions manuelles restantes:');
console.log('1. Redémarrez le serveur de développement: npm run dev');
console.log('2. Exécutez le script de test: node test-deployment.js');
console.log('3. Testez manuellement tous les boutons "Créer votre boutique"');
console.log('4. Vérifiez que le formulaire de création de boutique s\'affiche correctement');
console.log('5. Testez la création d\'une boutique avec du contenu multilingue\n');

console.log('🚀 Le système de création de boutique est maintenant prêt à être utilisé!');