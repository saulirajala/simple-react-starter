const path = require("path");
const webpack = require("webpack");

module.exports = {
    // Entry point
    entry: "./src/index.js",

    // Are we working in development or in production
    // mode: "production",
    mode: "development",

    /**
     * How the different types of modules within a project will be treated.
     *
     * - Transform all .js and .jsx code with babel-loader.
     * - exlude code in `node_modules` or `bower_components` -folders
     * - loader is a shorthand for the use property, when only one loader is being utilized
     * - Use the env preset in babel-loader, ie. transform from ES6=> ES5. What does the jsx => js?
     */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
        ]
    },

    /**
     * Which extensions Webpack will resolve?
     * See https://webpack.js.org/configuration/resolve/#resolve-extensions
     *
     * This will do the magic of:
     *  `import Main from './main.jsx';` => `import Main from './main';`
     *
     * Here we specify that webpack will resolve .js or .jsx extensions.
     * With * we make sure, that webpack properly resolves modules with extension (import SomeFile from "./somefile.ext")
     */
    resolve: { extensions: ["*", ".js", ".jsx"] },

    /**
     * Where to output code?
     * https://webpack.js.org/configuration/output/
     *
     * - path: absolute path
     * - publicPath: URL of your output.path from the view of the HTML page
     * - filename
     *
     * path will resolve to something like `/srv/www/example/public_html/dist`
     * publicPath will resolve to something like `https://example.com/dist`
     */
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    /**
     * Webpack comes with own server that serves a webpack app and does live reload
     *
     * https://webpack.js.org/configuration/dev-server/
     *
     * What is the difference between path.resolve and path.join??
     *
     * - contentBase: absolute path to static files (index.html)
     * - publicPath: bundled files will be available in the browser under this path
     *      - We use a full URL, because it's necessary for Hot Module Replacement
     * - port: Specify a port number to listen for requests on
     * - hotOnly: if build fails, whether or not browser should be reloaded (true=no reload, false=yes reload)
     *      - for React Apps, `hotOnly: true`, is recommended since it keeps the state
     *      - https://survivejs.com/webpack/appendices/hmr/
     */
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },

    /**
     * Add HotModuleReplacementPlugin to modify how Webpack works
     * https://webpack.js.org/plugins/hot-module-replacement-plugin/
     */
    plugins: [new webpack.HotModuleReplacementPlugin()]
};