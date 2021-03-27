const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonWebpackMerge = require('./webpack.common')
const config = merge(commonWebpackMerge, {
    mode: 'development',
    devtool: 'inline-source-map', //将编译后的代码映射回原始源代码,更容易地追踪错误和警告,仅用于开发环境。
    devServer: { // build后 后端要nginx反向代理
        port: 3000,
        hot: true,
        contentBase: '../dist',
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    /* 把/api转成空字符串，所以http://localhost:3001/api/getTest就相当于http://localhost:3001/getTest */
                    '^/api': ''
                }
            }
        }
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
        }),
        new webpack.HotModuleReplacementPlugin({
            
        })
    ]
})

module.exports = config