module.exports = {
  extends: ['../common.js'],
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
