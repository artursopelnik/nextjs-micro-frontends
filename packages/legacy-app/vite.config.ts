import { defineConfig } from "vite";
export default defineConfig({
  base: '/projects-legacy',
  server: {
    port: 4030
  },
  preview: {
    port: 4030,
  }
})