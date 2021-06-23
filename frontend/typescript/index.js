module.exports = {
    root: true,
    extends: [
        '../index.js',
        'airbnb-typescript',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: 'tsconfig.json',
    },
    overrides: [
        {
            files: ["**/*.tsx"],
            rules: {
                "complexity": ["error", 10],
                "react/prop-types": "off",
                "react/jsx-props-no-spreading": "off"
            }
        },
        {
            files: ["**/*.{ts,tsx}"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": ['error'],
                "@typescript-eslint/no-explicit-any": ['error'],
            }
        },
    ],
    settings: {
        "import/resolver": {
            typescript: {
                "alwaysTryTypes": true
            }
        }
    }
}
