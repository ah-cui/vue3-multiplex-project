/**
 *
 *
 */

<template>
    <el-icon :size="40"><burger /></el-icon>
    <div class="sysName">自定义logo区域</div>
</template>

<script>
import {vue,runtimeCfg} from '../../../assets/core';
import {Burger} from '@element-plus/icons-vue'
import {ElIcon} from 'element-plus';
export default {
    components:{ElIcon,Burger},
    props:{},
    setup() {
        return {
            runtimeCfg,
        }
    }

}
</script>

<style scoped>
.logo{

}
.sysName
{

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
</style>

