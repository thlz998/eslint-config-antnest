# eslint-config-antnest

[![Build Status](https://travis-ci.com/thlz998/eslint-config-antnest.svg?branch=master)](https://travis-ci.com/thlz998/eslint-config-antnest)
[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-v6.4.1-yellow.svg)]()
[![npm](https://img.shields.io/badge/ESLint-5.9.0-red.svg)]()

[The pluggable linting utility for JavaScript.](https://eslint.org/)

## Installation

```
npm i -D eslint-config-antnest
```

Written in `.eslintrc.js`:

```
module.exports = {
    extends: ['antnest']
}
```

## Webpack usage

Install webpack loader:

```
npm i -D eslint babel-eslint eslint-config-antnest eslint-friendly-formatter eslint-loader
```

To use it:

```
const createLintingRule = () => ({
    test: /\.js$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true,
    }
})

module.exports = {
    module: {
        rules: [
            createLintingRule(),
        ]
    },
    mode: 'development',
}
```

## Gulp usage

To use it:

```
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    gulp.src('*.js')
        .pipe(eslint({
            configFile: './.eslintrc.js'
        }))
        .pipe(eslint.format());
});
```

## Wechat Miniprogram usage

Wechat miniprogram has some global variables, which have been configured.

```
globals: {
    wx: true,
    App: true,
    Page: true,
    getApp: true,
    Component: true
}
```

Written in `.eslintrc.js`:

```
module.exports = {
    extends: ['antnest/weapp']
}
```

## Vue usage

Npm with version greater than 3 will not be installed peerDependencies automatically. So if you didn't choose ESLint when building a vue project that you need to install the following dependencies.

```
npm i -D eslint babel-eslint eslint-loader eslint-plugin-html eslint-plugin-vue eslint-loader
```

Written in `.eslintrc.js`:

```
module.exports = {
    extends: ['antnest/vue']
}
```

## React usage

We use eslint config of create-react-app. Please install:

```
npm i -D eslint babel-eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-antnest eslint-config-react-app eslint-loader confusing-browser-globals
```

Written in `.eslintrc.js`:

```
module.exports = {
    extends: ['antnest/react']
}
```

## Configuring ESLint

[User-guide/configuring](https://eslint.org/docs/user-guide/configuring)

[Disabling Rules with Inline Comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

[Specifying Globals](https://eslint.org/docs/user-guide/configuring#specifying-globals)

## Todo

- [x] Base rules: ES6, Node, Style and Variables
- [x] Wechat miniprogram: antnest/weapp
- [x] Vue
- [x] React
- [ ] Typescript
- [ ] Angular


## Update changelog

```
npm install -g conventional-changelog-cli
npm run changelog
```
