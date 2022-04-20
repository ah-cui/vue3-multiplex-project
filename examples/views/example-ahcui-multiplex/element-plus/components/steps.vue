<template>
	<el-steps :active="active" finish-status="success">
		<el-step title="Step 1" />
		<el-step title="Step 2" />
		<el-step title="Step 3" />
	</el-steps>

	<el-button style="margin-top: 12px" @click="next">Next step</el-button>
	<h3>居中的步骤条</h3>
	<el-steps :active="2" align-center>
		<el-step title="Step 1" description="Some description" />
		<el-step title="Step 2" description="Some description" />
		<el-step title="Step 3" description="Some description" />
		<el-step title="Step 4" description="Some description" />
	</el-steps>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const active = ref(0)

	const next = () => {
		if (active.value++ > 2) active.value = 0
	}
</script>
