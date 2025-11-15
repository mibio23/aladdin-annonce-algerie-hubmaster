#!/usr/bin/env node

/**
 * Script automatisé pour transférer le projet vers GitHub avec écrasement
 * Exécutez ce script avec: node github-automation-script.js
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Configuration GitHub
const GITHUB_URL = 'https://github.com/mibio23/aladdin-annonce-algerie-hub.git';
const USERNAME = 'mibio23';
const EMAIL = 'mibio23000@gmail.com';

// Fonction pour exécututer une commande et afficher le résultat
function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} terminé avec succès`);
    return result;
  } catch (error) {
    console.error(`❌ Erreur lors de ${description}:`);
    console.error(error.message);
    return null;
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Démarrage du transfert automatisé vers GitHub...\n');
  
  // Étape 1: Configuration Git
  console.log('📋 Étape 1: Configuration Git');
  runCommand(`git config user.name "${USERNAME}"`, 'Configuration du nom utilisateur');
  runCommand(`git config user.email "${EMAIL}"`, 'Configuration de l\'email');
  
  // Étape 2: Initialisation Git (si nécessaire)
  console.log('\n📋 Étape 2: Initialisation Git');
  runCommand('git init', 'Initialisation du dépôt Git');
  
  // Étape 3: Ajout du remote GitHub
  console.log('\n📋 Étape 3: Configuration du remote GitHub');
  runCommand(`git remote add origin ${GITHUB_URL}`, 'Ajout du remote origin');
  runCommand(`git remote set-url origin ${GITHUB_URL}`, 'Mise à jour du remote origin');
  
  // Étape 4: Ajout de tous les fichiers
  console.log('\n📋 Étape 4: Ajout des fichiers');
  runCommand('git add .', 'Ajout de tous les fichiers');
  
  // Étape 5: Vérification des fichiers
  console.log('\n📋 Étape 5: Vérification des fichiers');
  const status = runCommand('git status --porcelain', 'Vérification du statut');
  if (status) {
    console.log('Fichiers prêts à être commités:');
    console.log(status);
  } else {
    console.log('⚠️ Aucun fichier à commit. Le projet est peut-être déjà à jour.');
    return;
  }
  
  // Étape 6: Commit des modifications
  console.log('\n📋 Étape 6: Commit des modifications');
  const commitMessage = `Version 2.0.0 - Corrections complètes et améliorations

✅ CORRECTIONS APPLIQUÉES:
- Imports de traductions manquants (footer allemand, espagnol, arabe)
- Suppression des fichiers dupliqués et inutiles
- Amélioration de la sauvegarde automatique avec synchronisation Supabase
- Sécurisation de l'administration avec système de rôles
- Création des migrations Supabase manquantes

📂 FICHIERS AJOUTÉS/MODIFIÉS:
- src/lib/i18n/languages/*/index.ts (imports footer)
- src/hooks/useAutoSave.ts (sauvegarde cloud)
- src/hooks/useAdminAuth.ts (vérification rôles)
- src/components/admin/AdminProtectedRoute.tsx (protection routes)
- supabase/migrations/*.sql (nouvelles tables)
- Scripts d'application des migrations

🗑️ FICHIERS SUPPRIMÉS:
- src/pages/CreateShopPage.tsx.corrected
- src/lib/i18n/i18nContext.tsx.bak
- test-i18n-fix.js
- Autres fichiers temporaires

🔧 AMÉLIORATIONS TECHNIQUES:
- Performance optimisée
- Sécurité renforcée
- Sauvegarde automatique fiable
- Traductions cohérentes`;
  
  runCommand(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, 'Commit des modifications');
  
  // Étape 7: Force push (écrasement)
  console.log('\n📋 Étape 7: Transfert vers GitHub (Force Push)');
  console.log('⚠️ AVERTISSEMENT: Cette action va écraser complètement l\'ancien projet sur GitHub!');
  console.log('Appuyez sur Ctrl+C pour annuler ou attendez 5 secondes pour continuer...');
  
  // Attendre 5 secondes pour permettre à l'utilisateur d'annuler
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  const pushResult = runCommand('git push -f origin main', 'Force push vers GitHub');
  
  if (pushResult) {
    console.log('\n🎉 Transfert vers GitHub terminé avec succès!');
    console.log('📊 Votre projet est maintenant disponible sur: https://github.com/mibio23/aladdin-annonce-algerie-hub');
    
    // Étape 8: Instructions pour les prochaines étapes
    console.log('\n📋 Prochaines étapes recommandées:');
    console.log('1. Appliquez les migrations Supabase: node apply-migrations.js');
    console.log('2. Créez votre compte admin: node create-admin.js VOTRE_UUID_UTILISATEUR');
    console.log('3. Testez les fonctionnalités de l\'application');
    console.log('4. Créez une release sur GitHub pour marquer cette version');
    
    // Créer un fichier de suivi
    const followUpFile = join(process.cwd(), 'GITHUB_TRANSFER_COMPLETE.md');
    const followUpContent = `# Transfert GitHub Terminé ✅

Le projet AL@DDIN Annonce Algérie Hub a été transféré avec succès sur GitHub.

## 📊 Informations du transfert
- **Date**: ${new Date().toLocaleString()}
- **URL**: https://github.com/mibio23/aladdin-annonce-algerie-hub
- **Version**: 2.0.0

## 🚀 Prochaines étapes
1. Appliquer les migrations Supabase
   \`\`\`bash
   node apply-migrations.js
   \`\`\`

2. Créer un compte admin
   \`\`\`bash
   node create-admin.js VOTRE_UUID_UTILISATEUR
   \`\`\`

3. Tester l'application
   \`\`\`bash
   npm run dev
   \`\`\`

4. Accéder à l'administration: http://localhost:5173/admin

## 📋 Corrections appliquées
- Imports de traductions manquants
- Suppression des fichiers dupliqués
- Amélioration de la sauvegarde automatique
- Sécurisation de l'administration
- Création des migrations Supabase

Le projet est maintenant prêt pour la production! 🎉
`;
    
    writeFileSync(followUpFile, followUpContent);
    console.log(`\n📄 Fichier de suivi créé: ${followUpFile}`);
  } else {
    console.log('\n❌ Le transfert vers GitHub a échoué. Vérifiez les erreurs ci-dessus.');
    console.log('💡 Solutions possibles:');
    console.log('- Vérifiez votre connexion internet');
    console.log('- Vérifiez vos identifiants GitHub');
    console.log('- Assurez-vous d\'avoir les permissions nécessaires sur le dépôt');
  }
}

// Gérer les erreurs non capturées
process.on('unhandledRejection', (reason, promise) => {
  console.error('Erreur non gérée:', reason);
});

// Exécuter le script
main().catch(console.error);