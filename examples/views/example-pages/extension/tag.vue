<template>
	<div class="ele-body ele-body-card el-list-scope-bodypadding">
		<el-row>
			<el-col>
				<el-card shadow="never" header="标签组件" class="el-list-alert-magin">
					<div class="demo-drag-list ele-cell">
						<div class="tag-group el-list-alert-magin">
							<span class="tag-group__title">默认样式：</span>
							<el-tag class="ml-2">Tag 1</el-tag>
							<el-tag class="ml-2" type="success">Tag 2</el-tag>
							<el-tag class="ml-2" type="info">Tag 3</el-tag>
							<el-tag class="ml-2" type="warning">Tag 4</el-tag>
							<el-tag class="ml-2" type="danger">Tag 5</el-tag>
						</div>
						<div class="tag-group el-list-alert-magin mt-15">
							<span class="tag-group__title">圆角样式：</span>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-radius ml-2">标签一</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-radius ml-2" type="success">标签二
							</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-radius ml-2" type="info">标签三
							</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-radius ml-2" type="warning">标签四
							</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-radius ml-2" type="danger">标签五
							</el-tag>
						</div>
						<div class="tag-group el-list-alert-magin mt-15">
							<span class="tag-group__title">圆形样式：</span>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-round ml-2">1</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-round ml-2" type="success">2
							</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-round ml-2" type="info">3</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-round ml-2" type="warning">4
							</el-tag>
							<el-tag :size="tagSize" :effect="tagTheme" class="ele-tag-round ml-2" type="danger">5
							</el-tag>
						</div>
						<div class="tag-group el-list-alert-magin mt-15">
							<span class="tag-group__title">主题设置：</span>
							<el-radio-group v-model="tagTheme">
								<el-radio label="light">light</el-radio>
								<el-radio label="dark">dark</el-radio>
								<el-radio label="plain">plain</el-radio>
							</el-radio-group>
						</div>
						<div class="tag-group mt-15">
							<span class="tag-group__title">尺寸设置：</span>
							<el-radio-group v-model="tagSize">
								<el-radio label="large">默认</el-radio>
								<el-radio label="medium">中等</el-radio>
								<el-radio label="small">小型</el-radio>
								<el-radio label="mini">超小</el-radio>
							</el-radio-group>
						</div>
					</div>
				</el-card>
				<el-card shadow="never" header="标签输入" class="el-list-alert-magin">
					<div class="el-cell">
						<div class="el-cell-content">
							<el-tags-input v-model="tags" :size="tagSize" :effect="tagTheme" />
							<div style="margin-top:8px;">{{ JSON.stringify(tags) }}</div>
						</div>
					</div>
				</el-card>
				<el-card shadow="never" header="状态文字" class="el-list-alert-magin">
					<div class="el-cell">
						<div class="el-cell-content">

						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
	import {
		ref,
		nextTick
	} from 'vue'
	const tagSize = ref('small')
	const tagTheme = ref('light')
	const tags = ['标签一', '标签二', '标签三']
</script>

<style scoped>
	.ml-2 {
		margin-left: 5px;
	}

	.el-card+.el-card {
		margin-top: 15px;
	}
</style>
