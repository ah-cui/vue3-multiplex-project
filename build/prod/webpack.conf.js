'use strict';
const path = require('path');
const utils = require('../utils');
const webpack = require('webpack');
const prodBuildConfig = require('./prod.conf.js');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('../webpack.base.conf');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = require('./webpack.plugin.htmlWebpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('./prod.env')


const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: utils.styleLoaders({
            sourceMap: prodBuildConfig.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: prodBuildConfig.productionSourceMap ? prodBuildConfig.devtool : false,
    output: {
        path: prodBuildConfig.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        clean: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env,
            '__VUE_OPTIONS_API__':JSON.stringify(true),
            "__VUE_PROD_DEVTOOLS__":JSON.stringify(false)
        }),
        
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        // WEBPACK 4中使用MiniCssExtractPlugin替代ExtractTextWebpackPlugin
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            chunkFilename: utils.assetsPath('css/[name].[contenthash].css'),
        }),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
        // keep module.id stable when vender modules does not change
        new webpack.ids.DeterministicModuleIdsPlugin({
            maxLength: 5
        }),

        // by zerostyle webpack5 issues-4837 告知此插件在mode="production"时自动引入,显式引入会导致两次引入从而引发编译结果出现问题，
        // 此代码适用于在非mode="production"情况下需要使用此插件的情况
        // webpack5:module-concatenation-plugin https://webpack.js.org/plugins/module-concatenation-plugin/
        //new webpack.optimize.ModuleConcatenationPlugin(),

        // copy custom static assets
        new CopyPlugin(
            {
                patterns:
                [
                    {
                        from: path.resolve(__dirname, '../../static'),
                        to: prodBuildConfig.assetsSubDirectory,
                    },
                    
                ],
                options: {
                    concurrency: 50
                }
            }
        )
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    sourceMap:prodBuildConfig.productionSourceMap ? prodBuildConfig.devtool : false,
                    compress: {
                        drop_console: false,
                        drop_debugger: false,
                        pure_funcs: ['console.log'], // 移除console
                    },
                    output: {
                        comments: false,
                        inline_script:true,
                    },
                },
            },
            {
                extractComments: false,//是否分离注释到单独文件
            }
            )
        ],
        splitChunks: {
            // 分离异步代码（import()） initial 同步代码  all 所有
            chunks: 'async',
            // 超过20000B分离
            minSize: 20000,
            maxSize: 30000,
            // webpack 5 中引入了选项，通过确保拆分后剩余的块的最小大小高于限制来避免零大小的模块。
            minRemainingSize: 0,
            maxInitialSize: 2000,

            
            // 有X个文件引用就分离
            minChunks: 3,
            // 按需加载时最大并行请求数
            maxAsyncRequests: 5,
            // 入口点的最大并行请求数
            maxInitialRequests: 3,
            // 分离出来的包的名字分隔符
            automaticNameDelimiter: '-',
            // 强制执行拆分且忽略其他限制（minRemainingSize、maxAsyncRequests、maxInitialRequests）的大小阈值。
            enforceSizeThreshold: 50000,
            // 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成
            name: false,
            cacheGroups: {
                app: {
                    minChunks: 3,
                    priority: -20,
                    reuseExistingChunk: true // 复用之前打包的模块
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                json: {
                    type: 'json'
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        },
        chunkIds: 'named',
        moduleIds: 'deterministic'
    }
});
if (prodBuildConfig.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin');

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' + prodBuildConfig.productionGzipExtensions.join('|') + ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

if (prodBuildConfig.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
