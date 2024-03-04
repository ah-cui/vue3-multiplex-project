<template>
  <div style="height: 100%;">
    <el-card :class="classes" class="el-exception el-text-center" style="height: calc(100% - 400px); padding:200px 0px">
      <div class="el-exception-img ele-text-placeholder" style="height: 100%;">
        <el-image :src="src" style="width: 216px; height: 250px"></el-image>
      </div>
      <div class="el-exception-content ele-text-left">
        <h1 class="el-text">403</h1>
        <p class="el-text-secondary">抱歉，你无权访问该页面</p>
        <div>
          <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </div>
      </div>
    </el-card>
  </div>


</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const src = ref('/examples/static/img/ic-403.svg')
</script>
<style>
.ahcui-content-view-scoped{
  height: 100%;
}
</style>
<style scoped>

	.el-exception .el-exception-content,
	.el-exception .el-exception-img {
		margin: 15px 30px;
		display: inline-block;
		vertical-align: middle;
	}

	.el-text-center {
		text-align: center;

	}
</style>
