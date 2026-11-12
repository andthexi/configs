import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { importX } from "eslint-plugin-import-x";
import tsEslint from "typescript-eslint";

import js from "./js.mjs";

const tsFiles = ["**/*.{ts,tsx,mts,cts}"];

export default [
  ...js,
  {
    ...importX.flatConfigs.typescript,
    files: tsFiles,
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },
  },
  ...tsEslint.configs.recommended.map((config) => ({
    ...config,
    files: tsFiles,
  })),
  {
    files: tsFiles,
    plugins: { "@typescript-eslint": tsEslint.plugin },
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsEslint.parser,
      parserOptions: {
        project: false,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
