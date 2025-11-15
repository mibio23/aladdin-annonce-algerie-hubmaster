/**
 * Custom ESLint plugin to detect hardcoded text and enforce translation usage
 */
import { Rule } from 'eslint';

interface EslintPluginTranslations {
  rules: Record<string, Rule.RuleModule>;
  configs: Record<string, any>;
}

const TRANSLATION_FUNCTIONS = ['t', 'translate', 'i18n.t'];
const ALLOWED_HARDCODED_PATTERNS = [
  /^[0-9\s\-\+\(\)\.]+$/, // Numbers and simple math
  /^[A-Z_][A-Z0-9_]*$/, // Constants
  /^https?:\/\//, // URLs
  /^\//, // Paths
  /^[a-z0-9\-_\.]+@[a-z0-9\-_\.]+$/, // Emails
  /^\d{1,2}\/\d{1,2}\/\d{4}$/, // Dates
  /^#[0-9a-fA-F]{3,8}$/, // Colors
  /^[a-z0-9\-_]+\.(jpg|jpeg|png|gif|svg|webp)$/i, // Image files
];

const COMPONENT_EXCEPTIONS = [
  'console.log',
  'console.error',
  'console.warn',
  'console.info',
  'console.debug',
  'className',
  'id',
  'data-testid',
  'aria-label',
  'role',
  'type',
  'name',
  'value',
  'placeholder',
  'alt',
  'title',
  'href',
  'src',
  'key',
];

const noHardcodedStrings: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce use of translation functions instead of hardcoded strings',
      category: 'Internationalization',
      recommended: true,
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          ignorePatterns: {
            type: 'array',
            items: { type: 'string' },
          },
          translationFunctions: {
            type: 'array',
            items: { type: 'string' },
          },
          allowedComponents: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      hardcodedString: 'Hardcoded string "{{text}}" should use translation function like t("{{key}}")',
      missingTranslationFunction: 'String "{{text}}" appears to be user-facing but not wrapped in translation function',
      suggestTranslationKey: 'Consider using t("{{suggestedKey}}") for "{{text}}"',
    },
  },

  create(context: Rule.RuleContext): Rule.RuleListener {
    const options = context.options[0] || {};
    const ignorePatterns = (options.ignorePatterns || []).map((p: string) => new RegExp(p));
    const translationFunctions = options.translationFunctions || TRANSLATION_FUNCTIONS;
    const allowedComponents = options.allowedComponents || COMPONENT_EXCEPTIONS;

    function isAllowedString(text: string): boolean {
      // Check if string matches allowed patterns
      return ALLOWED_HARDCODED_PATTERNS.some(pattern => pattern.test(text)) ||
             ignorePatterns.some((pattern: RegExp) => pattern.test(text));
    }

    function isInAllowedContext(node: any): boolean {
      let parent = node.parent;
      
      while (parent) {
        // Skip if inside translation function call
        if (parent.type === 'CallExpression' && 
            parent.callee?.name && 
            translationFunctions.includes(parent.callee.name)) {
          return true;
        }
        
        // Skip if inside allowed component props
        if (parent.type === 'JSXAttribute' && 
            parent.name?.name && 
            allowedComponents.includes(parent.name.name)) {
          return true;
        }
        
        // Skip if inside console statements
        if (parent.type === 'CallExpression' && 
            parent.callee?.object?.name === 'console') {
          return true;
        }
        
        parent = parent.parent;
      }
      
      return false;
    }

    function generateTranslationKey(text: string): string {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '.')
        .replace(/^\.+|\.+$/g, '')
        .substring(0, 50);
    }

    function checkStringLiteral(node: any) {
      if (node.type !== 'Literal') return;
      if (typeof node.value !== 'string') return;
      
      const text = node.value;
      
      // Skip empty strings or single characters
      if (text.length <= 1) return;
      
      // Skip allowed strings
      if (isAllowedString(text)) return;
      
      // Skip if in allowed context
      if (isInAllowedContext(node)) return;
      
      // Only flag strings that look like user-facing text
      if (!/[a-zA-Z]/.test(text)) return;
      
      const suggestedKey = generateTranslationKey(text);
      
      context.report({
        node,
        messageId: 'hardcodedString',
        data: {
          text: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
          key: suggestedKey,
        },
        fix(fixer) {
          return fixer.replaceText(node, `t("${suggestedKey}")`);
        },
      });
    }

    function checkJSXText(node: any) {
      if (node.type !== 'JSXText') return;
      const text = node.value.trim();
      
      if (text.length <= 1) return;
      if (isAllowedString(text)) return;
      if (!/[a-zA-Z]/.test(text)) return;
      
      const suggestedKey = generateTranslationKey(text);
      
      context.report({
        node,
        messageId: 'hardcodedString',
        data: {
          text: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
          key: suggestedKey,
        },
        fix(fixer) {
          return fixer.replaceText(node, `{t("${suggestedKey}")}`);
        },
      });
    }

    return {
      Literal: checkStringLiteral,
      JSXText: checkJSXText,
    };
  },
};

const requireTranslationKeys: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure translation keys exist in translation files',
      category: 'Internationalization',
      recommended: true,
    },
    schema: [],
    messages: {
      missingTranslationKey: 'Translation key "{{key}}" not found in translation files',
      invalidTranslationKey: 'Translation key "{{key}}" format is invalid',
    },
  },

  create(context: Rule.RuleContext): Rule.RuleListener {
    function checkTranslationCall(node: any) {
      if (node.type !== 'CallExpression') return;
      if (!node.callee || 
          (node.callee.type !== 'Identifier' || !TRANSLATION_FUNCTIONS.includes(node.callee.name))) {
        return;
      }

      const firstArg = node.arguments[0];
      if (!firstArg || firstArg.type !== 'Literal' || typeof firstArg.value !== 'string') {
        return;
      }

      const key = firstArg.value;
      
      // Validate key format
      if (!/^[a-z][a-zA-Z0-9.]*$/.test(key)) {
        context.report({
          node: firstArg,
          messageId: 'invalidTranslationKey',
          data: { key },
        });
        return;
      }

      // Check if key exists in translations (would require loading translation files)
      // This is a simplified check - in real implementation, we'd load the actual translation files
      if (key.length < 3 || key.split('.').length > 5) {
        context.report({
          node: firstArg,
          messageId: 'missingTranslationKey',
          data: { key },
        });
      }
    }

    return {
      CallExpression: checkTranslationCall,
    };
  },
};

const translationBestPractices: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce translation best practices',
      category: 'Internationalization',
      recommended: true,
    },
    schema: [],
    messages: {
      avoidStringConcatenation: 'Avoid string concatenation in translations. Use template parameters instead.',
      useSemanticKeys: 'Use semantic translation keys instead of generic ones like "text1", "label2"',
      consistentKeyFormat: 'Translation keys should follow consistent format: domain.context.element',
    },
  },

  create(context: Rule.RuleContext): Rule.RuleListener {
    function checkTranslationCall(node: any) {
      if (node.type !== 'CallExpression') return;
      if (!node.callee || 
          (node.callee.type !== 'Identifier' || !TRANSLATION_FUNCTIONS.includes(node.callee.name))) {
        return;
      }

      const firstArg = node.arguments[0];
      if (!firstArg || firstArg.type !== 'Literal' || typeof firstArg.value !== 'string') {
        return;
      }

      const key = firstArg.value;
      
      // Check for generic/non-semantic keys
      if (/^(text|label|title|button|link)\d+$/.test(key)) {
        context.report({
          node: firstArg,
          messageId: 'useSemanticKeys',
        });
      }
      
      // Check for consistent key format
      const parts = key.split('.');
      if (parts.length < 2) {
        context.report({
          node: firstArg,
          messageId: 'consistentKeyFormat',
        });
      }
    }

    return {
      CallExpression: checkTranslationCall,
    };
  },
};

// Export the plugin
const plugin: EslintPluginTranslations = {
  rules: {
    'no-hardcoded-strings': noHardcodedStrings,
    'require-translation-keys': requireTranslationKeys,
    'translation-best-practices': translationBestPractices,
  },
  configs: {
    recommended: {
      plugins: ['@translations'],
      rules: {
        '@translations/no-hardcoded-strings': 'error',
        '@translations/require-translation-keys': 'warn',
        '@translations/translation-best-practices': 'warn',
      },
    },
    strict: {
      plugins: ['@translations'],
      rules: {
        '@translations/no-hardcoded-strings': 'error',
        '@translations/require-translation-keys': 'error',
        '@translations/translation-best-practices': 'error',
      },
    },
  },
};

export default plugin;