import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/header',
  plugins: [
    react()
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: `partial-header.min.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        format: "system",
      },
      preserveEntrySignatures: "strict",
      external: ['react', 'react-dom']
    },
  },
})
