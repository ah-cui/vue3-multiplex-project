<!-- 组件模板 -->
<template>
	<div>
		<el-card>
			<div class="el-page-title">
				复杂表单
			</div>
			<div class="el-page-desc">
				复杂表单常见于一次性输入和提交大批量数据的场景。
			</div>
		</el-card>
		<div class="el-body el-list-scope-bodypadding" style="padding-bottom:71px">
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
						<el-table-column prop="name" label="用户名" width="120" align="center" />
						<el-table-column prop="state" label="工号" />
						<el-table-column prop="city" label="所属部门" />
						<el-table-column label="操作" width="120" align="center" :resizable="false">
              <template #default="scope">
                <div v-if="!scope.row.editIndex">
                  <el-link
                      @click="onSave(scope.$index, scope.row)"
                      icon="el-icon-check"
                      type="success"
                      :underline="false">保存
                  </el-link>
                  <el-link
                      @click="onCancel(scope.$index, scope.row)"
                      icon="el-icon-close"
                      type="warning"
                      :underline="false">取消
                  </el-link>
                </div>
                <div v-else>
                  <el-link
                      @click="onEdit(scope.$index, scope.row)"
                      icon="el-icon-edit"
                      type="primary"
                      :underline="false">修改
                  </el-link>
                  <span class="ele-action">
                      <el-popconfirm
                          title="确定要删除此用户吗？"
                          @confirm="onRemove(scope.$index, scope.row)">
                          <el-link
                              slot="reference"
                              icon="el-icon-delete"
                              type="danger"
                              :underline="false">删除
                          </el-link>
                      </el-popconfirm>
                  </span>
                </div>
              </template>
						</el-table-column>
					</el-table>
					<el-button class="mt-4" style="width: 100%" @click="onAddItem">新增成员</el-button>
				</el-card>
        <!-- 底部工具栏 -->
        <el-card class="el-bottom-tool">
          <div v-if="validMsg" class="el-text-danger">
            <i class="el-icon-circle-close"/>
            <span>{{ validMsg }}</span>
          </div>
          <div class="el-bottom-tool-actions">
            <el-button
                type="primary"
                @click="submit"
                :loading="loading">提交
            </el-button>
          </div>
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

  const editIndex = null

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

  /* 表单提交 */
  const submit = () => {
    this.$refs['demoForm'].validate((valid, obj) => {
      if (valid) {
        this.validMsg = '';
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$message.success('提交成功');
        }, 1500);
      } else {
        this.validMsg = ` 共有校验 ${Object.keys(obj).length} 项不通过`;
        return false;
      }
    });
  }
  /* 添加一行 */
  const addRow = () => {
    if (this.list[this.list.length - 1].__is_add) {
      return;
    }
    this.list.push({__is_add: true});
    this.editRow = {};
    this.editIndex = this.list.length - 1;
  }
  /* 修改行 */
  const onEdit = (row, index) => {
    if (this.list.length && this.list[this.list.length - 1].__is_add) {
      return;
    }
    this.editIndex = index;
    this.editRow = Object.assign({}, row);
  }
  /* 删除行 */
  const onRemove = (row, index) => {
    this.list[this.editIndex].__is_add = false;
    console.log(row);
    this.list.splice(index, 1);
    // 如果需要请求接口删除可以在这里写
  }
  /* 保存编辑 */
  const onSave = (row, index) => {
    if (!this.editRow.name) {
      return this.$message.error('请输入用户');
    }
    if (!this.editRow.number) {
      return this.$message.error('请输入工号');
    }
    if (!this.editRow.department) {
      return this.$message.error('请选择部门');
    }
    this.list[index] = Object.assign({}, this.editRow, {__is_add: false});
    this.editIndex = null;
    this.editRow = {};
    // 如果需要请求接口保存可以在这里写
  }
  /* 取消编辑 */
  const onCancel = (row, index) => {
    console.log(row);
    if (row.__is_add) {
      this.list.splice(index, 1);
    }
    this.editIndex = null;
    this.editRow = {};
  }



</script>
<style scoped>
  .el-page-title{
    font-size: 19px;
    color: #303133;
  }
  .el-page-header .el-page-desc{
    margin-top: 8px;
    color: #909399;
  }
  .el-list-scope-bodypadding{
    padding:15px;
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
  :deep( .el-range-editor.el-input__inner){width:100%}
  :deep( .el-bottom-tool) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /*background: #fff;*/
    box-shadow: 0 -1px 2px rgb(0 0 0 / 3%);
    transition: padding-left .3s cubic-bezier(.2,0,0,1) 0s;
    z-index: 98;
  }
  :deep( .el-bottom-tool .el-bottom-tool-actions) {
    flex: 1;
    text-align: right;
  }
  :deep( .el-bottom-tool .el-card__body){
    float:right;
    flex: 1;
    text-align: right;
  }
</style>