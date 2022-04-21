
import {router,version}  from "../../../../src/assets/core/";
import {routesUnUseAhCui,routesUseAhCui} from "./router.define.js";
import { routerInterceptor } from './router.interceptor'

const ahcui=version.name;

//以下代码添加路由到根路由
routesUnUseAhCui.forEach(route=>{
  router.addRoute(route);
})


//以下代码添加路由到@ahcui/vue3-multiplex的home层级路由，业务代码应该添加到home路由下，才会加载@ahcui/vue3-multiplex框架
routesUseAhCui.forEach(route=>{
  router.addRoute(ahcui,route)
})

router.beforeEach(routerInterceptor.beforeEach)
router.afterEach(routerInterceptor.afterEach)

export default router;  
