'use strict';
const utils = require('../utils');
const webpack = require('webpack');
const devBuildConfig = require('../dev/dev.conf.js');
const devServerConfigCustom = require('../dev/dev.server.option.custom');
const { merge } = require('webpack-merge');
const chalk = require('chalk');
const webpackConfig = require('../dev/webpack.conf');
const FriendlyErrorsPlugin = require('clean-friendly-errors-webpack-plugin');
const portfinder = require('portfinder');


const HOST = process.env.HOST || devServerConfigCustom.host;
let PORT = (process.env.PORT && Number(process.env.PORT)) || devServerConfigCustom.port;

const devWebpackConfig = merge(webpackConfig, {
   entry: {
        app: ['./examples/main.js']
    },
});

const SUCCMSG = chalk.green(utils.sign + `

    [框架示例模式，如想运行您基于框架开发的项目请运行：npm run dev]

    最后编译时间：{date}

    应用程序运行在这里: ${chalk.white('http://{host}:{port}{path}')}`);

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = devServerConfigCustom.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;
            PORT = port;
            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [SUCCMSG.format({
                        date: (new Date()).format('yyyy-MM-dd hh:mm:ss'),
                        host: devWebpackConfig.devServer.host,
                        port: devWebpackConfig.devServer.port,
                        path: devWebpackConfig.devServer.publicPath
                    })]
                },
                onErrors: devBuildConfig.notifyOnErrors
                    ? utils.createNotifierCallback()
                    : undefined
            }));

            resolve(devWebpackConfig);
        }
    });
});

