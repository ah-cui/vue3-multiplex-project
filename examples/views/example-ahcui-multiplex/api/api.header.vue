<template>
 
      <div class="dashboard-img" style="font-size:30px">
        本模块演示了@ahcui/vue3-multiplex内置API的使用--页面头部API
      </div>
      <div class="dashboard-img" style="font-size:30px">
        <el-button @click="click1">打开框架UI配置</el-button>
      </div>
      <div class="dashboard-img" style="font-size:30px">
        <el-button @click="click2">关闭框架UI配置</el-button>
      </div>
</template>

<script>
import { cuiapi } from '../../../assets/core/index';
export default {
    name:"@ahcui/vue3-multiplex-demo-api-header",

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