<template>
	<div class="el-body">
		<div class="el-list-scope-bodypaddingb">
			<el-card class="box-card">
				<el-form :model="formInline" :rules="rules" ref="ruleFormRef" :size="formSize" label-width="120px">
					<el-row :gutter="24">
						<el-col :lg="8" :md="12">
							<el-form-item label="规则名称:" prop="user" required>
								<el-input v-model="formInline.user" placeholder="审批人"></el-input>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12">
							<el-form-item label="描述：" prop="region" required>
								<el-input v-model="formInline.region" placeholder="请输入内容">
									<template #prepend>Http://</template>
									<template #append>.com</template>
								</el-input>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12">
							<el-form-item label="服务调用次数:" prop="num" required>
								<el-input-number v-model="formInline.num" style="width:100%" class="mx-4" :min="1"
									:max="10" controls-position="right" @change="handleChange" />
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12">
							<el-form-item label="上次调度时间:" prop="time" required>
								<el-date-picker style="width:100%" v-model="formInline.time" type="datetime"
									placeholder="选择时间" />
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12">
							<el-form-item label="状态:" prop="time" required>
								<el-select v-model="formInline.line" placeholder="请选择">
									<el-option label="运行中" value="shanghai" />
									<el-option label="已上线" value="beijing" />
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :lg="8" :md="12">
							<el-form-item>
								<el-button type="primary" class="ele-btn-icon">查询
								</el-button>
								<el-button size="medium">重置</el-button>
							</el-form-item>
						</el-col>
					</el-row>
					<el-card class="box-card">
						<!-- 提示信息 -->
						<el-alert type="success" size="15" show-icon class="el-alert">
							<span class="el-text">
								<span>已选择 <b class="el-text-info">258</b> 项</span>
								<span><em />服务调用次数总计 <b>858 万</b><em /></span>
							</span>
							<el-link class="list-clear-padding" type="primary" :underline="false">清空</el-link>
						</el-alert>
						<el-card class="box-card">
							<template #header>
								<div class="card-header">
									<div class="el-table-tool-title el-cell">
										<span>基础列表</span>
									</div>
									<div class="el-tool el-space">
										<el-form-item label="边框">
											<el-switch v-model="formInline.delivery" />
										</el-form-item>
										<el-form-item label="斑马线">
											<el-switch v-model="formInline.delivery2" />
										</el-form-item>
										<el-form-item label="表头背景">
											<el-switch v-model="formInline.delivery3" />
										</el-form-item>
										<el-form-item label="固定高度">
											<el-switch v-model="formInline.delivery4" />
										</el-form-item>
										<el-button type="primary" style="margin-left:22px;" :icon="Plus">新增</el-button>
										<el-button :icon="RefreshRight" />
										<el-button :icon="Operation" />
										<el-button :icon="Tools" />
									</div>
								</div>
							</template>
							<div>
								<el-table :data="tableData" stripe border style="width: 100%">
									<el-table-column type="selection" width="55" align="center" />
									<el-table-column type="index" width="50" align="center" />
									<el-table-column prop="date" sortable label="规则名称" width="180" />
									<el-table-column prop="name" label="描述" />
									<el-table-column prop="name" label="服务调用次数" />
									<el-table-column prop="toolkit" label="状态" width="180">
										<template #default="scope">
											<el-button type="text" size="small">
												Remove
											</el-button>
										</template>
									</el-table-column>
									<el-table-column prop="address" label="操作" width="180">
										<template #default="scope">
											<el-button size="small">修改</el-button>
											<el-button size="small" type="danger">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
								<el-pagination small background layout="prev, pager, next" :total="50"
									class="mt-4 text-center" />
							</div>
						</el-card>
					</el-card>
				</el-form>
			</el-card>
		</div>
	</div>
</template>
<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	import {
		Delete,
		Edit,
		Search,
		Share,
		Upload,
		Plus,
		RefreshRight,
		Operation,
		Tools,
	} from '@element-plus/icons-vue'
	const formSize = ref('default')
	const time = ref('')
	const num = ref(1)
	const formInline = reactive({
		user: 'hello',
		region: '',
		phone: '',
		num: '',
		time: '',
		delivery: false,
		delivery2: true,
		delivery3: true,
		delivery4: false,
		line: ''
	})
	const tableData = [{
			date: '2016-05-03',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-04',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		}
	]
</script>
<style scoped>
	.el-list-scope-bodypaddingb {
		padding: 15px;
		border-radius: 4px;
	}

	.el-button--small {
		padding: 9px 15px;
		font-size: 12px;
		border-radius: 3px;
	}

	.el-table--small .el-table__cell {
		padding: 9px 0;
	}

	.el-card+.el-card {
		margin-top: 15px;
	}

	.list-clear-padding {
		padding-left: 5px;
	}

	.el-text {
		color: #303133;
	}

	.el-text-info {
		color: #33cc99;
	}

	.mt-4 {
		margin-top: 10px
	}

	.el-select--default {
		width: 100%;
	}

	.el-date-editor.el-input {
		width: 100%;
	}

	.el-alert {
		margin-bottom: 15px;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.el-tool .el-form-item {
		margin-bottom: 0px;
		margin-left: 22px;
	}

	.el-card.is-always-shadow {
		box-shadow: none;
	}
</style>
