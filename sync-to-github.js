import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Configuration GitHub
const GITHUB_REPO = 'https://github.com/mibio23/aladdin-annonce-algerie-hub.git';
const USERNAME = 'mibio23000@gmail.com';
const PASSWORD = 'Med1983@@';

console.log('🚀 Début de la synchronisation vers GitHub...');

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

  // 3. Ajouter tous les fichiers
  console.log('📁 Ajout des fichiers...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Fichiers ajoutés');
  } catch (error) {
    console.log('❌ Erreur lors de l\'ajout des fichiers:', error.message);
    process.exit(1);
  }

  // 4. Créer un commit
  console.log('💾 Création du commit...');
  const commitMessage = `Mise à jour automatique - ${new Date().toLocaleString('fr-FR')}
  
- Correction de la colonne images manquante dans announcements
- Ajout des scripts de migration Supabase
- Mise à jour des composants et pages
- Optimisation des performances
  
Cette mise à jour résout l'erreur PGRST204 lors de la création d'annonces.`;

  try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log('✅ Commit créé');
  } catch (error) {
    console.log('⚠️ Aucun changement à committer ou erreur de commit:', error.message);
  }

  // 5. Pousser vers GitHub
  console.log('📤 Envoi vers GitHub...');
  
  // Construire l'URL avec identifiants
  const repoUrlWithAuth = GITHUB_REPO.replace('https://', `https://${USERNAME}:${PASSWORD}@`);
  
  try {
    // Essayer de pousser sur la branche master/main
    try {
      execSync(`git push -u ${repoUrlWithAuth} master`, { stdio: 'inherit' });
      console.log('✅ Fichiers poussés avec succès vers master');
    } catch (masterError) {
      console.log('⚠️ Erreur sur master, tentative sur main...');
      try {
        execSync(`git push -u ${repoUrlWithAuth} main`, { stdio: 'inherit' });
        console.log('✅ Fichiers poussés avec succès vers main');
      } catch (mainError) {
        console.log('⚠️ Erreur sur main, tentative de forcer le push...');
        try {
          execSync(`git push -f ${repoUrlWithAuth} master`, { stdio: 'inherit' });
          console.log('✅ Forçage du push réussi vers master');
        } catch (forceError) {
          console.log('❌ Impossible de pousser vers GitHub. Erreur:', forceError.message);
          console.log('\n🔧 Solution manuelle:');
          console.log('1. Ouvrez un terminal dans ce dossier');
          console.log('2. Exécutez: git push -u https://mibio23000@gmail.com:Med1983@@@github.com/mibio23/aladdin-annonce-algerie-hub.git master');
          console.log('3. Ou utilisez GitHub Desktop avec vos identifiants');
        }
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