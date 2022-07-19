<template>
    <url-loader :url="url" :watchQuery="watchQuery" style="height:100%" frameborder="1" @frameloaded="frameloadedHandle" @framemounted="framemountedHandle"  >
    </url-loader>
</template>

<script>
import UrlLoader from "@ahcui/vue3-components-url-loader";


export default {
    name: "PageLoader",
    components:{UrlLoader},
    props: {
        url:{
          type: String,
          default:""
        },
        watchQuery:{
          type:Boolean,
          default:true
        },
    },
    setup(){
        const frameloadedHandle = (iframe) => {
            console.log("frameloadedHandle");
        }
        const framemountedHandle = (iframe) => {
            console.log("framemountedHandle");
        }
        return {
            frameloadedHandle,
            framemountedHandle,
        }
    }
}
</script>

<style scoped>
.iframeClass {
  position: relative;
  height: 100%;
  width: 100%;
  border: 0px;
}
</style>