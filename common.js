module.exports = {
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never'
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id'
        ],
        allowAfterThis: true,
        allowAfterSuper: true
      }
    ],
    'no-confusing-arrow': 'warn',
    'class-methods-use-this': 0,
    'global-require': 0,
    'valid-jsdoc': 1,
    complexity: [
      'error',
      3
    ],
    'max-nested-callbacks': [
      'error',
      2
    ],
    'max-depth': [
      'error',
      3
    ],
    'max-classes-per-file': [
      'error',
      1
    ],
    'no-else-return': 'error',
    'max-params': [
      'error',
      7
    ],
    'function-paren-newline': [
      'error',
      'consistent'
    ]
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.ispec.js'
      ],
      env: {
        jest: true
      },
      rules: {
        'max-nested-callbacks': [
          'error',
          5
        ],
        'max-depth': [
          'error',
          5
        ],
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off'
      }
    }
  ]
}
