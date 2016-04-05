"use strict"

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: __dirname + "/public",
        filename: "app.js"
    },
    watch: true,
    //devtool: "#inline-source-map" //works very slow
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    }
}