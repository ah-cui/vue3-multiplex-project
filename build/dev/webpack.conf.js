const { merge } = require('webpack-merge');
const utils = require('../utils');
const devBuildConfig = require('./dev.conf.js');
const devServerConfigCustom = require('./dev.server.@4.option.custom');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = require('./webpack.htmlWebpackPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('../webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({ 
            sourceMap: devBuildConfig.cssSourceMap, 
            usePostCSS: true 
        })
    },
    devtool: devBuildConfig.devtool,

    devServer: devServerConfigCustom,
    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
    ],

});

module.exports = devWebpackConfig