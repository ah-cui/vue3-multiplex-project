<template>
    <div>{{aa}},{{name}}</div>
    <div>因为此组件的路由定义未存在于菜单中，因此找不到此路由地址对应的菜单关系，这将影响菜单的选中与展开等功能</div>
</template>
<script>
import{vue } from '../../../assets/core/index';

export default {
    name:"example",
    data(){
        
        return {
            aa:"Hello"
        }
    },
    props:{
        name:{
            type:String,
            default: '', 
        }
    },
    setup(){
        return {
            aa:vue.ref("Hello")
        }
    }
}
</script>
