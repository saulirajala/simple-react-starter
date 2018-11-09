# Simple starter for React apps
This package includes just the basics in order to develop React Apps.
This package is highly inspired by [https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

## Babel (compiler)
["Babel is a compiler (source code => output code). Like many other compilers it runs in 3 stages: parsing, transforming, and printing."](https://babeljs.io/docs/en/plugins)

By default Babel doesn't actually do anything. To make Babel do its magic, you must install and use plugins. But there are so many plugins, so Babel-team has made things easier by introducing presets. Presets are just set of plugins in one single package.

Installed Babel packages:
* babel-core: this is needed to do any transformations on our code
* babel-cli: adds command line support to babel
* preset-env: transforms ES6+ code to ES5 ie. uses all the plugins necessary to transform ES6+ code to ES5.
* preset-react: transforms JSX code to ES5 ie. uses all the plugins necessary to transform JSX code to ES5.

`.babelrc` config-file tells babel that it should use env and react presets.

Targeted browsers are specified in `package.json`:
```
// Reference: https://github.com/browserslist/browserslist#full-list
// - last 2 version of every browser excluding dead browsers.
// - run npx browserslist to see what browsers are included.
"browserslist": "last 2 version, not dead",
```

So why we need Babel? Because without it most of ES6/JSX syntax won't work. This includes stuff like array-functions, let/const, class, etc.
* ES6 is actually quite [well supported in modern browsers](https://caniuse.com/#search=ES6): IE11 is mostly the only troublesome friend here
* JSX is not supported in browsers at all so that needs to be compiled back to normal ES5-code. See [https://facebook.github.io/jsx/](https://facebook.github.io/jsx/)

## Webpack (module bundler)
Webpack is module bundler. See this [good introduction to Webpack by Juho Vepsäläinen](https://survivejs.com/webpack/what-is-webpack/).

At minimum Webpack needs input and output ie. some files to process and some files where to output the code.
* entries (input)
* output
* loaders ??
* plugins ??
* resolve ??

Installed Webpack packages:
* webpack: the actual bundler
* webpack-cli: is this really necessary????
* webpack-dev-server: development server for webpack
* babel-loader
* style-loader????
* css-loader????

## SCSS
Because writing CSS is not the way to live your life.
* maybe add styled components or something like that