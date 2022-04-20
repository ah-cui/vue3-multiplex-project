<template>
 
      <div title='我是"src/components/page/Dashboard.vue"文件' class="dashboard-img" style="font-size:30px">
        @ahcui/vue3-multiplex@1.0.0-rc1演示系统，基于webpack@5+babel@7+vue@3+Element-plus@2+vue-router@4+vuex@4开发，开源免费使用，细化工作进行中...
        <br/>注意：开发模式菜单来源于：apidata\auth\login，会显示菜单但没有挂载示例页面，因此点击会404
      </div>
</template>

<script>

import{ref} from 'vue';
export default {
    name:"dashboard",

    setup(){
        return {
            
            aa:ref("Hello")
        }
    }
}
</script>