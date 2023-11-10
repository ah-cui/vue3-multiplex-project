/*****************************************************
 * 
 *    框架核心库自带英语（美式）语言，如需修改语言包中的文字，请修改此文件后重新注册，
 * 
 * 
 ***********************************************/

import {version} from "../ahcui/index.js"

export default {

    header:{
        "sidebar-collapse-title":"Contract",
        "sidebar-spread-title":"Spread",
        "refresh-current-title":"Refresh",
        "breadcrumb-home-item":"Dashboard",
        "tools-item-more-title":"Frame configuration",
        setting:{
            "title":`${version.name}@${version.release} Frame UI configuration`,
            hue:{
                title: "Tonal configuration",
                "item-title-main-color-select": "Theme color selection",
                "item-tooltip-dawn-blue": "Dawn blue",
                "item-tooltip-evening-blue": "Evening blue",
                "item-tooltip-sunset-yellow": "Sunset yellow",
                "item-tooltip-rosso-alicante": "Volcanic red",
                "item-tooltip-reddish-purple": "Reddish purple",
                "item-tooltip-bright-blue": "Bright blue",
                "item-tooltip-aurora-green": "Aurora green",
                "item-tooltip-geek-blue": "Geek Blue",
                "item-tooltip-custom": "Custom",
                "item-title-dark-mode":"Darkness",
                "item-tooltip-dark-mode-switch-html":`Darkness,@vsui/vue-multiplex@2.1.0-rc5 later supported:
                <ul>
                    <li>Use native dom sparingly and support pages developed using element-plus@2.2.2</li>
                    <li>When using native dom, in order for dark mode to be effective, set the background color to transparent and the text to no color, otherwise the frame style has no right to override the style you set</li>
                    <li>Rewritten cssvar and consistent with non-dark mode cssvar</li>
                </ul>`,

            },
            navigation:{
                title: "Navigation Settings",
                "item-title-sidebar-theme":"Sidebar Setting",
                "item-tooltip-sidebar-theme-dark": "Dark sidebar",
                "item-tooltip-sidebar-theme-light": "Bright sidebar",
                "item-title-header-theme": "Top bar setting",
                "item-tooltip-header-theme-dark": "Dark top bar",
                "item-tooltip-header-theme-light": "Bright top bar",
                "item-tooltip-header-theme-color": "Theme color top bar",
                "item-title-navigation-mode": "Navigation mode",
                "item-tooltip-navigation-mode-side-html": ` Left menu layout
                <br/>
                When used in combination with other switches, the interaction will be affected, and menu items with submenus will not jump after being clicked`,
                "item-tooltip-navigation-mode-header-html": `Top menu layout
                <br/>
                When used in combination with other switches, the interaction will be affected, and menu items with submenus will not jump after being clicked`,
                "item-tooltip-navigation-mode-mixture-html": `Hybrid menu layout
                <br/>
                <ul>
                    <li>Independent links can be used in the top menu. If there is no independent link, it will automatically jump to the submenu with a link</li>
                    <li>When the left menu is used in combination with other switches, the interaction will be affected, which may cause that the menu item with submenu will not jump after being clicked</li>
                </ul>`,
            },
            slideBar:{
               title:"Sliding configuration",
               "item-title-fixed-header":"Fixed top bar area",
               "item-title-fixed-header-switch-tooltip-html":`Select only this item: The head is independent, the whole slide below the head, the slider is the whole page slider, the right side of the page:
               <ul>
                   <li>In the case of "fixed top sidebar area", the sidebar is the part after the exclusion of the head and does not contain the logo area</li>
                   <li>In the Fixed sidebar Area case, the workspace follows the full-page slider</li>
               </ul>
               Unchecked: The entire page slides, including the left menu (if any) and the right workspace
               For more combination use, please find out`,
               "item-title-fixed-sidebar":"Fixed sidebar area",
               "item-title-fixed-sidebar-switch-tooltip-html":`Select only this item: The left menu bar is independent and can be moved independently, not with the entire page slider:
               <ul>
                   <li>In the case of "fixed top sidebar area", the sidebar is the part after the exclusion of the head and does not contain the logo area</li>
                   <li>In the case of non-fixed Top sidebar area, the sidebar is the entire left side, including the logo area</li>
               </ul>
               For more combination use, please find out`,
               "item-title-fixed-body":"Fixed subject area",
               "item-title-fixed-body-switch-tooltip-html":`Select this item only: The effect is similar to that of selecting both "Fixed top bar area" and "fixed sidebar area", except that the slider is located to the right of the workspace instead of the right of the entire page:
               <ul>
                   <li>No effect if "Fixed top column area" is also selected</li>
                   <li>No effect if Fixed sidebar area is also selected</li>
               </ul>
               For more combination use, please find out`
            },
            enhance:{
                title:"Reinforcement configuration",
                "item-title-double-sidebar":"Sidebar double row menu：",
                "item-tooltip-double-sidebar-switch-html":`Check this item: A submenu appears on the right side of the left menu bar:
                    <ul>
                        <li>When "Navigation Mode" is "Left Menu Layout" : the main menu displays the first level menu, and the sub-menu displays the second level and the next level menu</li>
                        <li>When Navigation Mode is Mixed Menu Layout, the main menu displays the second-level menu, and the submenu displays the third-level and lower-level menus</li>
                        <li>Due to the requirements of the menu level, if no menu of this level exists, the submenu will not be displayed even if two menu bars are enabled</li>
                        <li>The menu shrink operation of the page header becomes the display of the shrink secondary menu, instead of the overall menu shrink in the normal state</li>
                    </ul>
                    Requirement: Valid when Navigation Mode is Left Menu Layout and Mixed Menu Layout
                    Note: Head retraction navigation is more effective
                    For more combination use, please find out`,
                "item-title-body-bespread":"The content area is covered：",
                "item-tooltip-body-bespread-switch-html":`Check this item: Workspace is full
                    <br/>
                    Unchecked: Workspace shrunk to 1200px width`,
                "item-title-show-footer":"Displays the global page tail：",
                "item-tooltip-show-footer-switch-html":`Check this item: The workspace displays the footer signature`,
                "item-title-multi-page":"Workspace multipage",
                "item-tooltip-multi-page-switch-html":`Check this: The workspace uses TAB mode, click the menu for a newly opened or locate to an already opened target page, without losing the original working page
                    <br/>
                    Unchecked: The workspace is in single page mode, response menu click and switch to the target page
                    <br/>
                    Requirement: Valid in Top Menu Layout`,
                "item-title-logo-auto-width":"logo width automatic：",
                "item-tooltip-logo-auto-width-switch-html":`Check this item: The width of the logo area (including the project name) expands automatically
                                            <br/>
                                            Unchecked: The width of the logo area matches the width of the sidebar`,
                "item-title-menuiconbg-color":"Menu icon color：",
                "item-tooltip-menuiconbg-color-switch-html":`Check this item: The icon at the front of the menu uses color instead of the theme's default color
                    <br/>
                    Unchecked: Menu mutations use theme default colors
                    <br/>
                    Requirement: Menus without ICONS will not be valid
                    <br/>
                   Note: Where there is no icon color configurable in the current menu configuration, the color is automatically calculated by taking the menu text.`,
                "item-title-loading-animation":"Load animation mode：",
                "item-tooltip-loading-animation-select-html":`Disabled: Load animation is not used
                    <br/>
                    Load bar: The load process shows a header load bar that supports routing changes and axios requests
                    <br/>
                    Mask layer: The loading process page displays the mask layer, which supports routing changes and axios requests`,
                "item-select-loading-animation-item-disable":"Forbidden",
                "item-select-loading-animation-item-nprogress":"Loading bar",
                "item-select-loading-animation-item-overlay":"Mask layer",


            },
            "sidebar-detail":{
                title:"Sidebar main menu details",
                apply:"Refer to：",
                "normal-sidebar-mode":{
                    title:"In normal mode：",
                    "menu-normal-width":"Normal width：",
                    "menu-item-height":"Menu item height：",
                    "menu-collapse-width":"Shrinkage width：",
                    "menu-item-icon-text-margin":"Figure spacing：",
                    "menu-item-icon-size":"Icon size：",
                    "menu-item-text-size":"Text size：",
                },
                "double-sidebar-mode":{
                    title:"In dual-row mode：",
                    "menu-normal-width":"Menu width：",
                    "menu-item-height":"Menu item height：",
                    "menu-item-icon-size":"Icon size：",
                    "menu-item-text-color":"Menu item text color：",
                    "menu-item-selected-text-color":"Select the item text color：",
                }
            },
            "header-detail":{
                title:"Header navigation bar details",
                apply:"Refer to：",
                height:"Head height：",
                "menu-item-margin":"Menu item spacing：",
            },
            more:
            {
                title:"More configuration items are being added..."
            }
        }
    },
    footer:{
        "signature-html":`Copyright © 2019 - ${(new Date()).getFullYear()} ${version.company}  Powered by ${version.name}@${version.release}`
    }

}