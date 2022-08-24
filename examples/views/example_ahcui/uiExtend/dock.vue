<template>
      <el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="dashboard-img" style="font-size:30px;margin:10px 10px">
          @ahcui/vue3-multiplex@1.0.0扩展坞介绍
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
                      扩展坞是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的，为了项目在需要时进行部分UI定制与扩展，是框架配置项之外的能力补充，<br/>
                      1：扩展坞是以"ahcui-extend-"开头的html标签；<br/>
                      2：每个扩展坞都具有独立的html标签，便于独立定制；<br/>
                      3：每个扩展坞标签都有class名称，便于使用queryselector通过标签或class进行选取；<br/>

          </template>
        </el-alert>
        <div class="" style="display:flex;margin-top:20px">
          <img style="width:100%" 
            src="" 
          />
        </div>
      </el-card>
      
</template>

<script>
import {vue} from '../../../assets/core';

export default {
    name:"@ahcui/vue3-multiplex-sdk-uiExtend-dock",

    setup(){
        

        return {
            
        }
    }
}
</script>