/**
 *
 *
 */

<template>
    <div class="cui-header-inner-logo" v-if="!style.sideBarCollapse">
        <el-icon :size="40"><burger /></el-icon>
        <div class="sysName">自定义logo区域</div>
    </div>
    <div class="cui-header-inner-logo" v-else>
        <el-icon :size="40"><burger /></el-icon>
    </div>
</template>

<script>
import {vue,runtimeCfg,mixin} from '../../../../assets/core';
import {Burger} from '@element-plus/icons-vue'
import {ElIcon} from 'element-plus';
export default {
    components:{ElIcon,Burger},
    props:{},
    setup() {
         const {
            cuiStore_style
        } = mixin();
        const style=vue.readonly(cuiStore_style);
        return {
            style,
            runtimeCfg,
        }
    }

}
</script>

<style scoped>
.cui-header-inner-logo
{
    background-color: var(--sidebar-main-background-color);
    border:1px solid red;
    width:100%;
    box-sizing: border-box;
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

