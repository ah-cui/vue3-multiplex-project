<template>
	<div class="block">
		<span class="demonstration">Start date time 12:00:00</span>
		<el-date-picker v-model="value4" type="datetimerange" start-placeholder="Start Date" end-placeholder="End Date"
			:default-time="defaultTime1" />
	</div>
	<div class="block">
		<span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
		<el-date-picker v-model="value5" type="datetimerange" start-placeholder="Start Date" end-placeholder="End Date"
			:default-time="defaultTime2" />
	</div>


	<div class="demo-datetime-picker">
		<div class="block">
			<span class="demonstration">Emits Date object</span>
			<div class="demonstration">Value: {{ value1 }}</div>
			<el-date-picker v-model="value1" type="datetime" placeholder="Pick a Date" format="YYYY/MM/DD hh:mm:ss" />
		</div>
		<div class="block">
			<span class="demonstration">Use value-format</span>
			<div class="demonstration">Value：{{ value2 }}</div>
			<el-date-picker v-model="value2" type="datetime" placeholder="Pick a Date" format="YYYY/MM/DD hh:mm:ss"
				value-format="YYYY-MM-DD h:m:s a" />
		</div>
		<div class="block">
			<span class="demonstration">Timestamp</span>
			<div class="demonstration">Value：{{ value3 }}</div>
			<el-date-picker v-model="value3" type="datetime" placeholder="Pick a Date" format="YYYY/MM/DD hh:mm:ss"
				value-format="x" />
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const value1 = ref('')
	const value2 = ref('')
	const value3 = ref('')
	const value4 = ref('')
	const value5 = ref('')
	const defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
	const defaultTime2 = [
		new Date(2000, 1, 1, 12, 0, 0),
		new Date(2000, 2, 1, 8, 0, 0),
	] // '12:00:00', '08:00:00'
</script>
<style scoped>
	.block {
		padding: 30px 0;
		text-align: center;
		border-right: solid 1px #dcdfe6;
		flex: 1;
	}

	.block:last-child {
		border-right: none;
	}

	.block .demonstration {
		display: block;
		color: var(--el-text-color-secondary);
		font-size: 14px;
		margin-bottom: 20px;
	}

	.demo-datetime-picker {
		display: flex;
		width: 100%;
		padding: 0;
		flex-wrap: wrap;
	}

	.demo-datetime-picker .block {
		padding: 30px 0;
		text-align: center;
		border-right: solid 1px #dcdfe6;
		flex: 1;
	}

	.demo-datetime-picker .block:last-child {
		border-right: none;
	}

	.demo-datetime-picker .demonstration {
		display: block;
		color: var(--el-text-color-secondary);
		font-size: 14px;
		margin-bottom: 20px;
	}
</style>
