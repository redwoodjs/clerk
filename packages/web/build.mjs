import browserslist from 'browserslist'
import * as esbuild from 'esbuild'
import { resolveToEsbuildTarget } from 'esbuild-plugin-browserslist'

const target = resolveToEsbuildTarget(browserslist('defaults'))

await esbuild.build({
  entryPoints: ['src/index.ts', 'src/clerk.tsx'],
  outdir: 'dist',

  format: 'cjs',
  platform: 'browser',
  target,

  logLevel: 'info',
})
