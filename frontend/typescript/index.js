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
}
