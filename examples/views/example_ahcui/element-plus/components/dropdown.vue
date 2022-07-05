<template>
	<el-dropdown>
		<span class="el-dropdown-link">
			Dropdown List
			<el-icon class="el-icon--right">
				<arrow-down />
			</el-icon>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>Action 1</el-dropdown-item>
				<el-dropdown-item>Action 2</el-dropdown-item>
				<el-dropdown-item>Action 3</el-dropdown-item>
				<el-dropdown-item disabled>Action 4</el-dropdown-item>
				<el-dropdown-item divided>Action 5</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>

	<div class="flex flex-wrap items-center">
		<el-dropdown>
			<el-button type="primary">
				Dropdown List<el-icon class="el-icon--right">
					<arrow-down />
				</el-icon>
			</el-button>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item>Action 1</el-dropdown-item>
					<el-dropdown-item>Action 2</el-dropdown-item>
					<el-dropdown-item>Action 3</el-dropdown-item>
					<el-dropdown-item>Action 4</el-dropdown-item>
					<el-dropdown-item>Action 5</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
		<el-dropdown split-button type="primary" @click="handleClick">
			Dropdown List
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item>Action 1</el-dropdown-item>
					<el-dropdown-item>Action 2</el-dropdown-item>
					<el-dropdown-item>Action 3</el-dropdown-item>
					<el-dropdown-item>Action 4</el-dropdown-item>
					<el-dropdown-item>Action 5</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup>
	import {
		ArrowDown
	} from '@element-plus/icons-vue'
</script>
<style scoped>
	.example-showcase .el-dropdown-link {
		cursor: pointer;
		color: var(--el-color-primary);
		display: flex;
		align-items: center;
	}

	.example-showcase .el-dropdown+.el-dropdown {
		margin-left: 15px;
	}
</style>
