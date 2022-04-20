<template>
 
      <div title='我是"examples/views/Dashboard.vue"文件' class="dashboard-img" style="font-size:30px">
        @ahcui/vue3-multiplex@1.0.0-rc1演示系统，基于webpack@5+babel@7+vue@3+Element-plus@2+vue-router@4+vuex@4开发，开源免费使用，细化工作进行中...
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