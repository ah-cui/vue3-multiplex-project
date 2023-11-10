/*****************************************************
 * 
 *    框架核心库对中文繁体语言（香港、台湾等地区），如需修改语言包中的文字，请修改此文件后重新注册，
 * 
 * 
 ***********************************************/


import {version} from "../ahcui/index.js"

export default {

    header:{
        "sidebar-collapse-title":"收縮",
        "sidebar-spread-title":"展開",
        "refresh-current-title":"刷新",
        "breadcrumb-home-item":"首頁",
        "tools-item-more-title":"框架配寘",
        setting:{
            "title":`${version.name}@${version.release} 框架UI配寘`,
            hue:{
                title: "色調配寘",
                "item-title-main-color-select": "主題色選擇",
                "item-tooltip-dawn-blue": "拂曉藍",
                "item-tooltip-evening-blue": "薄暮藍",
                "item-tooltip-sunset-yellow": "日暮黃",
                "item-tooltip-rosso-alicante": "火山紅",
                "item-tooltip-reddish-purple": "醬色紫",
                "item-tooltip-bright-blue": "明亮青",
                "item-tooltip-aurora-green": "極光綠",
                "item-tooltip-geek-blue": "極客藍",
                "item-tooltip-custom": "自定義",
                "item-title-dark-mode":"暗黑系",
                "item-tooltip-dark-mode-switch-html":`暗黑系,@vsui/vue-multiplex@2.1.0-rc5版本之後支持:
                <ul>
                    <li>慎用原生dom，支持使用element-plus@2.2.2開發的頁面</li>
                    <li>使用原生dom时，爲了黑暗模式有效，請將背景色設置爲透明，文字不設置顔色，不然框架樣式無權對您設置的樣式進行覆蓋</li>
                    <li>重新寫的cssvar，並與非黑暗模式的cssvar進行一致化處理</li>
                </ul>`,

            },
            navigation:{
                title: "導航設定",
                "item-title-sidebar-theme":"邊欄設定",
                "item-tooltip-sidebar-theme-dark": "暗色邊欄",
                "item-tooltip-sidebar-theme-light": "亮色邊欄",
                "item-title-header-theme": "頂欄設定",
                "item-tooltip-header-theme-dark": "暗色頂欄",
                "item-tooltip-header-theme-light": "亮色頂欄",
                "item-tooltip-header-theme-color": "主題色頂欄",
                "item-title-navigation-mode": "導航模式",
                "item-tooltip-navigation-mode-side-html": ` 左側選單佈局
                <br/>
                與其他開關配合使用後會影響互動，可能會導致存在子功能表的功能表項目點擊後不會跳轉`,
                "item-tooltip-navigation-mode-header-html": `頂部選單佈局
                <br/>
                與其他開關配合使用後會影響互動，可能會導致存在子功能表的功能表項目點擊後不會跳轉`,
                "item-tooltip-navigation-mode-mixture-html": `混合選單佈局
                <br/>
                <ul>
                    <li>頂部選單可使用獨立連結，無獨立連結時會自動跳轉到存在連結的子功能表</li>
                    <li>左側選單與其他開關配合使用後會影響互動，可能會導致存在子功能表的功能表項目點擊後不會跳轉</li>
                </ul>`,
            },
            slideBar:{
               title:"滑動配寘",
               "item-title-fixed-header":"固定頂欄區域",
               "item-title-fixed-header-switch-tooltip-html":`僅選中此項：頭部獨立，頭部下方整體滑動，滑動條為整頁滑動條，居頁面右側:
               <ul>
                   <li>在“固定頂欄區域”情况下，側邊欄為排除頭部後的部分，不含logo區域</li>
                   <li>在“固定側欄區域”情况下，工作區跟隨整頁滑動條移動</li>
               </ul>
               未選中：頁面整體滑動，含左側選單（如果有）與右側工作區
               更多組合使用請自行瞭解`,
               "item-title-fixed-sidebar":"固定側欄區域",
               "item-title-fixed-sidebar-switch-tooltip-html":`僅選中此項：左側功能表列獨立，可單獨滑動，不隨整頁滑動條移動:
               <ul>
                   <li>在“固定頂欄區域”情况下，側邊欄為排除頭部後的部分，不含logo區域</li>
                   <li>在非“固定頂欄區域”情况下，側邊欄為整個左側，含logo區域</li>
               </ul>
               更多組合使用請自行瞭解`,
               "item-title-fixed-body":"固定主體區域",
               "item-title-fixed-body-switch-tooltip-html":`僅選中此項：與同時選中“固定頂欄區域”與“固定側欄區域”效果類似，區別在於滑動條位於工作區右側，而非整頁右側:
               <ul>
                   <li>在同時選中“固定頂欄區域”情况下，無效果</li>
                   <li>在同時選中“固定側欄區域”情况下，無效果</li>
               </ul>
               更多組合使用請自行瞭解`
            },
            enhance:{
                title:"强化配寘",
                "item-title-double-sidebar":"側欄雙排選單：",
                "item-tooltip-double-sidebar-switch-html":`選中此項：在左側功能表列右側出現子功能表:
                    <ul>
                        <li>在“導航模式”為“左側選單佈局”時：主菜單顯示一級選單，子功能表顯示二級與之後級別選單</li>
                        <li>“導航模式”為“混合選單佈局”時：主菜單顯示二級選單，子功能表顯示三級與之後級別選單</li>
                        <li>受選單級別要求，不存在該級別選單時，即便開啟雙功能表列也不會顯示子功能表</li>
                        <li>頁面頭部的選單收縮操作變為收縮二級選單的顯示，而不是正常狀態時的整體選單收縮</li>
                    </ul>
                    要求：在“導航模式”為“左側選單佈局”與“混合選單佈局”時有效
                    注意：頭部收縮導航會有更多效果
                    更多組合使用請自行瞭解`,
                "item-title-body-bespread":"內容區域鋪滿：",
                "item-tooltip-body-bespread-switch-html":`選中此項：工作區鋪滿
                    <br/>
                    未選中：工作區收縮，寬度為1200px`,
                "item-title-show-footer":"顯示全域頁尾：",
                "item-tooltip-show-footer-switch-html":`選中此項：工作區顯示頁腳簽名`,
                "item-title-multi-page":"工作區多頁面",
                "item-tooltip-multi-page-switch-html":`選中此項：工作區使用選項卡模式，點擊選單為新打開或定位到已打開的目標頁，不會遺失原工作頁面
                    <br/>
                    未選中：工作區為單頁面模式，響應選單點擊並切換到目標頁
                    <br/>
                    要求：在“頂部選單佈局”時有效`,
                "item-title-logo-auto-width":"logo寬度自動：",
                "item-tooltip-logo-auto-width-switch-html":`選中此項：logo區域（含項目名稱）的寬度自動展開
                                            <br/>
                                           未選中：logo區域的寬度為配合側邊欄而和側邊欄寬度一致`,
                "item-title-menuiconbg-color":"功能表圖示彩色：",
                "item-tooltip-menuiconbg-color-switch-html":`選中此項：選單前面的圖標使用彩色而非主題默認顏色
                    <br/>
                    未選中：選單突變使用主題默認顏色
                    <br/>
                    要求：沒有圖標的選單將無效
                    <br/>
                    注意：現時選單配寘中沒有可配置圖標顏色的地方，顏色取選單文字自動計算。`,
                "item-title-loading-animation":"加載動畫模式：",
                "item-tooltip-loading-animation-select-html":`禁用：不使用加載動畫
                    <br/>
                    加載條：加載過程顯示頭部加載細條，支持路由變化與axios請求
                    <br/>
                    遮罩層：加載過程頁面顯示遮罩層，支持路由變化與axios請求`,
                "item-select-loading-animation-item-disable":"禁用",
                "item-select-loading-animation-item-nprogress":"加載條",
                "item-select-loading-animation-item-overlay":"遮罩層",


            },
            "sidebar-detail":{
                title:"側欄主菜單細節",
                apply:"適用於：",
                "normal-sidebar-mode":{
                    title:"常規模式下：",
                    "menu-normal-width":"正常寬度：",
                    "menu-item-height":"功能表項目高度：",
                    "menu-collapse-width":"收縮寬度：",
                    "menu-item-icon-text-margin":"圖字間距：",
                    "menu-item-icon-size":"圖標大小：",
                    "menu-item-text-size":"文字大小：",
                },
                "double-sidebar-mode":{
                    title:"雙排模式下：",
                    "menu-normal-width":"選單寬度：",
                    "menu-item-height":"功能表項目高度：",
                    "menu-item-icon-size":"圖標大小：",
                    "menu-item-text-color":"功能表項目文字顏色：",
                    "menu-item-selected-text-color":"選中項文字顏色：",
                }
            },
            "header-detail":{
                title:"頭部巡覽列細節",
                apply:"適用於：",
                height:"頭部高度：",
                "menu-item-margin":"功能表項目間距：",
            },
            more:
            {
                title:"更多配寘項持續新增中..."
            }
        }
    },
    footer:{
        "signature-html":`Copyright © 2019 - ${(new Date()).getFullYear()} ${version.company}  Powered by ${version.name}@${version.release}`
    }

}