<template>
	<el-select v-model="value" class="m-2" placeholder="Select" size="large">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
	</el-select>
	<el-select v-model="value" class="m-2" placeholder="Select">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
	</el-select>
	<el-select v-model="value" class="m-2" placeholder="Select" size="small">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
	</el-select>
	<h5>创建新的选项</h5>
	<el-select v-model="value2" multiple filterable allow-create default-first-option :reserve-keyword="false"
		placeholder="Choose tags for your article">
		<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
	</el-select>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const value = ref('')
	const options = [{
			value: 'Option1',
			label: 'Option1',
		},
		{
			value: 'Option2',
			label: 'Option2',
		},
		{
			value: 'Option3',
			label: 'Option3',
		},
		{
			value: 'Option4',
			label: 'Option4',
		},
		{
			value: 'Option5',
			label: 'Option5',
		},
	]
</script>
<style>
	.m-2 {
		margin: 0px 5px;
	}
</style>
