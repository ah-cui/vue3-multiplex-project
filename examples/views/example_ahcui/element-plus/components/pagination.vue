<template>
	<div class="example-pagination-block">
		<div class="example-demonstration">When you have few pages</div>
		<el-pagination layout="prev, pager, next" :total="50" />
	</div>
	<div class="example-pagination-block">
		<div class="example-demonstration">When you have more than 7 pages</div>
		<el-pagination layout="prev, pager, next" :total="1000" />
	</div>
	<h5>带有背景色的分页</h5>
	<el-pagination background layout="prev, pager, next" :total="1000" />
	<h5>附加功能</h5>
	<div class="flex items-center mb-4">
		<el-radio-group v-model="small" class="mr-4">
			<el-radio-button :label="false">default</el-radio-button>
			<el-radio-button :label="true">small</el-radio-button>
		</el-radio-group>
		<div>
			background:
			<el-switch v-model="background" class="ml-2" />
		</div>
		<div class="ml-4">
			disabled:
			<el-switch v-model="disabled" class="ml-2" />
		</div>
	</div>

	<hr class="my-4" />

	<div class="demo-pagination-block">
		<div class="demonstration">Total item count</div>
		<el-pagination v-model:currentPage="currentPage1" :page-size="100" :small="small" :disabled="disabled"
			:background="background" layout="total, prev, pager, next" :total="1000" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>
	<div class="demo-pagination-block">
		<div class="demonstration">Change page size</div>
		<el-pagination v-model:currentPage="currentPage2" v-model:page-size="pageSize2"
			:page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
			layout="sizes, prev, pager, next" :total="1000" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>
	<div class="demo-pagination-block">
		<div class="demonstration">Jump to</div>
		<el-pagination v-model:currentPage="currentPage3" v-model:page-size="pageSize3" :small="small"
			:disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
			@size-change="handleSizeChange" @current-change="handleCurrentChange" />
	</div>
	<div class="demo-pagination-block">
		<div class="demonstration">All combined</div>
		<el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4"
			:page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
			layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>
</template>
<script setup>
	import {
		ref
	} from 'vue'

	const currentPage1 = ref(5)
	const currentPage2 = ref(5)
	const currentPage3 = ref(5)
	const currentPage4 = ref(4)
	const pageSize2 = ref(100)
	const pageSize3 = ref(100)
	const pageSize4 = ref(100)
	const small = ref(false)
	const background = ref(false)
	const disabled = ref(false)
</script>
<style scoped>
	.example-pagination-block+.example-pagination-block {
		margin-top: 10px;
	}

	.example-pagination-block .example-demonstration {
		margin-bottom: 16px;
	}
</style>
