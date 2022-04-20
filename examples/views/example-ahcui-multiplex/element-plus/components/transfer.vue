<template>
	<el-transfer v-model="value" :props="{
      key: 'value',
      label: 'desc',
    }" :data="data" />
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const value = ref([])
</script>
