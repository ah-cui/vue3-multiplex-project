
## @ahcui/vue3-multiplex 前端框架模板工程使用文档

适用于框架版本：

@ahcui/vue3-multiplex@1.0.0-rc5


此项目为模板工程，核心库为[@ahcui/vue3-multiplex](https://www.npmjs.com/package/@ahcui/vue3-multiplex).

***<font size="1px" color="red">模板工程是一个框架引入的使用示例与编译过程，如果您的动手能力很强，可以不必受限于模板工程给您提供的例子与编译过程，您可以自行创建一个工程与编译过程，同样可以引入前端框架的核心库，但推荐使用提供的模板工程进行项目开发，因为这将减少因不可控因素而导致的支持工作难以衔接问题。</font>***

### 1：<a href="howtouse">如何搭建运行模板工程的环境</a>

#### 1.1：<a href="howtouse-setup_run_env">安装基础环境</a>

* NodeJS

下载下来的工程模板解压到不存在中文路径的目录下，[下载并安装NodeJS]("https://nodejs.org/zh-cn/","NodeJS")，安装后启动控制台输入以下内容查看版本号，如查看不到版本，说明NodeJS未安装成功，请找度娘。

``` javascript
 node -v
```

* npm降级

建议将npm版本降至6.14.15，新版本的依赖安装过程可能会因为所安装依赖包的不同需要安装其他编译环境，可以通过控制台执行命令来安装较低的版本：
``` javascript
npm i -g npm@6.14.15
```

* 安装WebPack

控制台执行命令安装WebPack@5及WebPack-CLI@4

``` script
npm i -g webpack@5.38.1
npm i -g webpack-cli@4.7.0
```

#### 1.2：<a href="howtous-npm_installe">安装模板工程依赖</a>


##### npm i

打开命令行，将目录切换至模板工程目录，使用如下命令安装依赖项：
```
npm i
```

安装完工程依赖项后，即可编译运行工程，工程内部提供了如下指令：

- dev 项目开发运行指令，项目开发调试使用的项目运行脚本，用于项目开发模式
	
- dev:demo 示例开发运行指令，示例开发调试使用的运行脚本，用于学习示例运行机制的模式

- build 编译指令，项目编译部署要用到的编译脚本，用于项目进行部署

- build:demo 编译指令，示例编译部署使用的运行脚本，用于部署一套框架演示系统

您可以在当前目录的控制台中使用如下命令，来使用如上指令：

npm run 指令

模板工程默认提供了如下命令：

dev：运行项目开发环境，可直接使用源码调试工程代码

dev:demo：运行项目提供的示例页面环境，可直接使用源码调试示例代码

build：执行项目的编译过程，生成项目可部署文件

build:demo：执行示例的编译过程，生成示例工程可部署文件

指令来自于package.json的scripts节点，详情请见该文件


#### 1.3：<a href="howtouse-run_project_demo">运行有示例的模板工程</a>

##### npm run dev:demo

您可以使用此命令来启动带示例的模板工程，用于直观的看到框架运行形态，并可以设置代码段点来调试示例代码，用于研究框架的执行过程

### 2：<a href="begindev">开始开发</a>

Tip：模板工程默认使用了认证鉴权组件，并可在开发模式与正式模式之间切换，开发模式使用用户菜单假数据（数据来源自：apidata\auth\login），正式模式需要后端框架与权限中心的配合，如果您不使用框架全家桶，你也可以自行完成用户数据的获取，并转换后扔给前端框架，前端框架将一如既往的支持您在功能上的组织与变化（此方案请见：自定义用户数据与前端框架的结合）。

#### 2.1：<a href="begindev-catainfo">目录说明</a>

##### 2.1.1：src\\: 主要的代码存放目录

###### src\assets\core: 框架核心库导入
此目录是项目与框架（含@ahcui/vue3-multiplex框架、vue3.0及其周边）的结合点，负责从[@ahcui/vue3-multiplex](https://www.npmjs.com/package/@ahcui/vue3-multiplex)组件导入路由定义，状态存储，权限认证，事件定义与通知，全局配置项等到项目工程中。

###### src\assets\webApi: webApi接口远程调用实现
此目录用于编写webapi接口调用的实现，连接前端UI界面与后端接口数据，封装一套接口层，然后通过在vue文件中调用webapi，拉取后端数据，绑定到UI界面
	
###### src\components: 项目开发的组件
此目录提倡存放项目开发过程封装的可复用vue组件，不建议存放路由直接指向的页面文件

###### src\views: 项目开发的视图页面
此目录建议存放项目的视图页面，这是直接服务于用户的页面，是路由指向的文件，它是组件组合后的产物，是一个完整业务的一个阶段或者全部。为了项目易于维护，您可以按照需要创建目录，将vue页面文件按模块存放是一种好习惯。

###### src\lib 库函数
此目录用于存放库函数或自行封装的通用函数，没有限制，但提倡通过文件名来表述文件的作用。

##### 2.1.2：static\\: 静态资源存放目录

此目录下一般可以创建:img、css、fonts、js等常用资源类型的目录，

#### 2.2：<a href="begindev-coreinfo">项目核心库的说明</a>

在示例工程中，核心库目录为：src\assets\core，最后导出index.js

##### src\assets\core\ahcui 

@ahcui/vue3-multiplex 框架组件引入，此文件引入框架核心和框架样式文件，模板工程的核心库大部分导入都是在此导入核心库的基础上进行扩展而来。


##### src\assets\core\auth

这是示例工程使用权限组件实现的向@ahcui/vue3-multiplex核心库传入需要用到的菜单，用户信息等，传入的信息要求请[点击链接查看](https://www.npmjs.com/package/@ahcui/vue3-multiplex#core-export-auth)，项目中的实现请参考代码。
如项目不使用鉴权库，而是自行实现用户信息的获取，请按照数据要求初始化。


##### src\assets\core\router

vue-router组件的引入，路由对象由[@ahcui/vue3-multiplex](https://www.npmjs.com/package/@ahcui/vue3-multiplex)提供，框架对此的描述请[点击此处](https://www.npmjs.com/package/@ahcui/vue3-multiplex#core-export-router)，项目可以对页面路由进行扩展。

通过借助vue-router组件的addRoute接口对路由地址进行扩展；具体代码请见src\assets\core\router\index.js，文件中有两种路由地址，一种是使用框架的页面，一种是不使用框架的页面，请阅读注释进行区分。

路由定义文件：src\assets\core\router\router.define.js，此文件主要用于定义路由地址，如果项目路由地址很多的情况下，您也可以将路由地址拆分到更多的文件中，请参见示例：examples\assets\core\router\router.define.js

##### src\assets\core\store

vuex状态管理组件的引入，状态对象由[@ahcui/vue3-multiplex](https://www.npmjs.com/package/@ahcui/vue3-multiplex)提供，框架对此的描述请[点击此处](https://www.npmjs.com/package/@ahcui/vue3-multiplex#core-export-store)，项目可以对状态管理进行扩展。

通过vuex组件的registerModule接口进行状态管理模块的注册，具体代码请见src\assets\core\store\index.js，注册d的模块即为项目中使用到的状态模块，可以由开发者按照项目需要进行定义与使用。请参见示例：examples\assets\core\store\example.js

##### src\assets\core\mock

模拟接口数据，mock对象不是由@ahcui/vue3-multiplex引入而来，是模板工程给开发者提供一个三方库引入的示例，项目有需要则使用，没有需要则可不用


##### src\assets\core\event


由[@ahcui/vue3-multiplex](https://www.npmjs.com/package/@ahcui/vue3-multiplex)提供，此引入包含：[eventDefine](https://www.npmjs.com/package/@ahcui/vue3-multiplex#core-export-eventDefine)与[eventBus](https://www.npmjs.com/package/@ahcui/vue3-multiplex#core-export-eventBus)。详情请点击查看。

此目录的导入包含：

1.框架事件通知机制与框架内部事件定义的导入，由@ahcui/vue3-multiplex提供，框架对此的描述请[点击此处](https://www.npmjs.com/package/@ahcui/vue3-multiplex#core-export-store)。简要说一下，
事件定义类似于windows消息机制，由框架内部对事件进行枚举，并在触发的时候产生事件通知，开发者可以使用观察者模式进行事件监听并进行处理。您仍需要了解目前@ahcui/vue3-multiplex组件提供了哪些事件，事件签名信息，详情请参考@ahcui/vue3-multiplex事件说明。


2.由开发者编写的对全局事件订阅与处理过程

框架开发者分析后认为：框架提供的工作区是开发者的阵地，但是其使用频次与生命周期都是不可预测的，@ahcui/vue3-multiplex核心库提供的事件又属于全局性事件，因此在工作区页面创建全局事件监听则会因工作区页面的生命周期不可控而无功用，因此事件的监听者不仅是工作区的vue组件，还有可能是长时间驻留内存的js脚本（例如用户退出）因此，您需要合理的使用@ahcui/vue3-multiplex核心库支持的两种事件订阅机制之一来实现。

#### 2.3：<a href="begindev-config">项目配置</a>

项目配置项的抽离结合了@ahcui/vue3-multiplex的配置项，示例工程在叠加@ahcui/vue3-multiplex配置信息后形成如下配置信息：
```

/**************************************************************************************************
 * 
 *  @author:zerostyle 
 *  @email: zerostyle@126.com
 *  @date：20220320
 *  @version:V2.1.0
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

        __app_logo_url__ :'/static/img/logo.png',
    
        __app_project_name__ :'ahcui框架',
    
        __app_page_title__ : "ahcui框架",
    
        __app_page_keyWords__ : "请输入您想设置的应用关键字",
        
        __app_page_description__ : "请输入您想设置的应用说明",

        __app_log_open__:true,
    
        /**
         * RestApi后端接口基地址,该配置项在开发与生产模式下均有效
         * 该基地址用于配置代理使用，因此必须是当前应用地址的子路径,末尾不加'/'
         * example1:"/restful/api" 
         * example2:"http://localhost:8080/restful/api"
         * 
         * 
         */
        __rest_base_path__ : "/restful/api",
        
        __multiplex_console__:{
            debug:{
                open: true,
            },
            error:{
                open: true,
            },
            info:{
                ope_: true,
            },
            log:{
                open: true,
            },
            warn:{
                open: true,
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
                show:true
            },
            /**
             * 第二列配置
             */
            "20000":{
                show:true
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

```

##### 2.3.1：<a id="begindev-config-app_public_path">配置项：runtimeCfg.app_public_path</a>


此配置项来源自配置文件节点:window.__cui_runtime_config__.__app_public_path__,通过本核心库转化为runtimeCfg.app_public_path，此变量用在mixin导出的basePath，用于可调整处理编译后的程序运行基路径，

此变量源自于webpack提供的__webpack_public_path__,具体参见于webpack5的官方文档

##### 2.3.2：<a id="begindev-config-rest_base_path">配置项：runtimeCfg.rest_base_path</a>

此配置项源自于前后端分离后，前端请求后端时用到的后端接口基地址，推荐使用采用多段式接口访问方式，多段式地址的第一段是一个统一的后端访问识别串，比如"backend"，借助此统一后缀结合nginx反向代理配置可以实现如下：backend/app1/api/,backend/app2/api/,一个前端可以访问多个后端的不同版本的接口，对前后端开发于维护来说比较清晰
目前配置项中提供了一个，如切实需要配置多个后端基地址，请自行增加配置项，但不建议这么使用


##### 2.3.3：<a id="begindev-config-multiplex_config">配置项：runtimeCfg.multiplex_console、runtimeCfg.multiplex_style、runtimeCfg.multiplex_config</a>

此配置项节点是[@ahcui/vue3-multiplex](https://www.npmjs.com/package/@ahcui/vue3-multiplex#config)需要，具体请点击链接查看文档。


##### 2.3.4：<a id="begindev-config-multiplex_config">增加一个自定义配置项</a>

你也可以在项目中抽离配置信息放入本文件中，例如项目中提取一个配置项
```
	customConfig:{
		a:1,
		b:'123',
		c:{
			c1:"s",
		}
	}
```
您可以在配置中增加相应代码，如下：
```
window.__cui_runtime_config__ = {
	...其他配置项
	
	/*******************************************************自定义配置项请添加到下方****************************************************************/
	__customConfig__:{
		a:1,
		b:'123',
		c:{
			c1:"s",
		}
	},
	/***************************************配置项均在此配置项之上，配置文件结束标记，以下配置项请勿删除***********************************************/
	______finished______:""
}
```

使用时：
``` 
import {runtimeCfg} from "src\assets\core\index.js";

//输出配置中的内容
console.log(runtimeCfg.customConfig.c.c1);

```
### 3：<a href="example">演示系统的使用</a>

控制台转到此工程根目录，执行命令即可启动演示系统：
```
npm run dev:demo
```

#### 3.1：<a href="example"></a>


### 4：<a href="IBMS">系统集成</a>

#### 4.1：<a href="IBMS-scheme">集成方案</a>

文档梳理中


