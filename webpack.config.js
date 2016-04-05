"use strict"

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    watch: true,
    devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

}