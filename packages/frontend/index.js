module.exports = {
    extends: [
      require('@masterborn/eslint-config-common'),
      'airbnb',
      'airbnb/hooks',
    ],
    parser: "@babel/eslint-parser",
    rules: {
      'jsx-a11y/href-no-hash': 'off',
      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          aspects: [
            'invalidHref'
          ]
        }
      ],
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/label-has-for': [
        2,
        {
          components: [
            'Label'
          ],
          required: {
            some: [
              'nesting',
              'id'
            ]
          },
          allowChildren: false
        }
      ],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-filename-extension': 'off',
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          'groups': [
            ['builtin', 'external'],
            'internal',
            'parent',
            ['sibling', 'index']
          ]
        }
      ],
      'sort-destructure-keys/sort-destructure-keys': 'error',
      'sort-keys-fix/sort-keys-fix': 'error',
      'react/jsx-sort-props': 'error'
    },
    env: {
      browser: true
    },
    overrides: [
      {
        "files": ["**/*.jsx"],
        "rules": {
          "complexity": [
            "error",
            10
          ]
        }
      }
    ],
    plugins: [
      'import',
      'jsx-a11y',
      'sort-destructure-keys',
      'sort-keys-fix'
  ],
}
