import {needLogin} from './router.auth';


export default [
	{
		path: "/example-pages/form/simple-form",
		name: "/example-pages/form/simple-form",
		component: () => import("../../../views/example-pages/setForm/simpleForm.vue"),
		meta: {
			title: "简单表单",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/form/complex-form",
		name: "/example-pages/form/complex-form",
		component: () => import("../../../views/example-pages/setForm/Complex-form"),
		meta: {
			title: "复杂表单",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/form/step-form",
		name: "/example-pages/form/step-form",
		component: () => import("../../../views/example-pages/setForm/Step-form"),
		meta: {
			title: "分布表单",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/list/simple-list",
		name: "/example-pages/list/simple-list",
		component: () => import("../../../views/example-pages/list/Simple-list"),
		meta: {
			title: "简单列表",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/list/complex-list",
		name: "/example-pages/list/complex-list",
		component: () => import("../../../views/example-pages/list/Complex-list"),
		meta: {
			title: "复杂列表",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/result/success",
		name: "/example-pages/result/success",
		component: () => import("../../../views/example-pages/result/Success"),
		meta: {
			title: "成功页",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/result/fail",
		name: "/example-pages/result/fail",
		component: () => import("../../../views/example-pages/result/Fail"),
		meta: {
			title: "失败页",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/exception/403",
		name: "/example-pages/exception/403",
		component: () => import("../../../views/example-pages/exception/403"),
		meta: {
			title: "403",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/exception/404",
		name: "/example-pages/exception/404",
		component: () => import("../../../views/example-pages/exception/404"),
		meta: {
			title: "404",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/printer",
		name: "/example-pages/extension/printer",
		component: () => import("../../../views/example-pages/extension/printer"),
		meta: {
			title: "打印插件",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/excel",
		name: "/example-pages/extension/excel",
		component: () => import("../../../views/example-pages/extension/excel"),
		meta: {
			title: "excel插件",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/dragsort",
		name: "/example-pages/extension/dragsort",
		component: () => import("../../../views/example-pages/extension/dragsort"),
		meta: {
			title: "拖拽组件",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/map",
		name: "/example-pages/extension/map",
		component: () => import("../../../views/example-pages/extension/map"),
		meta: {
			title: "地图插件",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/editor",
		name: "/example-pages/extension/editor",
		component: () => import("../../../views/example-pages/extension/editor"),
		meta: {
			title: "富文本框",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/tag",
		name: "/example-pages/extension/tag",
		component: () => import("../../../views/example-pages/extension/tag"),
		meta: {
			title: "标签",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/message",
		name: "/example-pages/extension/message",
		component: () => import("../../../views/example-pages/extension/message"),
		meta: {
			title: "消息提示",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/steps",
		name: "/example-pages/extension/steps",
		component: () => import("../../../views/example-pages/extension/steps"),
		meta: {
			title: "步骤条",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/empty",
		name: "/example-pages/extension/empty",
		component: () => import("../../../views/example-pages/extension/empty"),
		meta: {
			title: "空状态",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/count-up",
		name: "/example-pages/extension/count-up",
		component: () => import("../../../views/example-pages/extension/count-up"),
		meta: {
			title: "滚动数字",
			permission: needLogin
		}
	},
	{
		path: "/example-pages/extension/tree-select",
		name: "/example-pages/extension/tree-select",
		component: () => import("../../../views/example-pages/extension/tree-select"),
		meta: {
			title: "树形下拉",
			permission: needLogin
		}
	},
	
]
