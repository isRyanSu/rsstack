import type { Config } from 'prettier'

const config: Config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  objectWrap: 'preserve',
  overrides: [
    {
      files: ['*.astro'],
      options: {
        plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
      },
    },
    {
      files: ['*.jsx', '*.tsx', '*.vue'],
      options: {
        plugins: ['prettier-plugin-tailwindcss'],
        tailwindFunctions: ['cn'],
        tailwindPreserveDuplicates: false,
        tailwindPreserveWhitespace: false,
      },
    },
    {
      files: '*.json',
      options: {
        plugins: ['prettier-plugin-sort-json'],
      },
    },
    {
      files: '*.md',
      options: {
        plugins: [],
        proseWrap: 'preserve',
      },
    },
    {
      files: ['package.json'],
      options: {
        plugins: ['prettier-plugin-packagejson'],
      },
    },
  ],
  plugins: ['prettier-plugin-sh'],
  printWidth: 128,
  proseWrap: 'never',
  quoteProps: 'consistent',
  rangeEnd: Infinity,
  rangeStart: 0,
  requirePragma: false,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
}

export default config
