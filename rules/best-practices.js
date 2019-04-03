'use strict';

module.exports = {
    env: {
        node: true,
        browser: true,
    },

    rules: {
        'no-debugger': 0,
        'no-console': 0,
        'default-case': 1,
        'valid-jsdoc': 1,
        'no-caller': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-self-compare': 2,
        'no-template-curly-in-string': 2,
        'array-callback-return': 2,
        'consistent-return': 2,
        'no-empty-function': 2,
        'no-floating-decimal': 2,
        'no-with': 2,
        'block-scoped-var': 2,
        'eqeqeq': [2, 'always', {null: 'ignore'}],
        'no-eval': 2,
        'multiline-comment-style': [2, 'starred-block'],
        'array-bracket-spacing': [2, 'never'],
        'function-paren-newline': [2, 'never'],
        'lines-between-class-members': [2, 'always'],
    }
};
