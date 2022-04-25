

<template>
    <div class="cui-header-tools-inner-right marked_box" >
        <div class="cui-header-tools-item" :title="fullScreen?'还原':'最大化'" @click="fullScreen = Screen.screenSwitch()">
                <el-icon :size="20"><full-screen v-if="!fullScreen"/><crop v-else /></el-icon>
        </div>
    </div>
</template>

<script>
import {vue,runtimeCfg} from '../../../../assets/core';
import {FullScreen,Crop} from '@element-plus/icons-vue'
import {ElIcon} from 'element-plus';
import { Screen } from '@ahcui/lib-jsext';
export default {
    components:{FullScreen,Crop,ElIcon},
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
.cui-header-tools-inner-right
{
    background-color: var(--sidebar-main-background-color);
    width:100%;
    box-sizing: border-box;
    height: 100%;
}
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
.marked_box{animation: glow 800ms ease-out infinite alternate;     border:1px solid;}
@keyframes glow {
    0% {
        border-color: rgb(0, 245, 0);
        box-shadow: 0 0 5px rgba(65, 236, 65, 0.2), inset 0 0 5px rgba(3, 109, 3, 0.1), 0 1px 0 rgb(66, 187, 66);
    }
    100% {
        border-color: rgb(228, 18, 18);
        box-shadow: 0 0 20px rgba(216, 128, 150, 0.6), inset 0 0 10px rgba(139, 4, 56, 0.4), 0 1px 0 rgb(233, 78, 104);
    }
}
</style>

