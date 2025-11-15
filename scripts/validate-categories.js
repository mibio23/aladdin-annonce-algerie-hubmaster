/**
 * Script to validate category data consistency across all language files
 * This script checks for:
 * - Missing categories between languages
 * - Inconsistent category IDs
 * - Invalid slugs
 * - Missing translations
 */

const fs = require('fs');
const path = require('path');

// Import category data
const main27CategoriesAr = require('../src/data/categories/main27CategoriesAr');
const main27CategoriesEn = require('../src/data/categories/main27CategoriesEn');
const main27CategoriesDe = require('../src/data/categories/main27CategoriesDe');
const main27CategoriesEs = require('../src/data/categories/main27CategoriesEs');

const languages = {
  ar: { data: main27CategoriesAr, name: 'Arabic' },
  en: { data: main27CategoriesEn, name: 'English' },
  de: { data: main27CategoriesDe, name: 'German' },
  es: { data: main27CategoriesEs, name: 'Spanish' }
};

// Validation results
const validationResults = {
  errors: [],
  warnings: [],
  summary: {}
};

/**
 * Extract all category IDs from a category tree
 */
function extractCategoryIds(categories, prefix = '') {
  const ids = new Set();
  
  categories.forEach(category => {
    const fullId = prefix ? `${prefix}.${category.id}` : category.id;
    ids.add(fullId);
    
    if (category.subcategories && category.subcategories.length > 0) {
      const subIds = extractCategoryIds(category.subcategories, fullId);
      subIds.forEach(id => ids.add(id));
    }
  });
  
  return ids;
}

/**
 * Validate slug format
 */
function validateSlug(slug) {
  // Basic validation: should contain only lowercase letters, numbers, and hyphens
  const slugRegex = /^[a-z0-9-]+$/;
  return slugRegex.test(slug);
}

/**
 * Compare category structures between languages
 */
function compareCategoryStructures() {
  console.log('🔍 Comparing category structures between languages...');
  
  const languageIds = {};
  Object.entries(languages).forEach(([langCode, langData]) => {
    languageIds[langCode] = extractCategoryIds(langData.data);
    validationResults.summary[langCode] = {
      name: langData.name,
      totalCategories: languageIds[langCode].size
    };
  });
  
  // Find reference language (the one with most categories)
  const referenceLang = Object.entries(languageIds)
    .reduce((a, b) => a[1].size > b[1].size ? a : b)[0];
  
  console.log(`📋 Using ${languages[referenceLang].name} as reference (${languageIds[referenceLang].size} categories)`);
  
  // Check for missing categories in other languages
  Object.entries(languageIds).forEach(([langCode, ids]) => {
    if (langCode === referenceLang) return;
    
    const missingCategories = [...languageIds[referenceLang]]
      .filter(id => !ids.has(id));
    
    if (missingCategories.length > 0) {
      validationResults.errors.push(
        `${languages[langCode].name} is missing ${missingCategories.length} categories: ${missingCategories.slice(0, 5).join(', ')}${missingCategories.length > 5 ? '...' : ''}`
      );
    }
    
    const extraCategories = [...ids]
      .filter(id => !languageIds[referenceLang].has(id));
    
    if (extraCategories.length > 0) {
      validationResults.warnings.push(
        `${languages[langCode].name} has ${extraCategories.length} extra categories: ${extraCategories.slice(0, 5).join(', ')}${extraCategories.length > 5 ? '...' : ''}`
      );
    }
  });
}

/**
 * Validate slugs in all languages
 */
function validateSlugs() {
  console.log('🔍 Validating slugs...');
  
  Object.entries(languages).forEach(([langCode, langData]) => {
    const invalidSlugs = [];
    
    function checkSlugs(categories, path = '') {
      categories.forEach(category => {
        if (!validateSlug(category.slug)) {
          invalidSlugs.push(`${path}${category.id}: "${category.slug}"`);
        }
        
        if (category.subcategories) {
          checkSlugs(category.subcategories, `${path}${category.id}.`);
        }
      });
    }
    
    checkSlugs(langData.data);
    
    if (invalidSlugs.length > 0) {
      validationResults.errors.push(
        `${languages[langCode].name} has ${invalidSlugs.length} invalid slugs: ${invalidSlugs.slice(0, 3).join(', ')}${invalidSlugs.length > 3 ? '...' : ''}`
      );
    }
  });
}

/**
 * Check for empty names or missing translations
 */
function validateTranslations() {
  console.log('🔍 Validating translations...');
  
  Object.entries(languages).forEach(([langCode, langData]) => {
    const emptyNames = [];
    
    function checkNames(categories, path = '') {
      categories.forEach(category => {
        if (!category.name || category.name.trim() === '') {
          emptyNames.push(`${path}${category.id}`);
        }
        
        if (category.subcategories) {
          checkNames(category.subcategories, `${path}${category.id}.`);
        }
      });
    }
    
    checkNames(langData.data);
    
    if (emptyNames.length > 0) {
      validationResults.errors.push(
        `${languages[langCode].name} has ${emptyNames.length} categories with empty names: ${emptyNames.slice(0, 5).join(', ')}${emptyNames.length > 5 ? '...' : ''}`
      );
    }
  });
}

/**
 * Generate validation report
 */
function generateReport() {
  console.log('\n📊 VALIDATION REPORT');
  console.log('====================\n');
  
  // Summary
  console.log('📈 SUMMARY:');
  Object.entries(validationResults.summary).forEach(([langCode, summary]) => {
    console.log(`  ${summary.name}: ${summary.totalCategories} categories`);
  });
  
  // Errors
  if (validationResults.errors.length > 0) {
    console.log(`\n❌ ERRORS (${validationResults.errors.length}):`);
    validationResults.errors.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error}`);
    });
  } else {
    console.log('\n✅ No errors found!');
  }
  
  // Warnings
  if (validationResults.warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${validationResults.warnings.length}):`);
    validationResults.warnings.forEach((warning, index) => {
      console.log(`  ${index + 1}. ${warning}`);
    });
  } else {
    console.log('\n✅ No warnings found!');
  }
  
  // Save report to file
  const reportData = {
    timestamp: new Date().toISOString(),
    summary: validationResults.summary,
    errors: validationResults.errors,
    warnings: validationResults.warnings
  };
  
  const reportPath = path.join(__dirname, '..', 'category-validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
  console.log(`\n💾 Detailed report saved to: ${reportPath}`);
}

// Main execution
function main() {
  console.log('🚀 Starting category validation...\n');
  
  try {
    compareCategoryStructures();
    validateSlugs();
    validateTranslations();
    generateReport();
    
    // Exit with error code if errors found
    if (validationResults.errors.length > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  validateCategories: main,
  validationResults
};