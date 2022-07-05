<template>
    <el-card style="width:calc(100% - 20px);margin: auto;">
            <div class="item" style="font-size:30px;">
            本模块介绍了@ahcui/vue3-multiplex@1.0.0内置API的
            </div>
            <el-alert type="info" :closable="false" show-icon>
              <template #default>
             API是@ahcui/vue3-multiplex@1.0.0作为核心库组件提供的一种交互方式，项目开发在需要时，可以主动发起API调用让框架做出对应操作；<br/>
            1：API采用命名空间进行了隔离，便于使用者快速定位API所起的作用与影响到的框架内置元件；<br/>
            2：部分API是与界面有关的，部分是无关的，这取决于您是要控制UI表现（交互），还是要控制UI以外的内容。<br/>
            3：API分为头部API、单页面模式API与多页面模式API；您想使用API操作UI可以通过组件定义查找API
              </template>
            </el-alert>
      </el-card>
      <div class="" style="display:flex">
        <el-card class="box-card">
          <template #header>
             <div>API定义</div>
          </template>
          <p>
              <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('API定义','/ahcui-sdk/ahcui-api/define');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/define');
                }">查看演示</el-button>
              <router-link v-else to="/ahcui-sdk/ahcui-api/define" tag='div'>查看演示</router-link>
          </p>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div>API使用示例</div>
          </template>
          <p>
              <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('头部操作API','/ahcui-sdk/ahcui-api/header');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/header');
                }">页面头部api演示</el-button>
              <router-link v-else to="/ahcui-sdk/ahcui-api/header" tag='div'>页面头部api演示</router-link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('工作区API','/ahcui-sdk/ahcui-api/content');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/content');
                }">页面工作区api演示</el-button>
              <router-link v-else to="/ahcui-sdk/ahcui-api/content" tag='div'>页面工作区api演示</router-link>
          </p>
        </el-card>
        
      </div>
</template>

<script>
import {vue, mixin, cuiapi, eventDefine as events, runtimeCfg} from '../../../assets/core/index';
export default {
    name:"@ahcui/vue3-multiplex-sdk-api",

    setup(){
      
        return {
          cuiapi,
          runtimeCfg
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
.item{
 
  margin:10px 10px;
}
</style>