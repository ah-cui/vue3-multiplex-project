//import {runtimeCfg}  from "../../../../src/assets/core";
import {customCheck} from './router.auth';




export default [
    {
        path:'components/index',
        name:'components/index',
        component:()=>import("../../../views/example_components/index.vue"),
        meta:{ title:'ElementUI组件示例',iconClass:"el-icon-s-data", permission: customCheck}
    },
    {
        path:'components/layout-1',
        name:'components/layout-1',
        component:()=>import("../../../views/example_components/example-layout/example1.vue"),
        meta:{ title:'左右布局1', permission: customCheck}
    },
    {
        path:'components/layout-2',
        name:'components/layout-2',
        component:()=>import("../../../views/example_components/example-layout/example2.vue"),
        meta:{ title:'左右布局2', permission: customCheck}
    },
    {
        path:'components/layout-3',
        name:'components/layout-3',
        component:()=>import("../../../views/example_components/example-layout/example3.vue"),
        meta:{ title:'上下布局2', permission: customCheck}
    },
    {
        path:'components/layout-4',
        name:'components/layout-4',
        component:()=>import("../../../views/example_components/example-layout/example4.vue"),
        meta:{ title:'上下布局3', permission: customCheck}
    },
    {
        path:'components/layout-5',
        name:'components/layout-5',
        component:()=>import("../../../views/example_components/example-layout/example5.vue"),
        meta:{ title:'左右布局3', permission: customCheck}
    },
    {
        path:'components/layout-6',
        name:'components/layout-6',
        component:()=>import("../../../views/example_components/example-layout/example6.vue"),
        meta:{ title:'左右布局4', permission: customCheck}
    },
    {
        path:'components/layout-7',
        name:'components/layout-7',
        component:()=>import("../../../views/example_components/example-layout/example7.vue"),
        meta:{ title:'上下布局1', permission: customCheck}
    },
    {
        path:'components/select-1',
        name:'components/select-1',
        component:()=>import("../../../views/example_components/example-select/index.vue"),
        meta:{ title:'Select选择框', permission: customCheck}
    },
    {
        path:'components/cascader-1',
        name:'components/cascader-1',
        component:()=>import("../../../views/example_components/example-cascader/index.vue"),
        meta:{ title:'Cascader级联选择器', permission: customCheck}
    },
    {
        path:'components/slider-1',
        name:'components/slider-1',
        component:()=>import("../../../views/example_components/example-slider/index.vue"),
        meta:{ title:'Slider 滑块', permission: customCheck}
    },
    
]