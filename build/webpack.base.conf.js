'use strict';
require("@ahcui/lib-jsext");
const path = require('path');
const utils = require('./utils');
const prodBuildConfig = require('./prod/prod.conf.js');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}


module.exports = {

    context: path.resolve(__dirname, '../'),
    output: {
        path: prodBuildConfig.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'? undefined :'/',
        environment: {
            // The environment supports arrow functions ('() => { ... }').
            arrowFunction: false,
            // The environment supports BigInt as literal (123n).
            bigIntLiteral: false,
            // The environment supports const and let for variable declarations.
            const: false,
            // The environment supports destructuring ('{ a, b } = obj').
            destructuring: false,
            // The environment supports an async import() function to import EcmaScript modules.
            dynamicImport: false,
            // The environment supports 'for of' iteration ('for (const x of array) { ... }').
            forOf: false,
            // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
            module: false,
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js',
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
                  /*{
                    loader: 'cache-loader',
                    options: {
                     // cacheDirectory: resolve('node_modules/.cache/vue-loader')
                    }
                  },*/
                  {
                    loader: 'vue-loader',
                    options: vueLoaderConfig
                  }
                ]
              },
            {
                test: /\.m?js/,
                type: "javascript/auto",
                //exclude: /node_modules/,
                include: [
                    resolve('src'), 
                    resolve('examples'), 
                    resolve('node_modules/@ahcui')
                ]
              },
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            {
                test: /\.(png|jpeg|jpg|gif|svg|ico)(\?.*)?$/,
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
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [

        // new一个实例
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
 
        })
    ],
    node: {
        global: false,
        __filename: false,
        __dirname: false
    }
};
