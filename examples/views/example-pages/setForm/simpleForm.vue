<!-- 组件模板 -->
<template>
	<div>
		<div class="ele-page-header">
			<div class="ele-page-title">
				基础表单
			</div>
			<div class="ele-page-desc">
				表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
			</div>
		</div>
		<div class="ele-body el-list-scope-bodypadding">
			<div class="el-card">
				<div class="el-card__body">
					<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px"
						class="demo-ruleForm" :size="formSize">
						<el-form-item label="标题:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="地点:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="请输入地点">
								<el-option label="地点一" value="shanghai"></el-option>
								<el-option label="地点二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="起止日期:" required>
							<el-col :span="11">
								<el-form-item prop="date1">
									<el-date-picker v-model="ruleForm.date1" type="date" placeholder="开始日期"
										style="width: 100%"></el-date-picker>
								</el-form-item>
							</el-col>
							<el-col class="text-center" :span="2">
								<span class="text-gray-500">-</span>
							</el-col>
							<el-col :span="11">
								<el-form-item prop="date2">
									<el-time-picker v-model="ruleForm.date2" placeholder="结束日期" style="width: 100%">
									</el-time-picker>
								</el-form-item>
							</el-col>
						</el-form-item>
						<el-form-item label="开启:" prop="delivery">
							<el-switch v-model="ruleForm.delivery"></el-switch>
						</el-form-item>
						<el-form-item label="多选:" prop="type">
							<el-checkbox-group v-model="ruleForm.type">
								<el-checkbox label="选择一" name="type"></el-checkbox>
								<el-checkbox label="选择二" name="type"></el-checkbox>
								<el-checkbox label="选择三" name="type"></el-checkbox>
								<el-checkbox label="选择四" name="type"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="权重:" prop="num">
							<el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
						</el-form-item>
						<el-form-item label="目标公开:" prop="resource">
							<el-radio-group v-model="ruleForm.resource">
								<el-radio label="公开"></el-radio>
								<el-radio label="部分公开"></el-radio>
								<el-radio label="不公开"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="目标描述:" prop="desc">
							<el-input v-model="ruleForm.desc" type="textarea"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
							<el-button @click="resetForm(ruleFormRef)">关闭</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>

</template>
<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const num = ref(1)

	const formSize = ref('default')
	const ruleFormRef = ref()
	const ruleForm = reactive({
		name: 'Hello',
		region: '',
		date1: '',
		date2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
		num: '',
	})
	const rules = reactive({
		name: [{
				required: true,
				message: 'Please input Activity name',
				trigger: 'blur'
			},
			{
				min: 3,
				max: 5,
				message: 'Length should be 3 to 5',
				trigger: 'blur'
			},
		],
		region: [{
			required: true,
			message: 'Please select Activity zone',
			trigger: 'change',
		}, ],
		date1: [{
			type: 'date',
			required: true,
			message: 'Please pick a date',
			trigger: 'change',
		}, ],
		date2: [{
			type: 'date',
			required: true,
			message: 'Please pick a time',
			trigger: 'change',
		}, ],
		type: [{
			type: 'array',
			required: true,
			message: 'Please select at least one activity type',
			trigger: 'change',
		}, ],
		resource: [{
			required: true,
			message: 'Please select activity resource',
			trigger: 'change',
		}, ],
		desc: [{
			required: true,
			message: 'Please input activity form',
			trigger: 'blur'
		}, ],
	})
</script>
<style scoped>
	.el-card {
		border: none;
		background: #fff;
		border-radius: 4px;
		overflow: hidden;
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

	.el-select--default {
		width: 100%;
	}
</style>
