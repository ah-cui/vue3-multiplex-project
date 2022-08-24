<template>
    <el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="dashboard-img" style="font-size:30px;margin:10px 10px">
         @ahcui/vue3-multiplex@1.0.0内置API的使用--页面工作区API
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
             API是@ahcui/vue3-multiplex@1.0.0作为核心库组件提供的一种交互方式，项目开发在需要时，可以主动发起API调用让框架做出对应操作；<br/>
            1：API采用命名空间进行了隔离，便于使用者快速定位API所起的作用与影响到的框架内置元件；<br/>
            2：工作区API分为单页面模式API与多页面模式API；<br/>
            3：多页面模式API使用"cuiapi.content.multipage"作为前缀，意味着只能在多页面模式使用；<br/>
            4：单页面模式API使用"cuiapi.content.singlepage"作为前缀，意味着只能在单页面模式使用；<br/>
            5：多页面与单页面存在公用API，这些API无需区分页面模式，直接使用即可，这些API使用"cuiapi.content"作为前缀，如：refreshCurrent用来刷新当前工作区；<br/>
          </template>
        </el-alert>
	  </el-card>
    <el-card style="width:calc(100% - 20px);margin:10px auto;">
      <div class="dashboard-img">
        本页演示@ahcui/vue3-multiplex@1.0.0内置API的使用--页面工作区API
      </div>
      <div class="dashboard-img">
        <el-button @click="openNewTab1">多页面模式下：使用随机名称打开新Tab</el-button>
        该api不使用路由地址，因此地址不会跳转，面包屑内容不变
      </div>
      <div class="dashboard-img">
        <el-button @click="openNewTab2">多页面模式下：使用路由地址，并提供组件props,打开新Tab</el-button>
        该api使用路由地址，地址将会跳转，面包屑内容会首先在菜单树中查找（菜单文字），查找无果后会使用路由定义查找（meta.title），
      </div>
      <div class="dashboard-img">
        <el-button @click="openNewTab3">多页面模式下：使用路由地址,使用路由定义中的props，打开新Tab</el-button>
        该api使用路由地址，地址将会跳转，面包屑内容会首先在菜单树中查找（菜单文字），查找无果后会使用路由定义查找（meta.title），
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
        <el-button @click="setCurrentTabByPath">多页面模式下：根据路由地址激活tab</el-button>该api使用已打开选项卡中记录的组件地址进行严格匹配（包括参数）
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

        <el-switch v-model="allowChange" active-text="允许tab切换" inactive-text="禁止tab切换" />
        <el-dialog>
          
          </el-dialog>
      </div>
      <div class="dashboard-img">
        <el-button @click="refreshCurrent">不分页面模式：刷新当前tab</el-button>
        页面加载于：{{refreshDate}}
      </div>
    </el-card>
</template>

<script>

import { vue, cuiapi, mixin, eventDefine as events } from '../../../assets/core/index';
import example from "./example.vue";
export default {
    name:"@ahcui/vue3-multiplex-sdk-api-content",

    setup(){
        const {
                cuiRoute,
                cuiEventbus
              } = mixin()
        const currentIndex1=vue.ref(-1),
        currentIndex2=vue.ref(-1),
        currentIndex3=vue.ref(-1),
        currentPath1=vue.ref(""),
        currentPath2=vue.ref(""),
        tabsLength=vue.ref(-1),
        allowChange=vue.ref(true);

        const refreshDate=(new Date()).format("YYYY-MM-dd hh:mm:ss");
        const openNewTab1 = ()=>{
            cuiapi.content.multipage.addTabByCustomName("你好","dasfdfd",example,{name:"world1!"},{});
            cuiapi.content.multipage.setCurrentTabByPath("dasfdfd");
        }
         const openNewTab2 = ()=>{
           let path="/ahcui-sdk/ahcui-api/content/example?Type=Props1";
            cuiapi.content.multipage.addTabByRoutePath("你好",path,{name:"world2!"},{});
            cuiapi.content.multipage.setCurrentTabByPath(path);
        }   
        const openNewTab3 = ()=>{
            let path="/ahcui-sdk/ahcui-api/content/example?Type=PROPS2";
            cuiapi.content.multipage.addTabByRoutePath("你好",path,undefined,{});
            cuiapi.content.multipage.setCurrentTabByPath(path);
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

        vue.onMounted(()=>{
            /*cuiapi.content.multipage.tabChangeHandle((oldValue,newValue)=>{
                return allowChange;
            })*/
            cuiEventbus.on(events.content.multipage.changeCurrentTab,(eventArgObj)=>{
              let oldValue = eventArgObj.oldValue;
              let newValue = eventArgObj.newValue;
              eventArgObj.allowChange=allowChange.value;
              
            })
            cuiEventbus.on(events.changedSideBarClassName,(eventArgObj)=>{
              let oldValue = eventArgObj.oldValue;
              let newValue = eventArgObj.newValue;
              
            })
        })

        return {
            openNewTab1,
            openNewTab2,
            openNewTab3,
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
            allowChange,
        }
    }
}
</script>