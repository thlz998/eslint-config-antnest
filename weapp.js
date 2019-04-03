'use strict';

module.exports = {
    globals: {
        wx: true,
        App: true,
        Page: true,
        getApp: true,
        Component: true
    },
    extends: [
        './rules/best-practices',
        './rules/node',
        './rules/es6',
        './rules/variables',
        './rules/style',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
    },
    rules: {},
};
