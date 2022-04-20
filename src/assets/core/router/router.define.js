

import {customCheck} from './router.auth';

/**
 *  这些路由是不使用AhCui框架的路由地址
 * 
 * 
 */
const routesUnUseAhCui =  [
  {
    path: "/login",
    name: "login",
    component:()=>import("../../../views/Login.vue"),
    meta: { title: "项目开发模式" }
  },
]


/**
 * 这些路由是使用AhCui框架的路由地址
 * 
 */
const routesUseAhCui = [
  {
    path: "dashboard",
    name: "dashboard",
    component:()=>import("../../../views/dashboard.vue"),
    meta: { title: "项目开发模式11",permission: customCheck }
  },
]


export {
  routesUnUseAhCui,
  routesUseAhCui
} 