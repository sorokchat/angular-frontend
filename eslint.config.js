import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';
import angularEslint from 'angular-eslint';

export default defineConfig([
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    files: ['**/*.ts'],
    extends: [...angularEslint.configs.tsRecommended],
    processor: angularEslint.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },

  {
    files: ['src/features/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@pages/**', 'src/pages/**', '@app/**', 'src/app/**'],
              message:
                'FSD: Фічі (@features) не можуть імпортувати вищі шари (сторінки або додаток).',
            },
          ],
        },
      ],
    },
  },

  {
    files: ['src/entities/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@features/**',
                'src/features/**',
                '@pages/**',
                'src/pages/**',
                '@app/**',
                'src/app/**',
              ],
              message:
                'FSD: Сутності (@entities) не мають доступу до вищих шарів (фіч, сторінок, апп).',
            },
          ],
        },
      ],
    },
  },

  {
    files: ['src/shared/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@entities/**',
                'src/entities/**',
                '@features/**',
                'src/features/**',
                '@pages/**',
                'src/pages/**',
                '@app/**',
                'src/app/**',
              ],
              message:
                'FSD: Шар @shared є базовим і не може імпортувати сутності, фічі чи сторінки.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angularEslint.configs.templateRecommended,
      ...angularEslint.configs.templateAccessibility,
    ],
    rules: {},
  },
]);
