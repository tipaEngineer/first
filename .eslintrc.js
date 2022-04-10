module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/strict',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
    rules: {
        'react/boolean-prop-naming': [
            'error',
            {
                rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
                propTypeNames: ['bool', 'boolean'],
                message:
                    'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
                validateNested: true,
            },
        ],
        'react/jsx-curly-brace-presence': ['error'],
        'react/jsx-boolean-value': ['error', 'always'],
        'react-hooks/exhaustive-deps': 'error',
        'react/prop-types': 'off',
        'no-var': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'space-before-blocks': 'error',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.stories.*'],
            rules: {
                'import/no-anonymous-default-export': 'off',
            },
        },
        {
            files: [
                '*.ts',
                '**/*.test.js',
                '**/*.test.jsx',
                '**/*.test.tsx',
                '**/*.spec.js',
                '**/*.spec.jsx',
                '**/*.spec.tsx',
            ],
            rules: {
                'no-undef': 'off',
            },
            env: {
                jest: true,
            },
        },
    ],
};
