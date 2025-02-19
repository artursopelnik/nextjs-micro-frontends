import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [ libInjectCss(), dts({ include: ['src'] }) ],
  build: {
    copyPublicDir: false,
    target: 'ES2020',
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts')
      ],
      formats: ['es'],
      name: 'ComponentLibrary',
      fileName: 'component-library'
    },
    rollupOptions: {}
  },
})