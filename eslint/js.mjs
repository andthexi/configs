import eslint from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import { createNodeResolver, importX } from "eslint-plugin-import-x";
import promise from "eslint-plugin-promise";

const jsFiles = ["**/*.{js,jsx,mjs,cjs}"];

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  {
    ignores: [
      "**/node_modules/**",
      "**/lib/**",
      "**/dist/**",
      "**/coverage/**",
      "**/.husky/_/**",
    ],
  },
  eslint.configs.recommended,

  {
    ...importX.flatConfigs.recommended,
    rules: {
      ...importX.flatConfigs.recommended.rules,
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [
            { pattern: "~/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
    },
    settings: {
      ...importX.flatConfigs.recommended.settings,
      "import-x/resolver-next": [createNodeResolver()],
    },
  },
  {
    ...promise.configs["flat/recommended"],
    rules: {
      ...promise.configs["flat/recommended"].rules,
      "promise/param-names": "off",
      "promise/always-return": "off",
    },
  },

  {
    files: jsFiles,
    languageOptions: {
      ecmaVersion: "latest",
    },
  },

  {
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-tabs": "off",
      "no-var": "error",
      "accessor-pairs": "off",
      "arrow-body-style": ["error", "as-needed"],
      "prefer-const": ["error"],
      curly: "off",
      "object-property-newline": "off",
      "require-await": "off",
    },
  },
  prettier,
];

export default configs;
