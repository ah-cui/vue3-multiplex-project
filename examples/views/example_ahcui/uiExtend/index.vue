<template>
        <el-card style="width:calc(100% - 20px);margin: auto;">
            <div class="item" style="font-size:30px;">
            本模块介绍了@ahcui/vue3-multiplex@1.0.0的UI扩展坞
            </div>
            <el-alert type="info" :closable="false" show-icon>
              <template #default>
                扩展坞是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的，为了项目在需要时进行部分UI定制与扩展，是框架配置项之外的能力补充，<br/>
                      1：扩展坞是以"cui-extend-"开头的html标签；<br/>
                      2：每个扩展坞都具有独立的html标签，便于独立定制；<br/>
                      3：每个扩展坞标签都有class名称，便于使用queryselector通过标签或class进行选取；<br/>
              </template>
            </el-alert>
      </el-card>
      <div class="" style="display:flex">
        <el-card class="box-card">
          <template #header>
             <div>扩展坞</div>
          </template>
          <p>
              <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('扩展坞','/ahcui-sdk/ahcui-ui-extend/dock');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-ui-extend/dock');
                }">查看介绍</el-button>
              <router-link v-else to="/ahcui-sdk/ahcui-ui-extend/dock" tag='div'>查看介绍</router-link>
          </p>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div>扩展示例</div>
          </template>
          <p>
              <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                cuiapi.content.multipage.addTabByRoutePath('扩展演示','/ahcui-sdk/ahcui-ui-extend/demo');
                cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-ui-extend/demo');
                }">查看演示</el-button>
              <router-link v-else to="/ahcui-sdk/ahcui-ui-extend/demo" tag='div'>查看演示</router-link>            
          </p>
        </el-card>
        
      </div>
</template>

<script>
import {vue, mixin, cuiapi, eventDefine as events, runtimeCfg} from '../../../assets/core/index';
export default {
    name:"@ahcui/vue3-multiplex-sdk-uiExtend",

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
</style>