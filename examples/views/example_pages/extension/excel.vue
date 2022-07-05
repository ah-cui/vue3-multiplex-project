<template>
	<div class="el-body el-list-scope-bodypaddingb">
		<el-card shadow="never" header="导出excel">
			<div class="el-table-tool">
				<el-upload action="" :before-upload="importFile" :show-file-list="false" class="el-action"
					accept=".xls,.xlsx,.csv">
					<el-button size="default">导入excel
					</el-button>
				</el-upload>
				<el-upload action="" :before-upload="importFile2" :show-file-list="false" class="el-action"
					accept=".xls,.xlsx,.csv">
					<el-button size="default">导出单元格合并
					</el-button>
				</el-upload>
				<el-upload action="" :before-upload="importFile3" :show-file-list="false" class="el-action"
					accept=".xls,.xlsx,.csv">
					<el-button size="default">导出远中</el-button>
				</el-upload>
			</div>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="日期" width="150">
				</el-table-column>
				<el-table-column label="配送信息">
					<el-table-column prop="name" label="姓名" width="120">
					</el-table-column>
					<el-table-column label="地址">
						<el-table-column prop="province" label="省份">
						</el-table-column>
						<el-table-column prop="city" label="市区" width="120">
						</el-table-column>
						<el-table-column prop="address" label="地址">
						</el-table-column>
						<el-table-column prop="zip" label="邮编" width="120">
						</el-table-column>
					</el-table-column>
				</el-table-column>
			</el-table>
		</el-card>
		<el-card shadow="never" header="导入excel">
			<!-- 操作按钮 -->
			<div class="el-table-tool">
				<el-upload action="" :before-upload="importFile" :show-file-list="false" class="el-action"
					accept=".xls,.xlsx,.csv">
					<el-button size="default">导入excel
					</el-button>
				</el-upload>
				<el-upload action="" :before-upload="importFile2" :show-file-list="false" class="el-action"
					accept=".xls,.xlsx,.csv">
					<el-button size="default">导入自动拆分合并
					</el-button>
				</el-upload>
				<el-upload action="" :before-upload="importFile3" :show-file-list="false" class="el-action"
					accept=".xls,.xlsx,.csv">
					<el-button size="default">导入保持合并样式
					</el-button>
				</el-upload>
			</div>
			数据表格
			<el-table :data="importData" :span-method="spanMethod" size="mini" border style="width: 100%;">
				<el-table-column type="index" width="45" align="center" />
				<el-table-column v-for="(key,index) in importTitle" :key="index" :prop="key" :label="key" align="center"
					show-overflow-tooltip />
			</el-table>
			<el-row :gutter="30">
				<el-col :md="12">
					<div style="padding: 15px 0;">二维数组格式数据：</div>
					<pre style="max-height: 300px;overflow: auto;">{{ JSON.stringify(importDataAoa, null, 4) }}</pre>
				</el-col>
				<el-col :md="12">
					<div style="padding: 15px 0;">JSON格式数据：</div>
					<pre style="max-height: 300px;overflow: auto;">{{ JSON.stringify(importData, null, 4) }}</pre>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	// 选中数据
	const select = ref('')
	// 导入数据
	const importData = ref('')
	// 导入数据的列
	const importTitle = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
	// 导入数据二维数组形式
	const importDataAoa = ref('')
	const time = ref('')
	const tableData = ref([{
		date: '2016-05-03',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}, {
		date: '2016-05-02',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}, {
		date: '2016-05-04',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}, {
		date: '2016-05-01',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}, {
		date: '2016-05-08',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}, {
		date: '2016-05-06',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}, {
		date: '2016-05-07',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333
	}])

	/* 导出选中数据 */
	const exportSel = () => {
		if (this.select.length === 0) {
			return this.$message.error('请至少选择一条数据');
		}
		let array = [
			['用户名', '省', '市', '区', '街道', '详细地址', '金额']
		];
		this.select.forEach(d => {
			array.push([d.username, d.province, d.city, d.zone, d.street, d.address, d.amount]);
		});
		this.$util.exportSheet(XLSX, array, '用户数据');
	};
	/* 导入本地excel文件 */
	const importFile = (file) => {
		let reader = new FileReader();
		reader.onload = (e) => {
			let data = new Uint8Array(e.target.result);
			let workbook = XLSX.read(data, {
				type: 'array'
			});
			let sheetNames = workbook.SheetNames;
			let worksheet = workbook.Sheets[sheetNames[0]];
			// 解析成二维数组
			let aoa = XLSX.utils.sheet_to_json(worksheet, {
				header: 1
			});
			// 生成表格需要的数据
			let list = [],
				maxCols = 0,
				title = [];
			aoa.forEach(d => {
				if (d.length > maxCols) {
					maxCols = d.length;
				}
				let row = {};
				for (let i = 0; i < d.length; i++) {
					row[this.getCharByIndex(i)] = d[i];
				}
				list.push(row);
			});
			for (let i = 0; i < maxCols; i++) {
				title.push(this.getCharByIndex(i));
			}
			this.importTitle = title;
			this.importData = list;
			this.importDataAoa = aoa;
		};
		reader.readAsArrayBuffer(file);
		return false;
	};
	/* 导入本地excel文件 */
	const importFile2 = (file) => {
		let reader = new FileReader();
		reader.onload = (e) => {
			let data = new Uint8Array(e.target.result);
			let workbook = XLSX.read(data, {
				type: 'array'
			});
			let sheetNames = workbook.SheetNames;
			let worksheet = workbook.Sheets[sheetNames[0]];
			// 解析成二维数组
			let aoa = XLSX.utils.sheet_to_json(worksheet, {
				header: 1
			});
			// 拆分合并单元格
			if (worksheet['!merges']) {
				worksheet['!merges'].forEach(m => {
					for (let r = m.s.r; r <= m.e.r; r++) {
						for (let c = m.s.c; c <= m.e.c; c++) {
							aoa[r][c] = aoa[m.s.r][m.s.c];
						}
					}
				});
			}
			// 生成表格需要的数据
			let list = [],
				maxCols = 0,
				title = [];
			aoa.forEach(d => {
				if (d.length > maxCols) {
					maxCols = d.length;
				}
				let row = {};
				for (let i = 0; i < d.length; i++) {
					row[this.getCharByIndex(i)] = d[i];
				}
				list.push(row);
			});
			for (let i = 0; i < maxCols; i++) {
				title.push(this.getCharByIndex(i));
			}
			this.importTitle = title;
			this.importData = list;
			this.importDataAoa = aoa;
		};
		reader.readAsArrayBuffer(file);
		return false;
	};
	/* 导入本地excel文件 */
	const importFile3 = (file) => {
		let reader = new FileReader();
		reader.onload = (e) => {
			let data = new Uint8Array(e.target.result);
			let workbook = XLSX.read(data, {
				type: 'array'
			});
			let sheetNames = workbook.SheetNames;
			let worksheet = workbook.Sheets[sheetNames[0]];
			// 解析成二维数组
			let aoa = XLSX.utils.sheet_to_json(worksheet, {
				header: 1
			});
			// 生成表格需要的数据
			let list = [],
				maxCols = 0,
				title = [];
			aoa.forEach(d => {
				if (d.length > maxCols) {
					maxCols = d.length;
				}
				let row = {};
				for (let i = 0; i < d.length; i++) {
					row[this.getCharByIndex(i)] = d[i];
				}
				list.push(row);
			});
			for (let i = 0; i < maxCols; i++) {
				title.push(this.getCharByIndex(i));
			}
			// 记录合并单元格
			if (worksheet['!merges']) {
				worksheet['!merges'].forEach(m => {
					for (let r = m.s.r; r <= m.e.r; r++) {
						for (let c = m.s.c; c <= m.e.c; c++) {
							let cc = this.getCharByIndex(c);
							list[r]['__colspan__' + cc] = 0;
							list[r]['__rowspan__' + cc] = 0;
						}
					}
					let char = this.getCharByIndex(m.s.c);
					list[m.s.r]['__colspan__' + char] = m.e.c - m.s.c + 1;
					list[m.s.r]['__rowspan__' + char] = m.e.r - m.s.r + 1;
				});
			}
			this.importTitle = title;
			this.importData = list;
			this.importDataAoa = aoa;
		};
		reader.readAsArrayBuffer(file);
		return false;
	};
	/* 生成Excel列字母序号 */
	const getCharByIndex = (index) => {
		let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
			'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
		];
		if (index < chars.length) {
			return chars[index];
		}
		let n = parseInt(index / chars.length),
			m = index % chars.length;
		return chars[n] + chars[m];
	};
	/* 合并表格单元格 */
	const spanMethod = ({
		row,
		column
	}) => {
		if (!column.label) {
			return [1, 1];
		}
		let r = row['__rowspan__' + column.label],
			c = row['__colspan__' + column.label];
		return [r === undefined ? 1 : r, c === undefined ? 1 : c];
	}
</script>

<style scoped>
	*>>>.el-table-tool .el-tool {
		margin: 5px 0 5px auto;
	}
  .el-list-scope-bodypaddingb{
    padding: 15px;
    border-radius: 4px;
  }
	.el-space {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.el-table-tool {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 10px;
	}

	.el-table-tool:not(.el-table-tool-default):not(.el-table-tools-none) .el-tool .el-tool-item {
		padding: 6px;
		line-height: 1;
		text-align: center;
		border: 1px solid #ddd;
		border-radius: 50%;
		font-size: 14px;
	}

	.el-action+.el-action {
		margin-left: 10px;
	}

	.el-pagination {
		margin-top: 10px;
	}

	.el-card+.el-card {
		margin-top: 15px;
	}
</style>
