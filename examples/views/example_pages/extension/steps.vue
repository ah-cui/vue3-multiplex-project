<template>
	<div class="el-list-scope-bodypadding">
		<el-card shadow="never" header="步骤条">
			<div class="demo-steps-item">
				<el-steps :active="stepsActive" class="el-steps-horizontal">
					<el-step title="第一步" />
					<el-step title="第二步" />
					<el-step title="第三步" />
					<el-step title="第四步" />
				</el-steps>
			</div>
			<div class="demo-steps-item">
				<el-steps :active="stepsActive" class="el-steps-horizontal">
					<el-step title="第一步" description="这里是该步骤的描述信息" />
					<el-step title="第二步" description="这里是该步骤的描述信息" />
					<el-step title="第三步" description="这里是该步骤的描述信息" />
					<el-step title="第四步" description="这里是该步骤的描述信息" />
				</el-steps>
			</div>
			<div class="demo-steps-item" style="margin-bottom: 16px;">
				<el-button @click="stepsPrev" size="small">上一步</el-button>
				<el-button type="primary" @click="stepsNext" size="small">下一步</el-button>
			</div>
		</el-card>
		<el-card shadow="never" header="垂直步骤条">
			<div class="demo-steps-item-vertical">
				<el-steps direction="vertical" :active="stepsActive" style="height: 360px">
					<el-step title="第一步" />
					<el-step title="第二步" />
					<el-step title="第三步" />
					<el-step title="第四步" />
				</el-steps>
			</div>
			<div class="demo-steps-item-vertical">
				<el-steps direction="vertical" :active="stepsActive" style="height: 360px">
					<el-step title="第一步" description="这里是该步骤的描述信息" />
					<el-step title="第二步" description="这里是该步骤的描述信息" />
					<el-step title="第三步" description="这里是该步骤的描述信息" />
					<el-step title="第四步" description="这里是该步骤的描述信息" />
				</el-steps>
			</div>
		</el-card>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const stepsActive = ref('0')
	const stepsNext = () => {
		stepsActive.value++;
		if (stepsActive.value > 4) {
			stepsActive.value = 0;
		}
	}
	/* 上一步 */
	const stepsPrev = () => {
		stepsActive.value--;
		if (stepsActive.value < 0) {
			stepsActive.value = 4;
		}
	}
</script>

<style scoped>
	.demo-steps-item {
		max-width: 900px;
		padding: 10px 10px 0 10px;
	}
  .el-list-scope-bodypadding{padding:15px;}
	.demo-steps-item+.demo-steps-item {
		margin-top: 15px;
	}

	.el-button+.el-button {
		margin-left: 20px;
	}

	.demo-steps-item-vertical {
		width: 250px;
		display: inline-block;
		padding: 10px 0 10px 10px;
	}
</style>
