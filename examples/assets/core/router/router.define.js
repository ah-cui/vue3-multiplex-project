
import ahcuimultiplex from "./router.define.example.ahcuimultiplex";
import pages from "./router.define.example.pages";
import {needLogin} from './router.auth';

/**
 *  这些路由是不使用AhCui框架的路由地址
 * 
 * 
 */
 const routesUnUseAhCui =  [

]


const routesUseAhCui = [
    
        {
          path: "/dashboard",
          name: "dashboard",
          component:()=>import("../../../views/Dashboard.vue"),
          meta: { title: "框架示例模式", permission: needLogin }
        },
        {
          path: "/dashboard/workplace",
          name: "dashboard/workplace",
          component:()=>import("../../../views/Dashboard.vue"),
          meta: { title: "控制台", permission: needLogin }
        },
        {
          path: "/dashboard/analysis",
          name: "dashboard/analysis",
          component:()=>import("../../../views/Dashboard.vue"),
          meta: { title: "分析页", permission: needLogin }
        },
        {
          path: "/dashboard/monitor",
          name: "dashboard/monitor",
          component:()=>import("../../../views/Dashboard.vue"),
          meta: { title: "监控页", permission: needLogin }
        },
        
    
        /**
         * @ahcui/vue3-multiplex api接口调用示例
         */
        ...ahcuimultiplex,
        
        /**
         * 示例页面
         */
        ...pages,
        
        
        {
          //-------------------关于框架首页
          path: "/aboutme/aboutme-index",
          name: "aboutme/aboutme-index",
          component: ()=> import("../../../views/about-me/index.vue"),
          meta: { title: "框架说明", permission: needLogin }
        },
        
      ]



      export {
        routesUnUseAhCui,
        routesUseAhCui
      } 