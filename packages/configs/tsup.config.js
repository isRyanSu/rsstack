import { defineConfig } from 'tsup'

const config = defineConfig({
  clean: true,
  dts: true,
  entry: [
    'src/commitlint/index.ts',
    'src/cspell/index.ts',
    'src/eslint/index.ts',
    'src/prettier/index.ts',
    'src/stylelint/index.ts',
  ],
  format: ['esm'],
  minify: true,
  outDir: 'dist',
  sourcemap: true,
})

export default config
