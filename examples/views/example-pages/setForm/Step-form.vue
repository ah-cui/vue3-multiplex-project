<!-- 组件模板 -->
<template>
	<div>
		<div class="ele-page-header">
			<div class="ele-page-title">
				分步表单
			</div>
			<div class="ele-page-desc">
				将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
			</div>
		</div>
		<div class="ele-body">
			<el-card shadow="never" body-style="padding: 15px 20px 25px 20px;">
				<div style="max-width: 700px;margin: 0 auto;">
					<div style="margin: 10px 0px 45px;">
						<el-steps :active="active" finish-status="success">
							<el-step title="第一步" description="填写转账信息" />
							<el-step title="第二步" description="确认转账信息" />
							<el-step title="第三步" description="转账成功" />
						</el-steps>
					</div>
					<!-- 第一步 -->
					<el-form v-if="active===0" ref="formStep1" :model="form1" :rules="rules1" :size="formSize"
						label-width="100px">
						<el-form-item label="付款账户:" prop="account">
							<el-input v-model="form1.account" />
						</el-form-item>
						<el-form-item label="收款账户:" prop="receiver">
							<el-input v-model="form1.receiver" placeholder="请输入收款账户" clearable
								class="input-with-select">
								<el-select v-model="form1.pay" slot="prepend">
									<el-option label="支付宝" value="alipay" />
									<el-option label="微信" value="wxpay" />
								</el-select>
							</el-input>
						</el-form-item>
						<el-form-item label="收款人姓名:" prop="name">
							<el-input v-model="form1.name" placeholder="请输入收款人姓名" clearable />
						</el-form-item>
						<el-form-item label="转账金额:" prop="amount">
							<el-input v-model="form1.amount" placeholder="请输入转账金额" prefix-icon="el-icon-_rmb"
								clearable />
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="next1" :loading="loading1">下一步
							</el-button>
						</el-form-item>
					</el-form>
					<!-- 第二步 -->
					<el-form v-if="active===1" ref="formStep2" :model="form2" :rules="rules2" :size="formSize"
						label-width="100px" class="ele-form-detail">
						<el-alert title="确认转账后，资金将直接打入对方账户，无法退回。" type="info" show-icon class="ele-alert-border"
							style="margin-bottom: 20px;" />
						<el-form-item label="付款账户:">
							<span>{{ form1.account }}</span>
						</el-form-item>
						<el-form-item label="收款账户:" prop="receiver">
							<span>{{ form1.receiver }}</span>
						</el-form-item>
						<el-form-item label="收款人姓名:" prop="name">
							<span>{{ form1.name }}</span>
						</el-form-item>
						<el-form-item label="转账金额:" prop="amount">
							<span style="font-size: 24px;">{{ form1.amount }}</span>
							<span> 元</span>
						</el-form-item>
						<div style="margin: 20px 0 30px 0;">
							<el-divider />
						</div>
						<el-form-item label="支付密码:" prop="password" style="margin-bottom: 22px;">
							<el-input v-model="form2.password" placeholder="请输入支付密码" show-password
								style="max-width: 280px;" />
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="next2" :loading="loading2">下一步
							</el-button>
							<el-button @click="active=0">上一步</el-button>
						</el-form-item>
					</el-form>
					<!-- 第三步 -->
					<div v-if="active===2">
						<el-result icon="success" title="操作成功" subTitle="预计两小时内到账" class="el-result-scoped">
						</el-result>
						<div class="ele-result-extra ele-bg-base ele-bg-info-lighter">
							<el-form label-width="100px" :size="formSize" class="ele-form-detail">
								<el-form-item label="付款账户:">
									<span>{{ form1.account}}</span>
								</el-form-item>
								<el-form-item label="收款账户:">
									<span>{{ form1.receiver }}</span>
								</el-form-item>
								<el-form-item label="收款人姓名:">
									<span>{{ form1.name }}</span>
								</el-form-item>
								<el-form-item label="转账金额:">
									<span>{{ form1.amount }}</span>
									<span> 元</span>
								</el-form-item>
							</el-form>
						</div>
						<div class="ele-result-actions">
							<el-button type="primary" @click="active=0">再转一笔</el-button>
							<el-button>查看账单</el-button>
						</div>
					</div>
				</div>
				<div v-if="active===0">
					<div style="margin: 35px 0 25px 0;">
						<el-divider />
					</div>
					<el-alert type="info" :closable="false" class="ele-alert-border el-scope-description-size">
						<h6>说明</h6>
						<h6>转账到支付宝</h6>
						<p>
							如果需要，这里可以放一些关于产品的常见问题说明。如果需要，
							这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
						</p>
						<h6>转账到微信</h6>
						<p>
							如果需要，这里可以放一些关于产品的常见问题说明。如果需要，
							这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
						</p>
					</el-alert>
				</div>
			</el-card>
		</div>
	</div>

</template>
<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const active = ref(0)
	const formSize = ref('default')
	/*const next = () => {
	  if (active.value++ > 2) active.value = 0
	}*/
	const form1 = reactive({
		account: '5885',
		receiver: 'test@example.com',
		pay: 'alipay',
		name: 'Alex',
		amount: 500
	})
	const form2 = ref('123456')
	const rules1 = reactive({
		account: [{
			required: true,
			message: '请选择付款账户',
			trigger: 'blur'
		}],
		receiver: [{
			required: true,
			message: '请输入收款账户',
			trigger: 'blur'
		}],
		name: [{
			required: true,
			message: '请输入收款人姓名',
			trigger: 'blur'
		}],
		amount: [{
			required: true,
			message: '请输入转账金额',
			trigger: 'blur'
		}]
	})
	const rules2 = reactive({
		password: [{
			required: true,
			message: '请输入支付密码',
			trigger: 'blur'
		}]
	})
	const loading1 = ref(false)
	const loading2 = ref(false)
	// 步骤一表单提交
	const next1 = () => {
		active.value = 1;
		/*this.$refs['form1'].validate((valid) => {
		  if (valid) {
		    this.loading1 = true;
		    setTimeout(() => {
		      this.loading1 = false;
		      this.active = 1;
		    }, 300);
		  } else {
		    return false;
		  }
		});*/
	}
	// 步骤二表单提交

	const next2 = () => {
		active.value = 2;
		/*this.$refs['form2'].validate((valid) => {
		  if (valid) {
		    this.loading2 = true;
		    setTimeout(() => {
		      this.loading2 = false;
		      this.active = 2;
		    }, 300);
		  } else {
		    return false;
		  }
		});*/
	}
</script>
<style scoped>
	.el-scope-description-size h6 {
		font-size: 16px;
		color: #303133;
		margin: 5px 0px 15px
	}

	.el-scope-description-size p {
		color: #606266;
		margin-bottom: 15px;
	}

	.input-with-select ::v-deep .el-select .el-input {
		width: 100px;
	}

	.el-form-padding {
		padding-left: 7.5px;
		padding-right: 7.5px;
	}

	.el-select {
		display: block;
	}

	:v-deep(.el-form-item__content) {
		line-height: 36px;
	}

	:v-deep(.el-form-item--small .el-form-item__label) {
		line-height: 36px;
	}

	.ele-body {
		padding: 15px;
	}

	.ele-steps-horizontal {
		margin: 10px 0 45px 0;
	}

	.el-result-scoped {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		box-sizing: border-box;
		padding: 0px 30px;
		margin-bottom: 15px;
	}

	:v-deep(.el-alert__title) {
		color: #303133;
	}

	:v-deep(.el-alert__icon) {
		color: #1890ff;
	}

	.ele-form-detail .el-form-item {
		margin-bottom: 10px;
	}

	.ele-bg-info-lighter {
		background-color: #f4f4f5;
		text-align: left;
		padding: 24px 40px;
		border-radius: 4px;
	}

	.ele-alert-border.is-light.el-alert--info {
		border: 1px solid #91d5ff;
		background: #e6f7ff;
	}

	.ele-result-actions {
		margin-top: 32px;
	}

	.ele-page-header {
		padding: 20px 25px 16px 25px;
		background: #ffffff;
	}

	.ele-page-title {
		font-size: 19px;
		color: #303133;
	}

	.ele-page-header .ele-page-desc {
		margin-top: 8px;
		color: #909399;
	}
</style>
