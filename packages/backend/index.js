module.exports = {
  extends: "@pawk3k/eslint-config-common1",
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ["import"],
  rules: {},
  env: {
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ["migrations/**"],
      rules: {
        "no-underscore-dangle": "off",
      },
    },
  ],
};
