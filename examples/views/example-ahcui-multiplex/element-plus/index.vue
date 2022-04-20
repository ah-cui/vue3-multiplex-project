<template>
	<!--按钮开始-->
	<div class="el-list-scope-bodypadding">
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Button 按钮</span>
				</div>
			</template>
			<Button type="primary">Primary</Button>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Border 边框</span>
				</div>
			</template>
			<Border></Border>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Link 链接</span>
				</div>
			</template>
			<Link>
			</Link>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Space 间距</span>
				</div>
			</template>
			<Space></Space>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Cascader 级联选择器</span>
				</div>
			</template>
			<Cascader></Cascader>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Checkbox 多选框</span>
				</div>
			</template>
			<Checkbox></Checkbox>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>DatePicker 日期选择器</span>
				</div>
			</template>
			<DatePicker></DatePicker>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>DateTimePicker 日期时间选择器</span>
				</div>
			</template>
			<DateTimePicker></DateTimePicker>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Form 表单</span>
				</div>
			</template>
			<Form></Form>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Input 输入框</span>
				</div>
			</template>
			<Input></Input>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Input Number 数字输入框</span>
				</div>
			</template>
			<InputNumber></InputNumber>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Radio 单选框</span>
				</div>
			</template>
			<Radio></Radio>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Select 选择器</span>
				</div>
			</template>
			<Select></Select>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Slider 滑块</span>
				</div>
			</template>
			<Slider></Slider>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Switch 开关</span>
				</div>
			</template>
			<Switch></Switch>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Transfer 穿梭框</span>
				</div>
			</template>
			<Transfer></Transfer>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Upload 上传</span>
				</div>
			</template>
			<Upload></Upload>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Avatar 头像</span>
				</div>
			</template>
			<Avatar></Avatar>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Badge 徽章</span>
				</div>
			</template>
			<Badge></Badge>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Calendar 日历</span>
				</div>
			</template>
			<Calendar></Calendar>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Card 卡片</span>
				</div>
			</template>
			<Card></Card>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Carousel 走马灯</span>
				</div>
			</template>
			<Carousel></Carousel>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Descriptions 描述列表</span>
				</div>
			</template>
			<Descriptions></Descriptions>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Pagination 分页</span>
				</div>
			</template>
			<Pagination></Pagination>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Progress 进度条</span>
				</div>
			</template>
			<Progress></Progress>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Result 结果</span>
				</div>
			</template>
			<Result></Result>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Table 表格</span>
				</div>
			</template>
			<Table></Table>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Tag 标签</span>
				</div>
			</template>
			<Tag></Tag>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Timeline 时间线</span>
				</div>
			</template>
			<Timeline></Timeline>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Dropdown 下拉菜单</span>
				</div>
			</template>
			<Dropdown></Dropdown>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Menu 菜单</span>
				</div>
			</template>
			<Menu></Menu>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Steps 步骤条</span>
				</div>
			</template>
			<Steps></Steps>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Tabs 标签页</span>
				</div>
			</template>
			<Tabs></Tabs>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Alert 提示</span>
				</div>
			</template>
			<Alert></Alert>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Notification 通知</span>
				</div>
			</template>
			<Notification></Notification>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Tooltip 文字提示</span>
				</div>
			</template>
			<Tooltip></Tooltip>
		</el-card>

	</div>
</template>

<script>
	import Button from './components/button'
	import Border from './components/border'
	import Link from './components/link'
	import Space from './components/space'
	import Cascader from './components/cascader'
	import Checkbox from './components/checkbox'
	import DatePicker from './components/datePicker'
	import DateTimePicker from './components/dateTimePicker'
	import Form from './components/form'
	import Input from './components/input'
	import InputNumber from './components/inputNumber'
	import Radio from './components/radio'
	import Select from './components/select'
	import Slider from './components/slider'
	import Switch from './components/switch'
	import Transfer from './components/transfer'
	import Upload from './components/upload'
	import Avatar from './components/avatar'
	import Badge from './components/badge'
	import Calendar from './components/calendar'
	import Card from './components/card'
	import Carousel from './components/carousel'
	import Descriptions from './components/descriptions'
	import Pagination from './components/pagination'
	import Progress from './components/progress'
	import Result from './components/result'
	import Table from './components/table'
	import Tag from './components/tag'
	import Timeline from './components/timeline'
	import Dropdown from './components/dropdown'
	import Menu from './components/menu'
	import Steps from './components/steps'
	import Tabs from './components/tabs'
	import Alert from './components/alert'
	import Notification from './components/notification'
	import Tooltip from './components/tooltip'



	export default {
		components: {
			Button,
			Border,
			Link,
			Space,
			Cascader,
			Checkbox,
			DatePicker,
			DateTimePicker,
			Form,
			Input,
			InputNumber,
			Radio,
			Select,
			Slider,
			Switch,
			Transfer,
			Upload,
			Avatar,
			Badge,
			Calendar,
			Card,
			Carousel,
			Descriptions,
			Pagination,
			Progress,
			Result,
			Table,
			Tag,
			Timeline,
			Dropdown,
			Menu,
			Steps,
			Tabs,
			Alert,
			Notification,
			Tooltip
		}
	}
</script>

<style scoped>
	.el-card+.el-card {
		margin-top: 15px;
	}
</style>
