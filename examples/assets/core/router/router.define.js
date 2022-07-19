

import components from "./router.define.components";
import ahcui from "./router.define.example.ahcui";
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
         * Element-UI组件晋级用法
         */
        ...components,

        /**
         * @ahcui/vue3-multiplex api接口调用示例
         */
        ...ahcui,
        
        /**
         * 示例页面
         */
        ...pages,
        
        {
          path: "loadPage",
          name: "loadPage",
          component:()=>import("../../../components/common/pageLoader"),
          props: route => ({
            //url: route.query.url,
            watchQuery:false,
          }),
          meta:{title:'加载页面', permission: needLogin}
        },
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