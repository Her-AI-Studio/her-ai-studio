import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/postcss";
import { fileURLToPath } from "node:url";

// Absolute URLs for Open Graph (set to your production origin).
const site = "https://heraistudio.com";

export default defineConfig({
  site,
  output: "static",
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
