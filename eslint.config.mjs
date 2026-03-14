import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'

const eslintConfig = defineConfig([
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    ...resolveIgnoresFromGitignore(),
  ]),
  ...nextVitals,
  ...nextTs,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...neostandard({
    ignores: false, // Already handled globally
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'simple-import-sort/imports': 'error',
      'no-useless-constructor': 'off',
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/multiline-ternary': ['error', 'always'],
      'react/jsx-handler-names': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.mjs',
            'ecosystem.config.js',
            'postcss.config.mjs',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

export default eslintConfig
