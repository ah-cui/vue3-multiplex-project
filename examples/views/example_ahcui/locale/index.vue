<template>
    <el-card style="width:calc(100% - 20px);margin: auto;">
            <div class="item" style="font-size:30px;">
            本模块介绍了核心库版本新增的本地化功能
            </div>
            <el-alert type="info" :closable="false" show-icon>
              <template #default>
             本地化是@ahcui/vue3-multiplex@1.0.0作为核心库组件提供文字切换方式，<br/>
              </template>
            </el-alert>
      </el-card>
      <div class="" style="display:flex">
        <el-card class="box-card">
          <template #header>
             <div>本地化选择</div>
          </template>
          <p>
            <el-select v-model="cuiLocale.currentName" class="m-2" placeholder="Select" size="large"  @change="function(value){
                cuiapi.global.locale.setCurrentLanguage(value)}">
                <el-option
                v-for="(value,key,index) in cuiLocale.langs"
                :key="key"
                :label="key"
                :value="key"
                />
            </el-select>
          </p>
        </el-card>
      </div>
</template>

<script>
import {vue, mixin, cuiapi, eventDefine as events, runtimeCfg} from '../../../assets/core/index';
export default {
    name:"@vsui/vue-core_api",

    setup(){
      const {cuiLocale}=mixin();
        return {
          cuiapi,
          cuiLocale,
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