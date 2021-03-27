const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const commonWebpackMerge = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

const config = merge(commonWebpackMerge, {
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[contenthash].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../' // 防止打包后，css中的背景图片找不到
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            /* {
                test: /\.(png|jpg|jepg|svg)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            
                        }
                    }
                ]
            } */
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[hash].css",
        }),
        new CleanWebpackPlugin({
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: true
            }),
            
        ]
    }
})

module.exports = config