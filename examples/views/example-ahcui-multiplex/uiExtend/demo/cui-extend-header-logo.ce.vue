/**
 *
 *
 */

<template>
    <div class="cui-header-inner-logo marked_box" v-if="!style.sideBarCollapse">
        <el-icon :size="40"><burger /></el-icon>
        <div class="sysName">logo区域</div>
    </div>
    <div class="cui-header-inner-logo marked_box" v-else>
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

    width:100%;
    box-sizing: border-box;
    display: inherit;
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

