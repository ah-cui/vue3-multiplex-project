
import {app,router,version} from "../ahcui/index.js";
import {routesUnUseAhCui,routesUseAhCui} from "./router.define.js";
import { routerInterceptor0, routerInterceptor2 } from './router.interceptor'

const ahcui=version.name;

//以下代码添加路由到根路由
routesUnUseAhCui.forEach(route=>{
  router.addRoute(route);
})


//以下代码添加路由到@ahcui/vue3-multiplex的home层级路由，业务代码应该添加到home路由下，才会加载@ahcui/vue3-multiplex框架
routesUseAhCui.forEach(route=>{
  router.addRoute(ahcui,route)
})



/* 如下图例展示了多个路由拦截器的工作机制
*
*
*                ↗-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-→-↘
*                ↑                  后加入                                                                         |
*     -----------|----------  routerInterceptor3  beforeEach                                                       ↓
*     -----------|----------  routerInterceptor2  beforeEach                                                       ↓
*     -----------↑----------  routerInterceptor1  beforeEach            |
*     -----------|----------  routerInterceptor0  beforeEach                                                       ↓
*                ↑                   先加入                                                                         |
*             路由跳转                                                                                              ↓
*                ↑                   后加入                                                                         |
*     -----------|----------  routerInterceptor3  afterEach
*     -----------|----------  routerInterceptor2  afterEach                                                        ↓
*     -----------↑----------  routerInterceptor1  afterEach             |
*     -----------|----------  routerInterceptor0  afterEach                                                        ↓
*                ↑                   先加入                                                                         |
*                ↖-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-←-↙
*
*
*/

// 系统级router拦截器在这里被加入，处于最内层；
router.beforeEach(routerInterceptor0.beforeEach)
router.afterEach(routerInterceptor0.afterEach)


// 应用级router拦截器在这里被加入，处于第三层
window.setTimeout(function () {
  router.beforeEach(routerInterceptor2.beforeEach)
  router.afterEach(routerInterceptor2.afterEach)
}, 10)

app.use(router)

export default router;  
