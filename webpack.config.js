const path = require("path");
const webpack = require("webpack");

module.exports = {
    // Entry point
    entry: "./src/index.js",
    mode: "development",

    /*
    The module object helps define how your exported javascript modules are transformed and which ones are included according to the given array of rules.

Our first rule is all about transforming our ES6 and JSX syntax. The test and exclude properties are conditions to match file against. In this case,
 it’ll match anything outside of the node_modules and bower_components directories. Since we’ll be transforming our .js and .jsx files as well,
 we’ll need to direct Webpack to use Babel. Finally, we specify that we want to use the env preset in options.
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

    // The resolve property allows us to specify which extensions Webpack will resolve — this allows us to import modules without needing to add their extensions.
    // So this does the import './main' just work? ie. no need for import './main.js'?
    resolve: { extensions: ["*", ".js", ".jsx"] },

    // Where to output code
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};