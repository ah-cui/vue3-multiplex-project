'use strict';
require('../check-versions')();
const utils = require('../utils');
const webpack = require('webpack');
const devBuildConfig = require('../dev/dev.conf.js');
const devServerConfigAll = require('../dev/dev.server.@4.option.all');
const devServerConfigCustom = require('../dev/dev.server.@4.option.custom');
const { merge } = require('webpack-merge');
const chalk = require('chalk');
const webpackConfig = require('../dev/webpack.conf');
const HOST = process.env.HOST || devServerConfigCustom.host;
let PORT = (process.env.PORT && Number(process.env.PORT)) || devServerConfigCustom.port;

const SUCCMSG = chalk.green(utils.sign + `

    [框架示例模式，如想运行您基于框架开发的项目请运行：npm run dev]

    最后编译时间：{date}

    应用程序运行在这里: ${chalk.white('http://{host}:{port}{path}')}`);

const devWebpackConfig = merge(webpackConfig, {
   entry: {
        app: ['./examples/main.js']
    },
    plugins:[
        
    ]
});



module.exports = devWebpackConfig;

