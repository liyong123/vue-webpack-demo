const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, dir)
}
const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //配置别名 确保webpack可以找到.vue文件
            '@': resolve('../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name:'static/font/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jepg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 4096,
                            name:'static/img/[name].[hash:7].[ext]'
                        },
                    }
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue-webpack-test',
            template:'./index.html',
        }),
        new VueLoaderPlugin(),
        new ESLintPlugin({ // 替代eslint-loader
            extensions: ['js', 'vue'],
            formatter: require('eslint-friendly-formatter')
        })
    ],
    // 缓存优化2
    optimization: {
        /* moduleIds: 'deterministic', */  /* moduleIds: 'deterministic' 在 webpack 5 中被添加 */
        runtimeChunk: 'single', // 将 runtime 代码拆分为一个单独的 chunk
        splitChunks: {  // 将第三方库(library)（例如 lodash 或 vue）提取到单独的 vendor chunk 文件中
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        usedExports: true,  /* tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) ,包含usedExports和package.json中的sideEffects*/
    },
    performance: {
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000    
    }
}

module.exports = config