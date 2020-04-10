module.exports = {
  extends: ['../common.js'],
  rules: {},
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
