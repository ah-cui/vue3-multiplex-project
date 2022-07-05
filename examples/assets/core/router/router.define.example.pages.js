import {customCheck} from './router.auth';


export default [
	{
		path: "/example-pages/form/simple-form",
		name: "/example-pages/form/simple-form",
		component: () => import("../../../views/example_pages/setForm/simpleForm.vue"),
		meta: {
			title: "简单表单",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/form/complex-form",
		name: "/example-pages/form/complex-form",
		component: () => import("../../../views/example_pages/setForm/Complex-form"),
		meta: {
			title: "复杂表单",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/form/step-form",
		name: "/example-pages/form/step-form",
		component: () => import("../../../views/example_pages/setForm/Step-form"),
		meta: {
			title: "分布表单",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/list/simple-list",
		name: "/example-pages/list/simple-list",
		component: () => import("../../../views/example_pages/list/Simple-list"),
		meta: {
			title: "简单列表",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/list/complex-list",
		name: "/example-pages/list/complex-list",
		component: () => import("../../../views/example_pages/list/Complex-list"),
		meta: {
			title: "复杂列表",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/result/success",
		name: "/example-pages/result/success",
		component: () => import("../../../views/example_pages/result/Success"),
		meta: {
			title: "成功页",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/result/fail",
		name: "/example-pages/result/fail",
		component: () => import("../../../views/example_pages/result/Fail"),
		meta: {
			title: "失败页",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/exception/403",
		name: "/example-pages/exception/403",
		component: () => import("../../../views/example_pages/exception/403"),
		meta: {
			title: "403",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/exception/404",
		name: "/example-pages/exception/404",
		component: () => import("../../../views/example_pages/exception/404"),
		meta: {
			title: "404",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/printer",
		name: "/example-pages/extension/printer",
		component: () => import("../../../views/example_pages/extension/printer"),
		meta: {
			title: "打印插件",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/excel",
		name: "/example-pages/extension/excel",
		component: () => import("../../../views/example_pages/extension/excel"),
		meta: {
			title: "excel插件",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/dragsort",
		name: "/example-pages/extension/dragsort",
		component: () => import("../../../views/example_pages/extension/dragsort"),
		meta: {
			title: "拖拽组件",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/map",
		name: "/example-pages/extension/map",
		component: () => import("../../../views/example_pages/extension/map"),
		meta: {
			title: "地图插件",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/editor",
		name: "/example-pages/extension/editor",
		component: () => import("../../../views/example_pages/extension/editor"),
		meta: {
			title: "富文本框",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/tag",
		name: "/example-pages/extension/tag",
		component: () => import("../../../views/example_pages/extension/tag"),
		meta: {
			title: "标签",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/message",
		name: "/example-pages/extension/message",
		component: () => import("../../../views/example_pages/extension/message"),
		meta: {
			title: "消息提示",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/steps",
		name: "/example-pages/extension/steps",
		component: () => import("../../../views/example_pages/extension/steps"),
		meta: {
			title: "步骤条",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/empty",
		name: "/example-pages/extension/empty",
		component: () => import("../../../views/example_pages/extension/empty"),
		meta: {
			title: "空状态",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/count-up",
		name: "/example-pages/extension/count-up",
		component: () => import("../../../views/example_pages/extension/count-up"),
		meta: {
			title: "滚动数字",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/tree-select",
		name: "/example-pages/extension/tree-select",
		component: () => import("../../../views/example_pages/extension/tree-select"),
		meta: {
			title: "树形下拉",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/user/profile",
		name: "/example-pages/user/profile",
		component: () => import("../../../views/example_pages/user/profile"),
		meta: {
			title: "个人资料",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/user/message",
		name: "/example-pages/user/message",
		component: () => import("../../../views/example_pages/user/message"),
		meta: {
			title: "我的消息",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/system/user",
		name: "/example-pages/system/user",
		component: () => import("../../../views/example_pages/system/user"),
		meta: {
			title: "用户管理",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/system/menu",
		name: "/example-pages/system/menu",
		component: () => import("../../../views/example_pages/system/menu"),
		meta: {
			title: "菜单管理",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/system/organization",
		name: "/example-pages/system/organization",
		component: () => import("../../../views/example_pages/system/organization"),
		meta: {
			title: "机构管理",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/extension/file",
		name: "/example-pages/extension/file",
		component: () => import("../../../views/example_pages/extension/file"),
		meta: {
			title: "文件列表",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/system/choose",
		name: "/example-pages/system/choose",
		component: () => import("../../../views/example_pages/system/choose"),
		meta: {
			title: "批量选择",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/system/table",
		name: "/example-pages/system/table",
		component: () => import("../../../views/example_pages/system/table"),
		meta: {
			title: "树形表格",
			permission: customCheck
		}
	},
	{
		path: "/example-pages/system/document",
		name: "/example-pages/system/document",
		component: () => import("../../../views/example_pages/system/document"),
		meta: {
			title: "案卷调整",
			permission: customCheck
		}
	}


]
