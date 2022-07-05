<template>
	<div class="el-body el-list-scope-bodypadding">
		<el-card shadow="never">
			<quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
			<el-button type="primary" style="text-align: right" @click="submit">提交</el-button>
		</el-card>
	</div>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const showPicker = ref(false)
	const submit = () => {
		console.log(this.$refs.text.value)
	}
	const components = ref('quillEditor')
	const content = ref('')
	const editorOption = ref('')
</script>

<style scoped>
	.myQuillEditor {
		min-height: 500px;
	}
  .el-list-scope-bodypadding{padding:15px;}
</style>
