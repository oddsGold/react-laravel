const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        main: path.resolve(__dirname, './resources/js/components/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss'],
        fallback: {
            "path": require.resolve("path-browserify")
        },
        alias: {
            path: require.resolve("path-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    'sass-loader',
                    'css-loader',
                    'style-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ['style', 'css', 'sass']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
module.exports = config;
