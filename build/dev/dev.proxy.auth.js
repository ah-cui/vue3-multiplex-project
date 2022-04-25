/**
 * @author:zerostyle
 * @name:假登录下的默认代理
 * @copyright:MIT
 * @description:dev认证为便于程序开发时不具备后端、认证与权限信息的情况下，自行组织用户信息与用户权限菜单
 * 
 */

const DEV = {
  '/restful/api/': {
      target: 'http://localhost:6088',
      changeOrigin: true,
      pathRewrite: {
          '^/restful/api/': '/'
      }
  },
}



module.exports = {
  DEV,
}
