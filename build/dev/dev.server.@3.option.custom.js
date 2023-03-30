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
    // Various Dev Server settings
    // can be overwritten by process.env.HOST
    host: 'localhost',
    //host: "mdm.slof.com",//SIAM测试
    // 端口占用释放使用以下两条命令
    // 查找端口占用的PID netstat -aon|findstr "8088"
    // 使用PID杀死进程 taskkill -pid {PID} /F
    //port: 80,   //SIAM测试
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
