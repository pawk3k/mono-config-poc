module.exports = {
  extends: ['../common.js'],
  parser: "babel-eslint",
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
