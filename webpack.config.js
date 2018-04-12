const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js',
        './src/scss/App.scss'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.bundle.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}