<template>
	<div class="ele-body el-list-scope-bodypadding">
		<!-- 地图位置选择弹窗 -->
		<!--<el-map-picker
      :need-city="true"
      :lock-scroll="false"
      :show.sync="showPicker"
      @done="onChoose"/>
    <el-map-picker
      :need-city="true"
      :search-type="1"
      :lock-scroll="false"
      :show.sync="showPicker2"
      @done="onChoose"/>-->
		<el-card shadow="never" header="弹窗选择位置">
			<el-tooltip content="POI检索模式" placement="top">
				<el-button size="default" class="ele-btn-icon" icon="el-icon-location-information" @click="showPicker">
					<span>地图选择位置 </span>
					<i class="el-icon-right" />
				</el-button>
			</el-tooltip>
			<el-button size="default" class="ele-btn-icon" icon="el-icon-location-information" @click="showPicker2">
				<span>关键字检索模式 </span>
				<i class="el-icon-right" />
			</el-button>
			<div style="margin-top: 12px;">选择位置: {{ form.location }}</div>
			<div style="margin-top: 12px;">详细地址: {{ form.address }}</div>
			<div style="margin-top: 12px;">经 纬 度 : {{ form.coordinate }}</div>
		</el-card>
		<el-card shadow="never" header="官网底部地图">
			<div ref="locationMap" style="max-width: 800px;height: 300px;"></div>
		</el-card>
		<el-card shadow="never" header="轨迹展示及轨迹回放">
			<div ref="trackMap" style="max-width: 800px;height: 300px;"></div>
			<div style="margin-top: 15px;">
				<el-button size="default" @click="startTrackAnim">开始动画</el-button>
				<el-button size="default" @click="pauseTrackAnim">暂停动画</el-button>
				<el-button size="default" @click="resumeTrackAnim">继续动画</el-button>
			</div>
		</el-card>
	</div>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const showPicker = ref(false)
	const showPicker2 = ref(false)
	const form = reactive({
		location: '',
		address: '',
		coordinate: ''
	})
	const carMarker = ref(null)
	const mapInsLocation = ref(null)
	const mapInsTrack = ref(null)
	const mounted = () => {
		this.renderLocationMap();
		this.renderTrackMap();
	}
	const lineData = [
		[116.478935, 39.997761],
		[116.478939, 39.997825],
		[116.478912, 39.998549],
		[116.478912, 39.998549],
		[116.478998, 39.998555],
		[116.478998, 39.998555],
		[116.479282, 39.99856],
		[116.479658, 39.998528],
		[116.480151, 39.998453],
		[116.480784, 39.998302],
		[116.480784, 39.998302],
		[116.481149, 39.998184],
		[116.481573, 39.997997],
		[116.481863, 39.997846],
		[116.482072, 39.997718],
		[116.482362, 39.997718],
		[116.483633, 39.998935],
		[116.48367, 39.998968],
		[116.484648, 39.999861]
	]
	/* 地图选择后回调 */
	const onChoose = (location) => {
		console.log(location);
		this.form = {
			location: location.city.province + '/' + location.city.city + '/' + location.city.district,
			address: location.name + ' ' + location.address,
			coordinate: location.lng + ',' + location.lat
		};
		this.showPicker = false;
		this.showPicker2 = false;
	}
	/* 渲染官网底部地图 */
	const renderLocationMap = () => {
		AMapLoader.load({
			'key': '006d995d433058322319fa797f2876f5',
			'version': '2.0',
			'plugins': ['AMap.InfoWindow', 'AMap.Marker']
		}).then((AMap) => {
			// 渲染地图
			let option = {
				zoom: 13, // 初缩放级别
				center: [114.346084, 30.511215 + 0.005] // 初始中心点
			};
			if (this.darkMode) {
				option.mapStyle = 'amap://styles/dark';
			}
			this.mapInsLocation = new AMap.Map(this.$refs.locationMap, option);
			// 创建信息窗体
			let infoWindow = new AMap.InfoWindow({
				content: `
            <div style="color: #333;">
              <div style="padding: 5px;font-size: 16px;">武汉易云智科技有限公司</div>
              <div style="padding: 0 5px;">地址：湖北省武汉市洪山区雄楚大道222号</div>
              <div style="padding: 0 5px;">电话：020-123456789</div>
            </div>
            <a style="padding: 8px 5px 0;text-decoration: none;display: inline-block;" class="ele-text-primary"
              href="//uri.amap.com/marker?position=114.346084,30.511215&name=武汉易云智科技有限公司"
              target="_blank">到这里去→</a>
          `
			});
			infoWindow.open(this.mapInsLocation, [114.346084, 30.511215]);
			let icon = new AMap.Icon({
				size: new AMap.Size(25, 34),
				image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
				imageSize: new AMap.Size(25, 34)
			});
			let marker = new AMap.Marker({
				icon: icon,
				position: [114.346084, 30.511215],
				offset: new AMap.Pixel(-12, -28)
			});
			marker.setMap(this.mapInsLocation);
			marker.on('click', () => {
				infoWindow.open(this.mapInsLocation);
			});
		}).catch(e => {
			console.error(e);
		});
	}
	/* 渲染轨迹回放地图 */
	const renderTrackMap = () => {
		AMapLoader.load({
			'key': '006d995d433058322319fa797f2876f5',
			'version': '2.0',
			'plugins': ['AMap.MoveAnimation', 'AMap.Marker', 'AMap.Polyline']
		}).then((AMap) => {
			// 渲染地图
			let option = {
				zoom: 17,
				center: [116.478935, 39.997761],
			};
			if (this.darkMode) {
				option.mapStyle = 'amap://styles/dark';
			}
			this.mapInsTrack = new AMap.Map(this.$refs.trackMap, option);
			// 创建小车marker
			this.carMarker = new AMap.Marker({
				map: this.mapInsTrack,
				position: [116.478935, 39.997761],
				icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
				offset: new AMap.Pixel(-13, -26),
			});
			// 绘制轨迹
			new AMap.Polyline({
				map: this.mapInsTrack,
				path: this.lineData,
				showDir: true,
				strokeColor: '#28F', // 线颜色
				strokeOpacity: 1, // 线透明度
				strokeWeight: 6, // 线宽
				//strokeStyle: 'solid'  // 线样式
			});
			// 通过的轨迹
			let passedPolyline = new AMap.Polyline({
				map: this.mapInsTrack,
				showDir: true,
				strokeColor: '#4B5', // 线颜色
				strokeOpacity: 1, // 线透明度
				strokeWeight: 6, // 线宽
			});
			// 小车移动回调
			this.carMarker.on('moving', function(e) {
				passedPolyline.setPath(e.passedPath);
			});
			// 地图自适应
			this.mapInsTrack.setFitView();
		}).catch(e => {
			console.error(e);
		});
	}
	/* 开始轨迹回放动画 */
	const startTrackAnim = () => {
		this.carMarker.stopMove();
		this.carMarker.moveAlong(this.lineData, {
			duration: 200,
			autoRotation: true,
		});
	}
	/* 暂停轨迹回放动画 */
	const pauseTrackAnim = () => {
		this.carMarker.pauseMove();
	}
	/* 继续开始轨迹回放动画 */
	const resumeTrackAnim = () => {
		this.carMarker.resumeMove();
	}
	const watch = () => {
		const darkMode = () => {
			if (this.mapInsLocation) {
				if (this.darkMode) {
					this.mapInsLocation.setMapStyle('amap://styles/dark');
				} else {
					this.mapInsLocation.setMapStyle('amap://styles/normal');
				}
			}
			if (this.mapInsTrack) {
				if (this.darkMode) {
					this.mapInsTrack.setMapStyle('amap://styles/dark');
				} else {
					this.mapInsTrack.setMapStyle('amap://styles/normal');
				}
			}
		}
	}
</script>

<style scoped>
  .el-list-scope-bodypadding{padding:15px;}
	.el-card+.el-card {
		margin-top: 15px;
	}
</style>
