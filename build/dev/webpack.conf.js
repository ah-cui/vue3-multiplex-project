const { merge } = require('webpack-merge');
const utils = require('../utils');
const devBuildConfig = require('./dev.conf.js');
const devServerConfigCustom = require('./dev.server.option.custom');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = require('./webpack.htmlWebpackPlugin');
const baseWebpackConfig = require('../webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({ sourceMap: devBuildConfig.cssSourceMap, usePostCSS: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: devBuildConfig.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: devServerConfigCustom,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./dev.env'),
            '__VUE_OPTIONS_API__':JSON.stringify(false),
            "__VUE_PROD_DEVTOOLS__":JSON.stringify(true)
        }),
        /* new webpack.ids.DeterministicChunkIdsPlugin({
            maxLength: 5
        }), */
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
    ],

});

module.exports = devWebpackConfig