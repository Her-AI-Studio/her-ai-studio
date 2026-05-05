import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  { ignores: ["dist", ".astro", "node_modules"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["astro.config.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.node,
    },
  },
  eslintPluginPrettier,
  {
    files: ["**/*.astro"],
    rules: {
      "prettier/prettier": "off",
    },
  },
];
