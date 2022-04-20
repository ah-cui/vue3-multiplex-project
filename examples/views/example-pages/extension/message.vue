<template>
	<div class="el-list-scope-bodypadding">
		<el-card shadow="never" header="消息提示">
			<div>默认风格</div>
			<div class="mt-15">
				<el-button :plain="true" @click="open2">成功</el-button>
				<el-button :plain="true" @click="open3">警告</el-button>
				<el-button :plain="true" @click="open1">消息</el-button>
				<el-button :plain="true" @click="open4">错误</el-button>
			</div>
			<div class="mt-15">边框风格</div>
			<div class="mt-15">
				<el-button @click="showSuccessMessage(true)">成功</el-button>
				<el-button @click="showWarningMessage(true)">警告</el-button>
				<el-button @click="showErrorMessage(true)">错误</el-button>
				<el-button @click="showInfoMessage(true)">消息</el-button>
			</div>
			<div class="mt-15">Loading</div>
			<div class="mt-15">
				<el-button @click="openFullScreen1" v-loading.fullscreen.lock="fullscreenLoading">
					带遮罩层
				</el-button>
				<el-button @click="openFullScreen2">
					服务方式
				</el-button>
			</div>

		</el-card>
		<el-card shadow="never" header="警告组件">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="成功提示的文案" type="success" show-icon></el-alert>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="消息提示的文案" type="info" show-icon></el-alert>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="错误提示的文案" type="error" show-icon></el-alert>
					</div>
				</el-col>
			</el-row>
			<el-row :gutter="20" class="mt-15">
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
						</el-alert>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
						</el-alert>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
						</el-alert>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content">
						<el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
						</el-alert>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		ElMessage,
		ElLoading
	} from 'element-plus'
	const open1 = () => {
		ElMessage('这是一条普通的提示.')
	}
	const open2 = () => {
		ElMessage({
			message: '这是一条成功的提示',
			type: 'success',
		})
	}
	const open3 = () => {
		ElMessage({
			message: '这是一条警告的提示',
			type: 'warning',
		})
	}
	const open4 = () => {
		ElMessage.error('这是一条错误的提示')
	}

	const showSuccessMessage = (border) => {
		ElMessage({
			type: 'success',
			message: '这是一条成功的提示',
			customClass: border ? 'ele-message-border' : ''
		});
	}
	const showWarningMessage = (border) => {
		ElMessage({
			type: 'warning',
			message: '这是一条警告的提示',
			customClass: border ? 'ele-message-border' : ''
		})
	}
	const showErrorMessage = (border) => {
		if (border) {
			ElMessage({
				type: 'error',
				message: '这是一条错误的提示',
				customClass: 'ele-message-border'
			});
		} else {
			this.$message.error('这是一条错误的提示');
		}
	}
	const showInfoMessage = (border) => {
		if (border) {
			ElMessage({
				type: 'info',
				message: '这是一条普通的提示',
				customClass: 'ele-message-border'
			});
		} else {
			this.$message('这是一条普通的提示');
		}
	}
	const showLoadingMessage = () => {
		let loading = ElMessage({
			message: '正在加载中..',
			customClass: 'ele-message-loading',
			duration: 0
		});
		setTimeout(() => {
			loading.close();
		}, 6000);
	}
	const fullscreenLoading = ref(false)
	const openFullScreen1 = () => {
		fullscreenLoading.value = true
		setTimeout(() => {
			fullscreenLoading.value = false
		}, 2000)
	}
	const openFullScreen2 = () => {
		const loading = this.ElLoading({
			lock: true,
			text: 'Loading',
			background: 'rgba(0, 0, 0, 0.01)'
		});
		setTimeout(() => {
			loading.close();
		}, 2000);
	}
</script>

<style scoped>
	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.el-card+.el-card {
		margin-top: 15px;
	}
</style>
