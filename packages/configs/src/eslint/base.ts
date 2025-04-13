import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
// @ts-expect-error - Missing types.
import onlyWarn from 'eslint-plugin-only-warn'
import perfectionist from 'eslint-plugin-perfectionist'
import turbo from 'eslint-plugin-turbo'
import unicorn from 'eslint-plugin-unicorn'
import ts from 'typescript-eslint'

const baseConfig = ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  unicorn.configs.recommended,
  turbo.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
  prettier,
)

export default baseConfig
