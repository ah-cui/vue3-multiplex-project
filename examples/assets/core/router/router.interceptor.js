import { Cookie } from '@ahcui/lib-jsext'
import  auth from '../auth'
/**
 * Powered by vue-router ^4.0.12
 * 实现一个假登录的路由拦截器，用于示例模式，正式开发不要使用！！！！
 * Created in 20210429 by zerostyle 
 *
 *
 */


const routerInterceptor = {
  beforeEach: function (to, from, next) {
    if(to.meta.permission){
        let userName=Cookie.Cookie.getCookie(Cookie.CookieDef.userName)
        let passwd=Cookie.Cookie.getCookie(Cookie.CookieDef.passwd)
        if(userName!=""&&passwd!="")
        {
          if(auth.isLogined()){
            next();
            return;
          }
          //有用户信息则认为用户未退出
          auth.login(userName,passwd)
          .then(
            ()=>next()
          )
          .catch(
            void(0)
          );
        }
        else{
          next("/login");
        }
    }
    else{
      next();
    }
  },
  afterEach: function (transition) {
  }
}



export { routerInterceptor }
