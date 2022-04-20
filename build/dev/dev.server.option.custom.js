const path = require('path');
const proxyTable = require('./dev.proxy.js');

/**
 * 开发模式下服务器配置
 */
module.exports =
{
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8088, 
    publicPath: '/',
    proxy: proxyTable,
    quiet: true,
    open: false,
    overlay: { warnings: true, errors: true },
    watchOptions: {
        poll: true
    }
};
