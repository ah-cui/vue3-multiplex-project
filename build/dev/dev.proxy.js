
/**
 * @author:zerostyle
 * @name:开发模式下的代理信息
 * @copyright:MIT
 * @description:开发模式下的代理信息，预置DEV模式的代理，请在后方加入自己的代理地址，格式请参考dev模式
 * 
 */

 const { DEV } = require('./dev.proxy.auth.js');


 module.exports =
 {
     ...DEV,
 }