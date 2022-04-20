<template>
 
      <div class="dashboard-img" style="font-size:30px">
        本模块演示了@ahcui/vue3-multiplex内置事件的声明与函数签名
      </div>
      <div class="dashboard-img" style="font-size:14px">
        <p>"moduleclicked":"菜单点击后，此时路由地址已变化",</p>
        <p>"refreshcurrentroute":"刷新当前工作区,由刷新工作区界面操作或API调用触发",</p>
    
        <p>"changedSideBarCollapse":"修改侧边栏区域展开合并设置，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-sidebar-collapse",</p>
        <p>"changedSideBarClassName":"设置侧边栏风格样式，函数签名：(旧模式字符串，新模式字符串)；取值：cui-style-theme-sidebar-dark，cui-style-theme-sidebar-light，切换风格则自动设置为相应状态的样式名",</p>
        <p>"changedHeaderBarClassName":"设置头部风格样式，函数签名：(旧模式字符串，新模式字符串)；取值：cui-style-theme-header-dark,cui-style-theme-header-light,cui-style-theme-header-color，切换风格则自动设置为相应状态的样式名",</p>
        <p>"changedControlClassName":`修改界面风格（主题）设置，函数签名：(旧模式字符串，新模式字符串)；取值：cui-style-theme-color-1[-8]，切换风格则自动设置为相应状态的样式名,`,</p>
        <p>"changedControlCustomColor":`当changedControlClassName为cui-style-theme-color-custom时，由用户指定的主色调,`,</p>
        <p>"changedDarkMode":"修改黑暗模式设置，函数签名：(旧状态布尔值，新状态布尔值)；bool值：是/否，如启用，则自动增加样式名：cui-style-theme-dark",</p>
        <p>"changedNavigationMode":"修改导航模式，函数签名：(旧模式字符串，新模式字符串)；取值：cui-style-layout-nav-mode-side:左侧菜单布局（所有级别,侧边显示，向下展开）,cui-style-layout-nav-mode-header:顶部菜单布局（所有级别，头部显示，向下展开）,cui-style-layout-nav-mode-mixture:混合菜单布局（顶部显示一级菜单，侧边为二级及以下），切换模式则自动设置为相应状态的样式名",</p>
        <p>"changedDoubleSidebar":"侧栏双排菜单模式，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-doublesidebar",</p>
        <p>"changedBodyBespread":"修改内容区域铺满设置，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-bodybespread",</p>
        <p>"changedFixedHeader":"修改固定顶栏区域设置，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-fixedheader",</p>
        <p>"changedFixedSidebar":"修改固定侧边栏区域设置，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-fixedsidebar",</p>
        <p>"changedFixedBody":"修改固定主题区域设置，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-fixedbody",</p>
        <p>"changedLogoAuto":"",</p>
        <p>"changeSidebarIconColorful":"修改侧边栏图标为彩色，函数签名：(旧状态布尔值，新状态布尔值)；",</p>
        <p>"changeShowFooter":"修改显示全局页脚，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：cui-style-layout-showfooter",</p>
        <p>"changeColorWeakMode":"修改色弱模式，函数签名：(旧状态布尔值，新状态布尔值)；如启用，则自动增加样式名：",</p>
        <p>"changeMultiPageMode":"修改多页面模式，函数签名：(旧状态布尔值，新状态布尔值)；无论是否启用，页面都不含影响此模式的样式名称",</p>
        <p>"changeTabsStyle":"修改（多页面模式时）选项卡的样式，函数签名：(旧样式名，新样式名)；",</p>
        <p>"changeMenuIconBGColorMode":"更改菜单栏按钮背景色为彩色/默认时触发：(旧样式名，新样式名)；",</p>
        <p>"changeLogoAreaAutoWidth":"更改左上角Logo区域宽度布局模式时触发,只在导航为cui-style-layout-nav-mode-header模式时有效",</p>
        <p>"changeLoadingAnimation":"更改页面加载动画时触发",</p>

        <p>"changeSideBarMainMenuDefaultWidth":"当修改侧边栏主菜单默认状态下的宽度时触发",</p>
    
        <p>"changeSideBarMainMenuCollapseWidth":"侧边栏在cui-style-layout-nav-mode-side/cui-style-layout-nav-mode-mixture状态+主菜单收缩模式，调整主菜单项的宽度时触发",</p>
        <p>"changeSideBarMainMenuDoubleWidth":"侧边栏在cui-style-layout-nav-mode-side/cui-style-layout-nav-mode-mixture状态+双菜单栏模式下，调整主菜单项的宽度时触发",</p>
        <p>"changeSideBarMainMenuDoubleHeight":"侧边栏在cui-style-layout-nav-mode-side/cui-style-layout-nav-mode-mixture状态+双菜单栏模式，调整主菜单项的高度时触发",</p>
        <p>"changeSideBarMainMenuDoubleIconSize":"侧边栏在cui-style-layout-nav-mode-side/cui-style-layout-nav-mode-mixture状态+双菜单栏模式，调整主菜单项的图标大小时触发",</p>
        <p>"changeSideBarMainMenuItemHeight":"当修改侧边栏主菜单菜单项高度时触发",</p>
        <p>"changeSideBarMainMenuItemIconTextMargin":"当修改侧边栏主菜单菜单项图标与文字间距时触发",</p>
        <p>"changeSideBarMainMenuItemIconSize":"当修改侧边栏主菜单菜单项图标大小时触发",</p>
        <p>"changeSideBarMainMenuItemFontSize":"当修改侧边栏主菜单菜单项文字大小时触发",</p>

        <p>"changeHeaderHeight":"当修改头部高度时触发",</p>
        <p>"changeHeaderMenuItemPadding":"当修改头部菜单的菜单项间距时触发",</p>
    
        <p>"haSubModulesWhenChangeToDoubleSidebar":"当界面修改为双菜单模式时，当前页面的显示存在双菜单并会显示时触发本事件,函数签名(当前页面的父模块对象)",</p>
        <p>"changedDoubleSidebarData":"当界面为双菜单模式时，父模块选中状态改变时，会导致子菜单数据变更，函数签名(父模块对象，子菜单的数据列表)",</p>
        <p>"closeCuiSetting":"当关闭Cui框架设置对话框时触发，函数签名：(配置信息的JSON对象)；",</p>
      </div>
      <div class="dashboard-img" style="font-size:30px">
        
      </div>
</template>

<script>

export default {
    name:"@ahcui/vue3-multiplex-demo-event-define",

    setup(){

        

        return {
            
        }
    }
}
</script>