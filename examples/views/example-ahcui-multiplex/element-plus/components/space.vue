<template>
	<el-space direction="vertical" alignment="start" :size="30">
		<el-radio-group v-model="size">
			<el-radio :label="'large'">large</el-radio>
			<el-radio :label="'default'">default</el-radio>
			<el-radio :label="'small'">small</el-radio>
		</el-radio-group>

		<el-space wrap :size="size">
			<el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
				<template #header>
					<div class="card-header">
						<span>Card name</span>
						<el-button class="button" type="text">Operation button</el-button>
					</div>
				</template>
				<div v-for="o in 4" :key="o" class="text item">
					{{ 'List item ' + o }}
				</div>
			</el-card>
		</el-space>
	</el-space>
	<el-slider v-model="size" />
	<el-space wrap :size="size2">
		<el-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
			<template #header>
				<div class="card-header">
					<span>Card name</span>
					<el-button class="button" type="text">Operation button</el-button>
				</div>
			</template>
			<div v-for="o in 4" :key="o" class="text item">
				{{ 'List item ' + o }}
			</div>
		</el-card>
	</el-space>
	<el-space wrap>
		<div v-for="i in 20" :key="i">
			<el-button type="text"> Text button </el-button>
		</div>
	</el-space>
	<el-space :size="size3" spacer="|">
		<div v-for="i in 2" :key="i">
			<el-button> button {{ i }} </el-button>
		</div>
	</el-space>
	<!--  <el-space :size="size4" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <el-button> button {{ i }} </el-button>
    </div>
  </el-space>-->
	<div style="
      width: 240px;
      margin-bottom: 20px;
      padding: 8px;
      border: 1px solid #ccc;
    ">
		<el-space>
			string
			<el-button> button </el-button>
			<el-card>
				<template #header> header </template>
				body
			</el-card>
		</el-space>
	</div>
	<div style=" width: 240px; margin-bottom: 20px; padding: 8px; border: 1px solid #ccc;">
		<el-space alignment="flex-start">
			string
			<el-button> button </el-button>
			<el-card>
				<template #header> header </template>
				body
			</el-card>
		</el-space>
	</div>
	<div style=" width: 240px; margin-bottom: 20px;padding: 8px; border: 1px solid #ccc; ">
		<el-space alignment="flex-end">
			string
			<el-button> button </el-button>
			<el-card>
				<template #header> header </template>
				body
			</el-card>
		</el-space>
	</div>
	<div class="mb-4">
		<div style="margin-bottom: 15px">fill:
			<el-switch v-model="fill" />
		</div>
		<el-space :fill="fill" wrap>
			<el-card v-for="i in 3" :key="i" class="box-card">
				<template #header>
					<div class="card-header">
						<span>Card name</span>
						<el-button class="button" type="text">Operation button</el-button>
					</div>
				</template>
				<div v-for="o in 4" :key="o" class="text item">
					{{ 'List item ' + o }}
				</div>
			</el-card>
		</el-space>
	</div>
	<div class="mb-4">
		<div style="margin-bottom: 15px">
			direction:
			<el-radio v-model="direction" label="horizontal">horizontal</el-radio>
			<el-radio v-model="direction" label="vertical">vertical</el-radio>
		</div>
		<div style="margin-bottom: 15px">
			fillRatio:
			<el-slider v-model="fillRatio" />
		</div>
		<el-space fill wrap :fill-ratio="fillRatio" :direction="direction" style="width: 100%">
			<el-card v-for="i in 5" :key="i" class="box-card">
				<template #header>
					<div class="card-header">
						<span>Card name</span>
						<el-button class="button" type="text">Operation button</el-button>
					</div>
				</template>
				<div v-for="o in 4" :key="o" class="text item">
					{{ 'List item ' + o }}
				</div>
			</el-card>
		</el-space>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const size = ref('default')
	const size2 = ref(20)
	const size3 = ref(10)
	const fill = ref(true)
	const direction = ref('horizontal')
	const fillRatio = ref(30)
</script>
<style scoped>
	.mb-4 {
		margin-bottom: 15px;
	}
</style>
