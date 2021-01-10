const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonWebpackMerge = require('./webpack.common')
const config = merge(commonWebpackMerge, {
    mode: 'development',
    devtool: 'inline-source-map', //将编译后的代码映射回原始源代码,更容易地追踪错误和警告,仅用于开发环境。
    devServer: {
        port: 3000,
        contentBase: '../dist'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ]
})

module.exports = config