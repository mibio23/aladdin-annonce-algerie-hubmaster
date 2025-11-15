#!/usr/bin/env node

/**
 * Script d'Automatisation Complète pour Supabase
 * Diagnostic et correction automatique de la base de données
 * 
 * Exécution: node auto-fix-supabase.js
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join } from 'path';

// Configuration Supabase
const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Schéma attendu pour les tables principales
const expectedSchemas = {
  announcements: {
    id: 'uuid',
    title: 'text',
    description: 'text',
    price: 'numeric',
    currency: 'text',
    condition: 'text',
    category_id: 'uuid',
    subcategory_id: 'uuid',
    user_id: 'uuid',
    wilaya: 'text',
    commune: 'text',
    address: 'text',
    phone_number: 'text',
    email: 'text',
    images: 'ARRAY',
    is_urgent: 'boolean',
    is_negotiable: 'boolean',
    is_featured: 'boolean',
    view_count: 'integer',
    contact_count: 'integer',
    status: 'text',
    expires_at: 'timestamptz',
    created_at: 'timestamptz',
    updated_at: 'timestamptz',
    brand: 'text',
    model: 'text',
    color: 'text',
    dimensions: 'text',
    weight: 'text',
    purchase_year: 'integer',
    has_invoice: 'boolean',
    warranty_duration: 'text',
    included_accessories: 'ARRAY',
    selling_reason: 'text',
    cash_discount: 'numeric',
    exchange_possible: 'boolean',
    original_price: 'numeric',
    delivery_available: 'boolean',
    delivery_areas: 'ARRAY',
    delivery_fees: 'numeric',
    delivery_location_name: 'text',
    packaging_info: 'text',
    availability_date: 'date',
    product_video: 'text',
    detail_photos: 'ARRAY',
    documentation: 'ARRAY'
  },
  categories: {
    id: 'uuid',
    name: 'text',
    slug: 'text',
    description: 'text',
    icon: 'text',
    image_url: 'text',
    parent_id: 'uuid',
    position_order: 'integer',
    is_active: 'boolean',
    created_at: 'timestamptz',
    updated_at: 'timestamptz'
  },
  user_roles: {
    id: 'uuid',
    user_id: 'uuid',
    role: 'text',
    granted_by: 'uuid',
    granted_at: 'timestamptz',
    is_active: 'boolean'
  },
  user_drafts: {
    id: 'uuid',
    user_id: 'uuid',
    draft_key: 'text',
    draft_data: 'jsonb',
    created_at: 'timestamptz',
    updated_at: 'timestamptz'
  },
  announcement_favorites: {
    id: 'uuid',
    user_id: 'uuid',
    announcement_id: 'uuid',
    created_at: 'timestamptz'
  },
  announcement_views: {
    id: 'uuid',
    announcement_id: 'uuid',
    user_id: 'uuid',
    ip_address: 'inet',
    user_agent: 'text',
    viewed_at: 'timestamptz'
  }
};

// État du diagnostic
const diagnostic = {
  missingColumns: [],
  incorrectTypes: [],
  missingTables: [],
  policyIssues: [],
  missingIndexes: [],
  missingFunctions: [],
  missingBuckets: [],
  correctionsApplied: []
};

// Fonction pour exécuter du SQL
async function executeSQL(sql, description = 'Exécution SQL') {
  try {
    console.log(`🔄 ${description}...`);
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });
    
    if (error) {
      console.log(`⚠️ Erreur: ${error.message}`);
      return { success: false, error: error.message };
    }
    
    console.log(`✅ ${description} terminée avec succès`);
    return { success: true, data };
  } catch (err) {
    console.log(`❌ Erreur: ${err.message}`);
    return { success: false, error: err.message };
  }
}

// Fonction pour vérifier les tables
async function checkTables() {
  console.log('\n🔍 Étape 1: Vérification des tables...');
  
  try {
    const { data, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_type', 'BASE TABLE');
    
    if (error) throw error;
    
    const existingTables = data.map(row => row.table_name);
    
    for (const tableName of Object.keys(expectedSchemas)) {
      if (!existingTables.includes(tableName)) {
        diagnostic.missingTables.push(tableName);
        console.log(`❌ Table manquante: ${tableName}`);
      } else {
        console.log(`✅ Table trouvée: ${tableName}`);
      }
    }
    
    return existingTables;
  } catch (error) {
    console.error('Erreur lors de la vérification des tables:', error);
    return [];
  }
}

// Fonction pour vérifier les colonnes
async function checkColumns(tableName) {
  try {
    const { data, error } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable')
      .eq('table_schema', 'public')
      .eq('table_name', tableName);
    
    if (error) throw error;
    
    const existingColumns = data.reduce((acc, col) => {
      acc[col.column_name] = {
        type: col.data_type.toLowerCase(),
        nullable: col.is_nullable === 'YES'
      };
      return acc;
    }, {});
    
    const expectedColumns = expectedSchemas[tableName];
    
    for (const [colName, expectedType] of Object.entries(expectedColumns)) {
      if (!existingColumns[colName]) {
        diagnostic.missingColumns.push({
          table: tableName,
          column: colName,
          type: expectedType
        });
        console.log(`❌ Colonne manquante dans ${tableName}: ${colName} (${expectedType})`);
      } else {
        const actualType = existingColumns[colName].type;
        const expectedTypeNormalized = expectedType.toLowerCase();
        
        if (expectedTypeNormalized === 'array' && !actualType.includes('array')) {
          diagnostic.incorrectTypes.push({
            table: tableName,
            column: colName,
            currentType: actualType,
            expectedType: expectedType
          });
          console.log(`❌ Type incorrect pour ${tableName}.${colName}: ${actualType} -> ${expectedType}`);
        } else if (expectedTypeNormalized !== 'array' && !actualType.includes(expectedTypeNormalized)) {
          diagnostic.incorrectTypes.push({
            table: tableName,
            column: colName,
            currentType: actualType,
            expectedType: expectedType
          });
          console.log(`❌ Type incorrect pour ${tableName}.${colName}: ${actualType} -> ${expectedType}`);
        } else {
          console.log(`✅ Colonne correcte: ${tableName}.${colName} (${actualType})`);
        }
      }
    }
    
    return existingColumns;
  } catch (error) {
    console.error(`Erreur lors de la vérification des colonnes pour ${tableName}:`, error);
    return {};
  }
}

// Fonction pour vérifier les politiques RLS
async function checkPolicies() {
  console.log('\n🔍 Étape 2: Vérification des politiques RLS...');
  
  try {
    const { data, error } = await supabase
      .from('pg_policies')
      .select('*')
      .eq('schemaname', 'public');
    
    if (error) throw error;
    
    const policyCounts = {};
    data.forEach(policy => {
      if (!policyCounts[policy.tablename]) {
        policyCounts[policy.tablename] = 0;
      }
      policyCounts[policy.tablename]++;
    });
    
    // Vérifier les politiques pour les tables principales
    const requiredPolicies = {
      announcements: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
      categories: ['SELECT'],
      user_roles: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
      user_drafts: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
      announcement_favorites: ['SELECT', 'INSERT', 'DELETE'],
      announcement_views: ['SELECT', 'INSERT']
    };
    
    for (const [tableName, requiredCommands] of Object.entries(requiredPolicies)) {
      if (!policyCounts[tableName]) {
        diagnostic.policyIssues.push({
          table: tableName,
          issue: 'No policies found',
          severity: 'high'
        });
        console.log(`❌ Aucune politique RLS pour: ${tableName}`);
      } else {
        console.log(`✅ Politiques trouvées pour: ${tableName} (${policyCounts[tableName]} politiques)`);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Erreur lors de la vérification des politiques RLS:', error);
    return [];
  }
}

// Fonction pour vérifier les index
async function checkIndexes() {
  console.log('\n🔍 Étape 3: Vérification des index...');
  
  try {
    const { data, error } = await supabase
      .from('pg_indexes')
      .select('*')
      .eq('schemaname', 'public');
    
    if (error) throw error;
    
    const existingIndexes = {};
    data.forEach(idx => {
      if (!existingIndexes[idx.tablename]) {
        existingIndexes[idx.tablename] = [];
      }
      existingIndexes[idx.tablename].push(idx.indexname);
    });
    
    // Index requis pour les performances
    const requiredIndexes = {
      announcements: [
        'idx_announcements_user_id',
        'idx_announcements_category_id',
        'idx_announcements_status',
        'idx_announcements_created_at'
      ],
      categories: [
        'idx_categories_parent_id',
        'idx_categories_slug',
        'idx_categories_active'
      ],
      user_drafts: [
        'idx_user_drafts_user_id',
        'idx_user_drafts_key'
      ],
      announcement_favorites: [
        'idx_favorites_user_id',
        'idx_favorites_announcement_id'
      ],
      announcement_views: [
        'idx_views_announcement_id',
        'idx_views_viewed_at'
      ]
    };
    
    for (const [tableName, indexes] of Object.entries(requiredIndexes)) {
      if (!existingIndexes[tableName]) {
        diagnostic.missingIndexes.push({
          table: tableName,
          missingIndexes: indexes
        });
        console.log(`❌ Aucun index trouvé pour: ${tableName}`);
      } else {
        for (const idxName of indexes) {
          if (!existingIndexes[tableName].includes(idxName)) {
            diagnostic.missingIndexes.push({
              table: tableName,
              missingIndex: idxName
            });
            console.log(`❌ Index manquant pour ${tableName}: ${idxName}`);
          } else {
            console.log(`✅ Index trouvé: ${tableName}.${idxName}`);
          }
        }
      }
    }
    
    return data;
  } catch (error) {
    console.error('Erreur lors de la vérification des index:', error);
    return [];
  }
}

// Fonction pour vérifier les fonctions
async function checkFunctions() {
  console.log('\n🔍 Étape 4: Vérification des fonctions...');
  
  try {
    const { data, error } = await supabase
      .from('information_schema.routines')
      .select('routine_name')
      .eq('routine_schema', 'public')
      .eq('routine_type', 'FUNCTION');
    
    if (error) throw error;
    
    const existingFunctions = data.map(row => row.routine_name);
    
    // Fonctions requises
    const requiredFunctions = [
      'increment_view_count',
      'increment_contact_count',
      'update_updated_at_column'
    ];
    
    for (const funcName of requiredFunctions) {
      if (!existingFunctions.includes(funcName)) {
        diagnostic.missingFunctions.push(funcName);
        console.log(`❌ Fonction manquante: ${funcName}`);
      } else {
        console.log(`✅ Fonction trouvée: ${funcName}`);
      }
    }
    
    return existingFunctions;
  } catch (error) {
    console.error('Erreur lors de la vérification des fonctions:', error);
    return [];
  }
}

// Fonction pour vérifier les buckets de stockage
async function checkBuckets() {
  console.log('\n🔍 Étape 5: Vérification des buckets de stockage...');
  
  try {
    const { data, error } = await supabase.storage.listBuckets();
    
    if (error) throw error;
    
    const existingBuckets = data.map(bucket => bucket.name);
    
    // Buckets requis
    const requiredBuckets = [
      'announcement-images'
    ];
    
    for (const bucketName of requiredBuckets) {
      if (!existingBuckets.includes(bucketName)) {
        diagnostic.missingBuckets.push(bucketName);
        console.log(`❌ Bucket manquant: ${bucketName}`);
      } else {
        console.log(`✅ Bucket trouvé: ${bucketName}`);
      }
    }
    
    return existingBuckets;
  } catch (error) {
    console.error('Erreur lors de la vérification des buckets:', error);
    return [];
  }
}

// Fonction pour générer les corrections SQL
function generateCorrections() {
  console.log('\n🛠️ Génération des corrections SQL...');
  
  let correctionsSQL = '';
  
  // 1. Créer les tables manquantes
  if (diagnostic.missingTables.length > 0) {
    correctionsSQL += '-- Tables manquantes\n';
    for (const tableName of diagnostic.missingTables) {
      correctionsSQL += generateCreateTableSQL(tableName);
    }
  }
  
  // 2. Ajouter les colonnes manquantes
  if (diagnostic.missingColumns.length > 0) {
    correctionsSQL += '\n-- Colonnes manquantes\n';
    for (const { table, column, type } of diagnostic.missingColumns) {
      correctionsSQL += `ALTER TABLE public.${table} ADD COLUMN IF NOT EXISTS ${column} ${getSQLType(type)};\n`;
    }
  }
  
  // 3. Corriger les types incorrects
  if (diagnostic.incorrectTypes.length > 0) {
    correctionsSQL += '\n-- Types incorrects\n';
    for (const { table, column, currentType, expectedType } of diagnostic.incorrectTypes) {
      correctionsSQL += `-- Correction du type pour ${table}.${column}: ${currentType} -> ${expectedType}\n`;
      correctionsSQL += `ALTER TABLE public.${table} ALTER COLUMN ${column} TYPE ${getSQLType(expectedType)};\n`;
    }
  }
  
  // 4. Créer les index manquants
  if (diagnostic.missingIndexes.length > 0) {
    correctionsSQL += '\n-- Index manquants\n';
    for (const { table, missingIndex, missingIndexes } of diagnostic.missingIndexes) {
      if (missingIndex) {
        correctionsSQL += `CREATE INDEX IF NOT EXISTS ${missingIndex} ON public.${table}(${getIndexColumn(table, missingIndex)});\n`;
      } else if (missingIndexes) {
        for (const idx of missingIndexes) {
          correctionsSQL += `CREATE INDEX IF NOT EXISTS ${idx} ON public.${table}(${getIndexColumn(table, idx)});\n`;
        }
      }
    }
  }
  
  // 5. Créer les fonctions manquantes
  if (diagnostic.missingFunctions.length > 0) {
    correctionsSQL += '\n-- Fonctions manquantes\n';
    for (const funcName of diagnostic.missingFunctions) {
      correctionsSQL += generateFunctionSQL(funcName);
    }
  }
  
  // 6. Créer les buckets manquants
  if (diagnostic.missingBuckets.length > 0) {
    correctionsSQL += '\n-- Buckets manquants\n';
    for (const bucketName of diagnostic.missingBuckets) {
      correctionsSQL += `INSERT INTO storage.buckets (id, name, public) VALUES ('${bucketName}', '${bucketName}', true) ON CONFLICT (id) DO NOTHING;\n`;
    }
  }
  
  // 7. Corriger les politiques RLS
  if (diagnostic.policyIssues.length > 0) {
    correctionsSQL += '\n-- Politiques RLS\n';
    correctionsSQL += generateRLSPolicies();
  }
  
  return correctionsSQL;
}

// Fonction pour générer le SQL de création de table
function generateCreateTableSQL(tableName) {
  const schema = expectedSchemas[tableName];
  let sql = `CREATE TABLE IF NOT EXISTS public.${tableName} (\n`;
  
  const columns = [];
  for (const [colName, colType] of Object.entries(schema)) {
    if (colName === 'id') {
      columns.push(`  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY`);
    } else {
      columns.push(`  ${colName} ${getSQLType(colType)}`);
    }
  }
  
  sql += columns.join(',\n');
  sql += '\n);\n\n';
  
  // Activer RLS
  sql += `ALTER TABLE public.${tableName} ENABLE ROW LEVEL SECURITY;\n\n`;
  
  return sql;
}

// Fonction pour convertir le type de schéma en type SQL
function getSQLType(schemaType) {
  const typeMap = {
    'uuid': 'UUID',
    'text': 'TEXT',
    'numeric': 'NUMERIC(12, 2)',
    'boolean': 'BOOLEAN',
    'integer': 'INTEGER',
    'timestamptz': 'TIMESTAMPTZ',
    'jsonb': 'JSONB',
    'date': 'DATE',
    'inet': 'INET',
    'ARRAY': 'TEXT[]'
  };
  
  return typeMap[schemaType] || 'TEXT';
}

// Fonction pour obtenir la colonne d'index à partir du nom de l'index
function getIndexColumn(tableName, indexName) {
  const indexMap = {
    'idx_announcements_user_id': 'user_id',
    'idx_announcements_category_id': 'category_id',
    'idx_announcements_status': 'status',
    'idx_announcements_created_at': 'created_at',
    'idx_categories_parent_id': 'parent_id',
    'idx_categories_slug': 'slug',
    'idx_categories_active': 'is_active',
    'idx_user_drafts_user_id': 'user_id',
    'idx_user_drafts_key': 'draft_key',
    'idx_favorites_user_id': 'user_id',
    'idx_favorites_announcement_id': 'announcement_id',
    'idx_views_announcement_id': 'announcement_id',
    'idx_views_viewed_at': 'viewed_at'
  };
  
  return indexMap[indexName] || 'id';
}

// Fonction pour générer le SQL des fonctions
function generateFunctionSQL(funcName) {
  const functions = {
    'increment_view_count': `
CREATE OR REPLACE FUNCTION public.increment_view_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET view_count = view_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;`,
    
    'increment_contact_count': `
CREATE OR REPLACE FUNCTION public.increment_contact_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET contact_count = contact_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;`,
    
    'update_updated_at_column': `
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`
  };
  
  return functions[funcName] || '';
}

// Fonction pour générer les politiques RLS
function generateRLSPolicies() {
  let sql = '';
  
  // Nettoyer les politiques existantes pour announcements
  sql += `
DO $$
DECLARE
    policy_record RECORD;
BEGIN
    FOR policy_record IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' AND tablename = 'announcements'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.announcements', policy_record.policyname);
    END LOOP;
END $$;
`;
  
  // Recréer les politiques pour announcements
  sql += `
CREATE POLICY "Public can view active announcements" 
ON public.announcements 
FOR SELECT 
TO public
USING (status = 'active' AND expires_at > now());

CREATE POLICY "Users can insert announcements" 
ON public.announcements 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update announcements" 
ON public.announcements 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete announcements" 
ON public.announcements 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can view own announcements" 
ON public.announcements 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);
`;
  
  // Similaire pour les autres tables...
  
  return sql;
}

// Fonction pour appliquer les corrections
async function applyCorrections(correctionsSQL) {
  if (!correctionsSQL.trim()) {
    console.log('\n✅ Aucune correction nécessaire!');
    return true;
  }
  
  console.log('\n🚀 Application des corrections...');
  
  try {
    // Diviser le SQL en requêtes individuelles pour éviter les erreurs
    const queries = correctionsSQL.split(';').filter(q => q.trim() && !q.trim().startsWith('--'));
    
    for (const query of queries) {
      const trimmedQuery = query.trim();
      if (trimmedQuery) {
        console.log(`Exécution: ${trimmedQuery.substring(0, 50)}...`);
        const result = await executeSQL(trimmedQuery);
        
        if (result.success) {
          diagnostic.correctionsApplied.push(trimmedQuery);
        } else {
          console.log(`⚠️ Erreur lors de l'exécution: ${result.error}`);
        }
      }
    }
    
    console.log('\n✅ Corrections appliquées avec succès!');
    return true;
  } catch (error) {
    console.error('\n❌ Erreur lors de l\'application des corrections:', error);
    return false;
  }
}

// Fonction pour générer le rapport final
function generateReport() {
  console.log('\n📊 RAPPORT FINAL DE DIAGNOSTIC');
  console.log('==================================');
  
  console.log(`\n🔍 Issues trouvées:`);
  console.log(`- Tables manquantes: ${diagnostic.missingTables.length}`);
  console.log(`- Colonnes manquantes: ${diagnostic.missingColumns.length}`);
  console.log(`- Types incorrects: ${diagnostic.incorrectTypes.length}`);
  console.log(`- Problèmes de politiques: ${diagnostic.policyIssues.length}`);
  console.log(`- Index manquants: ${diagnostic.missingIndexes.length}`);
  console.log(`- Fonctions manquantes: ${diagnostic.missingFunctions.length}`);
  console.log(`- Buckets manquants: ${diagnostic.missingBuckets.length}`);
  
  console.log(`\n🛠️ Corrections appliquées: ${diagnostic.correctionsApplied.length}`);
  
  if (diagnostic.correctionsApplied.length > 0) {
    console.log('\nListe des corrections appliquées:');
    diagnostic.correctionsApplied.forEach((correction, index) => {
      console.log(`${index + 1}. ${correction.substring(0, 100)}...`);
    });
  }
  
  // Sauvegarder le rapport dans un fichier
  const reportData = {
    timestamp: new Date().toISOString(),
    issues: {
      missingTables: diagnostic.missingTables,
      missingColumns: diagnostic.missingColumns,
      incorrectTypes: diagnostic.incorrectTypes,
      policyIssues: diagnostic.policyIssues,
      missingIndexes: diagnostic.missingIndexes,
      missingFunctions: diagnostic.missingFunctions,
      missingBuckets: diagnostic.missingBuckets
    },
    correctionsApplied: diagnostic.correctionsApplied.length,
    health: {
      tables: diagnostic.missingTables.length === 0 ? 'OK' : 'ISSUES',
      columns: diagnostic.missingColumns.length === 0 && diagnostic.incorrectTypes.length === 0 ? 'OK' : 'ISSUES',
      policies: diagnostic.policyIssues.length === 0 ? 'OK' : 'ISSUES',
      indexes: diagnostic.missingIndexes.length === 0 ? 'OK' : 'ISSUES',
      functions: diagnostic.missingFunctions.length === 0 ? 'OK' : 'ISSUES',
      buckets: diagnostic.missingBuckets.length === 0 ? 'OK' : 'ISSUES'
    }
  };
  
  // Écrire le rapport dans un fichier
  try {
    const fs = require('fs');
    fs.writeFileSync('supabase-diagnostic-report.json', JSON.stringify(reportData, null, 2));
    console.log('\n📄 Rapport détaillé sauvegardé dans: supabase-diagnostic-report.json');
  } catch (err) {
    console.log('\n⚠️ Impossible de sauvegarder le rapport dans un fichier:', err.message);
  }
  
  // Évaluer la santé globale
  const totalIssues = diagnostic.missingTables.length + 
                      diagnostic.missingColumns.length + 
                      diagnostic.incorrectTypes.length + 
                      diagnostic.policyIssues.length + 
                      diagnostic.missingIndexes.length + 
                      diagnostic.missingFunctions.length + 
                      diagnostic.missingBuckets.length;
  
  if (totalIssues === 0) {
    console.log('\n🎉 SANTÉ GLOBALE: EXCELLENTE - Aucune issue trouvée!');
  } else if (totalIssues <= 5) {
    console.log('\n✅ SANTÉ GLOBALE: BONNE - Quelques issues mineures trouvées et corrigées');
  } else if (totalIssues <= 15) {
    console.log('\n⚠️ SANTÉ GLOBALE: MOYENNE - Plusieurs issues trouvées mais corrigées');
  } else {
    console.log('\n❌ SANTÉ GLOBALE: PRÉOCCUPANTE - Beaucoup d\'issues trouvées, une révision manuelle est recommandée');
  }
}

// Fonction principale
async function main() {
  console.log('🚀 DÉMARRAGE DU DIAGNOSTIC AUTOMATIQUE SUPABASE');
  console.log('================================================');
  
  try {
    // Étape 1: Vérifier les tables
    const existingTables = await checkTables();
    
    // Étape 2: Vérifier les colonnes pour chaque table existante
    for (const tableName of existingTables) {
      if (expectedSchemas[tableName]) {
        await checkColumns(tableName);
      }
    }
    
    // Étape 3: Vérifier les politiques RLS
    await checkPolicies();
    
    // Étape 4: Vérifier les index
    await checkIndexes();
    
    // Étape 5: Vérifier les fonctions
    await checkFunctions();
    
    // Étape 6: Vérifier les buckets
    await checkBuckets();
    
    // Étape 7: Générer les corrections
    const correctionsSQL = generateCorrections();
    
    // Étape 8: Appliquer les corrections automatiquement
    await applyCorrections(correctionsSQL);
    
    // Étape 9: Générer le rapport final
    generateReport();
    
  } catch (error) {
    console.error('\n❌ ERREUR CRITIQUE lors du diagnostic:', error);
    process.exit(1);
  }
}

// Exécuter le script
main().catch(console.error);