/********************************************************************
 * 
 *  @author: zerostyle@126.com
 * 
 *  @description:
 * 
 *  请在main.js中引入此文件查看效果，如下：
 * 
 *  import "./components/ahcui.extend/example1/index.js";
 * 
 *  过程自动执行，本例使用VUE3对原生Web Components的支持对框架预置位进行扩展，Web Components技术请看官方文档：https://developer.mozilla.org/zh-CN/docs/Web/Web_Components，
 * 
 *  通过Web Components扩展的dom与主文档是并列关系，主文档的样式、脚本等不会干扰Web Components内部，框架的配色也不会对这种方式的扩展的元素起作用
 * 
 *  @ahcui/vue3-multiplex@1.0.0-rc1(含)之后的版本提供以"ahcui-extend-"为前缀的自定义标签作为扩展坞承载元素，但很多开发者不会用，因此git上框架示例工程的rc4版本才提供本示例
 * 
 * 
 *******************************************************************/

import {defineCustomElement} from 'vue';
import ahcuiExtendHeaderToolsLeft from './ahcui-extend-header-tools-left.ce.vue';
import ahcuiExtendHeaderToolsRight from './ahcui-extend-header-tools-right.ce.vue';

!(function (){

    /**
       * 
       */
  const defineahcuiExtendHeaderToolsLeft=function(){
        let customElement=customElements.get('ahcui-extend-header-tools-left');
        if(!customElement){
          const _ahcuiExtendHeaderToolsLeft = defineCustomElement(ahcuiExtendHeaderToolsLeft)
          customElements.define('ahcui-extend-header-tools-left', _ahcuiExtendHeaderToolsLeft)
        }
  }
  const defineahcuiExtendHeaderToolsRight=function(){
        let customElement=customElements.get('ahcui-extend-header-tools-right');
        if(!customElement){
          const _ahcuiExtendHeaderToolsRight = defineCustomElement(ahcuiExtendHeaderToolsRight)
          customElements.define('ahcui-extend-header-tools-right', _ahcuiExtendHeaderToolsRight)
        }
  };
  defineahcuiExtendHeaderToolsLeft();
  defineahcuiExtendHeaderToolsRight();

})()