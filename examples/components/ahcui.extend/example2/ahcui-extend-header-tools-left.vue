

<template>
    <div v-if="isInCui">
        <teleport :to="domSelect">
            <el-tooltip effect="dark" content='' placement="bottom">
                <template #content>
                    <p>这是@ahcui/vue3-multiplex@1.0.0-rc1之后版本提供的UI扩展坞，扩展坞是以"cui-extend"开头的html标签，您可以使用样式选择器查询到扩展坞</p>
                    <p>扩展坞是框架核心封装成为@ahcui/vue3-multiplex组件后应对外部变化提供的扩展能力，是UI组件化并仍需扩展的最佳实践与成功案例</p>
                    <p>UI扩展坞用来解决框架能确定变化位置但不能确定变化内容的场景，由核心库提供外框架UI扩展坞，由项目决定扩展坞放什么内容。</p>
                    <p>这是统一框架与变化项目的结合方式，扩展坞演示请见"框架二开-ui扩展-扩展演示"，扩展坞使用有两种最佳实践，请注意查看示例！</p>
                    <p>-->该扩展文件请见模板工程\"examples\components\ahcui.extend\example2\ahcui-extend-header-tools-left.vue"文件</p>
                </template>
                <el-input v-model="input" placeholder="我是一个扩展的查询输入框" />
            </el-tooltip>
        </teleport>
    </div>
</template>

<script>
import {vue,runtimeCfg} from '../../../assets/core';
import {ElInput,ElTooltip} from 'element-plus';
export default {
    components:{ElInput,ElTooltip},
    props:{},
    setup() {
        let input=vue.ref(""),_isInCui=vue.ref(false),domSelect=".cui-multiplex .cui-header .cui-header-other cui-extend-header-tools-left";
        const isInCui=vue.computed(()=>{
            input.value="";
            return _isInCui.value
        })
        vue.onMounted(()=>{
            window.setInterval(() => {
                let dom=document.querySelector(domSelect);
                _isInCui.value=(dom!=null);
            }, 100);
            
        })
        return {
            input,
            isInCui,
            domSelect,
            runtimeCfg,
        }
    }

}
</script>