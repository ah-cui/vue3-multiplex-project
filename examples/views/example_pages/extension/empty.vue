<template>
	<div class="el-list-scope-bodypadding">
		<el-card shadow="never" header="空视图">
			<el-empty></el-empty>
		</el-card>
		<el-card shadow="never" header="自定义图标">
			<el-empty>
				<i slot="icon" class="el-icon-s-goods"></i>
			</el-empty>
		</el-card>
		<el-card shadow="never" header="自定义操作按钮">
			<el-empty text="哎呀~怎么还没有数据呀~">
				<div style="margin-top: 20px;">
					<el-button size="mini">添加数据</el-button>
					<el-button type="primary" size="mini">重新加载</el-button>
				</div>
			</el-empty>
		</el-card>
	</div>

</template>

<script setup>

</script>

<style scoped>
	.el-card+.el-card {
		margin-top: 15px;
	}
  .el-list-scope-bodypadding{padding:15px;}
</style>
