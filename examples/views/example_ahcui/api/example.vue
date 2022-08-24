<template>
     <div>{{aa}},{{name}}。
        <br/>url参数Type为:{{cuiRoute.query.Type!=''?cuiRoute.query.Type:"不存在"}}
        <br/>props参数name为:{{name}}
    </div>
    <div>因为此组件的路由定义未存在于菜单中，因此找不到此路由地址对应的菜单关系，这将影响菜单的选中与展开等功能</div>
</template>
<script>
import{vue,mixin } from '../../../assets/core/index';

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
         const {
                cuiRoute,
              } = mixin()
        return {
            aa:vue.ref("Hello"),
            cuiRoute
        }
    }
}
</script>
