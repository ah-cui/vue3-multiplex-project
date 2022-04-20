
import {router,version}  from "../../../../src/assets/core/";
import routesDefine from "./router.define.js";
import { routerInterceptor } from './router.interceptor'

const ahcui=version.name;

routesDefine.forEach(route=>{
  router.addRoute(ahcui,route)
})

router.beforeEach(routerInterceptor.beforeEach)
router.afterEach(routerInterceptor.afterEach)

export default router;  
