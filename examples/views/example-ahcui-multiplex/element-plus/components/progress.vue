<template>
	<div class="demo-progress">
		<el-progress :percentage="50" />
		<el-progress :percentage="100" :format="format" />
		<el-progress :percentage="100" status="success" />
		<el-progress :percentage="100" status="warning" />
		<el-progress :percentage="50" status="exception" />
	</div>
	<h3>进度条内显示百分比标识</h3>
	<div class="demo-progress">
		<el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
		<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
		<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
		<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
	</div>
	<h3>环形进度条</h3>
	<div class="demo-progress">
		<el-progress type="circle" :percentage="0" />
		<el-progress type="circle" :percentage="25" />
		<el-progress type="circle" :percentage="100" status="success" />
		<el-progress type="circle" :percentage="70" status="warning" />
		<el-progress type="circle" :percentage="50" status="exception" />
	</div>
	<h3>自定义内容</h3>
	<div class="demo-progress">
		<el-progress :percentage="50">
			<el-button type="text">Content</el-button>
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
	const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
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
