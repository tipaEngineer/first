module.exports = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    arrowParens: 'always',
    bracketSpacing: true,
    autoFixOnSave: true,
    overrides: [
        {
            files: '*.{js,jsx,tsx,ts,scss,json,html}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
