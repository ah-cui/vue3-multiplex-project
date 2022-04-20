'use strict';
require('../check-versions')();

process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const utils = require('../utils');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const prodBuildConfig = require('./prod.conf.js');
const prodWebpackConfig = require('./webpack.conf');
const { merge } = require('webpack-merge');
const spinner = ora('building for production...');

const webpackConfig = merge(prodWebpackConfig,{
    entry: {
        
    },
});

spinner.start();
rm(path.join(prodBuildConfig.assetsRoot, prodBuildConfig.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (err, stats) => {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  编译存在错误而导致失败.\n'));
            process.exit(1);
        }
        const SUCCMSG = utils.sign + `
              \n    编译成功完成.

              \n    编译时间：{date}
              `;
        console.log(chalk.magentaBright(SUCCMSG.format(
            {
                date: (new Date()).format('yyyy-MM-dd hh:mm:ss')
            })));
    });
});

