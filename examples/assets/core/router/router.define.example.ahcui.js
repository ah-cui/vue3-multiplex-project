//import {runtimeCfg}  from "../../../../src/assets/core";
import {customCheck} from './router.auth';




export default [
    {
        path:'/ahcui-sdk/index',
        name:'/ahcui-sdk/index',
        component:()=>import("../../../views/example_ahcui/index"),
        meta:{ title:'ahcui@1.1.0-SDK',iconClass:"el-icon-s-data", permission: customCheck}
    },


    /**
     * API部分
     */
    {
        path:'/ahcui-sdk/ahcui-api/index',
        name:'/ahcui-sdk/ahcui-api/index',
        component:()=>import("../../../views/example_ahcui/api/index"),
        meta:{ title:'ahcui@1.1.0-api',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-api/define',
        name:'/ahcui-sdk/ahcui-api/define',
        component:()=>import("../../../views/example_ahcui/api/api.define.vue"),
        meta:{ title:'ahcui@1.1.0-api定义',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-api/header',
        name:'/ahcui-sdk/ahcui-api/header',
        component:()=>import("../../../views/example_ahcui/api/api.header.vue"),
        meta:{ title:'头部操作API', permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-api/content',
        name:'/ahcui-sdk/ahcui-api/content',
        component:()=>import("../../../views/example_ahcui/api/api.content.vue"),
        meta:{ title:'工作区API', permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-api/content/example',
        name:'/ahcui-sdk/ahcui-api/content/example',
        component:()=>import("../../../views/example_ahcui/api/example.vue"),
        props:{name:"world3!"},
        meta:{ title:"工作区API打开新页面", permission: customCheck}
    },
    

    /**
     * EVENTS部分
     */

    {
        path:'/ahcui-sdk/ahcui-event/index',
        name:'/ahcui-sdk/ahcui-event/index',
        component:()=>import("../../../views/example_ahcui/event/index"),
        meta:{ title:'ahcui@1.1.0-event',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-event/define',
        name:'/ahcui-sdk/ahcui-event/define',
        component:()=>import("../../../views/example_ahcui/event/define"),
        meta:{ title:'ahcui@1.1.0-event',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-event/listen',
        name:'/ahcui-sdk/ahcui-event/listen',
        component:()=>import("../../../views/example_ahcui/event/listen"),
        meta:{ title:'ahcui@1.1.0-event',iconClass:"el-icon-s-data", permission: customCheck}
    },

    /**
     * UI扩展部分
     */

    {
        path:'/ahcui-sdk/ahcui-ui-extend/index',
        name:'/ahcui-sdk/ahcui-ui-extend/index',
        component:()=>import("../../../views/example_ahcui/uiExtend/index"),
        meta:{ title:'ahcui@1.1.0-ui-extend',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-ui-extend/dock',
        name:'/ahcui-sdk/ahcui-ui-extend/dock',
        component:()=>import("../../../views/example_ahcui/uiExtend/dock"),
        meta:{ title:'ahcui@1.1.0-ui-extend',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'/ahcui-sdk/ahcui-ui-extend/demo',
        name:'/ahcui-sdk/ahcui-ui-extend/demo',
        component:()=>import("../../../views/example_ahcui/uiExtend/demo/index.vue"),
        meta:{ title:'ahcui@1.1.0-ui-extend',iconClass:"el-icon-s-data", permission: customCheck}
    },

    /**
     * Element-plus主题色测试
     */
    {
		path: "/ahcui-ui/element-plus/themetest",
		name: "/ahcui-ui/element-plus/themetest",
		component: () => import("../../../views/example_ahcui/element-plus/index"),
		meta: {
			title: "测试组件",
			permission: customCheck
		}
	}
    
]