import baseConfig from '@/eslint/base'
import prettier from 'eslint-config-prettier'
import astro from 'eslint-plugin-astro'
import ts from 'typescript-eslint'

const config = ts.config(
  baseConfig,
  astro.configs.recommended,
  {
    ignores: ['.astro'],
  },
  prettier,
)

export default config
