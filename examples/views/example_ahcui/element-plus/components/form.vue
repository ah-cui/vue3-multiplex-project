<template>
	<h5>典型表单</h5>
	<el-form :model="form1" label-width="120px">
		<el-form-item label="Activity name">
			<el-input v-model="form1.name" />
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-select v-model="form1.region" placeholder="please select your zone">
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item label="Activity time">
			<el-col :span="11">
				<el-date-picker v-model="form1.date1" type="date" placeholder="Pick a date" style="width: 100%" />
			</el-col>
			<el-col :span="2" class="text-center">
				<span class="text-gray-500">-</span>
			</el-col>
			<el-col :span="11">
				<el-time-picker v-model="form1.date2" placeholder="Pick a time" style="width: 100%" />
			</el-col>
		</el-form-item>
		<el-form-item label="Instant delivery">
			<el-switch v-model="form1.delivery" />
		</el-form-item>
		<el-form-item label="Activity type">
			<el-checkbox-group v-model="form1.type">
				<el-checkbox label="Online activities" name="type" />
				<el-checkbox label="Promotion activities" name="type" />
				<el-checkbox label="Offline activities" name="type" />
				<el-checkbox label="Simple brand exposure" name="type" />
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="Resources">
			<el-radio-group v-model="form1.resource">
				<el-radio label="Sponsor" />
				<el-radio label="Venue" />
			</el-radio-group>
		</el-form-item>
		<el-form-item label="Activity form">
			<el-input v-model="form1.desc" type="textarea" />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit1">Create</el-button>
			<el-button>Cancel</el-button>
		</el-form-item>
	</el-form>
	<h5>行内表单</h5>
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
		<el-form-item label="Approved by">
			<el-input v-model="formInline.user" placeholder="Approved by" />
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-select v-model="formInline.region" placeholder="Activity zone">
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit2">Query</el-button>
		</el-form-item>
	</el-form>
	<h5>对其方式</h5>
	<el-radio-group v-model="labelPosition">
		<el-radio-button label="left">Left</el-radio-button>
		<el-radio-button label="right">Right</el-radio-button>
		<el-radio-button label="top">Top</el-radio-button>
	</el-radio-group>
	<div style="margin: 20px" />
	<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
		<el-form-item label="Name">
			<el-input v-model="formLabelAlign.name" />
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-input v-model="formLabelAlign.region" />
		</el-form-item>
		<el-form-item label="Activity form">
			<el-input v-model="formLabelAlign.type" />
		</el-form-item>
	</el-form>
	<h5>验证表单</h5>
	<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
		:size="formSize">
		<el-form-item label="Activity name" prop="name">
			<el-input v-model="ruleForm.name" />
		</el-form-item>
		<el-form-item label="Activity zone" prop="region">
			<el-select v-model="ruleForm.region" placeholder="Activity zone">
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item label="Activity count" prop="count">
			<el-select-v2
				v-model="ruleForm.count"
				placeholder="Activity count"
				:options="options"
			/>
		</el-form-item>
		<el-form-item label="Activity time" required>
			<el-col :span="11">
				<el-form-item prop="date1">
					<el-date-picker v-model="ruleForm.date1" type="date" placeholder="Pick a date"
						style="width: 100%" />
				</el-form-item>
			</el-col>
			<el-col class="text-center" :span="2">
				<span class="text-gray-500">-</span>
			</el-col>
			<el-col :span="11">
				<el-form-item prop="date2">
					<el-time-picker v-model="ruleForm.date2" placeholder="Pick a time" style="width: 100%" />
				</el-form-item>
			</el-col>
		</el-form-item>
		<el-form-item label="Instant delivery" prop="delivery">
			<el-switch v-model="ruleForm.delivery" />
		</el-form-item>
		<el-form-item label="Activity type" prop="type">
			<el-checkbox-group v-model="ruleForm.type">
				<el-checkbox label="Online activities" name="type" />
				<el-checkbox label="Promotion activities" name="type" />
				<el-checkbox label="Offline activities" name="type" />
				<el-checkbox label="Simple brand exposure" name="type" />
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="Resources" prop="resource">
			<el-radio-group v-model="ruleForm.resource">
				<el-radio label="Sponsorship" />
				<el-radio label="Venue" />
			</el-radio-group>
		</el-form-item>
		<el-form-item label="Activity form" prop="desc">
			<el-input v-model="ruleForm.desc" type="textarea" />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
			<el-button @click="resetForm(ruleFormRef)">Reset</el-button>
		</el-form-item>
	</el-form>
	<h5>尺寸控制</h5>
	<div>
		<el-radio-group v-model="size">
			<el-radio-button label="large">large</el-radio-button>
			<el-radio-button label="default">default</el-radio-button>
			<el-radio-button label="small">small</el-radio-button>
		</el-radio-group>
		<el-radio-group v-model="labelPosition">
			<el-radio-button label="left">Left</el-radio-button>
			<el-radio-button label="right">Right</el-radio-button>
			<el-radio-button label="top">Top</el-radio-button>
		</el-radio-group>
	</div>
	<br />
	<el-form ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition2" :size="size1">
		<el-form-item label="Activity name">
			<el-input v-model="sizeForm.name" />
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-select v-model="sizeForm.region" placeholder="please select your zone">
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item label="Activity time">
			<el-col :span="11">
				<el-date-picker v-model="sizeForm.date1" type="date" placeholder="Pick a date" style="width: 100%" />
			</el-col>
			<el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
			<el-col :span="11">
				<el-time-picker v-model="sizeForm.date2" placeholder="Pick a time" style="width: 100%" />
			</el-col>
		</el-form-item>
		<el-form-item label="Activity type">
			<el-checkbox-group v-model="sizeForm.type">
				<el-checkbox-button label="Online activities" name="type" />
				<el-checkbox-button label="Promotion activities" name="type" />
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="Resources">
			<el-radio-group v-model="sizeForm.resource">
				<el-radio border label="Sponsor" />
				<el-radio border label="Venue" />
			</el-radio-group>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit3">Create</el-button>
			<el-button>Cancel</el-button>
		</el-form-item>
	</el-form>

</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const labelPosition = ref('right')
	const labelPosition2 = ref('right')
	const size1 = ref('default')
	
	const form1 = reactive({
		name: '',
		region: '',
		date1: '',
		date2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
	})
	const formInline = reactive({
		user: '',
		region: '',
	})

	const onSubmit1 = () => {
		console.log('submit!')
	}
	const onSubmit2 = () => {
		console.log('submit!')
	}

	const formLabelAlign = reactive({
		name: '',
		region: '',
		type: '',
	})


	const formSize = ref('default')
	const ruleForm = reactive({
		name: 'Hello',
		region: '',
		date1: '',
		date2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
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

	const submitForm = async (formEl) => {
		if (!formEl) return
		await formEl.validate((valid, fields) => {
			if (valid) {
			console.log('submit!')
			} else {
			console.log('error submit!', fields)
			}
		})
	}

	const resetForm = (formEl) => {
		if (!formEl) return
		formEl.resetFields()
	}

	const options = Array.from({ length: 10000 }).map((_, idx) => ({
		value: `${idx + 1}`,
		label: `${idx + 1}`,
	}))

	const sizeForm = reactive({
		name: '',
		region: '',
		date1: '',
		date2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
	})

	function onSubmit3() {
		console.log('submit!')
	}
</script>
