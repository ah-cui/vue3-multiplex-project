import {auth} from "../ahcui/index.js";
import { Cookie } from '@ahcui/lib-jsext'
import userApi from "../../webApi/userApi";

let userinfo;

auth.createAuth({

  /**
     * 必须实现
     * 当前登录用户名字符串
     * 数据示例："admin",
     */
  getUserName () {
    return userinfo?.userName;
  },
  /**
     * 非必须实现
     * 用户的权限完整信息，JSON对象,结构自定义,框架中仅做保存，未使用，以备业务需要
     * 数据示例:{权限JSON对象,结构自定义,框架中仅做保存，未使用，以备业务需要}
     */
  getPermission () {
    return userinfo?.permission;
  },
  /**
     *
     * 必须实现
     * 用户资源转换为树状菜单后的对象
     * 结构如下：
     *      [{
    *           resId:"菜单唯一识别符,必选",
    *           iconColor:"#000,代表菜单图标字体颜色，可选",
    *           iconClass:"fa fa-bus 字体字库名称，代表菜单图标，可选",
    *           resPath:"菜单url路径，第一级非必选，二级及以下菜单必选",
    *           resName:"菜单名称文字",
    *           children:[{
                    resId:"菜单唯一识别符,必选",
    *               iconColor:"#000,代表菜单图标字体颜色，可选",
    *               iconClass:"fa fa-bus 字体字库名称，代表菜单图标，可选",
    *               resPath:"菜单url路径，第一级非必选，二级及以下菜单必选",
    *               resName:"菜单名称文字"},
    *               {...},
    *               {...}]
 *          }],
     */
  getModulesTree () {
    return userinfo?.modules;
  },

  /**
     * 非必须
     * 为使用jwt等模式的登陆时预留
     * 在REST无会话模式下使用的票据信息
     */
  getToken () {
    return ""
  },

})

auth.init=function(user){
  userinfo=user;
}
auth.isLogined=()=>{
  return userinfo!=null;
}


/**
* 登录函数指向，框架自带了权限中心组件，默认如下：
* 返回为一个Promise对象
* login:(参数按需定义即可)=>{
*  return new Promise((resolve,reject)=>{
*          //这里是登录过程
*      });
* }
* @param {string} username 用户名
* @param {string} password 密码
* @returns {Promise} 返回一个异步对象
*/
auth.login = (username, password) => {
  return new Promise((resolve, reject) => {
    userApi.login(username,password)
    .then(value=>{
      Cookie.Cookie.addCookie(Cookie.CookieDef.userName, username, Cookie.CookieDef.hours, Cookie.CookieDef.path, Cookie.CookieDef.domain)
      Cookie.Cookie.addCookie(Cookie.CookieDef.passwd, password, Cookie.CookieDef.hours, Cookie.CookieDef.path, Cookie.CookieDef.domain)
      resolve(value);
    })
    .catch(error=>{
      reject(error);
    })
  })  
},

/**
* 退出函数指向，框架自带了权限中心组件，默认如下：
* 返回为一个Promise对象
* logout:(参数按需定义即可)=>{
*  return new Promise((resolve,reject)=>{
*          //这里是退出过程
*      });
* }
* @returns {Promise} 返回一个异步对象
*
*/
auth.logout = () => {
    return new Promise((resolve, reject) => {
        
        Cookie.Cookie.delCookie(Cookie.CookieDef.userName, Cookie.CookieDef.path, Cookie.CookieDef.domain)
        Cookie.Cookie.delCookie(Cookie.CookieDef.passwd, Cookie.CookieDef.path, Cookie.CookieDef.domain)
        
        resolve()
        
    })
}

export default auth;
