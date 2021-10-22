module.exports = {
  extends: ['../common.js'],
  parser: "@babel/eslint-parser",
  plugins: [
    "import"
  ],
  rules: {},
  env: {
    node: true,
    jest: true
  },
  overrides: [
    {
      files: [
        'migrations/**'
      ],
      rules: {
        'no-underscore-dangle': 'off'
      }
    }
  ]
}
