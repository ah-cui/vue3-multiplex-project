<template>
	<div>
		<el-link href="https://element.eleme.io" target="_blank">default</el-link>
		<el-link type="primary">primary</el-link>
		<el-link type="success">success</el-link>
		<el-link type="warning">warning</el-link>
		<el-link type="danger">danger</el-link>
		<el-link type="info">info</el-link>
	</div>
	<div class="mb-4">
		<el-link disabled>default</el-link>
		<el-link type="primary" disabled>primary</el-link>
		<el-link type="success" disabled>success</el-link>
		<el-link type="warning" disabled>warning</el-link>
		<el-link type="danger" disabled>danger</el-link>
		<el-link type="info" disabled>info</el-link>
	</div>
	<div class="mb-4">
		<el-link :underline="false">Without Underline</el-link>
		<el-link>With Underline</el-link>
	</div>
	<div class="mb-4">
		<el-link :icon="Edit">Edit</el-link>
		<el-link>
			Check<el-icon class="el-icon--right">
				<icon-view />
			</el-icon>
		</el-link>
	</div>
</template>
<style scoped>
	.el-link {
		margin-right: 8px;
	}

	.el-link .el-icon--right.el-icon {
		vertical-align: text-bottom;
	}

	.mb-4 {
		margin-bottom: 15px;
	}
</style>
