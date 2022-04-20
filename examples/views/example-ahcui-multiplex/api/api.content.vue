<template>
 
      <div class="dashboard-img">
        本页演示@ahcui/vue3-multiplex内置API的使用--页面工作区API
      </div>
      <div class="dashboard-img">
        <el-button @click="openNewTab1">多页面模式下：使用随机名称打开新Tab</el-button>
        该模式不使用路由地址，因此地址不会跳转，面包屑内容不变
      </div>
      <div class="dashboard-img">
        <el-button @click="openNewTab2">多页面模式下：使用路由地址打开新Tab</el-button>
        该模式使用路由地址，地址将会跳转，面包屑内容会首先在菜单树中查找（菜单文字），查找无果后会使用路由定义查找（meta.title），
      </div>
      <div class="dashboard-img">
        <el-button @click="getCurrentTab">多页面模式下：获取当前的tab</el-button>
        {{currentIndex1}}
      </div>
      <div class="dashboard-img">
        <el-button @click="setCurrentTabByIndex">多页面模式下：根据索引激活tab</el-button>
        <el-input-number v-model="currentIndex2"></el-input-number>
      </div>
      <div class="dashboard-img">
        <el-button @click="setCurrentTabByPath">多页面模式下：根据路由地址激活tab</el-button>
        <el-input v-model="currentPath1"></el-input>
      </div>
      <div class="dashboard-img">
        <el-button @click="closeTabByIndex">多页面模式下：根据索引关闭tab</el-button>
        <el-input-number v-model="currentIndex3"></el-input-number>
      </div>
      <div class="dashboard-img">
        <el-button @click="closeTabByPath">多页面模式下：根据路由地址关闭tab</el-button>
        <el-input v-model="currentPath2"></el-input>
      </div>
      <div class="dashboard-img">
        <el-button @click="getTabsLength">多页面模式下：获取tab的数量</el-button>
        {{tabsLength}}
      </div>
      <div class="dashboard-img">
        <el-button @click="refreshCurrent">不分页面模式：刷新当前tab</el-button>
        页面加载于：{{refreshDate}}
      </div>
</template>

<script>
import{ref} from 'vue';
import { cuiapi } from '../../../assets/core/index';
import example from "./example.vue";
export default {
    name:"@ahcui/vue3-multiplex-demo-api-content",

    setup(){

        const currentIndex1=ref(-1),currentIndex2=ref(-1),currentIndex3=ref(-1),currentPath1=ref(""),currentPath2=ref(""),tabsLength=ref(-1);

        const refreshDate=(new Date()).format("YYYY-MM-dd hh:mm:ss");
        const openNewTab1 = ()=>{
            cuiapi.content.multipage.addTab("你好","dasfdfd",example,{name:"world"},{});
        }
         const openNewTab2 = ()=>{
            cuiapi.content.multipage.addTab("你好","/@ahcui/vue3-multiplex-api/content/example",example,{name:"world"},{});
        }       
        const getCurrentTab= ()=>{
            let currentItem=cuiapi.content.multipage.getCurrentTabInfo();
            currentIndex1.value=currentItem.index;
        }
        const setCurrentTabByIndex=()=>{
            cuiapi.content.multipage.setCurrentTabByIndex(currentIndex2.value);
        }
        const setCurrentTabByPath=()=>{
            cuiapi.content.multipage.setCurrentTabByPath(currentPath1.value);
        }
        const closeTabByIndex=()=>{
            cuiapi.content.multipage.closeTabByIndex(currentIndex3.value);
            cuiapi.content.multipage.setCurrentTabByIndex(0);
        }
        const closeTabByPath=()=>{
            cuiapi.content.multipage.closeTabByPath(currentPath2.value);
        }
        const getTabsLength=()=>{
            tabsLength.value = cuiapi.content.multipage.getTabsLength(currentPath2.value);
        }
        const refreshCurrent=()=>{
            cuiapi.content.refreshCurrent();
        }

        return {
            openNewTab1,
            openNewTab2,
            getCurrentTab,
            setCurrentTabByIndex,
            setCurrentTabByPath,
            currentIndex1,
            currentIndex2,
            currentIndex3,
            closeTabByIndex,
            closeTabByPath,
            getTabsLength,
            currentPath1,
            currentPath2,
            tabsLength,
            refreshCurrent,
            refreshDate,
        }
    }
}
</script>