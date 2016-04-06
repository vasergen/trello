"use strict"
let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

module.exports = {
    entry: {
        app: "./src/app/app.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    },
    watch: true,
    //devtool: "#inline-source-map",
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
                exclude: /node_modules/,
                test: /\.html$/,
                loader: 'raw'
            },
            {
                exclude: /node_modules/,
                test: /\.styl$/,
                loader: stylusLoader
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}