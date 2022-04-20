<template>
	<div :class="classes" class="el-exception el-text-center">
		<div class="el-exception-img ele-text-placeholder">
			<el-image :src="src" style="width: 216px; height: 250px"></el-image>
		</div>
		<div class="el-exception-content ele-text-left">
			<h1 class="el-text">403</h1>
			<p class="el-text-secondary">抱歉，你无权访问该页面</p>
			<div>
				<el-button type="primary" @click="$router.push('/')">返回首页</el-button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const src = ref('/examples/assets/images/ic-403.svg')
</script>
<style scoped>
	.el-exception .el-exception-content,
	.el-exception .el-exception-img {
		margin: 15px 30px;
		display: inline-block;
		vertical-align: middle;
	}

	.el-text-center {
		text-align: center;
		margin: 145px 0px;
	}
</style>
