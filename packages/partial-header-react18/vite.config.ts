import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/header",
  plugins: [react()],
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      external: ["react", "react-dom"],
      input: resolve(__dirname, "src/main.tsx"),
      output: {
        entryFileNames: `partial-header.js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        format: "system",
      },
    },
  },
});
