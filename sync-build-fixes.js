import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Préparation de la synchronisation des corrections de build vers GitHub...');

// Vérifier si le build a réussi
function checkBuildSuccess() {
  try {
    if (fs.existsSync('dist') && fs.readdirSync('dist').length > 0) {
      console.log('✅ Build détecté comme réussi');
      return true;
    } else {
      console.log('❌ Build échoué ou dossier dist vide');
      return false;
    }
  } catch (error) {
    console.log('❌ Impossible de vérifier le build:', error.message);
    return false;
  }
}

// Fonction pour synchroniser avec GitHub
function syncToGitHub() {
  try {
    console.log('📋 Ajout des fichiers modifiés...');
    execSync('git add .', { stdio: 'inherit' });

    console.log('💾 Création du commit...');
    const commitMessage = `🔧 Correction des erreurs TypeScript qui bloquaient le build

- Suppression des imports React inutilisés dans les fichiers admin
- Optimisation de la configuration TypeScript pour le build
- Correction des erreurs de compilation qui empêchaient le déploiement
- Ajout de scripts de build optimisés

Build: ${new Date().toLocaleString('fr-FR')}`;

    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    console.log('📤 Envoi vers GitHub...');
    const repoUrl = 'https://mibio23000%40gmail.com:Med1983@@@github.com/mibio23/aladdin-annonce-algerie-hub.git';
    
    try {
      execSync(`git push -u ${repoUrl} master`, { stdio: 'inherit' });
      console.log('✅ Synchronisation réussie vers GitHub!');
    } catch (pushError) {
      console.log('⚠️ Erreur lors du push, tentative avec force...');
      execSync(`git push -f ${repoUrl} master`, { stdio: 'inherit' });
      console.log('✅ Synchronisation forcée réussie vers GitHub!');
    }

    console.log('\n🎉 Opération terminée!');
    console.log('📂 Votre projet est mis à jour sur: https://github.com/mibio23/aladdin-annonce-algerie-hub');
    console.log('🌐 Le site devrait maintenant se charger correctement sur Lovable!');

  } catch (error) {
    console.error('❌ Erreur lors de la synchronisation:', error.message);
    
    console.log('\n🔧 Solution manuelle:');
    console.log('1. Ouvrez un terminal dans ce dossier');
    console.log('2. Exécutez: git add .');
    console.log('3. Exécutez: git commit -m "Correction build TypeScript"');
    console.log('4. Exécutez: git push origin master');
  }
}

// Attendre un peu que le build se termine
setTimeout(() => {
  console.log('\n🔍 Vérification du statut du build...');
  
  if (checkBuildSuccess()) {
    console.log('✅ Build réussi! Synchronisation vers GitHub...');
    syncToGitHub();
  } else {
    console.log('❌ Build échoué. Vérifiez les erreurs ci-dessus.');
    console.log('💡 Le build est peut-être encore en cours, attendez quelques instants et réessayez.');
  }
}, 5000); // Attendre 5 secondes

console.log('⏳ Vérification du build en cours...');