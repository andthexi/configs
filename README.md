# xi-configs

Shared Prettier, ESLint, and TypeScript configurations.

## Install

```sh
pnpm add -D xi-configs eslint prettier
```

TypeScript projects should also install TypeScript:

```sh
pnpm add -D typescript
```

## Prettier

```json
{
  "prettier": "xi-configs/prettier"
}
```

Available as `xi-configs/prettier`.

## ESLint

Use one preset in `eslint.config.mjs`:

```js
import config from "xi-configs/eslint/node-ts";

export default config;
```

Available presets:

| Preset              | Use case                       |
| ------------------- | ------------------------------ |
| `eslint/js`         | Environment-neutral JavaScript |
| `eslint/ts`         | Environment-neutral TypeScript |
| `eslint/node-js`    | Node.js with JavaScript        |
| `eslint/node-ts`    | Node.js with TypeScript        |
| `eslint/browser-js` | Browser JavaScript             |
| `eslint/browser-ts` | Browser TypeScript             |
| `eslint/vue-js`     | Vue with JavaScript            |
| `eslint/vue-ts`     | Vue with TypeScript            |

Project-specific rules can be appended:

```js
import config from "xi-configs/eslint/node-ts";

export default [
  ...config,
  {
    rules: {
      "no-console": "off",
    },
  },
];
```

## TypeScript

```json
{
  "extends": "xi-configs/tsconfig/node-app",
  "include": ["src"]
}
```

Available presets:

| Preset                            | Use case                                     |
| --------------------------------- | -------------------------------------------- |
| `tsconfig/node-app`               | Node app run through `tsx` or a bundler      |
| `tsconfig/node-app-native`        | Node app using native TypeScript execution   |
| `tsconfig/node-library`           | Node library using bundled declarations      |
| `tsconfig/node-library-tsc`       | Node library using `tsc` declarations        |
| `tsconfig/node-library-ts-source` | Internal library exporting TypeScript source |
| `tsconfig/vite`                   | Generic Vite app                             |
| `tsconfig/vite-vue`               | Vue app built with Vite                      |
| `tsconfig/vite-react`             | React app built with Vite                    |

Consumers should define project-specific paths such as `include`, `rootDir`, and `outDir` locally.

## Peer dependencies

- ESLint 10
- Prettier 3
- TypeScript is optional and currently supported from 4.8.4 through versions below 6.1
