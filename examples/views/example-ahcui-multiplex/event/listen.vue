<template>
 
      <div class="dashboard-img" style="font-size:30px">
        本模块演示了@ahcui/vue3-multiplex内置事件的订阅与处理
      </div>
      <div class="dashboard-img" style="font-size:14px">
        事件会以两种方式传出，一种是以原生window.CustomEvent自定义事件的方式传出，订阅事件代码如下：

	//这是某个js文件
	import {eventDefine} from "@ahcui/vue3-multiplex";
	
	1：通过浏览器自定义事件机制，适用于原生js：
	window.addEventListener(eventDefine.事件定义,function(eventArgs){
		let args=eventArgs.detail;//这里是事件参数
		///something
	});
	
 

，一种是借助全局事件总线eventBus在vue组件中使用，使用代码如下：

	//这是某个vue文件
	import { vue, eventBus, eventDefine } from "@ahcui/vue3-multiplex";
	export default {
		setup(){
			vue.onMounted(()=>{
				eventBus.on(eventDefine.事件定义,(eventArgObj)=>{
					console.log("接收到事件");
					let args1=eventArgObj[xxx];//这里是事件参数1
					let args2=eventArgObj[xxx];//这里是事件参数2
					//...
					///something
				 })
			});
		}
	}
      </div>
      <div class="dashboard-img" style="font-size:30px">
        
      </div>
</template>

<script>

export default {
    name:"@ahcui/vue3-multiplex-demo-event-listen",

    setup(){

        

        return {
            
        }
    }
}
</script>