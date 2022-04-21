<template>
 
      <div class="dashboard-img" style="font-size:30px">
        本模块演示了@ahcui/vue3-multiplex界面的扩展演示
      </div>
      <div class="dashboard-img" style="font-size:12px;color:red">
        注意：@ahcui/vue3-multiplex提供了两种界面插槽扩展方式<br/>
        1：web components进行扩展，dom与style通过shadow机制进行隔离，不受框架样式影响，您需要自己处理问题<br/>
        2：vue3提供的teleport进行扩展，dom会合并到页面dom树，受框架样式影响，但您仍需要处理扩展内容在主题与布局切换后的样式<br/>
      </div>
      <div class="dashboard-img" style="font-size:30px">
        <el-button @click="definecuiExtendHeaderLogo">自定义logo区域</el-button>
      </div>
      <div class="dashboard-img" style="font-size:30px">
         <el-button @click="definecuiExtendHeaderToolsLeft">自定义头部左侧区域</el-button>
      </div>
      <div class="dashboard-img" style="font-size:30px">
         <el-button @click="definecuiExtendHeaderToolsRight">自定义头部右侧区域</el-button>
      </div>
      <div class="dashboard-img" style="font-size:30px">
         <el-button @click="definecuiExtendSiderbarTop">自定义侧栏头部区域</el-button>
      </div>
      <div class="dashboard-img" style="font-size:30px">
         <el-button @click="definecuiExtendSiderbarBottom">自定义侧栏底部区域</el-button>
      </div>
</template>

<script>
import {vue} from '../../../../assets/core';
import cuiExtendHeaderLogo from './cui-extend-header-logo.ce.vue';
import cuiExtendHeaderToolsLeft from './cui-extend-header-tools-left.ce.vue';
import cuiExtendHeaderToolsRight from './cui-extend-header-tools-right.ce.vue';
import cuiExtendSiderbarTop from './cui-extend-siderbar-top.ce.vue';
import cuiExtendSiderbarBottom from './cui-extend-siderbar-bottom.ce.vue';

export default {
    components:{
      cuiExtendHeaderLogo,
      cuiExtendHeaderToolsLeft,
    },
    setup(){
      /**
       * 借助于原生的web components的方式进行扩展，其扩展的内容为原生dom元素，不可使用其他标签，如"element-plus控件的<el-button>";
       */
        const definecuiExtendHeaderLogo=function(){
              let customElement=customElements.get('cui-extend-header-logo');
              if(!customElement){
                const _cuiExtendHeaderLogo = vue.defineCustomElement(cuiExtendHeaderLogo)
                customElements.define('cui-extend-header-logo', _cuiExtendHeaderLogo)
              }
        }
        const definecuiExtendHeaderToolsLeft=function(){
              let customElement=customElements.get('cui-extend-header-tools-left');
              if(!customElement){
                const _cuiExtendHeaderToolsLeft = vue.defineCustomElement(cuiExtendHeaderToolsLeft)
                customElements.define('cui-extend-header-tools-left', _cuiExtendHeaderToolsLeft)
              }
        }
        const definecuiExtendHeaderToolsRight=function(){
              let customElement=customElements.get('cui-extend-header-tools-right');
              if(!customElement){
                const _cuiExtendHeaderToolsRight = vue.defineCustomElement(cuiExtendHeaderToolsRight)
                customElements.define('cui-extend-header-tools-right', _cuiExtendHeaderToolsRight)
              }
        }
        const definecuiExtendSiderbarTop=function(){
              let customElement=customElements.get('cui-extend-siderbar-top');
              if(!customElement){
                const _cuiExtendSiderbarTop = vue.defineCustomElement(cuiExtendSiderbarTop)
                customElements.define('cui-extend-siderbar-top', _cuiExtendSiderbarTop)
              }
        }
        const definecuiExtendSiderbarBottom=function(){
              let customElement=customElements.get('cui-extend-siderbar-bottom');
              if(!customElement){
                const _cuiExtendSiderbarBottom = vue.defineCustomElement(cuiExtendSiderbarBottom)
                customElements.define('cui-extend-siderbar-bottom', _cuiExtendSiderbarBottom)
              }
        }
        
        return {
          definecuiExtendHeaderLogo,
          definecuiExtendHeaderToolsLeft,
          definecuiExtendHeaderToolsRight,
          definecuiExtendSiderbarTop,
          definecuiExtendSiderbarBottom,
        }
    }
}
</script>