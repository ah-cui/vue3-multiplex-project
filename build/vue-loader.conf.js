'use strict';
const utils = require('./utils');
const devBuildConfig = require('./dev/dev.conf.js');
const prodBuildConfig = require('./prod/prod.conf.js');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
    ? prodBuildConfig.productionSourceMap
    : devBuildConfig.cssSourceMap;

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    exposeFilename: true,
    cacheBusting: devBuildConfig.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    compilerOptions:{
        compatConfig: {
          MODE: 2
        },
    },
};
