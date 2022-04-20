<template>
	<el-alert title="success alert" type="success" />
	<el-alert title="info alert" type="info" />
	<el-alert title="warning alert" type="warning" />
	<el-alert title="error alert" type="error" />
	<h3>主题</h3>
	<el-alert title="success alert" type="success" effect="dark" />
	<el-alert title="info alert" type="info" effect="dark" />
	<el-alert title="warning alert" type="warning" effect="dark" />
	<el-alert title="error alert" type="error" effect="dark" />
	<h3>为 Alert 设置图标</h3>
	<el-alert title="success alert" type="success" show-icon />
	<el-alert title="info alert" type="info" show-icon />
	<el-alert title="warning alert" type="warning" show-icon />
	<el-alert title="error alert" type="error" show-icon />
	<h3>自定义描述文案</h3>
	<el-alert title="with description" type="success" description="This is a description." />
	<h3>如何展示一个含有图标以及辅助性文字的 Alert 组件</h3>
	<el-alert title="success alert" type="success" description="more text description" show-icon />
	<el-alert title="info alert" type="info" description="more text description" show-icon />
	<el-alert title="warning alert" type="warning" description="more text description" show-icon />
	<el-alert title="error alert" type="error" description="more text description" show-icon />
</template>

<style scoped>
	.el-alert {
		margin: 20px 0 0;
	}

	.el-alert:first-child {
		margin: 0;
	}
</style>
