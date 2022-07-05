<template>
 
    <el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="item" style="font-size:30px">
          @ahcui/vue3-multiplex@1.0.0二次开发能力
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
                框架作者认为：框架应该是便于使用，易于分发，简于升级，而不是提供松散、易变且难以溯源的源码，因此对框架核心库进行了重新封装与组件化，形成了现在的@ahcui/vue3-multiplex@1.0.0核心库。<br/>
                框架维持了其稳定的形态、代码、执行过程、但解决了老问题也带来了新问题，外部变化的部分如何解决？这也引发了封装一套SDK的想法，因此就有了下面的扩展能力：<br />


          </template>
        </el-alert>
      </el-card>
      <div class="" style="display:flex">
        <el-card class="box-card">
          <template #header>
             <div>API使用</div>
          </template>
          <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('API定义','/ahcui-sdk/ahcui-api/define');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/define');
                }">API定义</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-api/define" tag='div'>API定义</router-link>
        
          </div>
           <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('头部API','/ahcui-sdk/ahcui-api/header');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/header');
                }">头部API</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-api/header" tag='div'>头部API</router-link>
          </div>
          <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('工作区API','/ahcui-sdk/ahcui-api/content');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/content');
                }">工作区API</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-api/content" tag='div'>工作区API</router-link>
          </div>
          
            <el-alert type="info" :closable="false" show-icon>
              <template #default>
                    API为开发者提供了框架内部可公开的函数级过程调用，用于调用框架提供的公开方法。<br />

              </template>
            </el-alert>
          
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div>UI扩展</div>
          </template>
          
          <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('扩展坞','/ahcui-sdk/ahcui-ui-extend/dock');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-ui-extend/dock');
                }">扩展坞</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-ui-extend/dock" tag='div'>扩展坞</router-link>
          </div>
          <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('扩展演示','/ahcui-sdk/ahcui-ui-extend/demo');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-ui-extend/demo');
                }">扩展演示</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-ui-extend/demo" tag='div'>扩展演示</router-link>
          </div>
          <el-alert type="info" :closable="false" show-icon>
              <template #default>
                    扩展坞为开发者提供了框架UI界面的扩展预置位，用于适应项目中需要扩展UI功能的需求。<br />

              </template>
            </el-alert>
        </el-card>

        <el-card class="box-card">
          <template #header>
            <div>Event监听</div>
          </template>
          
          <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('事件定义','/ahcui-sdk/ahcui-event/define');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-event/define');
                }">事件定义</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-event/define" tag='div'>事件定义</router-link>
        
          </div>
          <div class="item">
            <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('事件订阅','/ahcui-sdk/ahcui-event/listen');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-event/listen');
                }">事件订阅</el-button>
            <router-link v-else to="/ahcui-sdk/ahcui-event/listen" tag='div'>事件订阅</router-link>
          </div>
          <el-alert type="info" :closable="false" show-icon>
              <template #default>
                    Event为开发者提供了框架内部可跟踪事件或消息的观察接口，用于订阅框架内部事件变化，消息等在外部进行处理的机制。<br />

              </template>
            </el-alert>
        </el-card>
      </div>
</template>

<script>
import {vue, mixin, cuiapi, eventDefine as events, runtimeCfg} from '../../assets/core/index';
export default {
    name:"@ahcui/vue3-multiplex-sdk",

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
  width: 33%;
  justify-content:center;
  margin:10px;
}
.item{
 
  margin:10px 10px;
}
</style>