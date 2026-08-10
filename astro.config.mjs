import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// Absolute URLs for Open Graph (set to your production origin).
const site = "https://heraistudio.org";

export default defineConfig({
  site,
  output: "static",
  build: {
    // Inline all CSS into the HTML so there is no render-blocking
    // stylesheet request on the critical path (faster LCP on mobile).
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
