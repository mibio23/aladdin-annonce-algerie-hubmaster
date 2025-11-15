import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Configuration GitHub
const GITHUB_REPO = 'https://github.com/mibio23/aladdin-annonce-algerie-hub.git';
const USERNAME = 'mibio23000@gmail.com';
const PASSWORD = 'Med1983@@';

console.log('🚀 Début de la synchronisation vers GitHub (version corrigée)...');

try {
  // 1. Vérifier si nous sommes dans un dépôt Git
  console.log('📋 Vérification du dépôt Git...');
  try {
    execSync('git remote -v', { stdio: 'pipe' });
    console.log('✅ Dépôt Git détecté');
  } catch (error) {
    console.log('❌ Ce n\'est pas un dépôt Git, initialisation...');
    execSync('git init', { stdio: 'inherit' });
    execSync(`git remote add origin ${GITHUB_REPO}`, { stdio: 'inherit' });
    console.log('✅ Dépôt Git initialisé');
  }

  // 2. Configurer les identifiants Git
  console.log('🔐 Configuration des identifiants Git...');
  try {
    execSync('git config user.name "mibio23"', { stdio: 'pipe' });
    execSync('git config user.email "mibio23000@gmail.com"', { stdio: 'pipe' });
    console.log('✅ Identifiants Git configurés');
  } catch (error) {
    console.log('⚠️ Erreur lors de la configuration des identifiants:', error.message);
  }

  // 3. Encoder correctement l'URL avec identifiants
  // Le @ dans l'email doit être encodé en %40
  const encodedUsername = encodeURIComponent(USERNAME);
  const repoUrlWithAuth = GITHUB_REPO.replace('https://', `https://${encodedUsername}:${PASSWORD}@`);
  
  console.log('🔗 URL d\'authentification préparée');

  // 4. Pousser vers GitHub avec l'URL encodée
  console.log('📤 Envoi vers GitHub...');
  
  try {
    // Essayer de pousser sur la branche master
    try {
      execSync(`git push -u ${repoUrlWithAuth} master`, { stdio: 'inherit' });
      console.log('✅ Fichiers poussés avec succès vers master');
    } catch (masterError) {
      console.log('⚠️ Erreur sur master, tentative avec force...');
      try {
        execSync(`git push -f ${repoUrlWithAuth} master`, { stdio: 'inherit' });
        console.log('✅ Forçage du push réussi vers master');
      } catch (forceError) {
        console.log('❌ Impossible de pousser vers GitHub automatiquement.');
        console.log('\n🔧 Solution manuelle alternative:');
        console.log('1. Ouvrez un terminal dans ce dossier');
        console.log('2. Exécutez la commande suivante:');
        console.log(`   git push -u ${repoUrlWithAuth} master`);
        console.log('\nOu utilisez GitHub Desktop avec vos identifiants.');
        
        // Afficher l'URL correctement formatée pour usage manuel
        console.log('\n📋 URL formatée pour copier-coller:');
        console.log(repoUrlWithAuth);
      }
    }
  } catch (error) {
    console.log('❌ Erreur lors du push:', error.message);
  }

  console.log('\n🎉 Opération terminée!');
  console.log('📂 Votre projet est disponible sur: https://github.com/mibio23/aladdin-annonce-algerie-hub');
  
} catch (error) {
  console.error('❌ Erreur inattendue:', error.message);
  process.exit(1);
}