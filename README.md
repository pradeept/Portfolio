# Portfolio

## Formatting

Prettier uses Airbnb-style formatting: two-space indentation, single quotes in JavaScript and TypeScript, double quotes in JSX, semicolons, trailing commas, parentheses around arrow-function parameters, and a preferred line width of 100 characters.

```sh
pnpm format        # Format source and configuration files
pnpm format:check  # Check formatting without writing files
pnpm lint          # Run ESLint and check formatting
```

The existing Next.js and TypeScript ESLint rules remain enabled. `eslint-config-prettier` disables conflicting formatting rules; this is not the full Airbnb ESLint preset. See the [Airbnb style guide](https://github.com/airbnb/javascript) and [Prettier's linter integration guide](https://prettier.io/docs/integrating-with-linters).

Generated files, lockfiles, environment files, assets, and archived prototypes are excluded from formatting. Editors with Prettier support use `.prettierrc.json` automatically.
