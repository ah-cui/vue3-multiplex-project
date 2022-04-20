<template>
	<el-switch v-model="value1" class="mb-2" active-text="Pay by month" inactive-text="Pay by year" />
	<br />
	<el-switch v-model="value2" class="mb-2" active-color="#13ce66" inactive-color="#ff4949" active-text="Pay by month"
		inactive-text="Pay by year" />
	<br />
	<el-switch v-model="value3" inline-prompt active-text="是" inactive-text="否" />
	<el-switch v-model="value4" class="ml-2" inline-prompt active-color="#13ce66" inactive-color="#ff4949"
		active-text="Y" inactive-text="N" />
	<h3>加载状态</h3>
	<el-switch v-model="value5" loading />
	<el-switch v-model="value6" loading class="ml-2" />
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const value1 = ref(true)
	const value2 = ref(true)
	const value3 = ref(true)
	const value4 = ref(true)
	const value5 = ref(true)
	const value6 = ref(false)
</script>
