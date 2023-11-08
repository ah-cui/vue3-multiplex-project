import {app,elementPlus} from "../ahcui/index";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import {debounce} from "../../../lib/comFun";

/**
 * 注册element-plus
 */
app.use(elementPlus, {locale: zhCn, size: 'small', zIndex: 3000})

/**
 * 全部注册element-plus-icons，供图标选择器组件使用
 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

/**
 * 解决element-plus的table在页面大小变化时异常报错的问题
 */
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
        callback = debounce(callback, 16);
        super(callback);
    }
}