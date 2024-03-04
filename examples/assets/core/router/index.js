
import {app,router,version}  from "../../../../src/assets/core/ahcui/index.js";
import {routesUnUseahcui,routesUseahcui} from "./router.define.js";
import { routerInterceptor } from './router.interceptor'

const ahcui=version.name;

//以下代码添加路由到根路由
routesUnUseahcui.forEach(route=>{
  router.addRoute(route);
})


//以下代码添加路由到@ahcui/vue3-multiplex的home层级路由，业务代码应该添加到home路由下，才会加载@ahcui/vue3-multiplex框架
routesUseahcui.forEach(route=>{
  router.addRoute(ahcui,route)
})

router.beforeEach(routerInterceptor.beforeEach)
router.afterEach(routerInterceptor.afterEach)

app.use(router)

export default router;  
