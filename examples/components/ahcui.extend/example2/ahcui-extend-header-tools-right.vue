

<template>
    <div v-if="isInahcui">
        <teleport :to="domSelect">
            <el-tooltip effect="dark" content='' placement="bottom">
                    <template #content>
                            <p>这是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的UI扩展坞，扩展坞是以"ahcui-extend"开头的html标签，您可以使用样式选择器查询到扩展坞</p>
                            <p>扩展坞是框架核心封装成为@ahcui/vue3-multiplex组件后应对外部变化提供的扩展能力，是UI组件化并仍需扩展的最佳实践与成功案例</p>
                            <p>UI扩展坞用来解决框架能确定变化位置但不能确定变化内容的场景，由核心库提供外框架UI扩展坞，由项目决定扩展坞放什么内容。</p>
                            <p>这是统一框架与变化项目的结合方式，扩展坞演示请见"框架二开-ui扩展-扩展演示"，扩展坞使用有两种最佳实践，请注意查看示例！</p>
                            <p>-->该扩展文件请见模板工程"examples\components\ahcui.extend\example2\ahcui-extend-header-tools-right.vue"文件</p>
                    </template>
                    <div class="ahcui-header-tools-item" :title="fullScreen?'还原':'最大化'" @click="fullScreen = Screen.screenSwitch()">
                        <el-icon :size="20"><full-screen v-if="!fullScreen"/><crop v-else /></el-icon>
                    </div>
                </el-tooltip>

                <el-tooltip effect="dark" content='' placement="bottom">
                    <template #content>
                            <p>这是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的UI扩展坞，扩展坞是以"ahcui-extend"开头的html标签，您可以使用样式选择器查询到扩展坞</p>
                            <p>扩展坞是框架核心封装成为@ahcui/vue3-multiplex组件后应对外部变化提供的扩展能力，是UI组件化并仍需扩展的最佳实践与成功案例</p>
                            <p>UI扩展坞用来解决框架能确定变化位置但不能确定变化内容的场景，由核心库提供外框架UI扩展坞，由项目决定扩展坞放什么内容。</p>
                            <p>这是统一框架与变化项目的结合方式，扩展坞演示请见"框架二开-ui扩展-扩展演示"，扩展坞使用有两种最佳实践，请注意查看示例！</p>
                            <p>-->该扩展文件请见模板工程"examples\components\ahcui.extend\example2\ahcui-extend-header-tools-right.vue"文件</p>
                    </template>
                    <div class="ahcui-header-tools-item" title="未读消息" @click="showUnReadMsg = true">
                            <div style="position: absolute;
                                        right: 16px;
                                        top: 10px;
                                        border-radius: 8px;
                                        height: 16px;
                                        width: 16px;
                                        background: red;
                                        color: rgb(255, 255, 255);
                                        font-size: 12px;
                                        text-align: center;">5</div>
                            <el-icon :size="20"><bell /></el-icon>
                    </div>
                </el-tooltip>
            
            <el-dialog v-model="showUnReadMsg" title="未读消息" append-to-body>
                这是借助@ahcui/vue3-multiplex核心库扩展坞进行界面扩展的例子，请在这里显示未读消息列表
            </el-dialog>
        </teleport>
    </div>
</template>

<script>
import {vue,runtimeCfg} from '../../../assets/core';
import {FullScreen,Crop,Bell} from '@element-plus/icons-vue'
import {ElIcon,ElTooltip,ElDialog,ElButton} from 'element-plus';
import { Screen } from '@ahcui/lib-jsext';
export default {
    components:{FullScreen,Crop,Bell,ElIcon,ElTooltip,ElDialog,ElButton},
    props:{},
    setup() {
        
        const fullScreen=vue.ref(false),showUnReadMsg=vue.ref(false),input=vue.ref(""),_isInahcui=vue.ref(false),domSelect=".ahcui-multiplex .ahcui-header .ahcui-header-other ahcui-extend-header-tools-right";
        const isInahcui=vue.computed(()=>{
            return _isInahcui.value
        })
        vue.onMounted(()=>{
            window.setInterval(() => {
                let dom=document.querySelector(domSelect);
                _isInahcui.value=(dom!=null);
            }, 100);
            
        })
        return {           
            fullScreen,          
            Screen,
            isInahcui,
            domSelect,
            showUnReadMsg,
        }
    },

}
</script>

