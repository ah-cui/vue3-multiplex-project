<template>
	<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
		:on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
		:file-list="fileList">
		<el-button type="primary">Click to upload</el-button>
		<template #tip>
			<div class="el-upload__tip">
				jpg/png files with a size less than 500kb
			</div>
		</template>
	</el-upload>
	<h3>用户头像上传</h3>
	<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
		:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
		<img v-if="imageUrl" :src="imageUrl" class="avatar" />
		<el-icon v-else class="avatar-uploader-icon">
			<Plus />
		</el-icon>
	</el-upload>
</template>
<script setup>
	import {
		ref
	} from 'vue'
	const imageUrl = ref('')
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: var(--el-transition-duration-fast);
	}

	.avatar-uploader .el-upload:hover {
		border-color: var(--el-color-primary);
	}

	.el-icon.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
