<template>
	<div :class="classes" class="el-exception el-text-center">
		<div class="el-exception-img el-text-placeholder">
			<el-image :src="src" style="width: 216px; height: 250px"></el-image>
		</div>
		<div class="el-exception-content el-text-left">
			<h1 class="el-text">404</h1>
			<p class="el-text-secondary">抱歉，你访问的页面不存在</p>
			<div>
				<el-button type="primary" @click="$router.push('/')">返回首页
				</el-button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const src = ref('/examples/assets/images/ic-404.svg')
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
