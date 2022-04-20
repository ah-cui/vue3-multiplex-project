<template>
	<div class="el-body el-list-scope-bodypadding">
		<el-card shadow="never" header="打印当前页面">
			<el-form class="demo-form-inline el-scope-width-form" label-width="80px">
				<el-form-item label="纸张方向">
					<el-select placeholder="不设置" class="el-select-scope-display">
						<el-option label="横向" value="shanghai"></el-option>
						<el-option label="纵向" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="页面间距">
					<el-select placeholder="不设置" class="el-select-scope-display">
						<el-option label="0px" value="shanghai"></el-option>
						<el-option label="50px" value="beijing"></el-option>
						<el-option label="100px" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="页面标题">
					<el-input placeholder="不设置"></el-input>
				</el-form-item>
			</el-form>
			<el-button size="default" @click="printHtml()">打印</el-button>
			<el-button size="default" @click="printHtml(true)">打印隐藏指定内容</el-button>
			<div class="mt-15">
				<span class="el-text-primary el-printer-hide">此段内容在所有打印时隐藏, 打印完复原。</span>
				<span class="el-text-danger demo-hide-1">此段内容在指定打印时才隐藏。</span>
			</div>
		</el-card>
		<el-card shadow="never" header="打印任意内容">
			<el-form label-width="80px">
				<el-form-item label="loading" prop="resource">
					<el-radio-group>
						<el-radio label="不显示"></el-radio>
						<el-radio label="显示"></el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<el-button size="default" @click="printHtml()">打印任意内容</el-button>
			<el-button size="default" @click="printAddHeader">设置页眉页脚</el-button>
			<el-button size="default" @click="printImage">打印图片</el-button>
		</el-card>
		<el-card shadow="never" header="分页打印">
			<el-button size="default" @click="printPage()">分页打印</el-button>
			<el-button size="default" @click="printPageAddHeader">分页打印设置页眉页脚</el-button>
		</el-card>
		<el-card shadow="never" header="进阶示例">
			<el-button @click="printDataTable">打印数据表格</el-button>
			<el-tooltip content="对于复杂的打印需求，可以后端生成pdf给前端打印" placement="top">
				<el-button size="default" @click="printPdf">打印pdf</el-button>
			</el-tooltip>
			<el-button size="default" @click="printQrCode">打印条码</el-button>
			<el-button size="default" @click="printTable">打印自定义表格</el-button>
		</el-card>
	</div>
</template>

<script setup>
	import {
		h
	} from 'vue'
	import {
		ElNotification
	} from 'element-plus'

	/* 打印pdf */
	const printPdf = () => {
		ElNotification({
			url: 'https://cdn.eleadmin.com/20200610/20200708224450.pdf',
		})
	}
	/* 打印任意内容 */
	const printHtml = (blank) => {
		ElNotification({
			html: '<h1>中华人民共和国</h1>',
			blank: blank
		});
	};



	/* 打印图片 */
	const printImage = () => {
		ElNotification({
			html: '<img src="https://cdn.eleadmin.com/20200610/LrCTN2j94lo9N7wEql7cBr1Ux4rHMvmZ.jpg" style="width: 100%;"/>'
		})
	}
</script>

<style scoped>
	.el-card+.el-card {
		margin-top: 15px;
	}

	.el-text-primary {
		color: var(--el-color-primary)
	}

	.el-text-danger {
		color: var(--el-color-danger);
	}
</style>
