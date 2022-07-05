<template>
	<el-button plain @click="open1"> Success </el-button>
	<el-button plain @click="open2"> Warning </el-button>
	<el-button plain @click="open3"> Info </el-button>
	<el-button plain @click="open4"> Error </el-button>
	<h5>有位置偏移的通知栏</h5>
	<el-button plain @click="open5"> Notification with offset </el-button>
</template>

<script setup>
	import {
		ElNotification
	} from 'element-plus'

	const open1 = () => {
		ElNotification({
			title: 'Success',
			message: 'This is a success message',
			type: 'success',
		})
	}

	const open2 = () => {
		ElNotification({
			title: 'Warning',
			message: 'This is a warning message',
			type: 'warning',
		})
	}

	const open3 = () => {
		ElNotification({
			title: 'Info',
			message: 'This is an info message',
			type: 'info',
		})
	}

	const open4 = () => {
		ElNotification({
			title: 'Error',
			message: 'This is an error message',
			type: 'error',
		})
	}
	const open5 = () => {
		ElNotification.success({
			title: 'Success',
			message: 'This is a success message',
			offset: 100,
		})
	}
</script>
