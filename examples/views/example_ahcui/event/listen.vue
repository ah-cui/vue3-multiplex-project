<template>
 
 	<el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="dashboard-img" style="font-size:30px;margin:10px 10px">
         @ahcui/vue3-multiplex@1.0.0事件的订阅与处理
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
                      @ahcui/vue3-multiplex@1.0.0事件支持原生js订阅与vue中emit订阅<br/>
                      1：事件会以原生window.CustomEvent自定义事件的方式传出，适用于在js库中订阅处理事件；<br/>
                      2：事件会在vue技术栈中借助全局事件总线eventBus传出，使用于在vue组件中订阅处理事件；<br/>
          </template>
        </el-alert>
	</el-card>
	<div class="" style="display:flex">
        <el-card class="box-card">
			<template #header>
				<div>通过原生js进行订阅</div>
			</template>
			<code>
				<p>//这是某个js文件</p>
				<p>import {eventDefine} from "@ahcui/vue3-multiplex";</p>
				<p></p>
				<p>1：通过浏览器自定义事件机制，适用于原生js：</p>
				<p>window.addEventListener(eventDefine.事件定义,function(eventArgs){</p>
				<p>	let args=eventArgs.detail;//args是事件参数</p>
				<p>	///something</p>
				<p>});</p>
			</code>
		</el-card>
        <el-card class="box-card">
			<template #header>
				<div>通过vue+emit进行订阅</div>
			</template>
			<code>
				<p>//这是某个vue文件</p>
				<p>import { vue, eventBus, eventDefine } from "@ahcui/vue3-multiplex";</p>
				<p>export default {</p>
				<p>	 setup(){</p>
				<p>		vue.onMounted(()=>{</p>
				<p>			eventBus.on(eventDefine.事件定义,(eventArgObj)=>{</p>
				<p>				console.log("接收到事件");</p>
				<p>				let args1=eventArgObj[xxx];//这里是事件参数1</p>
				<p>				let args2=eventArgObj[xxx];//这里是事件参数2</p>
				<p>				//...</p>
				<p>				///something</p>
				<p>			})</p>
				<p>		});</p>
				<p>	}</p>
				<p>}</p>
			</code>
		</el-card>
    </div>
</template>

<script>

export default {
    name:"@ahcui/vue3-multiplex-sdk-event-listen",

    setup(){

        

        return {
            
        }
    }
}
</script>

<style scoped>
.box-card {
  width: 50%;
  justify-content:center;
  margin:10px;
}
</style>