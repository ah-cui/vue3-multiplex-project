<template>
    <div>{{aa}},{{name}}</div>
</template>
<script>
import{ref} from 'vue';

export default {
    name:"@ahcui/vue3-multiplex-demo-api-demo",
    props:{
        name:{
            type:String,
            default: '', 
        }
    },
    setup(){
        return {
            aa:ref("Hello")
        }
    }
}
</script>
