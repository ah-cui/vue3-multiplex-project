

import {customCheck} from './router.auth';

/**
 *  这些路由是不使用ahcui框架的路由地址
 * 
 * 
 */
const routesUnUseahcui =  [
  {
    path: "/login",
    name: "login",
    component:()=>import("../../../views/Login.vue"),
    meta: { title: "项目开发模式" }
  },
]


/**
 * 这些路由是使用ahcui框架的路由地址
 * 
 */
const routesUseahcui = [
  {
    path: "dashboard",
    name: "dashboard",
    component:()=>import("../../../views/dashboard.vue"),
    meta: { title: "项目开发模式",permission: customCheck }
  },
]


export {
  routesUnUseahcui,
  routesUseahcui
} 