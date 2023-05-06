import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: [
    'src/index.ts',
    'src/clerk.tsx',
  ],
  outdir: 'dist',

  format: 'cjs',

  logLevel: 'info',
})
