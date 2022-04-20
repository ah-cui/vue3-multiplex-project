<!-- 组件模板 -->
<template>
	<div>
		<div class="ele-page-header">
			<div class="ele-page-title">
				复杂表单
			</div>
			<div class="ele-page-desc">
				复杂表单常见于一次性输入和提交大批量数据的场景。
			</div>
		</div>
		<div class="ele-body el-list-scope-bodypadding">
			<el-form :model="formInline" :rules="rules" ref="ruleFormRef" :size="formSize" label-width="120px">
				<el-card class="box-card">
					<template #header>
						<div class="card-header">
							<span>仓库信息</span>
						</div>
					</template>
					<el-row :gutter="24" class="el-row-scoped-padding">
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="审批人" prop="user" required>
								<el-input v-model="formInline.user" placeholder="审批人"></el-input>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="仓库名：" prop="region" required>
								<el-input v-model="formInline.region" placeholder="请输入内容">
									<template #prepend>Http://</template>
									<template #append>.com</template>
								</el-input>

							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="审批人" prop="phone" required>
								<el-select v-model="formInline.phone" placeholder="请选择活动区域">
									<el-option label="前端一" value="shanghai"></el-option>
									<el-option label="前端二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="生效日期" required>
								<el-date-picker v-model="value2" type="daterange" range-separator="至"
									start-placeholder="Start date" end-placeholder="End date" />
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="仓库类型" required prop="phone">
								<el-select v-model="formInline.phone" placeholder="请选择仓库类型">
									<el-option label="前端一" value="shanghai"></el-option>
									<el-option label="前端二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
				</el-card>
				<el-card class="box-card">
					<template #header>
						<div class="card-header">
							<span>任务信息</span>
						</div>
					</template>
					<el-row :gutter="24" class="el-row-scoped-padding">
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="审批人" prop="user" required>
								<el-input v-model="formInline.user" placeholder="审批人"></el-input>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="仓库名：" prop="region" required>
								<el-input v-model="formInline.region" placeholder="请输入内容">
									<!--<template slot="prepend">
                    http://
                  </template>
                  <template slot="append">
                    .com
                  </template>-->
								</el-input>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="审批人" prop="phone" required>
								<el-select v-model="formInline.phone" placeholder="请选择活动区域">
									<el-option label="前端一" value="shanghai"></el-option>
									<el-option label="前端二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="生效日期" required>
								<el-date-picker v-model="value1" type="daterange" range-separator="至"
									start-placeholder="Start date" end-placeholder="End date" />
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="仓库类型" required prop="phone">
								<el-select v-model="formInline.phone" placeholder="请选择仓库类型">
									<el-option label="前端一" value="shanghai"></el-option>
									<el-option label="前端二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12" class="el-form-padding">
							<el-form-item label="提醒时间" required prop="time">
								<el-time-select v-model="value" start="08:30" step="00:15" end="18:30"
									placeholder="Select time" />
							</el-form-item>
						</el-col>
					</el-row>
				</el-card>
				<el-card class="box-card">
					<template #header>
						<div class="card-header">
							<span>选择成员</span>
						</div>
					</template>
					<el-table :data="tableData" border style="width: 100%" max-height="250">
						<el-table-column fixed prop="date" label="时间" width="150" />
						<el-table-column prop="name" label="用户名" width="120" />
						<el-table-column prop="state" label="工号" />
						<el-table-column prop="city" label="所属部门" />
						<el-table-column prop="address" label="地址" />
						<el-table-column prop="zip" label="编码" width="120" />
						<el-table-column label="操作" width="120">
							<template #default="scope">
								<el-button type="text" size="small" @click.prevent="deleteRow(scope.$index)">
									Remove
								</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-button class="mt-4" style="width: 100%" @click="onAddItem">新增成员</el-button>


				</el-card>
			</el-form>
		</div>
	</div>
</template>
<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	import dayjs from 'dayjs'
	const formSize = ref('default')
	const value = ref('')
	const value1 = ref('')
	const value2 = ref('')
	const ruleFormRef = ref()
	const now = new Date()
	const formInline = reactive({
		user: 'Hello',
		region: '',
		date1: '',
		date2: '',
		phone: '',
	})
	const rules = reactive({
		user: [{
				required: true,
				message: '请输入仓库名',
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
			message: '请输入仓库',
			trigger: 'change',
		}, ],
		date1: [{
			type: 'date',
			required: true,
			message: '请选择开始日期',
			trigger: 'change',
		}, ],
		date2: [{
			type: 'date',
			required: true,
			message: '请选择结束日期',
			trigger: 'change',
		}, ],
		phone: [{
			type: 'array',
			required: true,
			message: '请选择仓库类型',
			trigger: 'change',
		}, ],
	})
	const tableData = ref([{
			date: '2016-05-01',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
		},
		{
			date: '2016-05-03',
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
		},
	])

	const onAddItem = () => {
		now.setDate(now.getDate() + 1)
		tableData.value.push({
			date: dayjs(now).format('YYYY-MM-DD'),
			name: 'Tom',
			state: 'California',
			city: 'Los Angeles',
			address: 'No. 189, Grove St, Los Angeles',
			zip: 'CA 90036',
		})
	}
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

	.el-card+.el-card {
		margin-top: 15px;
	}

	.mt-4 {
		margin-top: 10px;
	}

	.el-select--default {
		width: 100%;
	}
</style>
