<template>
	<div class="el-list-scope-bodypadding">
		<el-card shadow="never" header="数字动画">
			<h1>
				<vue-count-up :endVal="countUpVal" :delay="0" :options="countUpOptions" @ready="onCountUpReady" />
			</h1>
			<div style="margin-top: 15px;">
				<el-button @click="startCountUp" size="mini">重新开始
				</el-button>
				<el-button @click="updateCountUp" size="mini">更新数字
				</el-button>
			</div>
		</el-card>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const components = ref('VueCountUp')
	const countUpVal = ref('6317')
	const countUpOptions = ref({
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.',
		prefix: '',
		suffix: ''
	})
	const countUpIns = ref(null)
	/* countUp渲染完成 */
	const onCountUpReady = (instance) => {
		this.countUpIns = instance;
	}
	/* countUp重新开始 */
	const startCountUp = () => {
		if (!this.countUpIns) {
			return;
		}
		this.countUpIns.reset();
		this.countUpIns.start();
	}
	/* countUp更新 */
	const updateCountUp = () => {
		if (!this.countUpIns) {
			return;
		}
		this.countUpIns.update(1000 + Math.round(Math.random() * 9000));
	}
</script>

<style scoped>
</style>
