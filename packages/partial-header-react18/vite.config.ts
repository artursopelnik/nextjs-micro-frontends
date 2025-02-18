import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInject from "vite-plugin-css-injected-by-js";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/header",
  plugins: [react(), cssInject()],
  preview: {
    port: 4010,
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      external: ["react", "react-dom"],
      input: resolve(__dirname, "src/main.tsx"),
      output: {
        entryFileNames: `bundle.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        format: "system",
      },
    },
  },
});
