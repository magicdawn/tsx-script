import { defineConfig } from 'tsdown'

export default defineConfig((options) => {
  return {
    entry: ['src/cli.ts'],
    outDir: 'dist',
    format: 'esm',
    target: 'node20',
    clean: true,
    fixedExtension: false,
  }
})
