# @masterborn/eslint-config

## Contents

```sh
.
├── LICENSE
├── README.md # this file
├── backend
│   └── index.js # main backend config, accessible by @masterborn/eslint-config/backend
├── common.js # commonly used ESLint rules
├── frontend
│   └── index.js # main frontend config, accessible by @masterborn/eslint-config/frontend
├── index.js # entry point pointig at common.js
└── package.json
```

### @masterborn/eslint-config/frontend
It uses @babel/eslint-parser which requires babel config file. More info on the parser can be found [here](https://github.com/babel/babel/tree/master/eslint/babel-eslint-parser).

### @masterborn/eslint-config/frontend/typescript
Configuration for TypeScript support.
Install peer dependencies and add `tsconfig.json` to your root directory.

### @masterborn/eslint-config/backend/typescript
Configuration for TypeScript support.
Install peer dependencies and add `tsconfig.json` to your root directory.
