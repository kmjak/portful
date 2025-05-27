import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  ...compat.extends("plugin:prettier/recommended"),
  {
    files: ["**/*.{js}"],
    rules: { "prettier/prettier": "error" },
  },
  { files: ["**/*.{js}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js}"], languageOptions: { globals: globals.node } },
]);
