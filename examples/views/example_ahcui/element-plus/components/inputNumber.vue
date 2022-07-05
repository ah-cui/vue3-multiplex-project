<template>
	<el-input-number v-model="num1" size="large" class="ml-4" />
	<el-input-number v-model="num2" class="ml-4" />
	<el-input-number v-model="num3" size="small" class="ml-4" />
	<h5>按钮位置</h5>
	<div>
		<el-input-number class="ml-4" v-model="num" :min="1" :max="10" controls-position="right" size="large"
			@change="handleChange" />
		<el-input-number v-model="num" class="ml-4" :min="1" :max="10" controls-position="right"
			@change="handleChange" />
		<el-input-number class="ml-4" v-model="num" :min="1" :max="10" size="small" controls-position="right"
			@change="handleChange" />
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const num1 = ref(1)
	const num2 = ref(2)
	const num3 = ref(3)
	const num = ref(1)
	/*const handleChange = (value: number) => {
	  console.log(value)
	}*/
</script>
<style scoped>
	.ml-4 {
		margin: 0px 5px;
	}
</style>
