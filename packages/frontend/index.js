module.exports = {
  extends: [
    "@masterborn/eslint-config-common",

    "airbnb",
    "airbnb/hooks",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    "jest/globals": true,
  },
  plugins: ["sort-destructure-keys"],
};
