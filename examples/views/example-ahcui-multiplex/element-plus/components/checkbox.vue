<template>
	<div>
		<el-checkbox v-model="checked1" label="Option 1" size="large" />
		<el-checkbox v-model="checked2" label="Option 2" size="large" />
	</div>
	<div>
		<el-checkbox v-model="checked3" label="Option 1" />
		<el-checkbox v-model="checked4" label="Option 2" />
	</div>
	<div>
		<el-checkbox v-model="checked5" label="Option 1" size="small" />
		<el-checkbox v-model="checked6" label="Option 2" size="small" />
	</div>
	<div class="mb-4">
		<el-checkbox v-model="checked5" label="Option 1" size="small" disabled />
		<el-checkbox v-model="checked6" label="Option 2" size="small" disabled />
	</div>
	<el-checkbox-group class="mb-4" v-model="checkList">
		<el-checkbox label="Option A" />
		<el-checkbox label="Option B" />
		<el-checkbox label="Option C" />
		<el-checkbox label="disabled" disabled />
		<el-checkbox label="selected and disabled" disabled />
	</el-checkbox-group>
	<el-checkbox-group class="mb-4" v-model="checkedCities" :min="1" :max="2">
		<el-checkbox v-for="city in cities" :key="city" :label="city">{{city }}</el-checkbox>
	</el-checkbox-group>
	<div class="mb-4">
		<el-checkbox-group v-model="checkboxGroup1" size="large">
			<el-checkbox-button v-for="city in cities" :key="city" :label="city">
				{{ city }}
			</el-checkbox-button>
		</el-checkbox-group>
	</div>
	<div class="demo-button-style mb-4">
		<el-checkbox-group v-model="checkboxGroup2">
			<el-checkbox-button v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox-button>
		</el-checkbox-group>
	</div>
	<div class="demo-button-style mb-4">
		<el-checkbox-group v-model="checkboxGroup3" size="small">
			<el-checkbox-button v-for="city in cities" :key="city" :label="city" :disabled="city === 'Beijing'">
				{{ city }}</el-checkbox-button>
		</el-checkbox-group>
	</div>
	<div class="demo-button-style mb-4">
		<el-checkbox-group v-model="checkboxGroup4" size="small" disabled>
			<el-checkbox-button v-for="city in cities2" :key="city" :label="city">{{city}}</el-checkbox-button>
		</el-checkbox-group>
	</div>
	<div class="mb-4">
		<el-checkbox v-model="checked7" label="Option1" size="large" border />
		<el-checkbox v-model="checked8" label="Option2" size="large" border />
	</div>
	<div class="mb-4">
		<el-checkbox v-model="checked9" label="Option1" border />
		<el-checkbox v-model="checked10" label="Option2" border />
	</div>
	<div class="mb-4">
		<el-checkbox-group v-model="checkboxGroup1" size="small">
			<el-checkbox label="Option1" border />
			<el-checkbox label="Option2" border />
		</el-checkbox-group>
	</div>
	<div class="mb-4">
		<el-checkbox-group v-model="checkboxGroup5" size="small">
			<el-checkbox label="Option1" border disabled />
			<el-checkbox label="Option2" border disabled />
		</el-checkbox-group>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const checked1 = ref(true)
	const checked2 = ref(false)
	const checked3 = ref(false)
	const checked4 = ref(false)
	const checked5 = ref(false)
	const checked6 = ref(false)
	const checkList = ref(['selected and disabled', 'Option A'])
	const checkedCities = ref(['Shanghai', 'Beijing'])
	const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
	const checkboxGroup1 = ref(['Shanghai'])
	const checkboxGroup2 = ref(['Shanghai'])
	const checkboxGroup3 = ref(['Shanghai'])
	const checkboxGroup4 = ref(['Shanghai'])
	const cities2 = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
	const checked7 = ref(true)
	const checked8 = ref(false)
	const checked9 = ref(false)
	const checked10 = ref(true)
	const checkboxGroup5 = ref(['Option1'])
</script>
<style>
	.mb-4 {
		margin-bottom: 15px;
	}
</style>
