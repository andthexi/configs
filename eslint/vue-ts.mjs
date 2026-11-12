import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";

import browserTs from "./browser-ts.mjs";
import { vueOverrides, vueRecommended } from "./vue-js.mjs";

export default [
  ...browserTs,
  { ignores: ["**/.nuxt/**", "**/.output/**"] },
  ...defineConfigWithVueTs(vueRecommended, vueTsConfigs.recommended),
  vueOverrides,
];
