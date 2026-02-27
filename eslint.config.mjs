import rocketseatNext from '@rocketseat/eslint-config/react.mjs'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const rocketseatFiltered = rocketseatNext.filter(
  (config) => !(config.plugins && config.plugins['react-hooks'])
)

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...rocketseatFiltered,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'simple-import-sort/imports': 'error',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
