<template style="background-color: rgb(242,242,242);">
	<div class="dashboard3" style="width: calc(100%-15px); height: calc(100%-15px); margin:15px">
		<div class="container01">
			<div class="container01-aside-left">
				<div class="aside-header">
					<el-card class="header">
						<div style="padding-left: 5%;">
							<img src="/examples/static/dashboardImg/header01.png">
						</div>
						<div style="padding-right: 5%;">
							<p style="font-size: 20px;font-weight: bold;padding-left: 30%;color: #666;">190
							</p>
							<p style="font-size: 14px;color: gray;">活动任务</p>
						</div>
					</el-card>
					<el-card class="header">
						<div style="padding-left: 5%;">
							<img src="/examples/static/dashboardImg/header02.png">
						</div>
						<div style="padding-right: 5%;">
							<p style="font-size: 20px;font-weight: bold;padding-left: 5%;color: #666;">62</p>
							<p style="font-size: 14px;color: gray;">项目</p>
						</div>
					</el-card>
					<el-card class="header">
						<div style="padding-left: 5%;">
							<img src="/examples/static/dashboardImg/header03.png">
						</div>
						<div style="padding-right: 5%;">
							<p style="font-size: 20px;font-weight: bold;color: #666;">14</p>
							<p style="font-size: 14px;color: gray;">团队</p>
						</div>
					</el-card>
					<el-card class="header">
						<div style="padding-left: 5%;">
							<img src="/examples/static/dashboardImg/money.png">
						</div>
						<div style="padding-right: 5%;">
							<p style="font-size: 20px;font-weight: bold;color: #666;">15562元</p>
							<p style="font-size: 14px;color: gray;padding-left: 64%;">预算</p>
						</div>
					</el-card>
				</div>
				<div class="aside-article">
					<el-card class="article1">
						<div style="display: flex;justify-content: space-between;align-items: center;">
							<div>
								<p style="font-size: 16px;font-weight: bold;color: #666;">进度条</p>
								<p style="font-size: 14px;color: gray;">最近一个月概览</p>
							</div>
							<div>
								<el-button type="primary" plain style="width: 25px;" autofocus="true">日</el-button>
								<el-button type="primary" plain style="width: 37px;">星期</el-button>
								<el-button type="primary" plain style="width: 25px;">月</el-button>
							</div>
						</div>
						<div style="display: flex;justify-content: space-between;align-items: center;margin: 15px;">
							<div style="width: 50px; height: 50px;background-color: rgb(228,255,244);display: flex;justify-content: center;align-items: center;">
								<img src="/examples/static/dashboardImg/topwrite.png">
							</div>
							<div style="width: 25%;margin-left: -30px;">
								<p style="font-size: 15px; font-weight: bold;color: #666;">顶级作者</p>
								<p style="font-size: 12px;color: gray;">HTML/CSS/JS/Python</p>
							</div>
							<div style="width: 30%;">
								<p style="margin-bottom: 5px;">进度</p>
								<el-progress :percentage="90" style="width: 100%;" color="rgb(27,201,130)" />
							</div>
							<div style="width: 10%;">
								<el-button type="primary" plain style="width: 25px;">→</el-button>
							</div>
						</div>
						<div style="display: flex;justify-content: space-between;align-items: center;margin: 15px;">
							<div
								style="width: 50px; height: 50px;background-color: rgb(255,248,221);display: flex;justify-content: center;align-items: center;">
								<img src="/examples/static/dashboardImg/hotwrite.png">
							</div>
							<div style="width: 25%;margin-left: -30px;">
								<p style="font-size: 15px; font-weight: bold;color: #666;">热门作家</p>
								<p style="font-size: 12px;color: gray;">HTML/Vue/JS/Laravel</p>
							</div>
							<div style="width: 30%;">
								<p style="margin-bottom: 5px;">进度</p>
								<el-progress :percentage="30" style="width: 100%;" color="rgb(255,192,0)" />
							</div>
							<div style="width: 10%;">
								<el-button type="primary" plain style="width: 25px;">→</el-button>
							</div>
						</div>
						<div style="display: flex;justify-content: space-between;align-items: center;margin: 15px;">
							<div
								style="width: 50px; height: 50px;background-color: rgb(241,250,255);display: flex;justify-content: center;align-items: center;">
								<img src="/examples/static/dashboardImg/newpdt.png">
							</div>
							<div style="width: 25%;margin-left: -30px;">
								<p style="font-size: 15px; font-weight: bold;color: #666;">新产品</p>
								<p style="font-size: 12px;color: gray;">HTML/CSS/Python/Java</p>
							</div>
							<div style="width: 30%;">
								<p style="margin-bottom: 5px;">进度</p>
								<el-progress :percentage="50" style="width: 100%;" color="rgb(0,168,255)" />
							</div>
							<div style="width: 10%;">
								<el-button type="primary" plain style="width: 25px;">→</el-button>
							</div>
						</div>
						<div style="display: flex;justify-content: space-between;align-items: center;margin: 15px;">
							<div
								style="width: 50px; height: 50px;background-color: rgb(255,239,243);display: flex;justify-content: center;align-items: center;">
								<img src="/examples/static/dashboardImg/week.png">
							</div>
							<div style="width: 25%;margin-left: -30px;">
								<p style="font-size: 15px; font-weight: bold;color: rgba(0,0,0,0.7);">每周</p>
								<p style="font-size: 12px;color: gray;">HTML/CSS/Python/JS</p>
							</div>
							<div style="width: 30%;">
								<p style="margin-bottom: 5px;">进度</p>
								<el-progress :percentage="20" style="width: 100%;" color="rgb(239,42,90)" />
							</div>
							<div style="width: 10%;">
								<el-button type="primary" plain style="width: 25px;">→</el-button>
							</div>
						</div>
					</el-card>
					<el-card class="article2">
						<div style="">
							<p style="font-size: 16px;font-weight: bold;color: #666;">饼状图</p>
							<p style="font-size: 14px;color: gray;">85,5574元</p>
						</div>
						<div style="display: flex;justify-content: flex-start;align-items: flex-start;">
							<div style="width: 60%;">
								<div id="chartsA" ref="chart" class="chartsA">

								</div>
							</div>
							<div style="width: 40%;display: flex;justify-content: flex-start;flex-direction: column;">
								<el-button style="width: 90%;height: 65px;border-radius: 20px;border: none;">
									<div style="margin-right: 10px;">
										<img src="/examples/static/dashboardImg/flw.png" alt="">
									</div>
									<div>
										<p
											style="font-size: 14px; font-weight: bold;color: #666;text-align: left;">
											人花SaaS</p>
										<p style="font-size: 12px;color: gray;margin-top: 5px;">人力资源解决方案</p>
									</div>
								</el-button>
								<el-button
									style="width: 90%;height: 65px;border-radius: 20px;margin: 0px;border: none;">
									<div style="margin-right: 10px;">
										<img src="/examples/static/dashboardImg/bld.png" alt="">
									</div>
									<div>
										<p
											style="font-size: 14px; font-weight: bold;color: #666;text-align: left;">
											建筑工作室</p>
										<p style="font-size: 12px;color: gray;margin-top: 5px;">人力资源解决方案</p>
									</div>
								</el-button>
								<el-button
									style="width: 90%;height: 65px;border-radius: 20px;margin: 0px;border: none;">
									<div style="margin-right: 10px;">
										<img src="/examples/static/dashboardImg//idea.png" alt="">
									</div>
									<div>
										<p
											style="font-size: 14px; font-weight: bold;color: #666;text-align: left;">
											狡猾的解决</p>
										<p style="font-size: 12px;color: gray;margin-top: 5px;">人力资源解决方案</p>
									</div>
								</el-button>
								<el-button
									style="width: 90%;height: 65px;border-radius: 20px;margin: 0px;border: none;">
									<div style="margin-right: 10px;">
										<img src="/examples/static/dashboardImg/last.png" alt="">
									</div>
									<div>
										<p
											style="font-size: 14px; font-weight: bold;color: #666;text-align: left;">
											我的流量</p>
										<p style="font-size: 12px;color: gray;margin-top: 5px;">人力资源解决方案</p>
									</div>
								</el-button>
							</div>
						</div>
					</el-card>
				</div>
			</div>
			<el-card class="container01-aside-right">
				<div style="margin-bottom: 25px;">
					<p style="font-size: 16px;font-weight: bold;color: #666;">新客户</p>
				</div>
				<div
					style="display: flex;justify-content: space-between;align-items: center;margin: 15px;border-bottom: 1px solid rgb(218,223,227);padding-bottom: 10px;">
					<div>
						<img src="/examples/static/dashboardImg/newuser.png">
					</div>
					<div style="width: 60%;margin-left: 0px;">
						<div style="display: flex;justify-content: flex-start;align-items: center;">
							<p style="font-size: 15px; font-weight: bold;width: 80px;color: #666;">罗伊桑德斯</p>
							<p style="width: 35px; height: 15px; background-color: rgb(254,226,222);color: rgb(250,138,124);text-align: center;line-height: 15px;">
								中国</p>
						</div>
						<p style="font-size: 14px;color: gray;">脸书CEO</p>
					</div>
					<div>
						<el-button type="primary" plain style="width: 60px;">
							<img src="/examples/static/dashboardImg/wx.png">
							<p style="margin-left: 3px;">联系</p>
						</el-button>
					</div>
				</div>
				<div
					style="display: flex;justify-content: space-between;align-items: center;margin: 15px;border-bottom: 1px solid rgb(218,223,227);padding-bottom: 10px;">
					<div>
						<img src="/examples/static/dashboardImg/tuceng2.png">
					</div>
					<div style="width: 60%;margin-left: 0px;">
						<div style="display: flex;justify-content: flex-start;align-items: center;">
							<p style="font-size: 15px; font-weight: bold;width: 40px;color: #666;">马云</p>
							<p
								style="width: 35px; height: 15px; background-color: rgb(214,245,255);color: rgb(109,211,253);text-align: center;line-height: 15px;">
								中国</p>
						</div>
						<p style="font-size: 14px;color: gray;">阿里巴巴CEO</p>
					</div>
					<div>
						<el-button type="primary" plain style="width: 60px;">
							<img src="/examples/static/dashboardImg/wx.png">
							<p style="margin-left: 3px;">联系</p>
						</el-button>
					</div>
				</div>
				<div
					style="display: flex;justify-content: space-between;align-items: center;margin: 15px;border-bottom: 1px solid rgb(218,223,227);padding-bottom: 10px;">
					<div>
						<img src="/examples/static/dashboardImg/kh.png">
					</div>
					<div style="width: 60%;margin-left: 0px;">
						<div style="display: flex;justify-content: flex-start;align-items: center;">
							<p style="font-size: 15px; font-weight: bold;width: 55px;color: #666;">马化腾</p>
							<p
								style="width: 35px; height: 15px; background-color: rgb(253,218,232);color: rgb(255,132,181);text-align: center;line-height: 15px;">
								中国</p>
						</div>
						<p style="font-size: 14px;color: gray;">腾讯CEO</p>
					</div>
					<div>
						<el-button type="primary" plain style="width: 60px;">
							<img src="/examples/static/dashboardImg/wx.png">
							<p style="margin-left: 3px;">联系</p>
						</el-button>
					</div>
				</div>
				<div
					style="display: flex;justify-content: space-between;align-items: center;margin: 15px;border-bottom: 1px solid rgb(218,223,227);padding-bottom: 10px;">
					<div>
						<img src="/examples/static/dashboardImg/tuceng1.png">
					</div>
					<div style="width: 60%;margin-left: 0px;">
						<div style="display: flex;justify-content: flex-start;align-items: center;">
							<p style="font-size: 15px; font-weight: bold;width: 55px;color: #666;">马斯克</p>
							<p
								style="width: 35px; height: 15px; background-color: rgb(223,246,235);color: rgb(135,239,197);text-align: center;line-height: 15px;">
								中国</p>
						</div>
						<p style="font-size: 14px;color: gray;">特斯拉CEO</p>
					</div>
					<div>
						<el-button type="primary" plain style="width: 60px;">
							<img src="/examples/static/dashboardImg/wx.png">
							<p style="margin-left: 3px;">联系</p>
						</el-button>
					</div>
				</div>
				<div style="display: flex;justify-content: space-between;align-items: center;margin: 15px;">
					<div>
						<img src="/examples/static/dashboardImg/userkh.png">
					</div>
					<div style="width: 60%;margin-left: 0px;">
						<div style="display: flex;justify-content: flex-start;align-items: center;">
							<p style="font-size: 15px; font-weight: bold;width: 70px;color: #666;">扎克伯格</p>
							<p
								style="width: 35px; height: 15px; background-color: rgb(228,223,247);color: rgb(165,149,232);text-align: center;line-height: 15px;">
								中国</p>
						</div>
						<p style="font-size: 14px;color: gray;">FacebookCEO</p>
					</div>
					<div>
						<el-button type="primary" plain style="width: 60px;">
							<img src="/examples/static/dashboardImg/wx.png">
							<p style="margin-left: 3px;">联系</p>
						</el-button>
					</div>
				</div>
			</el-card>
		</div>
		<el-card class="container02">
			<div style="display: flex;justify-content: space-between;align-items: center;">
				<div>
					<p style="font-size: 16px;font-weight: bold;color: #666;">本月项目</p>
					<p style="font-size: 14px;color: gray;">最近一个月概览</p>
				</div>
				<div>
					<el-select v-model="value" class="m-2" placeholder="Select" size="large">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
					</el-select>
				</div>
			</div>
			<el-table :data="tableData" width="100%" height="calc(100% - 15px)" :row-style="{height:'70px'}"
				:header-row-style="{height:'50px'}">
				<el-table-column label="组长" width="300" align="center">
					<template #default="scope">
						<div style="display: flex;justify-content: center;align-items: center;">
							<el-image :src="scope.row.imgUrl"></el-image>
							<div style="margin-left: 10px;">
								<p style="text-align: start;font-size: 14px;">{{scope.row.rankfirst}}</p>
								<p style="font-size: 12px;">{{scope.row.ranksecond}}</p>
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="pdt" label="项目" width="200" align="center" />
				<el-table-column prop="team" label="团队" width="200" align="center">
					<template #default="scope">
						<div style="display: flex;justify-content: center;align-items: center;">
							<el-image v-for="item in scope.row.team" :src="item" class="teamg"></el-image>
							<el-button style="width: 44px; height: 44px; border: 1px solid gray;border-radius: 50%;">
								<span style="font-size: 24px; color: gray;">+</span>
							</el-button>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="状态" width="150" align="center">
					<template #default="scope">
						<div style="padding-top: 20px;">
							<el-image :src="scope.row.point"></el-image>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="week" label="周" width="200" align="center" />
				<el-table-column prop="money" label="预算" align="center" />
			</el-table>
		</el-card>
	</div>
</template>
<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import * as echarts from 'echarts/core';
	import {
		TooltipComponent,
		LegendComponent
	} from 'echarts/components';
	import {
		PieChart
	} from 'echarts/charts';
	import {
		LabelLayout
	} from 'echarts/features';
	import {
		CanvasRenderer
	} from 'echarts/renderers';
	echarts.use([
		TooltipComponent,
		LegendComponent,
		PieChart,
		CanvasRenderer,
		LabelLayout
	]);
	const chart = ref();
	onMounted(() => {
		init();
	})

	function init() {
		var myChart = echarts.init(document.querySelector('.dashboard3 .chartsA'));
		var option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				left: '40px',
				top: 'bottom',
			},
			series: [{
				name: '饼状图',
				type: 'pie',
				radius: ['40%', '70%'],
				center: ['140px', '40%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '20',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [{
						value: 1048,
						name: 'SNT'
					},
					{
						value: 735,
						name: '雷克斯'
					},
					{
						value: 580,
						name: 'SAP'
					},
				]
			}]
		};
		option && myChart.setOption(option);
	}

	const value = ref('Option3')
	const options = [{
			value: 'Option1',
			label: '日刊',
		},
		{
			value: 'Option2',
			label: '周刊',
		},
		{
			value: 'Option3',
			label: '月刊',
		},
		{
			value: 'Option4',
			label: '季度刊',
		},
		{
			value: 'Option5',
			label: '年刊',
		},
	]
	const tableData = [{
			imgUrl: '/examples/static/dashboardImg/user01.png',
			rankfirst: "陈凯",
			ranksecond: "chenkaikai@ahcui.com",
			pdt: '云平台',
			team: ['/examples/static/dashboardImg/user03.png', '/examples/static/dashboardImg/user04.png',
				'/examples/static/dashboardImg/user01.png'
			],
			point: "/examples/static/dashboardImg/point01.png",
			week: "40",
			money: '10.5万元',
		},
		{
			imgUrl: '/examples/static/dashboardImg/user02.png',
			rankfirst: "张恒",
			ranksecond: "zhangheng@ahcui.com",
			pdt: 'ahcui框架',
			team: ['/examples/static/dashboardImg/user03.png', '/examples/static/dashboardImg/user04.png'],
			point: "/examples/static/dashboardImg/point02.png",
			week: "35",
			money: '9.6万元',
		},
		{
			imgUrl: '/examples/static/dashboardImg/td.png',
			rankfirst: "陈薇",
			ranksecond: "chenweiwe@ahcui.com",
			pdt: 'vsai',
			team: ['/examples/static/dashboardImg/user03.png', '/examples/static/dashboardImg/user04.png',
				'/examples/static/dashboardImg/user05.png'
			],
			point: "/examples/static/dashboardImg/point01.png",
			week: "30",
			money: '11万元',
		}
	]
</script>
<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}

	.container01 {
		width: 100%;
		height: 445px;
		margin-bottom: 15px;
		display: flex;
		justify-content: flex-start;
	}

	.container02 {
		width: 100%;
		height: 361px;
		/*background-color: white;*/
	}

	.container01-aside-left {
		width: 73%;
		height: 445px;
		margin-right: 1%;
	}

	.container01-aside-right {
		width: 26%;
		height: 445px;
		/*background-color: white;*/
	}

	.aside-header {
		width: 100%;
		height: 87px;
		margin-bottom: 15px;
		display: flex;
		justify-content: space-between;
	}

	.aside-article {
		width: 100%;
		height: 342px;
		display: flex;
		justify-content: space-between;
	}

	.header {
		width: 24.1%;
		height: 87px;
		/*background-color: white;*/
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.article1,
	.article2 {
		width: 49.4%;
		height: 342px;
		/*background-color: white;*/
	}

	.teamg {
		width: 44px;
		height: 44px;
		margin-left: -20px;
	}

	.chartsA {
		width: 300px;
		height: 250px;
	}

  *>>> .header .el-card__body{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
