import globals from "globals";

import js from "./js.mjs";

export default [
  ...js,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
