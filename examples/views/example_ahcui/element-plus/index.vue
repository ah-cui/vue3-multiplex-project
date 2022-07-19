<template>
	<el-card style="width:calc(100% - 20px);margin: auto;">
        <div class="dashboard-img" style="font-size:30px;margin:10px 10px">
         @ahcui/vue3-multiplex@1.0.0主题色（含黑暗模式）与element-plus适配表现
        </div>
        <el-alert type="info" :closable="false" show-icon>
          <template #default>
				@ahcui/vue3-multiplex@1.0.0对Element-Plus控件样式进行了适配，测试结果可查看此页面;<br/>
				1：框架为VUE+Element-plus体系，因框架换色需要同时切换Element-plus控件的部分颜色，因此进行了特殊处理；<br/>
				2：框架的换色对其他控件体系不会产生影响或产生意想不到的影响；<br/>
				3：无法枚举所有可能用到的三方组件，因此对于其他控件体系，三方组件，图表等未做适配的组件可能会在后续以插件方式或项目自行增加支持;<br/>
				4：为了使框架换色能够覆盖项目开发的页面，建议项目页面使用已适配过的控件体系开发（如：Element-Plus），尽可能少用原生Dom;
          </template>
        </el-alert>
	</el-card>
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
					<span>Scrollbar 滚动条</span>
				</div>
			</template>
			<scrollbar></scrollbar>
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
					<span>TimePicker 时间选择器</span>
				</div>
			</template>
			<Time-Picker></Time-Picker>
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
					<span>Dialog 对话框</span>
				</div>
			</template>
			<Dialog></Dialog>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Drawer 抽屉</span>
				</div>
			</template>
			<Drawer></Drawer>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>message 消息提示</span>
				</div>
			</template>
			<message></message>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>messageBox 消息弹出框</span>
				</div>
			</template>
			<message-Box></message-Box>
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
					<span>Pop confirm 弹出确认框</span>
				</div>
			</template>
			<pop-confirm></pop-confirm>
		</el-card>
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>Popover 弹出框</span>
				</div>
			</template>
			<popover></popover>
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
	import Scrollbar from './components/scrollbar'
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
	import TimePicker from './components/timepicker'
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
	import TreeSelect from './components/treeSelect'
	import Dropdown from './components/dropdown'
	import Menu from './components/menu'
	import Steps from './components/steps'
	import Tabs from './components/tabs'
	import Alert from './components/alert'
	import Dialog from './components/dialog'
	import Drawer from './components/drawer'
	import Message from './components/message'
	import MessageBox from './components/messageBox'
	import Notification from './components/notification'
	import PopConfirm from './components/popConfirm'
	import Popover from './components/popover'
	import Tooltip from './components/tooltip'



	export default {
		components: {
			Button,
			Border,
			Link,
			Scrollbar,
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
			TimePicker,
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
			TreeSelect,
			Dropdown,
			Menu,
			Steps,
			Tabs,
			Alert,
			Dialog,
			Drawer,
			Message,
			MessageBox,
			Notification,
			PopConfirm,
			Popover,
			Tooltip
		}
	}
</script>

<style scoped>

.el-card+.el-card {
	margin-top: 15px;
}
.box-card {
	width:calc(100% - 20px);
	margin: 10px;
}
</style>
