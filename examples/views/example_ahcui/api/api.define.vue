<template>
    <el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="item" style="font-size:30px;margin:10px 10px">
         @ahcui/vue3-multiplex@1.0.0内置API定义与使用
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
             <div>头部API</div>
          </template>
            <p>openSetting：打开@ahcui/vue3-multiplex@1.0.0的界面设置抽屉框</p>
	        <p>closeSetting：关闭@ahcui/vue3-multiplex@1.0.0的界面设置抽屉框</p>
            <div>
                <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                    cuiapi.content.multipage.addTabByRoutePath('头部操作API','/ahcui-sdk/ahcui-api/header');
                    cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/header');
                    }">查看演示</el-button>
                <router-link v-else to="/ahcui-sdk/ahcui-api/header" tag='div'>查看演示</router-link>
            </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div>工作区API</div>
          </template>
          <div>公共API：</div>
            <p>refreshCurrent:刷新当前工作区的api，不区分单页面还是多页面，两者共用</p>
          <div>多页面模式API：</div>
            <p>
                addTabByCustomName(title,name,componentInfo,componentProps,data)
            </p>
             <p>
                addTabByRoutePath(title,routePath,componentProps,data)
            </p>
             <p>
                getCurrentTabInfo()
            </p>
             <p>
                setCurrentTabByIndex(index)
            </p>
             <p>
                setCurrentTabByPath(path)
            </p>
             <p>
                closeTabByIndex(index)
            </p>
             <p>
                closeTabByPath(path)
            </p>
             <p>
                getTabsLength()
            </p>
          <div>单页面模式API：</div>
            <p>
                无
            </p>
             <div>
                <el-button v-if="runtimeCfg.multiplex_style.multiPageMode" @click="()=>{
                    cuiapi.content.multipage.addTabByRoutePath('工作区API','/ahcui-sdk/ahcui-api/content');
                    cuiapi.content.multipage.setCurrentTabByPath('/ahcui-sdk/ahcui-api/content');
                    }">查看演示</el-button>
                <router-link v-else to="/ahcui-sdk/ahcui-api/content" tag='div'>查看演示</router-link>
            </div>
        </el-card>
        
    </div>
</template>

<script>
import {vue, mixin, cuiapi, eventDefine as events, runtimeCfg} from '../../../assets/core/index';

export default {
    name:"@ahcui/vue3-multiplex-sdk-api-define",

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
div>p{
    margin-left:10px;
}
</style>