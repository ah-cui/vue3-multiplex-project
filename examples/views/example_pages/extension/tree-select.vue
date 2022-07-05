<template>
	<div class="el-list-scope-bodypadding">
		<el-card shadow="never" header="基础用法">
			<el-select-v2 v-model="value" :options="options" size="default" placeholder="Please select" />
		</el-card>
		<el-card shadow="never" header="多选">
			<el-select-v2 v-model="value2" :options="options2" size="default" placeholder="Please select"
				style="width: 240px" multiple />
		</el-card>
		<el-card shadow="never" header="隐藏多余标签的多选">
			<div style="display: inline-block">
				<p style="margin: 10px">use collapse-tags</p>
				<el-select-v2 v-model="value3" :options="options" size="default" placeholder="Please select"
					style="width: 240px" multiple collapse-tags />
			</div>
			<div style="display: inline-block; margin-left: 20px">
				<p style="margin: 10px">use collapse-tags-tooltip</p>
				<el-select-v2 v-model="value4" :options="options" placeholder="Please select" size="default"
					style="width: 240px" multiple collapse-tags collapse-tags-tooltip />
			</div>
		</el-card>
		<el-card shadow="never" header="给选项进行分组">
			<el-select-v2 v-model="value5" filterable size="default" :options="options3" placeholder="Please select"
				style="width: 240px" multiple />
		</el-card>
		<el-card shadow="never" header="一键删除">
			<el-select-v2 v-model="value6" :options="options" size="default" placeholder="Please select"
				style="width: 240px; margin-right: 16px; vertical-align: middle" multiple clearable />
			<el-select-v2 v-model="value7" size="default" :options="options" placeholder="Please select"
				style="width: 240px; vertical-align: middle" clearable />
		</el-card>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
	const value = ref('')
	const value2 = ref('')
	const value3 = ref('')
	const value4 = ref('')
	const value5 = ref('')
	const value6 = ref('')
	const value7 = ref('')
	const options = Array.from({
		length: 1000
	}).map((_, idx) => ({
		value: `Option ${idx + 1}`,
		label: `${initials[idx % 10]}${idx}`,
	}))
	const options2 = ref(
		Array.from({
			length: 1000
		}).map((_, idx) => ({
			value2: `Option ${idx + 1}`,
			label: `${initials[idx % 10]}${idx}`,
		}))
	)
	/*给选项进行分组*/
	const options3 = Array.from({
		length: 10
	}).map((_, idx) => {
		const label = idx + 1
		return {
			value: `Group ${label}`,
			label: `Group ${label}`,
			options: Array.from({
				length: 10
			}).map((_, idx) => ({
				value: `Option ${idx + 1 + 10 * label}`,
				label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,
			})),
		}
	})
</script>

<style scoped>
  .el-list-scope-bodypadding{padding:15px;}
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		opacity: 0;
	}

	.common-tree {
		overflow: auto;
	}

	.el-card+.el-card {
		margin-top: 15px;
	}
</style>
