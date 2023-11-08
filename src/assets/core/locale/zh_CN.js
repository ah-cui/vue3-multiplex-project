/*****************************************************
 * 
 *    框架核心库自带中文简体语言，如需修改语言包中的文字，请修改此文件后重新注册，
 * 
 * 
 ***********************************************/


import {version} from "../ahcui/index.js"

export default {

    header:{
        "sidebar-collapse-title":"收缩",
        "sidebar-spread-title":"展开",
        "refresh-current-title":"刷新",
        "breadcrumb-home-item":"首页",
        "tools-item-more-title":"框架配置",
        setting:{
            "title":`${version.name}@${version.release} 框架UI配置`,
            hue:{
                title: "色调配置",
                "item-title-main-color-select": "主题色选择",
                "item-tooltip-dawn-blue": "拂晓蓝",
                "item-tooltip-evening-blue": "薄暮蓝",
                "item-tooltip-sunset-yellow": "日暮黄",
                "item-tooltip-rosso-alicante": "火山红",
                "item-tooltip-reddish-purple": "酱色紫",
                "item-tooltip-bright-blue": "明亮青",
                "item-tooltip-aurora-green": "极光绿",
                "item-tooltip-geek-blue": "极客蓝",
                "item-tooltip-custom": "自定义",
                "item-title-dark-mode":"暗黑系",
                "item-tooltip-dark-mode-switch-html":`暗黑系,@ahcui/vue3-multiplex@1.0.0-rc4版本之后支持:
                <ul>
                    <li>慎用原生dom，支持使用element-plus@2.2.2开发的页面</li>
                    <li>使用原生dom时，为了黑暗模式有效，请将背景色设置为透明，文字不设置颜色，不然框架样式无权对您设置的样式进行覆盖</li>
                    <li>重新写的cssvar，并与非黑暗模式的cssvar进行一致化处理</li>
                </ul>`,

            },
            navigation:{
                title: "导航设置",
                "item-title-sidebar-theme":"边栏设置",
                "item-tooltip-sidebar-theme-dark": "暗色边栏",
                "item-tooltip-sidebar-theme-light": "亮色边栏",
                "item-title-header-theme": "顶栏设置",
                "item-tooltip-header-theme-dark": "暗色顶栏",
                "item-tooltip-header-theme-light": "亮色顶栏",
                "item-tooltip-header-theme-color": "主题色顶栏",
                "item-title-navigation-mode": "导航模式",
                "item-tooltip-navigation-mode-side-html": ` 左侧菜单布局
                <br/>
                与其他开关配合使用后会影响交互，可能会导致存在子菜单的菜单项点击后不会跳转`,
                "item-tooltip-navigation-mode-header-html": `顶部菜单布局
                <br/>
                与其他开关配合使用后会影响交互，可能会导致存在子菜单的菜单项点击后不会跳转`,
                "item-tooltip-navigation-mode-mixture-html": `混合菜单布局
                <br/>
                <ul>
                    <li>顶部菜单可使用独立链接，无独立链接时会自动跳转到存在链接的子菜单</li>
                    <li>左侧菜单与其他开关配合使用后会影响交互，可能会导致存在子菜单的菜单项点击后不会跳转</li>
                </ul>`,
            },
            slideBar:{
               title:"滑动配置",
               "item-title-fixed-header":"固定顶栏区域",
               "item-title-fixed-header-switch-tooltip-html":`仅选中此项：头部独立，头部下方整体滑动，滑动条为整页滑动条，居页面右侧:
               <ul>
                   <li>在"固定顶栏区域"情况下，侧边栏为排除头部后的部分，不含logo区域</li>
                   <li>在"固定侧栏区域"情况下，工作区跟随整页滑动条移动</li>
               </ul>
               未选中：页面整体滑动，含左侧菜单(如果有)与右侧工作区
               更多组合使用请自行了解`,
               "item-title-fixed-sidebar":"固定侧栏区域",
               "item-title-fixed-sidebar-switch-tooltip-html":`仅选中此项：左侧菜单栏独立，可单独滑动，不随整页滑动条移动:
               <ul>
                   <li>在"固定顶栏区域"情况下，侧边栏为排除头部后的部分，不含logo区域</li>
                   <li>在非"固定顶栏区域"情况下，侧边栏为整个左侧，含logo区域</li>
               </ul>
               更多组合使用请自行了解`,
               "item-title-fixed-body":"固定主体区域",
               "item-title-fixed-body-switch-tooltip-html":`仅选中此项：与同时选中"固定顶栏区域"与"固定侧栏区域"效果类似，区别在于滑动条位于工作区右侧，而非整页右侧:
               <ul>
                   <li>在同时选中"固定顶栏区域"情况下，无效果</li>
                   <li>在同时选中"固定侧栏区域"情况下，无效果</li>
               </ul>
               更多组合使用请自行了解`
            },
            enhance:{
                title:"强化配置",
                "item-title-double-sidebar":"侧栏双排菜单：",
                "item-tooltip-double-sidebar-switch-html":`选中此项：在左侧菜单栏右侧出现子菜单:
                    <ul>
                        <li>在"导航模式"为"左侧菜单布局"时：主菜单显示一级菜单，子菜单显示二级与之后级别菜单</li>
                        <li>"导航模式"为"混合菜单布局"时：主菜单显示二级菜单，子菜单显示三级与之后级别菜单</li>
                        <li>受菜单级别要求，不存在该级别菜单时，即便开启双菜单栏也不会显示子菜单</li>
                        <li>页面头部的菜单收缩操作变为收缩二级菜单的显示，而不是正常状态时的整体菜单收缩</li>
                    </ul>
                    要求：在"导航模式"为"左侧菜单布局"与"混合菜单布局"时有效
                    注意：头部收缩导航会有更多效果
                    更多组合使用请自行了解`,
                "item-title-body-bespread":"内容区域铺满：",
                "item-tooltip-body-bespread-switch-html":`选中此项：工作区铺满
                    <br/>
                    未选中：工作区收缩，宽度为1200px`,
                "item-title-show-footer":"显示全局页尾：",
                "item-tooltip-show-footer-switch-html":`选中此项：工作区显示页脚签名`,
                "item-title-multi-page":"工作区多页面",
                "item-tooltip-multi-page-switch-html":`选中此项：工作区使用选项卡模式，点击菜单为新打开或定位到已打开的目标页，不会丢失原工作页面
                    <br/>
                    未选中：工作区为单页面模式，响应菜单点击并切换到目标页
                    <br/>
                    要求：在"顶部菜单布局"时有效`,
                "item-title-logo-auto-width":"logo宽度自动：",
                "item-tooltip-logo-auto-width-switch-html":`选中此项：logo区域（含项目名称）的宽度自动展开
                                            <br/>
                                            未选中：logo区域的宽度为配合侧边栏而和侧边栏宽度一致`,
                "item-title-menuiconbg-color":"菜单图标彩色：",
                "item-tooltip-menuiconbg-color-switch-html":`选中此项：菜单前面的图标使用彩色而非主题默认颜色
                    <br/>
                    未选中：菜单突变使用主题默认颜色
                    <br/>
                    要求：没有图标的菜单将无效
                    <br/>
                    注意：目前菜单配置中没有可配置图标颜色的地方，颜色取菜单文字自动计算。`,
                "item-title-loading-animation":"加载动画模式：",
                "item-tooltip-loading-animation-select-html":`禁用：不使用加载动画
                    <br/>
                    加载条：加载过程显示头部加载细条，支持路由变化与axios请求
                    <br/>
                    遮罩层：加载过程页面显示遮罩层，支持路由变化与axios请求`,
                "item-select-loading-animation-item-disable":"禁用",
                "item-select-loading-animation-item-nprogress":"加载条",
                "item-select-loading-animation-item-overlay":"遮罩层",


            },
            "sidebar-detail":{
                title:"侧栏主菜单细节",
                apply:"适用于：",
                "normal-sidebar-mode":{
                    title:"常规模式下：",
                    "menu-normal-width":"正常宽度：",
                    "menu-item-height":"菜单项高度：",
                    "menu-collapse-width":"收缩宽度：",
                    "menu-item-icon-text-margin":"图字间距：",
                    "menu-item-icon-size":"图标大小：",
                    "menu-item-text-size":"文字大小：",
                },
                "double-sidebar-mode":{
                    title:"双排模式下：",
                    "menu-normal-width":"菜单宽度：",
                    "menu-item-height":"菜单项高度：",
                    "menu-item-icon-size":"图标大小：",
                    "menu-item-text-color":"菜单项文字颜色：",
                    "menu-item-selected-text-color":"选中项文字颜色：",
                }
            },
            "header-detail":{
                title:"头部导航栏细节",
                apply:"适用于：",
                height:"头部高度：",
                "menu-item-margin":"菜单项间距：",
            },
            more:
            {
                title:"更多配置项持续增加中..."
            }
        }
    },
    footer:{
        "signature-html":`Copyright © 2019 - ${(new Date()).getFullYear()} ${version.company}  Powered by ${version.name}@${version.release}`
    }

}