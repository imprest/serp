const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')

const args = process.argv.slice(2)
const watch = args.includes('--watch')
const deploy = args.includes('--deploy')

const loader = {
  // Add loaders for images/fonts/etc, e.g. { '.svg': 'file' }
}

const plugins = [
  // Add and configure plugins here
  sveltePlugin({compileOptions: {css: true}})
]

let opts = {
  entryPoints: ['js/app.js'],
  bundle: true,
  logLevel: 'info',
  format: 'esm',
  outdir: '../priv/static/assets',
  loader,
  plugins
}

if (watch) {
  opts = {
    ...opts,
    watch,
    sourcemap: 'inline'
  }
}

if (deploy) {
  opts = {
    ...opts,
    minify: true
  }
}

const promise = esbuild.build(opts)

if (watch) {
  promise.then(_result => {
    process.stdin.on('close', () => {
      process.exit(0)
    })

    process.stdin.resume()
  })
}

/* import esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';

esbuild.build({
  entryPoints: ["js/app.js"],
  bundle: true,
  logLevel: 'info',
  format: 'esm',
  outfile: '../priv/static/assets/app.js',
  plugins: [sveltePlugin()],
  watch: true,
  sourcemap: 'inline'
}).then((result) => {
  // This is important so that esbuild's watcher stops
  // when beam or phx server is closed via STDIN
  process.stdin.pipe(process.stdout)
  process.stdin.on('end', () => { result.stop() })
}).catch(() => process.exit(1)); */