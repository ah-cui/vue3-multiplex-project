

<template>
    <el-tooltip effect="dark" placement="top">
        <template #content>
                    <p>这是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的UI扩展坞，扩展坞是以"cui-extend"开头的html标签，您可以使用样式选择器查询到扩展坞</p>
                    <p>扩展坞是框架核心封装成为@ahcui/vue3-multiplex组件后应对外部变化提供的扩展能力，是UI组件化并仍需扩展的最佳实践与成功案例</p>
                    <p>UI扩展坞用来解决框架能确定变化位置但不能确定变化内容的场景，由核心库提供外框架UI扩展坞，由项目决定扩展坞放什么内容。</p>
                    <p>这是统一框架与变化项目的结合方式，扩展坞演示请见"框架二开-ui扩展-扩展演示"，扩展坞使用有两种最佳实践，请注意查看示例！</p>
                    <p>-->该扩展文件请见模板工程\"examples\components\ahcui.extend\example1\ahcui-extend-header-tools-right.ce.vue"文件</p>
        </template>
        <div class="cui-header-tools-item" :title="fullScreen?'还原':'最大化'" @click="fullScreen = Screen.screenSwitch()">
                <el-icon :size="20"><full-screen v-if="!fullScreen"/><crop v-else /></el-icon>
        </div>
    </el-tooltip>
    <el-tooltip effect="dark" placement="top">
        <template #content>
                    <p>这是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的UI扩展坞，扩展坞是以"cui-extend"开头的html标签，您可以使用样式选择器查询到扩展坞</p>
                    <p>扩展坞是框架核心封装成为@ahcui/vue3-multiplex组件后应对外部变化提供的扩展能力，是UI组件化并仍需扩展的最佳实践与成功案例</p>
                    <p>UI扩展坞用来解决框架能确定变化位置但不能确定变化内容的场景，由核心库提供外框架UI扩展坞，由项目决定扩展坞放什么内容。</p>
                    <p>这是统一框架与变化项目的结合方式，扩展坞演示请见"框架二开-ui扩展-扩展演示"，扩展坞使用有两种最佳实践，请注意查看示例！</p>
                    <p>-->该扩展文件请见模板工程\"examples\components\ahcui.extend\example1\ahcui-extend-header-tools-right.ce.vue"文件</p>
        </template>
        <div class="cui-header-tools-item" :title="未读消息" @click="fullScreen = Screen.screenSwitch()">
                <el-icon :size="20"><bell /></el-icon>
        </div>
    </el-tooltip>
</template>

<script>
import {vue,runtimeCfg} from '../../../assets/core';
import {FullScreen,Crop,Bell} from '@element-plus/icons-vue'
import {ElIcon} from 'element-plus';
import { Screen } from '@ahcui/lib-jsext';
export default {
    components:{FullScreen,Crop,Bell,ElIcon},
    props:{},
    setup() {
        
        const fullScreen=vue.ref(false);
        return {           
            fullScreen,          
            Screen,

        }
    },

}
</script>

<style scoped>
.el-icon {
    --color:inherit;
    height:1em;
    width:1em;
    line-height:1em;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    position:relative;
    fill:currentColor;
    color:red;
    font-size:inherit
}

.el-icon svg {
    height:1em;
    width:1em;
}
.cui-header-tools-item{
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 0 0px;
    height: 100%;
    width: 30px;
    
}
.cui-header-tools-item .el-icon
{
font-weight: 700;
}
</style>

