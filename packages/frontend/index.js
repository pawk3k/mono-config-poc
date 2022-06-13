module.exports = {
  extends: [
    "@pawk3k/eslint-config-common",
    "airbnb",
    "airbnb/hooks",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    "jest/globals": true,
  },
  plugins: ["sort-destructure-keys"],
};
