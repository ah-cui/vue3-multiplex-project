<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item index="1">Processing Center</el-menu-item>
		<el-sub-menu index="2">
			<template #title>Workspace</template>
			<el-menu-item index="2-1">item one</el-menu-item>
			<el-menu-item index="2-2">item two</el-menu-item>
			<el-menu-item index="2-3">item three</el-menu-item>
			<el-sub-menu index="2-4">
				<template #title>item four</template>
				<el-menu-item index="2-4-1">item one</el-menu-item>
				<el-menu-item index="2-4-2">item two</el-menu-item>
				<el-menu-item index="2-4-3">item three</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="3" disabled>Info</el-menu-item>
		<el-menu-item index="4">Orders</el-menu-item>
	</el-menu>
	<div class="h-6" />
	<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
		text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
		<el-menu-item index="1">Processing Center</el-menu-item>
		<el-sub-menu index="2">
			<template #title>Workspace</template>
			<el-menu-item index="2-1">item one</el-menu-item>
			<el-menu-item index="2-2">item two</el-menu-item>
			<el-menu-item index="2-3">item three</el-menu-item>
			<el-sub-menu index="2-4">
				<template #title>item four</template>
				<el-menu-item index="2-4-1">item one</el-menu-item>
				<el-menu-item index="2-4-2">item two</el-menu-item>
				<el-menu-item index="2-4-3">item three</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="3" disabled>Info</el-menu-item>
		<el-menu-item index="4">Orders</el-menu-item>
	</el-menu>

	<h3>侧栏</h3>
	<el-row class="tac">
		<el-col :span="12">
			<h5 class="mb-2">Default colors</h5>
			<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				<el-sub-menu index="1">
					<template #title>
						<el-icon>
							<location />
						</el-icon>
						<span>Navigator One</span>
					</template>
					<el-menu-item-group title="Group One">
						<el-menu-item index="1-1">item one</el-menu-item>
						<el-menu-item index="1-2">item one</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="Group Two">
						<el-menu-item index="1-3">item three</el-menu-item>
					</el-menu-item-group>
					<el-sub-menu index="1-4">
						<template #title>item four</template>
						<el-menu-item index="1-4-1">item one</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
				<el-menu-item index="2">
					<el-icon>
						<icon-menu />
					</el-icon>
					<span>Navigator Two</span>
				</el-menu-item>
				<el-menu-item index="3" disabled>
					<el-icon>
						<document />
					</el-icon>
					<span>Navigator Three</span>
				</el-menu-item>
				<el-menu-item index="4">
					<el-icon>
						<setting />
					</el-icon>
					<span>Navigator Four</span>
				</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :span="12">
			<h5 class="mb-2">Custom colors</h5>
			<el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
				default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
				<el-sub-menu index="1">
					<template #title>
						<el-icon>
							<location />
						</el-icon>
						<span>Navigator One</span>
					</template>
					<el-menu-item-group title="Group One">
						<el-menu-item index="1-1">item one</el-menu-item>
						<el-menu-item index="1-2">item one</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="Group Two">
						<el-menu-item index="1-3">item three</el-menu-item>
					</el-menu-item-group>
					<el-sub-menu index="1-4">
						<template #title>item four</template>
						<el-menu-item index="1-4-1">item one</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
				<el-menu-item index="2">
					<el-icon>
						<icon-menu />
					</el-icon>
					<span>Navigator Two</span>
				</el-menu-item>
				<el-menu-item index="3" disabled>
					<el-icon>
						<document />
					</el-icon>
					<span>Navigator Three</span>
				</el-menu-item>
				<el-menu-item index="4">
					<el-icon>
						<setting />
					</el-icon>
					<span>Navigator Four</span>
				</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
	<h3>可折叠的菜单</h3>
	<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
		<el-radio-button :label="false">expand</el-radio-button>
		<el-radio-button :label="true">collapse</el-radio-button>
	</el-radio-group>
	<el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
		@close="handleClose">
		<el-sub-menu index="1">
			<template #title>
				<el-icon>
					<location />
				</el-icon>
				<span>Navigator One</span>
			</template>
			<el-menu-item-group>
				<template #title><span>Group One</span></template>
				<el-menu-item index="1-1">item one</el-menu-item>
				<el-menu-item index="1-2">item two</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="Group Two">
				<el-menu-item index="1-3">item three</el-menu-item>
			</el-menu-item-group>
			<el-sub-menu index="1-4">
				<template #title><span>item four</span></template>
				<el-menu-item index="1-4-1">item one</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="2">
			<el-icon>
				<icon-menu />
			</el-icon>
			<template #title>Navigator Two</template>
		</el-menu-item>
		<el-menu-item index="3" disabled>
			<el-icon>
				<document />
			</el-icon>
			<template #title>Navigator Three</template>
		</el-menu-item>
		<el-menu-item index="4">
			<el-icon>
				<setting />
			</el-icon>
			<template #title>Navigator Four</template>
		</el-menu-item>
	</el-menu>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const activeIndex = ref('1')
	const activeIndex2 = ref('1')
	import {
		Location,
		Document,
		Menu as IconMenu,
		Setting,
	} from '@element-plus/icons-vue'
</script>
