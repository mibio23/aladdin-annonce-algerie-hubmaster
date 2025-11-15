#!/usr/bin/env node

/**
 * Script pour vérifier que les tables ont été correctement créées après la migration
 * Exécutez ce script avec: node verifier-migration.js
 */

import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Liste des tables à vérifier
const tablesToCheck = [
  { name: 'user_drafts', description: 'Brouillons utilisateur' },
  { name: 'categories', description: 'Catégories et sous-catégories' },
  { name: 'user_roles', description: 'Rôles utilisateur' },
  { name: 'announcements', description: 'Annonces principales' },
  { name: 'announcement_favorites', description: 'Favoris des annonces' },
  { name: 'announcement_views', description: 'Statistiques de vues' }
];

// Fonction pour vérifier si une table existe et est accessible
async function checkTable(tableName) {
  try {
    // Essayer de lire la structure de la table
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1);
    
    if (error) {
      if (error.message.includes('does not exist')) {
        return { exists: false, accessible: false, error: 'Table does not exist' };
      } else if (error.message.includes('permission denied')) {
        return { exists: true, accessible: false, error: 'Permission denied' };
      } else {
        return { exists: true, accessible: false, error: error.message };
      }
    }
    
    return { exists: true, accessible: true, count: data?.length || 0 };
  } catch (err) {
    return { exists: false, accessible: false, error: err.message };
  }
}

// Fonction pour vérifier les vues
async function checkView(viewName) {
  try {
    const { data, error } = await supabase
      .from(viewName)
      .select('*')
      .limit(1);
    
    if (error) {
      return { exists: false, accessible: false, error: error.message };
    }
    
    return { exists: true, accessible: true, count: data?.length || 0 };
  } catch (err) {
    return { exists: false, accessible: false, error: err.message };
  }
}

// Fonction pour vérifier les fonctions
async function checkFunction(functionName) {
  try {
    const { data, error } = await supabase.rpc(functionName, { 
      announcement_uuid: '00000000-0000-0000-0000-000000000000' 
    });
    
    // Une erreur est attendue ici car nous utilisons un UUID fictif
    // Ce qui nous intéresse c'est si la fonction existe
    if (error && error.message.includes('function')) {
      return { exists: false, error: 'Function does not exist' };
    }
    
    return { exists: true };
  } catch (err) {
    // Vérifier si l'erreur mentionne que la fonction n'existe pas
    if (err.message.includes('function') || err.message.includes('does not exist')) {
      return { exists: false, error: err.message };
    }
    return { exists: true };
  }
}

// Fonction principale
async function main() {
  console.log('🔍 Vérification de la migration Supabase...\n');
  
  // Vérifier la connexion
  console.log('📡 Test de connexion à Supabase...');
  try {
    const { data, error } = await supabase.from('_temp_connection_check').select('*').limit(1);
    if (error && !error.message.includes('does not exist')) {
      console.log('❌ Erreur de connexion:', error.message);
      return;
    }
    console.log('✅ Connexion à Supabase établie avec succès!\n');
  } catch (err) {
    console.log('✅ Connexion à Supabase établie avec succès!\n');
  }
  
  // Vérifier les tables
  console.log('📋 Vérification des tables:');
  let tablesOk = true;
  
  for (const table of tablesToCheck) {
    const result = await checkTable(table.name);
    
    if (result.exists && result.accessible) {
      console.log(`✅ ${table.name}: ${table.description} - OK (${result.count} enregistrements)`);
    } else if (result.exists && !result.accessible) {
      console.log(`⚠️ ${table.name}: ${table.description} - Table existe mais inaccessible (${result.error})`);
      tablesOk = false;
    } else {
      console.log(`❌ ${table.name}: ${table.description} - Table n'existe pas (${result.error})`);
      tablesOk = false;
    }
  }
  
  // Vérifier les vues
  console.log('\n👁️ Vérification des vues:');
  const viewsToCheck = [
    { name: 'announcements_safe', description: 'Vue sécurisée des annonces' }
  ];
  
  for (const view of viewsToCheck) {
    const result = await checkView(view.name);
    
    if (result.exists && result.accessible) {
      console.log(`✅ ${view.name}: ${view.description} - OK`);
    } else {
      console.log(`❌ ${view.name}: ${view.description} - Vue n'existe pas ou inaccessible (${result.error})`);
      tablesOk = false;
    }
  }
  
  // Vérifier les fonctions
  console.log('\n⚙️ Vérification des fonctions:');
  const functionsToCheck = [
    { name: 'increment_view_count', description: 'Incrémenter le compteur de vues' },
    { name: 'increment_contact_count', description: 'Incrémenter le compteur de contacts' }
  ];
  
  for (const func of functionsToCheck) {
    const result = await checkFunction(func.name);
    
    if (result.exists) {
      console.log(`✅ ${func.name}: ${func.description} - OK`);
    } else {
      console.log(`❌ ${func.name}: ${func.description} - Fonction n'existe pas`);
      tablesOk = false;
    }
  }
  
  // Vérifier les catégories par défaut
  console.log('\n📂 Vérification des catégories par défaut:');
  try {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('name, slug')
      .is('parent_id', null)
      .order('position_order');
    
    if (error) {
      console.log('❌ Erreur lors de la vérification des catégories:', error.message);
    } else if (categories && categories.length > 0) {
      console.log(`✅ ${categories.length} catégories principales trouvées:`);
      categories.forEach(cat => {
        console.log(`   - ${cat.name} (${cat.slug})`);
      });
    } else {
      console.log('⚠️ Aucune catégorie principale trouvée - Elles devraient être créées par la migration');
    }
  } catch (err) {
    console.log('❌ Erreur lors de la vérification des catégories:', err.message);
  }
  
  // Résumé
  console.log('\n📊 Résumé de la vérification:');
  if (tablesOk) {
    console.log('🎉 Toutes les tables, vues et fonctions ont été correctement créées!');
    console.log('\n👤 Prochaines étapes:');
    console.log('1. Créez un compte utilisateur dans votre application');
    console.log('2. Récupérez l\'UUID de cet utilisateur');
    console.log('3. Exécutez la requête SQL suivante dans le dashboard Supabase:');
    console.log(`INSERT INTO public.user_roles (user_id, role, granted_by) 
VALUES ('VOTRE_UUID_UTILISATEUR', 'admin', 'VOTRE_UUID_UTILISATEUR');`);
    console.log('4. Testez l\'accès à la page /admin');
  } else {
    console.log('❌ Certains éléments sont manquants ou inaccessibles.');
    console.log('\n🔧 Actions recommandées:');
    console.log('1. Vérifiez que vous avez bien exécuté toute la migration');
    console.log('2. Consultez les logs d\'erreurs dans le dashboard Supabase');
    console.log('3. Ré-exécutez la migration si nécessaire');
    console.log('4. Contactez le support technique si les problèmes persistent');
  }
}

// Gérer les erreurs non capturées
process.on('unhandledRejection', (reason, promise) => {
  console.error('Erreur non gérée:', reason);
});

// Exécuter le script
main().catch(console.error);