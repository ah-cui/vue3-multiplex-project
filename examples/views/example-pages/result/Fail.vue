<template>
	<div class="el-body">
		<el-card shadow="never">
			<div style="max-width: 900px; margin: 45px auto;">
				<el-result icon="error" title="提交失败" subTitle="请核对并修改以下信息后，再重新提交。">
				</el-result>
				<div class="el-bg-info-lighter el-result-extra">
					<span class="el-result-padding40">您提交的内容有如下错误：</span>
					<div class="error-tips-item el-result-padding40">
						<i class="el-icon-circle-close el-text-danger"></i>
						<span><s /> 您的账户已被冻结 <em /></span>
						<el-link type="primary" :underline="false">
							<span>立即解冻</span>
							<i class="el-icon-arrow-right"></i>
						</el-link>
					</div>
					<div class="error-tips-item el-result-padding40">
						<i class="el-icon-circle-close el-text-danger"></i>
						<span><s /> 您的账户还不具备申请资格 <em /></span>
						<el-link type="primary" :underline="false">
							<span>立即升级</span>
							<i class="el-icon-arrow-right"></i>
						</el-link>
					</div>
				</div>

				<div class="el-list-alert-magin30" align="center">
					<el-button size="medium" type="primary">返回修改</el-button>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>

</script>

<style scoped>
	.error-tips-item {
		margin-top: 15px;
	}

	.error-tips-item>* {
		vertical-align: baseline;
	}

	@media screen and (max-width: 768px) {
		.ele-body ::v-deep .ele-result-extra {
			padding-left: 18px;
			padding-right: 18px;
		}
	}

	.el-result-extra {
		text-align: left;
		padding: 24px 0px;
		border-radius: 4px;
		width: 100%;
	}

	.el-result__extra {
		width: 100%;
	}

	.el-bg-info-lighter {
		background-color: #f4f4f5 !important;
		text-align: left;
		padding: 24px 30px;
	}

	.el-result__icon svg {
		width: 72px;
		height: 72px;
	}
</style>
