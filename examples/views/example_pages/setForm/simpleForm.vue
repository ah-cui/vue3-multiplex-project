<!-- 组件模板 -->
<template>
	<div>
		<el-card class="el-page-header">
			<div class="el-page-title">
				基础表单
			</div>
			<div class="el-page-desc">
				表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
			</div>
		</el-card>
		<el-card class="el-body el-list-scope-bodypadding" style="margin:15px">
			<!--<div class="el-card">
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
								<span class="text-gray-500 text-center line">-</span>
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
			</div>-->
      <el-card shadow="never">
        <el-form
            ref="demoForm"
            :model="ruleForm"
            :rules="rules"
            label-width="90px"
            style="max-width: 700px;margin: 10px auto;">
          <el-form-item label="标题:" prop="title">
            <el-input
                v-model="ruleForm.title"
                placeholder="请输入标题"
                clearable/>
          </el-form-item>
          <el-form-item label="起止日期:" prop="datetime">
            <el-date-picker
                v-model="ruleForm.datetime"
                type="daterange"
                unlink-panels range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                class="ele-fluid"/>
          </el-form-item>
          <el-form-item label="目标描述:" prop="goal">
            <el-input
                v-model="ruleForm.goal"
                placeholder="请输入目标描述"
                :rows="4"
                type="textarea"/>
          </el-form-item>
          <el-form-item label="衡量标准:" prop="standard">
            <el-input
                v-model="ruleForm.standard"
                placeholder="请输入衡量标准"
                :rows="4"
                type="textarea"/>
          </el-form-item>
          <el-form-item label="地点:" prop="address">
            <el-select
                v-model="ruleForm.address"
                placeholder="请选择地点"
                clearable
                class="ele-fluid">
              <el-option label="地点一" :value="1"/>
              <el-option label="地点二" :value="2"/>
              <el-option label="地点三" :value="3"/>
            </el-select>
          </el-form-item>
          <el-form-item label="邀评人:">
            <el-select
                v-model="ruleForm.invites"
                placeholder="请选择邀评人"
                clearable
                multiple
                class="ele-fluid">
              <el-option
                  v-for="item in users"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                <el-avatar
                    :size="24"
                    :src="item.avatar"
                    style="vertical-align: middle;"/>
                <span style="padding-left: 8px;">{{ item.name }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="权重:">
            <el-input-number
                v-model="ruleForm.weight"
                controls-position="right"
                :min="0"
                :max="100"
                style="width: 150px;margin-right: 10px;"/>
            <span>%</span>
          </el-form-item>
          <el-form-item label="目标公开:">
            <el-radio-group v-model="ruleForm.publicType">
              <el-radio :label="1">公开</el-radio>
              <el-radio :label="2">部分公开</el-radio>
              <el-radio :label="3">不公开</el-radio>
            </el-radio-group>
            <el-input
                v-if="ruleForm.publicType===2"
                placeholder="公开给"/>
            <div class="text-info">客户、邀评人默认被分享</div>
          </el-form-item>
          <el-form-item>
            <el-button @click="closeThis">关闭</el-button>
            <el-button
                type="primary"
                @click="submit"
                :loading="loading">提交
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
		</el-card>
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
		/*background: #fff;*/
		border-radius: 4px;
		overflow: hidden;
	}
	.el-select--default {
		width: 100%;
	}
.el-page-header{
  /*padding: 20px 25px 16px 25px;*/
  /*background: #ffffff;*/
  display: block;
}
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
  *>>> .el-form-item__content{display: block !important;}

  *>>> .el-radio__inner{ border:1px #dcdfe6 solid !important;}
  *>>> .el-range-editor.el-input__inner{width:100%;}
</style>
