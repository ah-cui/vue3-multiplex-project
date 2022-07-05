<template>
    <el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="dashboard-img" style="font-size:30px;margin:10px 10px">
          本模块演示了@ahcui/vue3-multiplex@1.0.0内置API的使用--页面头部API
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
             API是@ahcui/vue3-multiplex@1.0.0作为核心库组件提供的一种交互方式，项目开发在需要时，可以主动发起API调用让框架做出对应操作；<br/>
            1：API采用命名空间进行了隔离，便于使用者快速定位API所起的作用与影响到的框架内置元件；<br/>
          </template>
        </el-alert>
	  </el-card>
    <el-card style="width:calc(100% - 20px);margin:10px auto;">
      <div class="dashboard-img" style="font-size:30px">
        <el-button @click="click1">打开框架UI配置</el-button>
      </div>
      <div class="dashboard-img" style="font-size:30px">
        <el-button @click="click2">关闭框架UI配置</el-button>
      </div>
    </el-card>
     
</template>

<script>
import { cuiapi } from '../../../assets/core/index';
export default {
    name:"@ahcui/vue3-multiplex-sdk-api-header",

    setup(){

        const click1 = ()=>{
            cuiapi.header.openSetting();
        }
        const click2 = ()=>{
            cuiapi.header.closeSetting();
        }

        return {
            click1,
            click2,
        }
    }
}
</script>