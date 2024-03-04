/********************************************************************
 * 
 *  @author: zerostyle@126.com
 * 
 *  @description:
 * 
 *  请在main.js中引入此文件查看效果，如下：
 * 
 *  import "./components/ahcui.extend/example2/index.js";
 * 
 *  过程自动执行，本例为使用VUE3的teleport方式对框架预置位进行扩展，teleport的作用是将vue组件内容复制到您指定的选择器容器内，并保持其交互动作等，
 * 
 *  复制后的dom是文档的一部分，外面的样式仍能对其起作用，框架的配色会对这种方式的扩展的元素起作用
 * 
 *  @ahcui/vue3-multiplex@1.0.0-rc1(含)之后的版本提供以"ahcui-extend-"为前缀的自定义标签作为扩展坞承载元素，但很多开发者不会用，因此git上框架示例工程的rc4版本才提供本示例
 * 
 * 
 *******************************************************************/

import {vue} from '../../../assets/core';
import ahcuiExtendHeaderToolsLeft from './ahcui-extend-header-tools-left.vue';
import ahcuiExtendHeaderToolsRight from './ahcui-extend-header-tools-right.vue';


!(function(){
    let body = document.getElementsByTagName("body")[0];
    let vnode1 = vue.createVNode(ahcuiExtendHeaderToolsLeft, {})
    let vnode2 = vue.createVNode(ahcuiExtendHeaderToolsRight, {});
    let divContainer1 = document.createElement("div");
    let divContainer2 = document.createElement("div");
    vue.render(vnode1, divContainer1);
    vue.render(vnode2, divContainer2);
    body.appendChild(divContainer1);
    body.appendChild(divContainer2);
})() 
