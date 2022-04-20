<template>
	<div class="el-body">
		<el-card shadow="never">
			<div style="max-width: 900px; margin: 45px auto;">
				<el-result icon="success" title="提交成功"
					subTitle="提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。灰色区域可以显示一些补充的信息。">
				</el-result>
				<div class="el-result-extra el-bg-base el-bg-info-lighter el-result-style">
					<span>已提交申请，等待部门审核。</span>
				</div>
				<div class="el-list-alert-magin30" align="center">
					<el-button size="default" type="primary">返回列表</el-button>
					<el-button size="default">查看项目</el-button>
					<el-button size="default">打印</el-button>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>

</script>

<style scoped>
	.el-result-extra {
		text-align: left;
		padding: 24px 0px 24px 30px;
		border-radius: 4px;
		width: 100%;
	}

	.el-result__extra {
		width: 100%;
	}

	.el-bg-info-lighter {
		background-color: #f4f4f5 !important;
	}

	.el-result__icon svg {
		width: 72px;
		height: 72px;
	}
</style>
