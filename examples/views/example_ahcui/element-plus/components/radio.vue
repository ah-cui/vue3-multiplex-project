<template>
	<div>
		<el-radio v-model="radio1" label="1" size="large">Option 1</el-radio>
		<el-radio v-model="radio1" label="2" size="large">Option 2</el-radio>
	</div>
	<div>
		<el-radio v-model="radio2" label="1">Option 1</el-radio>
		<el-radio v-model="radio2" label="2">Option 2</el-radio>
	</div>
	<div>
		<el-radio v-model="radio3" label="1" size="small">Option 1</el-radio>
		<el-radio v-model="radio3" label="2" size="small">Option 2</el-radio>
	</div>
	<div>
		<el-radio v-model="radio3" label="1" size="small" disabled>Option 1</el-radio>
		<el-radio v-model="radio3" label="2" size="small" disabled>Option 2</el-radio>
	</div>
	<h5>按钮样式</h5>
	<div>
		<el-radio-group v-model="radio4" size="large">
			<el-radio-button label="New York" />
			<el-radio-button label="Washington" />
			<el-radio-button label="Los Angeles" />
			<el-radio-button label="Chicago" />
		</el-radio-group>
	</div>
	<div style="margin-top: 20px">
		<el-radio-group v-model="radio5">
			<el-radio-button label="New York" />
			<el-radio-button label="Washington" />
			<el-radio-button label="Los Angeles" />
			<el-radio-button label="Chicago" />
		</el-radio-group>
	</div>
	<div style="margin-top: 20px">
		<el-radio-group v-model="radio6" size="small">
			<el-radio-button label="New York" />
			<el-radio-button label="Washington" disabled />
			<el-radio-button label="Los Angeles" />
			<el-radio-button label="Chicago" />
		</el-radio-group>
	</div>
	<h5>带有边框</h5>
	<div>
		<el-radio v-model="radio7" label="1" size="large" border>Option A</el-radio>
		<el-radio v-model="radio7" label="2" size="large" border>Option B</el-radio>
	</div>
	<div style="margin-top: 20px">
		<el-radio v-model="radio8" label="1" border>Option A</el-radio>
		<el-radio v-model="radio8" label="2" border>Option B</el-radio>
	</div>
	<div style="margin-top: 20px">
		<el-radio-group v-model="radio9" size="small">
			<el-radio label="1" border>Option A</el-radio>
			<el-radio label="2" border disabled>Option B</el-radio>
		</el-radio-group>
	</div>
	<div style="margin-top: 20px">
		<el-radio-group v-model="radio10" size="small" disabled>
			<el-radio label="1" border>Option A</el-radio>
			<el-radio label="2" border>Option B</el-radio>
		</el-radio-group>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const radio1 = ref('1')
	const radio2 = ref('1')
	const radio3 = ref('1')
	const radio4 = ref('New York')
	const radio5 = ref('New York')
	const radio6 = ref('New York')
	const radio7 = ref('1')
	const radio8 = ref('1')
	const radio9 = ref('1')
	const radio10 = ref('1')
</script>
