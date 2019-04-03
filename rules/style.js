'use strict';

module.exports = {
    env: {
        node: true,
        browser: true,
    },

    rules: {
        'no-multi-spaces': [2, {ignoreEOLComments: true, exceptions: {Property: true, BinaryExpression: false, VariableDeclarator: true, ImportDeclaration: true}}],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {allowSingleLine: true}],
        'camelcase': [0, {properties: 'never'}],
        'capitalized-comments': [0, 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true
            }
        }],
        'comma-spacing': [2, {before: false, after: true}],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': [2, 'always'],
        'func-call-spacing': [2, 'never'],
        'func-name-matching': [0, 'always', {
            includeCommonJSModuleExports: false
        }],
        'func-names': 0,
        'func-style': [0, 'expression'],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [2, 4],
        'jsx-quotes': [0, 'prefer-double'],
        'key-spacing': [2, {beforeColon: false, afterColon: true}],
        'keyword-spacing': [2, {
            before: true,
            after: true,
            overrides: {
                return: {after: true},
                throw: {after: true},
                case: {after: true}
            }
        }],
        'line-comment-position': [0, {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true
        }],
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0,
        'lines-around-directive': [2, {
            before: 'always',
            after: 'always'
        }],
        'max-depth': [0, 4],
        'max-len': [2, 200, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
        'max-lines': [1, {
            max: 600,
            skipBlankLines: true,
            skipComments: true
        }],
        'max-nested-callbacks': [0, 3],
        'max-params': [1, 4],
        'max-statements': [0, 10],
        'max-statements-per-line': [2, {max: 1}],
        'multiline-ternary': [0, 'never'],
        'new-cap': [0, {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
        }],
        'new-parens': 2,
        'newline-after-var': 0,
        'newline-before-return': 0,
        'newline-per-chained-call': [2, {ignoreChainWithDepth: 4}],
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': [0, {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: false
        }],
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 2,
        'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}],
        'no-negated-condition': 0,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': [
            2,
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': [0, {allowAfterThis: false}],
        'no-unneeded-ternary': [2, {defaultAssignment: false}],
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 0,
        'object-curly-spacing': [2, 'never'],
        'object-curly-newline': [0, {
            ObjectExpression: {minProperties: 0, multiline: true},
            ObjectPattern: {minProperties: 0, multiline: true}
        }],
        'object-property-newline': [2, {
            allowMultiplePropertiesPerLine: true
        }],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'always'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': 0,
        'padded-blocks': [2, 'never'],
        'quote-props': [0, 'as-needed', {keywords: false, unnecessary: true, numbers: false}],
        'quotes': [2, 'single', {avoidEscape: true}],
        'require-jsdoc': 0,
        'semi': [2, 'always'],
        'semi-spacing': [2, {before: false, after: true}],
        'sort-keys': [0, 'asc', {caseSensitive: false, natural: true}],
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            words: true,
            nonwords: false,
            overrides: {}
        }],
        'spaced-comment': [2, 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'] // space here to support sprockets directives
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
                balanced: true
            }
        }],
        'template-tag-spacing': [2, 'always'],
        'unicode-bom': [2, 'never'],
        'wrap-regex': 0,
    }
};
