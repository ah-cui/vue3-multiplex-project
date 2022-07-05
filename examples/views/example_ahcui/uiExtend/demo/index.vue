<template>
      <el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="dashboard-img" style="font-size:30px;margin:10px 10px">
         @ahcui/vue-multiplex@2.1.0-rc3扩展坞使用
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
                      @ahcui/vue-multiplex提供了两种界面插槽扩展方式<br/>
                      1：web components进行扩展，dom与style通过shadow机制进行隔离，不受框架样式影响，您需要自己处理问题；<br/>
                      2：vue3提供的teleport进行扩展，dom会合并到页面dom树，受框架样式影响，但您仍需要处理扩展内容在主题与布局切换后的样式；<br/>
                      3：同一扩展坞不能使用两种方式同时扩展,示例中使用是为了让开发者看到使用后导致的问题；<br/>
                      4：请注意区别两种扩展方式的原理，机制以及使用不当造成的问题；<br/>
                      5：这种灵活的方式给开发者提供了一种新技能，开发者不要过度依赖这种技能，虽然灵活，同时也带来了维护性问题；<br/>
                      6：闲着也是闲着，没事拿来扩展着玩摸索下吧；
          </template>
        </el-alert>
      </el-card>
      <div class="" style="display:flex">
        <el-card class="box-card">
          <template #header>
             <div>通过web components进行扩展</div>
          </template>
          <div class="dashboard-img" style="font-size:30px">
            <el-button @click="defineWebComponentsahcuiExtendHeaderLogo">自定义logo区域</el-button>
          </div>
          <div class="dashboard-img" style="font-size:30px">
            <el-button @click="defineWebComponentsahcuiExtendHeaderToolsLeft">自定义头部左侧区域</el-button>
          </div>
          <div class="dashboard-img" style="font-size:30px">
            <el-button @click="defineWebComponentsahcuiExtendHeaderToolsRight">自定义头部右侧区域</el-button>
          </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div>通过teleport进行扩展</div>
          </template>
          
          <div class="dashboard-img" style="font-size:30px">
            <el-button @click="useteleport_ahcuiExtendHeaderLogo">自定义logo区域</el-button>
          </div>
          <div class="dashboard-img" style="font-size:30px">
            <el-button @click="useteleport_ahcuiExtendHeaderToolsLeft">自定义头部左侧区域</el-button>
          </div>
          <div class="dashboard-img" style="font-size:30px">
            <el-button @click="useteleport_ahcuiExtendHeaderToolsRight">自定义头部右侧区域</el-button>
          </div>
        </el-card>
      </div>
</template>

<script>
import {defineCustomElement,createVNode,render} from 'vue';
import webComponents_ahcuiExtendHeaderLogo from '../../../../components/ahcui.extend/example1/ahcui-extend-header-logo.ce.vue';
import webComponents_ahcuiExtendHeaderToolsLeft from '../../../../components/ahcui.extend/example1/ahcui-extend-header-tools-left.ce.vue';
import webComponents_ahcuiExtendHeaderToolsRight from '../../../../components/ahcui.extend/example1/ahcui-extend-header-tools-right.ce.vue';
import teleport_ahcuiExtendHeaderLogo from '../../../../components/ahcui.extend/example2/ahcui-extend-header-logo.vue';
import teleport_ahcuiExtendHeaderToolsLeft from '../../../../components/ahcui.extend/example2/ahcui-extend-header-tools-left.vue';
import teleport_ahcuiExtendHeaderToolsRight from '../../../../components/ahcui.extend/example2/ahcui-extend-header-tools-right.vue';

export default {
    components:{
      //webComponents_ahcuiExtendHeaderLogo,
      //webComponents_ahcuiExtendHeaderToolsLeft,
      //webComponents_ahcuiExtendHeaderToolsRight,
    },
    setup(){
 
      /**
       * 借助于原生的web components的方式进行扩展，其扩展的内容为原生dom元素，不可使用其他标签，如"element-plus控件的<el-button>";
       */
        const defineWebComponentsahcuiExtendHeaderLogo=function(){
              let customElement=customElements.get('ahcui-extend-header-logo');
              if(!customElement){
                const _ahcuiExtendHeaderLogo = defineCustomElement(webComponents_ahcuiExtendHeaderLogo)
                customElements.define('ahcui-extend-header-logo', _ahcuiExtendHeaderLogo)
              }
        }
        const defineWebComponentsahcuiExtendHeaderToolsLeft=function(){
              let customElement=customElements.get('ahcui-extend-header-tools-left');
              if(!customElement){
                const _ahcuiExtendHeaderToolsLeft = defineCustomElement(webComponents_ahcuiExtendHeaderToolsLeft)
                customElements.define('ahcui-extend-header-tools-left', _ahcuiExtendHeaderToolsLeft)
              }
        }
        const defineWebComponentsahcuiExtendHeaderToolsRight=function(){
              let customElement=customElements.get('ahcui-extend-header-tools-right');
              if(!customElement){
                const _ahcuiExtendHeaderToolsRight = defineCustomElement(webComponents_ahcuiExtendHeaderToolsRight)
                customElements.define('ahcui-extend-header-tools-right', _ahcuiExtendHeaderToolsRight)
              }
        }

        const useteleport_ahcuiExtendHeaderLogo=function(){
          let body = document.getElementsByTagName("body")[0];
          let vnode1 = createVNode(teleport_ahcuiExtendHeaderLogo, {})

          let divContainer1 = document.createElement("div");
          render(vnode1, divContainer1);
          body.appendChild(divContainer1);
        }

        const useteleport_ahcuiExtendHeaderToolsLeft=function(){
          let body = document.getElementsByTagName("body")[0];
          let vnode1 = createVNode(teleport_ahcuiExtendHeaderToolsLeft, {})

          let divContainer1 = document.createElement("div");
          render(vnode1, divContainer1);
          body.appendChild(divContainer1);
        }

        const useteleport_ahcuiExtendHeaderToolsRight=function(){
          let body = document.getElementsByTagName("body")[0];
          let vnode1 = createVNode(teleport_ahcuiExtendHeaderToolsRight, {})

          let divContainer1 = document.createElement("div");
          render(vnode1, divContainer1);
          body.appendChild(divContainer1);
        }
        
        return {
          defineWebComponentsahcuiExtendHeaderLogo,
          defineWebComponentsahcuiExtendHeaderToolsLeft,
          defineWebComponentsahcuiExtendHeaderToolsRight,
          useteleport_ahcuiExtendHeaderLogo,
          useteleport_ahcuiExtendHeaderToolsLeft,
          useteleport_ahcuiExtendHeaderToolsRight,
        }
    }
}
</script>

<style scoped>
.box-card {
  width: 50%;
  justify-content:center;
  margin:10px;
}
</style>