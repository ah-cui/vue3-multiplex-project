<template>
	<div>
		<el-input v-model="input1" placeholder="Please input">
			<template #prepend>Http://</template>
		</el-input>
	</div>
	<div class="mt-4">
		<el-input v-model="input2" placeholder="Please input">
			<template #append>.com</template>
		</el-input>
	</div>
	<div class="mt-4">
		<el-input v-model="input3" placeholder="Please input" class="input-with-select">
			<template #prepend>
				<el-select v-model="select" placeholder="Select" style="width: 110px">
					<el-option label="Restaurant" value="1" />
					<el-option label="Order No." value="2" />
					<el-option label="Tel" value="3" />
				</el-select>
			</template>
			<template #append>
				<el-button :icon="Search" />
			</template>
		</el-input>
	</div>
	<div class="mt-4">
		<el-input v-model="input3" placeholder="Please input" class="input-with-select">
			<template #prepend>
				<el-button :icon="Search" />
			</template>
			<template #append>
				<el-select v-model="select" placeholder="Select" style="width: 110px">
					<el-option label="Restaurant" value="1" />
					<el-option label="Order No." value="2" />
					<el-option label="Tel" value="3" />
				</el-select>
			</template>
		</el-input>
	</div>
	<h5>不同尺寸的输入框</h5>
	<div class="demo-input-size">
		<el-input v-model="input4" class="w-50 m-2" size="large" placeholder="Please Input" />
		<el-input v-model="input5" class="w-50 m-2 mt-4" placeholder="Please Input" />
		<el-input v-model="input6" class="w-50 m-2 mt-4" size="small" placeholder="Please Input" />
	</div>
	<div class="demo-input-size">
		<el-input v-model="input4" class="w-50 m-2 mt-4" size="large" placeholder="Please Input"
			:suffix-icon="Search" />
		<el-input v-model="input5" class="w-50 m-2 mt-4" placeholder="Please Input" :suffix-icon="Search" />
		<el-input v-model="input6" class="w-50 m-2 mt-4" size="small" placeholder="Please Input"
			:suffix-icon="Search" />
	</div>
	<div class="demo-input-size">
		<el-input v-model="input4" class="w-50 m-2 mt-4" size="large" placeholder="Please Input"
			:prefix-icon="Search" />
		<el-input v-model="input5" class="w-50 m-2 mt-4" placeholder="Please Input" :prefix-icon="Search" />
		<el-input v-model="input6" class="w-50 m-2 mt-4" size="small" placeholder="Please Input"
			:prefix-icon="Search" />
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const input1 = ref('')
	const input2 = ref('')
	const input3 = ref('')
	const select = ref('')
	const input4 = ref('')
	const input5 = ref('')
	const input6 = ref('')
</script>

