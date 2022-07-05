<template>
	<div class="demo-progress">
		<el-progress :percentage="50" />
		<el-progress :percentage="100" :format="format" />
		<el-progress :percentage="100" status="success" />
		<el-progress :percentage="100" status="warning" />
		<el-progress :percentage="50" status="exception" />
	</div>
	<h5>进度条内显示百分比标识</h5>
	<div class="demo-progress">
		<el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
		<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
		<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
		<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
	</div>
	<h5>自定义进度条的颜色</h5>
	<div class="demo-progress">
		<el-progress :percentage="percentage" :color="customColor" />

		<el-progress :percentage="percentage" :color="customColorMethod" />

		<el-progress :percentage="percentage" :color="customColors" />
		<el-progress :percentage="percentage" :color="customColors" />
		<div>
		<el-button-group>
			<el-button :icon="Minus" @click="decrease" />
			<el-button :icon="Plus" @click="increase" />
		</el-button-group>
		</div>
	</div>
	<h5>环形进度条</h5>
	<div class="demo-progress">
		<el-progress type="circle" :percentage="0" />
		<el-progress type="circle" :percentage="25" />
		<el-progress type="circle" :percentage="100" status="success" />
		<el-progress type="circle" :percentage="70" status="warning" />
		<el-progress type="circle" :percentage="50" status="exception" />
	</div>
	<h5>自定义内容</h5>
	<div class="demo-progress">
		<el-progress :percentage="50">
			<el-button text>Content</el-button>
		</el-progress>
		<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
			<span>Content</span>
		</el-progress>
		<el-progress type="circle" :percentage="100" status="success">
			<el-button type="success" :icon="Check" circle />
		</el-progress>
		<el-progress type="dashboard" :percentage="80">
			<template #default="{ percentage }">
				<span class="percentage-value">{{ percentage }}%</span>
				<span class="percentage-label">Progressing</span>
			</template>
		</el-progress>
	</div>

</template>

<script setup>
	import { ref } from 'vue';
	import { Minus, Plus } from '@element-plus/icons-vue';
	const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
	const percentage = ref(20)
	const customColor = ref('#409eff')

	const customColors = [
	{ color: '#f56c6c', percentage: 20 },
	{ color: '#e6a23c', percentage: 40 },
	{ color: '#5cb87a', percentage: 60 },
	{ color: '#1989fa', percentage: 80 },
	{ color: '#6f7ad3', percentage: 100 },
	]

	const customColorMethod = (percentage) => {
	if (percentage < 30) {
		return '#909399'
	}
	if (percentage < 70) {
		return '#e6a23c'
	}
	return '#67c23a'
	}
	const increase = () => {
	percentage.value += 10
	if (percentage.value > 100) {
		percentage.value = 100
	}
	}
	const decrease = () => {
	percentage.value -= 10
	if (percentage.value < 0) {
		percentage.value = 0
	}
	}
</script>
<style scoped>
	.demo-progress .el-progress--line {
		margin-bottom: 15px;
		width: 350px;
	}

	.demo-progress .el-progress--circle {
		margin-right: 15px;
	}

	.percentage-value {
		display: block;
		margin-top: 10px;
		font-size: 28px;
	}

	.percentage-label {
		display: block;
		margin-top: 10px;
		font-size: 12px;
	}
</style>
