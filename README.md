# @masterborn/eslint-config

## Contents

```sh
.
├── LICENSE
├── README.md # this file
├── packages
│   │── backend
│       └── index.js # main backend config, accessible by @masterborn/eslint-config-backend
│   │── backend-typescript
│       └── index.js # main backend with typescript config, accessible by @masterborn/eslint-config-backend-typescript
│   │── common
│       └── index.js # commonly used ESLint rules that are used by other packages, accessible by @masterborn/eslint-config-common
│   │── frontend
│       └── index.js # main frontend config, accessible by @masterborn/eslint-config-frontend
│   │── frontend-typescript
│       └── index.js # main frontend with typescript config, accessible by @masterborn/eslint-config-frontend-typescript
└── package.json
```

### @masterborn/eslint-config-frontend

It uses @babel/eslint-parser which requires babel config file. More info on the parser can be found [here](https://github.com/babel/babel/tree/master/eslint/babel-eslint-parser).

### @masterborn/eslint-config-frontend-typescript

Configuration for TypeScript support.
Install peer dependencies and add `tsconfig.json` to your root directory.

### @masterborn/eslint-config-backend-typescript

Configuration for TypeScript support.
Install peer dependencies and add `tsconfig.json` to your root directory.
