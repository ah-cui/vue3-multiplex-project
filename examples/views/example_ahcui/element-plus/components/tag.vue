<template>
	<el-tag>Tag 1</el-tag>
	<el-tag class="ml-2" type="success">Tag 2</el-tag>
	<el-tag class="ml-2" type="info">Tag 3</el-tag>
	<el-tag class="ml-2" type="warning">Tag 4</el-tag>
	<el-tag class="ml-2" type="danger">Tag 5</el-tag>
	<h5>可移除标签</h5>
	<el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable :type="tag.type">
		{{ tag.name }}
	</el-tag>
	<h5>主题</h5>
	<div class="tag-group my-2">
		<span class="tag-group__title m-1">Dark</span>
		<el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="dark">
			{{ item.label }}
		</el-tag>
		<el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="dark" closable>
			{{ item.label }}
		</el-tag>
	</div>
	<div class="tag-group my-2">
		<span class="tag-group__title m-1">Plain</span>
		<el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="plain">
			{{ item.label }}
		</el-tag>
		<el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="plain" closable>
			{{ item.label }}
		</el-tag>
	</div>
	<h5>可选中的标签</h5>
	<div>
		<el-check-tag checked style="margin-right: 8px">Checked</el-check-tag>
		<el-check-tag :checked="checked" @change="onChange">Toggle me</el-check-tag>
	</div>
</template>
<script setup>
	import {
		ref
	} from 'vue'

	const tags = ref([{
			name: 'Tag 1',
			type: ''
		},
		{
			name: 'Tag 2',
			type: 'success'
		},
		{
			name: 'Tag 3',
			type: 'info'
		},
		{
			name: 'Tag 4',
			type: 'warning'
		},
		{
			name: 'Tag 5',
			type: 'danger'
		},
	])

	const items = ref([{
			type: '',
			label: 'Tag 1'
		},
		{
			type: 'success',
			label: 'Tag 2'
		},
		{
			type: 'info',
			label: 'Tag 3'
		},
		{
			type: 'danger',
			label: 'Tag 4'
		},
		{
			type: 'warning',
			label: 'Tag 5'
		},
	])
	const checked = ref(false)
</script>
