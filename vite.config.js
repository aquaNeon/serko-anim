import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __GLOBE_BUILD__: JSON.stringify(
      new Date().toISOString().slice(0, 19).replace('T', ' ')
    ),
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'SerkoGlobe',
      formats: ['iife'],
      fileName: () => 'serko-globe.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
  },
})
