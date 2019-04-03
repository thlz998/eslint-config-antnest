'use strict';

module.exports = {
    extends: [
        './rules/best-practices',
        './rules/node',
        './rules/es6',
        './rules/variables',
        './rules/style',
    ].map(require.resolve).concat('plugin:vue/recommended'),
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'indent': [2, 2],
    },
    plugins: [
        'html',
    ],
};
