import fs from 'fs';
import path from 'path';
import { Language, ValidationResult, ValidationIssue, TranslationMetrics } from '../types/comprehensive';
import translations from '../translations';

/**
 * Advanced translation validation system
 */
export class AdvancedTranslationValidator {
  private readonly _languagesDir = path.join(process.cwd(), 'src/lib/i18n/languages');
  private readonly componentsDir = path.join(process.cwd(), 'src/components');
  
  /**
   * Comprehensive validation of all translation files
   */
  async validateAll(): Promise<TranslationMetrics> {
    const languages: Language[] = ['fr', 'ar', 'en', 'de', 'es', 'it'];
    const domains = [
      'auth', 'search', 'navigation', 'categories', 'announcements',
      'reviews', 'userMenu', 'profile', 'pwa', 'intelligentAssistant',
      'hero', 'footer', 'stats', 'notifications', 'banner', 'common'
    ];

    const metrics: TranslationMetrics = {
      totalKeys: 0,
      coverage: {} as Record<Language, number>,
      missingByLanguage: {} as Record<Language, string[]>,
      lastUpdated: new Date(),
      domains: {} as Record<string, ValidationResult>
    };

    // Get all translation keys from components
    const usedKeys = await this.scanComponentsForTranslationKeys();
    metrics.totalKeys = usedKeys.length;

    // Validate each language
    for (const language of languages) {
      const result = await this.validateLanguage(language, usedKeys);
      metrics.coverage[language] = (result.translatedKeys / result.totalKeys) * 100;
      metrics.missingByLanguage[language] = result.missingKeys;
    }

    // Validate each domain
    for (const domain of domains) {
      const domainKeys = usedKeys.filter(key => key.startsWith(domain + '.'));
      const domainResult = await this.validateDomain(domain, domainKeys);
      metrics.domains[domain] = domainResult;
    }

    return metrics;
  }

  /**
   * Validate a specific language
   */
  private async validateLanguage(language: Language, requiredKeys: string[]): Promise<ValidationResult> {
    const languageTranslations = translations[language];
    const issues: ValidationIssue[] = [];
    const missingKeys: string[] = [];
    let translatedKeys = 0;

    for (const key of requiredKeys) {
      const value = this.getNestedValue(languageTranslations, key);
      
      if (!value) {
        missingKeys.push(key);
        issues.push({
          type: 'missing',
          key,
          language,
          message: `Missing translation for key "${key}" in language "${language}"`,
          severity: 'error'
        });
      } else if (typeof value === 'string' && value.trim() === '') {
        issues.push({
          type: 'empty',
          key,
          language,
          message: `Empty translation for key "${key}" in language "${language}"`,
          severity: 'warning'
        });
      } else if (typeof value === 'string' && value === key) {
        issues.push({
          type: 'invalid',
          key,
          language,
          message: `Translation for key "${key}" is the same as the key itself`,
          severity: 'warning'
        });
      } else {
        translatedKeys++;
      }
    }

    return {
      totalKeys: requiredKeys.length,
      translatedKeys,
      missingKeys,
      coverage: (translatedKeys / requiredKeys.length) * 100,
      issues
    };
  }

  /**
   * Validate a specific domain
   */
  private async validateDomain(domain: string, domainKeys: string[]): Promise<ValidationResult> {
    const languages: Language[] = ['fr', 'ar', 'en', 'de', 'es', 'it'];
    const issues: ValidationIssue[] = [];
    const missingKeys: string[] = [];
    let totalTranslated = 0;
    const totalPossible = domainKeys.length * languages.length;

    for (const language of languages) {
      const languageTranslations = translations[language];
      
      for (const key of domainKeys) {
        const value = this.getNestedValue(languageTranslations, key);
        
        if (!value) {
          missingKeys.push(`${key} (${language})`);
          issues.push({
            type: 'missing',
            key,
            language,
            message: `Missing "${key}" in ${domain} domain for ${language}`,
            severity: 'error'
          });
        } else {
          totalTranslated++;
        }
      }
    }

    return {
      totalKeys: totalPossible,
      translatedKeys: totalTranslated,
      missingKeys,
      coverage: (totalTranslated / totalPossible) * 100,
      issues
    };
  }

  /**
   * Scan all component files for translation keys
   */
  private async scanComponentsForTranslationKeys(): Promise<string[]> {
    const keys = new Set<string>();
    
    await this.scanDirectory(this.componentsDir, (filePath: string) => {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const foundKeys = this.extractTranslationKeys(content);
        foundKeys.forEach(key => keys.add(key));
      }
    });

    return Array.from(keys).sort();
  }

  /**
   * Extract translation keys from file content
   */
  private extractTranslationKeys(content: string): string[] {
    const keys: string[] = [];
    
    // Match t('key'), t("key"), t(`key`)
    const tFunctionPattern = /t\s*\(\s*['"`]([^'"`]+)['"`]/g;
    let match = tFunctionPattern.exec(content);
    
    while (match) {
      keys.push(match[1]);
      match = tFunctionPattern.exec(content);
    }

    // Match {t('key')}, {t("key")}, {t(`key`)}
    const jsxPattern = /\{\s*t\s*\(\s*['"`]([^'"`]+)['"`]/g;
    match = jsxPattern.exec(content);
    
    while (match) {
      keys.push(match[1]);
      match = jsxPattern.exec(content);
    }

    return keys;
  }

  /**
   * Recursively scan directory
   */
  private async scanDirectory(dirPath: string, callback: (filePath: string) => void): Promise<void> {
    if (!fs.existsSync(dirPath)) return;

    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        await this.scanDirectory(itemPath, callback);
      } else {
        callback(itemPath);
      }
    }
  }

  /**
   * Get nested value from object using dot notation
   */
  private getNestedValue(obj: any, key: string): any {
    if (!obj || typeof obj !== 'object') return null;

    // Handle direct key access
    if (obj[key] !== undefined) {
      return obj[key];
    }

    // Handle dot notation
    const keys = key.split('.');
    let current = obj;

    for (const k of keys) {
      if (current && typeof current === 'object' && current[k] !== undefined) {
        current = current[k];
      } else {
        return null;
      }
    }

    return current;
  }

  /**
   * Generate comprehensive validation report
   */
  async generateReport(): Promise<string> {
    const metrics = await this.validateAll();
    
    let report = '# Translation Validation Report\n\n';
    report += `Generated: ${metrics.lastUpdated.toISOString()}\n`;
    report += `Total Keys: ${metrics.totalKeys}\n\n`;

    // Coverage by language
    report += '## Coverage by Language\n\n';
    for (const [language, coverage] of Object.entries(metrics.coverage)) {
      const status = coverage > 95 ? '✅' : coverage > 85 ? '⚠️' : '❌';
      report += `${status} ${language.toUpperCase()}: ${coverage.toFixed(1)}%\n`;
    }

    // Missing translations by language
    report += '\n## Missing Translations\n\n';
    for (const [language, missing] of Object.entries(metrics.missingByLanguage)) {
      if (missing.length > 0) {
        report += `### ${language.toUpperCase()} (${missing.length} missing)\n`;
        missing.slice(0, 10).forEach(key => {
          report += `- ${key}\n`;
        });
        if (missing.length > 10) {
          report += `... and ${missing.length - 10} more\n`;
        }
        report += '\n';
      }
    }

    // Domain-specific reports
    report += '## Domain Coverage\n\n';
    for (const [domain, result] of Object.entries(metrics.domains)) {
      const status = result.coverage > 95 ? '✅' : result.coverage > 85 ? '⚠️' : '❌';
      report += `${status} ${domain}: ${result.coverage.toFixed(1)}% (${result.translatedKeys}/${result.totalKeys})\n`;
    }

    return report;
  }

  /**
   * Fix common translation issues automatically
   */
  async autoFix(): Promise<void> {
    const _metrics = await this.validateAll();
    
    // Auto-fix logic would go here
    // For now, just log what could be fixed
    console.log('🔧 Auto-fix capabilities:');
    console.log('- Fill empty translations with fallback values');
    console.log('- Generate missing keys structure');
    console.log('- Standardize key formats');
    console.log('- Remove unused translations');
  }
}

// Export singleton instance
export const translationValidator = new AdvancedTranslationValidator();

// CLI utilities
export async function runValidation() {
  console.log('🔍 Running comprehensive translation validation...\n');
  
  const metrics = await translationValidator.validateAll();
  const report = await translationValidator.generateReport();
  
  console.log(report);
  
  // Write report to file
  const reportPath = path.join(process.cwd(), 'translation-report.md');
  fs.writeFileSync(reportPath, report);
  console.log(`\n📝 Full report written to: ${reportPath}`);
  
  // Exit with appropriate code
  const avgCoverage = Object.values(metrics.coverage).reduce((a, b) => a + b, 0) / Object.keys(metrics.coverage).length;
  if (avgCoverage < 85) {
    console.log('\n❌ Translation coverage below 85%. Please fix missing translations.');
    process.exit(1);
  } else {
    console.log('\n✅ Translation validation passed!');
    process.exit(0);
  }
}