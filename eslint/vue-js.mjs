import prettier from "eslint-config-prettier/flat";
import vuePlugin from "eslint-plugin-vue";

import browserJs from "./browser-js.mjs";

export const vueFiles = ["*.vue", "**/*.vue"];
export const vueRecommended = vuePlugin.configs["flat/recommended"];
export const vueOverrides = {
  files: vueFiles,
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/v-on-event-hyphenation": ["error", "never"],
    "vue/no-useless-v-bind": ["error"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: [
          "math-field",
          "metainfo",
          "router-link",
          "router-view",
          "transition",
        ],
      },
    ],
  },
};

export default [
  ...browserJs,
  { ignores: ["**/.nuxt/**", "**/.output/**"] },
  ...vueRecommended,
  vueOverrides,
  prettier,
];
