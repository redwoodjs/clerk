import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: [
    'src/index.ts',
    'src/setup.ts',
    'src/setupHandler.ts',
  ],
  outdir: 'dist',

  format: 'cjs',
  platform: 'node',
  target: ['node18'],

  logLevel: 'info',
})
