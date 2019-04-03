'use strict';

const eslintRestrictedGlobals = require('eslint-restricted-globals');
const allows = ['name', 'history', 'status', 'event'];
const restrictedGlobals = eslintRestrictedGlobals.filter(g => !allows.includes(g));

module.exports = {
    env: {
        node: true,
        browser: true,
    },

    rules: {
        'init-declarations': 0,
        'no-catch-shadow': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': [2].concat(restrictedGlobals),
        'no-shadow': [2, {
            builtinGlobals: true,
            allow: allows
        }],
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 0,
        'no-unused-vars': [2, {vars: 'all', args: 'after-used', ignoreRestSiblings: true, 'argsIgnorePattern': '^_.+'}],
        'no-use-before-define': [2, {functions: false, classes: true, variables: true}],
    }
};
