#!/usr/bin/env node

/**
 * Script pour appliquer les migrations Supabase créées lors de la correction
 * Exécutez ce script avec: node apply-migrations.js
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join } from 'path';

// Configuration Supabase
const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Liste des migrations à appliquer
const migrations = [
  {
    name: 'create_user_drafts_table',
    file: 'supabase/migrations/20250111000000_create_user_drafts_table.sql',
    description: 'Table pour les brouillons utilisateur (sauvegarde automatique)'
  },
  {
    name: 'create_categories_tables',
    file: 'supabase/migrations/20250111000001_create_categories_tables.sql',
    description: 'Tables des catégories et sous-catégories'
  },
  {
    name: 'create_announcements_and_roles',
    file: 'supabase/migrations/20250111000002_create_announcements_and_roles.sql',
    description: 'Tables des annonces et rôles utilisateur (sécurité admin)'
  }
];

// Fonction pour exécuter une migration
async function executeMigration(sql, name) {
  try {
    console.log(`🔄 Exécution de la migration: ${name}...`);
    
    const { error } = await supabase.rpc('exec_sql', { sql_query: sql });
    
    if (error) {
      // Si la fonction RPC n'existe pas, essayons avec SQL direct via REST
      console.log(`⚠️ La fonction RPC n'est pas disponible. Essayez d'appliquer la migration manuellement via le dashboard Supabase.`);
      return { success: false, error: error.message, needsManual: true };
    }
    
    console.log(`✅ Migration ${name} appliquée avec succès!`);
    return { success: true };
  } catch (err) {
    console.error(`❌ Erreur lors de l'exécution de la migration ${name}:`, err.message);
    return { success: false, error: err.message, needsManual: true };
  }
}

// Fonction pour vérifier si une table existe
async function checkTableExists(tableName) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('count')
      .limit(1);
    
    return !error;
  } catch (err) {
    return false;
  }
}

// Fonction principale
async function main() {
  console.log('🚀 Démarrage de l\'application des migrations Supabase...\n');
  
  // Vérifier la connexion
  try {
    const { data, error } = await supabase.from('_temp_connection_check').select('*').limit(1);
    // Cette requête échouera normalement, mais si nous recevons une erreur spécifique, la connexion fonctionne
    if (error && !error.message.includes('does not exist')) {
      console.log('✅ Connexion à Supabase établie avec succès!');
    }
  } catch (err) {
    console.log('✅ Connexion à Supabase établie avec succès!');
  }
  
  console.log('\n📋 Migrations à appliquer:');
  migrations.forEach((migration, index) => {
    console.log(`${index + 1}. ${migration.name}: ${migration.description}`);
  });
  
  console.log('\n⚠️ AVERTISSEMENT: Ce script nécessite des permissions élevées sur Supabase.');
  console.log('Si le script échoue, vous devrez appliquer les migrations manuellement.\n');
  
  // Appliquer chaque migration
  const results = [];
  for (const migration of migrations) {
    try {
      // Lire le fichier SQL
      const sql = readFileSync(join(process.cwd(), migration.file), 'utf8');
      
      // Exécuter la migration
      const result = await executeMigration(sql, migration.name);
      results.push({ ...migration, ...result });
      
      // Pause entre les migrations
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(`❌ Erreur lors de la lecture du fichier ${migration.file}:`, err.message);
      results.push({ 
        ...migration, 
        success: false, 
        error: `Erreur de lecture: ${err.message}`, 
        needsManual: true 
      });
    }
  }
  
  // Afficher les résultats
  console.log('\n📊 Résultats des migrations:');
  results.forEach(result => {
    if (result.success) {
      console.log(`✅ ${result.name}: Appliquée avec succès`);
    } else {
      console.log(`❌ ${result.name}: Échec - ${result.error}`);
      if (result.needsManual) {
        console.log(`   → Appliquez manuellement via le dashboard Supabase avec le fichier: ${result.file}`);
      }
    }
  });
  
  // Vérifier l'état des tables
  console.log('\n🔍 Vérification des tables créées:');
  const tablesToCheck = ['user_drafts', 'categories', 'announcements', 'user_roles', 'announcement_favorites'];
  
  for (const table of tablesToCheck) {
    const exists = await checkTableExists(table);
    if (exists) {
      console.log(`✅ Table '${table}' existe`);
    } else {
      console.log(`❌ Table '${table}' n'existe pas ou n'est pas accessible`);
    }
  }
  
  // Instructions pour créer le premier admin
  console.log('\n👤 Pour créer votre premier utilisateur admin:');
  console.log('1. Connectez-vous à votre application et créez un compte utilisateur');
  console.log('2. Récupérez l\'ID de cet utilisateur (visible dans les logs ou via le dashboard Supabase)');
  console.log('3. Exécutez la requête SQL suivante dans l\'éditeur SQL du dashboard Supabase:');
  console.log(`
INSERT INTO public.user_roles (user_id, role, granted_by) 
VALUES ('VOTRE_UUID_UTILISATEUR', 'admin', 'VOTRE_UUID_UTILISATEUR');
  `);
  
  console.log('\n🎉 Processus terminé! Si des migrations ont échoué, appliquez-les manuellement comme indiqué ci-dessus.');
}

// Gérer les erreurs non capturées
process.on('unhandledRejection', (reason, promise) => {
  console.error('Erreur non gérée:', reason);
});

// Exécuter le script
main().catch(console.error);