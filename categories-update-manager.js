// Gestionnaire de mises à jour des catégories - Aladdin Annonce Algérie Hub
// Utilitaire pour faciliter les mises à jour futures des catégories
// Exécuter avec: node categories-update-manager.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Gestionnaire de mises à jour des catégories - Aladdin Annonce Algérie Hub\n');

// Charger la base de données existante
let categoriesDatabase = null;
const databasePath = 'categories-database.json';

if (fs.existsSync(databasePath)) {
  try {
    const databaseContent = fs.readFileSync(databasePath, 'utf8');
    categoriesDatabase = JSON.parse(databaseContent);
    console.log('✅ Base de données chargée avec succès');
    console.log(`   📊 ${categoriesDatabase.metadata.totalCategories} catégories trouvées`);
  } catch (error) {
    console.log('❌ Erreur lors du chargement de la base de données:', error.message);
  }
} else {
  console.log('⚠️  Base de données non trouvée. Exécutez d\'abord: node extract-categories-database.js');
  process.exit(1);
}

// Fonctions utilitaires
const updateManager = {
  // Rechercher une catégorie par ID ou nom
  findCategory: (query) => {
    if (!categoriesDatabase) return null;
    
    const results = [];
    
    // Recherche par ID exact
    if (categoriesDatabase.categories[query]) {
      results.push(categoriesDatabase.categories[query]);
    }
    
    // Recherche par nom ou slug
    Object.values(categoriesDatabase.categories).forEach(category => {
      if (category.name.toLowerCase().includes(query.toLowerCase()) ||
          category.slug.toLowerCase().includes(query.toLowerCase())) {
        if (!results.find(r => r.id === category.id)) {
          results.push(category);
        }
      }
    });
    
    return results;
  },
  
  // Lister les catégories par groupe
  listCategoriesByGroup: (groupName) => {
    if (!categoriesDatabase) return [];
    
    if (groupName) {
      return categoriesDatabase.groups[groupName] || [];
    }
    
    return Object.keys(categoriesDatabase.groups).map(groupName => ({
      groupName,
      categories: categoriesDatabase.groups[groupName]
    }));
  },
  
  // Obtenir les statistiques
  getStatistics: () => {
    if (!categoriesDatabase) return null;
    
    return {
      metadata: categoriesDatabase.metadata,
      statistics: categoriesDatabase.statistics,
      summary: {
        totalCategories: categoriesDatabase.metadata.totalCategories,
        totalSubcategories: categoriesDatabase.metadata.totalSubcategories,
        totalSubSubcategories: categoriesDatabase.metadata.totalSubSubcategories,
        totalElements: categoriesDatabase.metadata.totalCategories + 
                      categoriesDatabase.metadata.totalSubcategories + 
                      categoriesDatabase.metadata.totalSubSubcategories,
        groupsCount: Object.keys(categoriesDatabase.groups).length,
        languagesCount: categoriesDatabase.metadata.languages.length
      }
    };
  },
  
  // Exporter la base de données dans différents formats
  exportDatabase: (format = 'json') => {
    if (!categoriesDatabase) return null;
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    switch (format.toLowerCase()) {
      case 'json':
        const jsonPath = `categories-database-${timestamp}.json`;
        fs.writeFileSync(jsonPath, JSON.stringify(categoriesDatabase, null, 2));
        console.log(`✅ Base de données exportée en JSON: ${jsonPath}`);
        return jsonPath;
        
      case 'csv':
        const csvPath = `categories-database-${timestamp}.csv`;
        const csvContent = generateCSV(categoriesDatabase);
        fs.writeFileSync(csvPath, csvContent);
        console.log(`✅ Base de données exportée en CSV: ${csvPath}`);
        return csvPath;
        
      case 'markdown':
        const mdPath = `categories-database-${timestamp}.md`;
        const mdContent = generateMarkdown(categoriesDatabase);
        fs.writeFileSync(mdPath, mdContent);
        console.log(`✅ Base de données exportée en Markdown: ${mdPath}`);
        return mdPath;
        
      default:
        console.log('❌ Format non supporté. Formats disponibles: json, csv, markdown');
        return null;
    }
  },
  
  // Valider la structure des catégories
  validateStructure: () => {
    if (!categoriesDatabase) return { valid: false, errors: ['Base de données non chargée'] };
    
    const errors = [];
    const warnings = [];
    
    // Valider les métadonnées
    if (!categoriesDatabase.metadata) {
      errors.push('Métadonnées manquantes');
    }
    
    // Valider les catégories
    if (!categoriesDatabase.categories) {
      errors.push('Catégories manquantes');
    } else {
      Object.values(categoriesDatabase.categories).forEach(category => {
        if (!category.id) errors.push(`Catégorie sans ID: ${category.name || 'inconnue'}`);
        if (!category.name) errors.push(`Catégorie sans nom: ${category.id}`);
        if (!category.slug) warnings.push(`Catégorie sans slug: ${category.id}`);
        if (!category.subcategories || !Array.isArray(category.subcategories)) {
          warnings.push(`Catégorie sans sous-catégories valides: ${category.id}`);
        }
      });
    }
    
    return {
      valid: errors.length === 0,
      errors,
      warnings,
      summary: {
        totalErrors: errors.length,
        totalWarnings: warnings.length,
        totalCategories: Object.keys(categoriesDatabase.categories || {}).length
      }
    };
  },
  
  // Comparer deux versions de la base de données
  compareVersions: (oldDatabasePath) => {
    if (!fs.existsSync(oldDatabasePath)) {
      console.log('❌ Ancienne base de données non trouvée:', oldDatabasePath);
      return null;
    }
    
    try {
      const oldDatabase = JSON.parse(fs.readFileSync(oldDatabasePath, 'utf8'));
      
      const comparison = {
        added: [],
        removed: [],
        modified: [],
        summary: {
          oldTotal: oldDatabase.metadata.totalCategories,
          newTotal: categoriesDatabase.metadata.totalCategories,
          difference: categoriesDatabase.metadata.totalCategories - oldDatabase.metadata.totalCategories
        }
      };
      
      // Catégories ajoutées
      Object.keys(categoriesDatabase.categories).forEach(id => {
        if (!oldDatabase.categories[id]) {
          comparison.added.push({
            id,
            name: categoriesDatabase.categories[id].name,
            group: categoriesDatabase.categories[id].group
          });
        }
      });
      
      // Catégories supprimées
      Object.keys(oldDatabase.categories).forEach(id => {
        if (!categoriesDatabase.categories[id]) {
          comparison.removed.push({
            id,
            name: oldDatabase.categories[id].name,
            group: oldDatabase.categories[id].group
          });
        }
      });
      
      // Catégories modifiées
      Object.keys(categoriesDatabase.categories).forEach(id => {
        if (oldDatabase.categories[id]) {
          const oldCategory = oldDatabase.categories[id];
          const newCategory = categoriesDatabase.categories[id];
          
          if (JSON.stringify(oldCategory) !== JSON.stringify(newCategory)) {
            comparison.modified.push({
              id,
              name: newCategory.name,
              changes: detectChanges(oldCategory, newCategory)
            });
          }
        }
      });
      
      return comparison;
    } catch (error) {
      console.log('❌ Erreur lors de la comparaison:', error.message);
      return null;
    }
  }
};

// Fonctions utilitaires internes
function generateCSV(database) {
  const headers = ['ID', 'Nom', 'Slug', 'Groupe', 'Type', 'Sous-catégories', 'Description'];
  const rows = [headers.join(',')];
  
  Object.values(database.categories).forEach(category => {
    rows.push([
      category.id,
      `"${category.name}"`,
      category.slug,
      `"${category.group || ''}"`,
      'category',
      category.subcategories.length,
      `"${category.description || ''}"`
    ].join(','));
    
    category.subcategories.forEach(sub => {
      rows.push([
        sub.id,
        `"${sub.name}"`,
        sub.slug,
        `"${category.group || ''}"`,
        'subcategory',
        sub.subcategories ? sub.subcategories.length : 0,
        ''
      ].join(','));
    });
  });
  
  return rows.join('\n');
}

function generateMarkdown(database) {
  let content = `# Base de données des catégories - Aladdin Annonce Algérie Hub\n\n`;
  content += `**Date d'extraction**: ${database.metadata.extractionDate}\n`;
  content += `**Version**: ${database.metadata.version}\n\n`;
  
  content += `## Statistiques\n\n`;
  content += `- **Catégories principales**: ${database.metadata.totalCategories}\n`;
  content += `- **Sous-catégories**: ${database.metadata.totalSubcategories}\n`;
  content += `- **Sous-sous-catégories**: ${database.metadata.totalSubSubcategories}\n`;
  content += `- **Total éléments**: ${database.metadata.totalCategories + database.metadata.totalSubcategories + database.metadata.totalSubSubcategories}\n\n`;
  
  content += `## Groupes de catégories\n\n`;
  
  Object.keys(database.groups).forEach(groupName => {
    content += `### ${groupName}\n\n`;
    
    const categories = database.groups[groupName];
    categories.forEach(category => {
      content += `#### ${category.name}\n`;
      content += `- **ID**: ${category.id}\n`;
      content += `- **Slug**: ${category.slug}\n`;
      content += `- **Sous-catégories**: ${category.subcategories.length}\n\n`;
      
      if (category.subcategories.length > 0) {
        content += `**Sous-catégories**:\n`;
        category.subcategories.forEach(sub => {
          content += `- ${sub.name} (${sub.id})\n`;
        });
        content += `\n`;
      }
    });
  });
  
  return content;
}

function detectChanges(oldCategory, newCategory) {
  const changes = [];
  
  if (oldCategory.name !== newCategory.name) {
    changes.push({ field: 'name', old: oldCategory.name, new: newCategory.name });
  }
  
  if (oldCategory.slug !== newCategory.slug) {
    changes.push({ field: 'slug', old: oldCategory.slug, new: newCategory.slug });
  }
  
  if (oldCategory.subcategories.length !== newCategory.subcategories.length) {
    changes.push({ 
      field: 'subcategories', 
      old: oldCategory.subcategories.length, 
      new: newCategory.subcategories.length 
    });
  }
  
  return changes;
}

// Interface en ligne de commande
const args = process.argv.slice(2);
const command = args[0];

console.log(`🎯 Commande: ${command || 'aide'}\n`);

switch (command) {
  case 'search':
  case 'find':
    const query = args[1];
    if (!query) {
      console.log('❌ Veuillez spécifier une recherche: node categories-update-manager.js search <query>');
      process.exit(1);
    }
    
    const results = updateManager.findCategory(query);
    if (results.length === 0) {
      console.log(`❌ Aucune catégorie trouvée pour: "${query}"`);
    } else {
      console.log(`✅ ${results.length} catégorie(s) trouvée(s) pour: "${query}"\n`);
      results.forEach((cat, index) => {
        console.log(`${index + 1}. ${cat.name} (${cat.id})`);
        console.log(`   Slug: ${cat.slug}`);
        console.log(`   Groupe: ${cat.group || 'Non défini'}`);
        console.log(`   Sous-catégories: ${cat.subcategories.length}`);
        console.log('');
      });
    }
    break;
    
  case 'list':
    const groupName = args[1];
    const categoriesByGroup = updateManager.listCategoriesByGroup(groupName);
    
    if (groupName) {
      console.log(`📂 Catégories du groupe: ${groupName}\n`);
      if (categoriesByGroup.length === 0) {
        console.log('❌ Aucune catégorie trouvée pour ce groupe');
      } else {
        categoriesByGroup.forEach((cat, index) => {
          console.log(`${index + 1}. ${cat.name} (${cat.id})`);
          console.log(`   Sous-catégories: ${cat.subcategories.length}`);
        });
      }
    } else {
      console.log('📂 Tous les groupes de catégories\n');
      categoriesByGroup.forEach(group => {
        console.log(`📁 ${group.groupName}: ${group.categories.length} catégories`);
      });
    }
    break;
    
  case 'stats':
  case 'statistics':
    const stats = updateManager.getStatistics();
    if (stats) {
      console.log('📊 Statistiques des catégories\n');
      console.log(`📁 Catégories principales: ${stats.summary.totalCategories}`);
      console.log(`📂 Sous-catégories: ${stats.summary.totalSubcategories}`);
      console.log(`📋 Sous-sous-catégories: ${stats.summary.totalSubSubcategories}`);
      console.log(`📈 Total éléments: ${stats.summary.totalElements}`);
      console.log(`🌐 Langues supportées: ${stats.summary.languagesCount}`);
      console.log(`📂 Groupes: ${stats.summary.groupsCount}\n`);
      
      console.log('📋 Répartition par groupe:');
      Object.keys(stats.statistics.categoriesByGroup).forEach(groupName => {
        console.log(`   ${groupName}: ${stats.statistics.categoriesByGroup[groupName]} catégories`);
      });
    }
    break;
    
  case 'export':
    const format = args[1] || 'json';
    updateManager.exportDatabase(format);
    break;
    
  case 'validate':
    const validation = updateManager.validateStructure();
    console.log('🔍 Validation de la structure des catégories\n');
    
    if (validation.valid) {
      console.log('✅ Structure valide !');
    } else {
      console.log(`❌ Structure invalide (${validation.totalErrors} erreurs)`);
    }
    
    if (validation.errors.length > 0) {
      console.log('\n🚨 Erreurs:');
      validation.errors.forEach(error => console.log(`   - ${error}`));
    }
    
    if (validation.warnings.length > 0) {
      console.log('\n⚠️  Avertissements:');
      validation.warnings.forEach(warning => console.log(`   - ${warning}`));
    }
    
    console.log(`\n📊 Résumé: ${validation.totalCategories} catégories analysées`);
    break;
    
  case 'compare':
    const oldDatabasePath = args[1];
    if (!oldDatabasePath) {
      console.log('❌ Veuillez spécifier l\'ancienne base de données: node categories-update-manager.js compare <old-database.json>');
      process.exit(1);
    }
    
    const comparison = updateManager.compareVersions(oldDatabasePath);
    if (comparison) {
      console.log('🔍 Comparaison des bases de données\n');
      console.log(`📊 Anciennes catégories: ${comparison.summary.oldTotal}`);
      console.log(`📊 Nouvelles catégories: ${comparison.summary.newTotal}`);
      console.log(`📈 Différence: ${comparison.summary.difference > 0 ? '+' : ''}${comparison.summary.difference}\n`);
      
      if (comparison.added.length > 0) {
        console.log(`➕ Catégories ajoutées (${comparison.added.length}):`);
        comparison.added.forEach(cat => console.log(`   - ${cat.name} (${cat.id})`));
        console.log('');
      }
      
      if (comparison.removed.length > 0) {
        console.log(`➖ Catégories supprimées (${comparison.removed.length}):`);
        comparison.removed.forEach(cat => console.log(`   - ${cat.name} (${cat.id})`));
        console.log('');
      }
      
      if (comparison.modified.length > 0) {
        console.log(`🔄 Catégories modifiées (${comparison.modified.length}):`);
        comparison.modified.forEach(cat => console.log(`   - ${cat.name} (${cat.id})`));
      }
    }
    break;
    
  case 'help':
  default:
    console.log('🔧 Gestionnaire de mises à jour des catégories\n');
    console.log('Commandes disponibles:\n');
    console.log('🔍 search <query>     - Rechercher une catégorie par ID ou nom');
    console.log('📋 list [group]      - Lister les catégories (optionnellement par groupe)');
    console.log('📊 stats             - Afficher les statistiques des catégories');
    console.log('💾 export [format]   - Exporter la base de données (json, csv, markdown)');
    console.log('🔍 validate          - Valider la structure des catégories');
    console.log('🔄 compare <old-db>  - Comparer avec une ancienne base de données');
    console.log('❓ help              - Afficher cette aide\n');
    console.log('Exemples:');
    console.log('   node categories-update-manager.js search immobilier');
    console.log('   node categories-update-manager.js list "Groupe 4"');
    console.log('   node categories-update-manager.js export csv');
    console.log('   node categories-update-manager.js compare old-categories.json');
    break;
}

console.log('\n✨ Opération terminée !');