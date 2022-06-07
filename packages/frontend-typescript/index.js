module.exports = {
  root: true,
  extends: ["@masterborn/eslint-config-frontend", "airbnb-typescript", "prettier"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
