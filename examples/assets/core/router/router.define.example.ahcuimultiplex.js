
import {needLogin} from './router.auth';




export default [
    /**
     * API部分
     */
    {
        path:'ahcui-multiplex-api/index',
        name:'ahcui-multiplex-api/index',
        component:()=>import("../../../views/example-ahcui-multiplex/api/index"),
        meta:{ title:'API操作', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-api/header',
        name:'ahcui-multiplex-api/header',
        component:()=>import("../../../views/example-ahcui-multiplex/api/api.header.vue"),
        meta:{ title:'头部API', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-api/content',
        name:'ahcui-multiplex-api/content',
        component:()=>import("../../../views/example-ahcui-multiplex/api/api.content.vue"),
        meta:{ title:'工作区API', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-api/content/example',
        name:'ahcui-multiplex-api/content/example',
        component:()=>import("../../../views/example-ahcui-multiplex/api/example.vue"),
        meta:{  title:'工作区API', permission: needLogin}
    },
    

    /**
     * EVENTS部分
     */

    {
        path:'ahcui-multiplex-event/index',
        name:'ahcui-multiplex-event/index',
        component:()=>import("../../../views/example-ahcui-multiplex/event/index"),
        meta:{ title:'Event事件', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-event/define',
        name:'ahcui-multiplex-event/define',
        component:()=>import("../../../views/example-ahcui-multiplex/event/define"),
        meta:{ title:'事件定义', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-event/listen',
        name:'ahcui-multiplex-event/listen',
        component:()=>import("../../../views/example-ahcui-multiplex/event/listen"),
        meta:{ title:'事件监听', permission: needLogin}
    },

    /**
     * UI扩展部分
     */

    {
        path:'ahcui-multiplex-ui-extend/index',
        name:'ahcui-multiplex-ui-extend/index',
        component:()=>import("../../../views/example-ahcui-multiplex/uiExtend/index"),
        meta:{ title:'UI扩展', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-ui-extend/dock',
        name:'ahcui-multiplex-ui-extend/dock',
        component:()=>import("../../../views/example-ahcui-multiplex/uiExtend/dock"),
        meta:{ title:'UI扩展坞', permission: needLogin}
    },
    {
        path:'ahcui-multiplex-ui-extend/demo',
        name:'ahcui-multiplex-ui-extend/demo',
        component:()=>import("../../../views/example-ahcui-multiplex/uiExtend/demo/index.vue"),
        meta:{ title:'扩展示例', permission: needLogin}
    },

    /**
     * Element-plus主题色测试
     */
    {
		path: "/ahcui-multiplex-ui/element-plus/themetest",
		name: "/ahcui-multiplex-ui/element-plus/themetest",
		component: () => import("../../../views/example-ahcui-multiplex/element-plus/index"),
		meta: { title: "测试组件", permission: needLogin}
	}
    
]