
/**************************************************************************************************
 * 
 *  @author:zerostyle 
 *  @email: zerostyle@126.com
 *  @date：20220320
 *  @version:V1.0.0
 *  @description: 
 *   配置项，以下配置项为@ahcui/vue3-multiplex（https://www.npmjs.com/package/@ahcui/vue3-multiplex）组件的配置项，
 *   可以在编译后、部署前进行调整
 *                                                   
 *                                                          FBI WARNING
 * 
 *      配置项格式:"__"配置键"__",如："__xx_config__"，框架核心库会自动读取该配置文件，去掉window.__cui_runtime_config__.key之key的前后"__"，转成ES6可引入的对象语法。
 * 
 *      禁止在开发过程中直接使用window.__cui_runtime_config__.key，请在程序中通过使用 import {runtimeCfg} from "../src/assets/core/"(路径按照实际调整);
 *
 *		如：window.__cui_runtime_config__.__custom__使用时：runtimeCfg.custom;
 *			window.__cui_runtime_config__.__custom__._a_使用时：runtimeCfg.custom._a_;
 *
 * 
 *      
 * 
 * 
 ****************************************************************************************************/



     window.__cui_runtime_config__ = {

        /**
     * 前端程序发布路径，该配置项仅在生产模式（build）启作用
     * example:"/cui/vue/" 
     * default:"/"
     * 此配置项是为了配合在容器环境的虚拟路径下发布程序使用，如不想把程序放入容器根路径下，则需要配置此项为需要的目录
     * 如想把程序发布到"http://ip:port/cui/"下("cui"为创建的虚拟路径或站点下cui目录)
     * 配置了此项后，项目资源路径会指向该目录下（dist目录下的结构不变），同时在生产环境下在nginx的根目录创建此目录并作目录映射,
     * */
        __app_public_path__ : "/",

        __app_logo_url__ :'',
    
        __app_project_name__ :'ahcui前端框架',
    
        __app_page_title__ : "ahcui前端框架",
    
        __app_page_keyWords__ : "请输入您想设置的应用关键字",
        
        __app_page_description__ : "请输入您想设置的应用说明",
    
        /**
         * RestApi后端接口基地址,该配置项在开发与生产模式下均有效
         * 该基地址用于配置代理使用，因此必须是当前应用地址的子路径,末尾不加'/'
         * example1:"/restful/api" 
         * example2:"http://localhost:8080/restful/api"
         * 
         * 
         */
        __webapi_base_path__ : "/restful/api/",
        
        __page_hid_topbottom__ : false,
        
        __page_hid_sidebar__ : false,

        __multiplex_console__:{
            debug:{
                open: false,
            },
            error:{
                open: false,
            },
            info:{
                ope_: false,
            },
            log:{
                open: false,
            },
            warn:{
                open: false,
            },
        },

        __multiplex_style__:
        {
            /**
             * 是否收缩侧边栏，boolean
             * 如启用，则自动增加样式名：cui-style-layout-sidebar-collapse
             * 
             */
            sideBarCollapse:false,
            /**
             * 侧边栏样式名称
             * 取值：
             * cui-style-theme-sidebar-dark
             * cui-style-theme-sidebar-light
             */
            sideBarClassName: 'cui-style-theme-sidebar-dark',

            /**
             * 顶栏设置
             * 取值：
             * cui-style-theme-header-dark
             * cui-style-theme-header-light
             * cui-style-theme-header-color
             * 
             */
            headerBarClassName: 'cui-style-theme-header-dark',

            /**
             * 界面风格名称
             */
            controlClassName: 'cui-style-theme-color-2',

            /**
             * 当界面风格名称为自定义：cui-style-theme-color-custom 时，由用户指定的颜色
             */
            controlCustomColor:'#000',
            /**
             * 黑暗模式
             */
            darkMode: false,

            /**
             * 导航模式
             * 取值：
             * cui-style-layout-nav-mode-side:左侧菜单布局（所有级别,向下展开）
             * cui-style-layout-nav-mode-header:顶部菜单布局（所有级别，向下展开）
             * cui-style-layout-nav-mode-mixture:混合菜单布局（顶部为一级，测边为二级及以下）
             */
            navigationMode: 'cui-style-layout-nav-mode-mixture',

            /**
             * 侧栏双排菜单模式
             * 如启用，则自动增加样式名：cui-style-layout-doublesidebar
             */
            doubleSidebar: false,

            /**
             * 内容区域铺满模式
             * 如启用，则自动增加样式名：cui-style-layout-bodybespread
             */
            bodyBespread: false,

            /**
                * 是否固定顶栏区域
                * 如启用，则自动增加样式名：cui-style-layout-fixedheader
                */
            fixedHeader: false,

            /**
                * 是否固定侧边栏区域
                * 如启用，则自动增加样式名：cui-style-layout-fixedsidebar
                */
            fixedSidebar: false,

            /**
                * 是否固定主体区域
                * 如启用，则自动增加样式名：cui-style-layout-fixedbody
                */
            fixedBody: false,

            /**
                * logo宽度自动
                */
            logoAuto: false,

            /**
                * 侧栏彩色图标
                */
            sidebarIconColorful: false,

            /**
                * 显示页脚，则自动增加样式名：cui-style-layout-showfooter
                */
            showFooter: false,

            /**
                * 色弱模式
                */
            colorWeakMode: false,

            /**
                * 使用多页面模式
                */
            multiPageMode: true,

            /**
                 * 多标签页样式
                 */
            tabsStyle: '',

            /**
             * 启用菜单栏图标背景的彩色模式
             */
            menuIconBGColorMode: false,

            /**
             * logo区域宽度自动
             */
            logoAreaAutoWidth:true,

            /**
             * 加载动画
             */
            loadingAnimation:1,

            detail:{
                sidebar:{
                    sideBarMainMenuDefaultWidth:200,
                    sideBarMainMenuCollapseWidth:50,
                    sideBarMainMenuDoubleWidth:70,
                    sideBarMainMenuDoubleHeight:50,
                    sideBarMainMenuDoubleIconSize:18,
                    sideBarMainMenuItemHeight:50,
                    sideBarMainMenuItemIconTextMargin:4,
                    sideBarMainMenuItemIconSize:14,
                    sideBarMainMenuItemFontSize:14
                },
                header:{
                    headerUserInfoMenus:[
                        /*{icon:"",label:"修改密码",event:"changePasswd"},*/
                        {icon:"fa fa-user-o",label:"个人信息",event:"showuserinfo"},
                        {icon:"fa fa-cog",label:"主题设置",event:"styleSetting",divided:false},
                        {icon:"fa fa-sign-out",label:"退出登录",event:"logout",divided:true}
                    ],
                    headerHeight:48,
                    headerMenuItemPadding:20,
                }
            }
        },

        __multiplex_config__:{
            show:true,
            /**
             * 第一列配置项
             */
            "10000":{
                show:true,
                /*色调配置 */
                "100100":{
                    show:true,
                },
                /*黑暗模式 */
                "100200":{
                    show:true, 
                },
                /*导航设置 */
                "100300":{
                    show:true,
                    /*边栏设置 */
                    "1003010":{show:true},
                    /*顶栏设置 */
                    "1003020":{show:true},
                    /*导航模式 */
                    "1003030":{show:true},
                },
                /*滑动配置 */
                "100400":{
                    show:true,
                    /*固定顶栏区域 */
                    "1004010":{show:true},
                    /*固定侧栏区域 */
                    "1004020":{show:true},
                    /*固定主体区域 */
                    "1004030":{show:true},
                },
                /*强化配置 */
                "100500":{
                    show:true,
                    /*侧栏双排菜单 */
                    "1005010":{show:true},
                    /*内容区域铺满 */
                    "1005020":{show:true},
                    /*显示全局页尾 */
                    "1005030":{show:true},
                    /*工作区多页面 */
                    "1005040":{show:true},
                    /*logo宽度自动 */
                    "1005050":{show:false},
                    /*菜单图标彩色 */
                    "1005060":{show:true},
                    /*加载动画模式 */
                    "1005070":{show:true}
                },
            },
            /**
             * 第二列配置
             */
            "20000":{
                show:true,
                /*侧栏主菜单细节 */
                "200100":{
                    show:true,
                    /*常规模式下 */
                    "2001010":{
                        show:true,
                        /**正常宽度： */
                        "200101010":{show:true},
                        /**菜单项高度 */
                        "200101020":{show:true},
                        /**收缩宽度 */
                        "200101030":{show:true},
                        /**图字间距 */
                        "200101040":{show:true},
                        /**图标大小 */
                        "200101050":{show:true},
                        /**文字大小 */
                        "200101060":{show:true}
                    },
                    /*双排模式下 */
                    "2001020":{
                        show:true,
                        /**菜单宽度 */
                        "200102010":{show:true},
                        /**菜单项高度 */
                        "200102020":{show:true},
                        /**图标大小 */
                        "200102030":{show:true},
                        /**菜单项文字颜色 */
                        "200102040":{show:false},
                        /**选中项文字颜色 */
                        "200102050":{show:false}

                    },
                },
                /**头部导航栏细节 */
                "200200":{
                    show:true,
                    /**头部高度 */
                    "2002010":{show:true},
                    /**菜单项间距 */
                    "2002020":{show:true}

                }
            },
            "30000":{
                show:false
            },
            "40000":{
                show:false
            },
        },

        __multiplex_animate__:{
            /**工作区切入时的动画样式*/
            router_view_enter_active_class:"",
			/**工作区切出时的动画样式*/
            router_view_leave_active_class:""
        },
    
        /*******************************************************自定义配置项请添加到下方****************************************************************/
    
    
        /***************************************配置项均在此配置项之上，配置文件结束标记，以下配置项请勿删除***********************************************/
        ______finished______:""
    }