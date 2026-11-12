import globals from "globals";

import ts from "./ts.mjs";

export default [
  ...ts,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
