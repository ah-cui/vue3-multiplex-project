'use strict';
require("@ahcui/lib-jsext");
const path = require('path');
const utils = require('./utils');
const prodBuildConfig = require('./prod/prod.conf.js');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');
const VueLoaderPlugin_v3 = require('vue-loader').VueLoaderPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}


module.exports = {

    context: path.resolve(__dirname, '../'),
    output: {
        path: prodBuildConfig.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? undefined : '/',
    },
    resolve: {
        extensions: ['.js', '.mjs', '.vue', '.json'],
        alias: {
            //'vue$': 'vue/dist/vue.esm-bundler.js',
            '@src': resolve('src'),
            '@lib': resolve('src/lib'),
            '@core': resolve('src/assets/core'),
            '@views': resolve('src/views'),
            '@components': resolve('src/components'),
            '@static': path.resolve(__dirname, '../static'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: vueLoaderConfig
                    }
                ]
            },
            {
                test: /\.m?js$/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(png|jpeg|jpg|gif|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [

        // new一个实例
        new VueLoaderPlugin_v3(),
        new webpack.ProvidePlugin({

        }),
    ],
    node: {
        global: false,
        __filename: false,
        __dirname: false
    }
};
