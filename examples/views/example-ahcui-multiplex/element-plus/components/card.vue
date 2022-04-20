<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>Card name</span>
				<el-button class="button" type="text">Operation button</el-button>
			</div>
		</template>
		<div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
	</el-card>
	<el-row :gutter="12" class="mt-4">
		<el-col :span="8">
			<el-card shadow="always"> Always </el-card>
		</el-col>
		<el-col :span="8">
			<el-card shadow="hover"> Hover </el-card>
		</el-col>
		<el-col :span="8">
			<el-card shadow="never"> Never </el-card>
		</el-col>
	</el-row>
</template>

<style scoped>
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.box-card {
		width: 480px;
	}

	.mt-4 {
		margin-top: 15px;
	}
</style>
