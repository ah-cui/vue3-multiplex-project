
/************************************************************************************************************************************
 * 
 *                                                   
 *                                                          FBI WARNING
 * 
 *      为提升首屏加载速度，本文件引入内容为全局使用，个别页面、组件使用到的组件，库，样式等在各自文件中引入，不要在此文件中引入
 *
 * 
 *      
 * 
 * 
 ***************************************************************************************************************************************/

import { app, router, store , elementPlus } from './assets/core/index';
//这是对框架扩展坞的扩展代码，请参考示例自行选择方案进行扩展
import "./components/ahcui.extend/example2/index.js";
import zhCn from 'element-plus/es/locale/lang/zh-cn'

app
.use(router)
.use(store)
.use(elementPlus, { size: 'default', zIndex: 3000, locale: zhCn, })
.mount('#app');
