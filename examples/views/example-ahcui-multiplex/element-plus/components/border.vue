<template>
	<table class="demo-border">
		<tbody>
			<tr>
				<td class="text">Name</td>
				<td class="text">Thickness</td>
				<td class="line">Demo</td>
			</tr>
			<tr>
				<td class="text">Solid</td>
				<td class="text">1px</td>
				<td class="line">
					<div />
				</td>
			</tr>
			<tr>
				<td class="text">Dashed</td>
				<td class="text">2px</td>
				<td class="line">
					<div class="dashed" />
				</td>
			</tr>
		</tbody>
	</table>

</template>

<script setup>

</script>

<style scoped>
	.demo-border .text {
		width: 15%;
	}

	.demo-border .line {
		width: 70%;
	}

	.demo-border .line div {
		width: 100%;
		height: 0;
		border-top: 1px solid #dcdfe6;
	}

	.demo-border .line .dashed {
		border-top: 2px dashed #dcdfe6;
	}

	.demo-radius .title {
		color: #606266;
		font-size: 18px;
		margin: 10px 0;
	}

	.demo-radius .value {
		color: #303133;
		font-size: 16px;
		margin: 10px 0;
	}

	.demo-radius .radius {
		height: 40px;
		width: 70%;
		border: 1px solid #dcdfe6;
		border-radius: 0;
		margin-top: 20px;
	}
</style>
