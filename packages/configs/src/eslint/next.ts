import baseConfig from '@/eslint/base'
// @ts-expect-error - Missing types.
import next from '@next/eslint-plugin-next'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import ts from 'typescript-eslint'

const config = ts.config(
  baseConfig,
  {
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended!.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // React scope no longer necessary with new JSX transform.
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },
  prettier,
)

export default config
